<template>
  <div id="Table">
    <div>
      <el-input
        @input="search"
        prefix-icon="el-icon-search"
        type="text"
        class="search"
        size="small"
        v-model="input"
        placeholder="请输入您想搜索的商品名称"
      ></el-input>
      <el-table
        :data="arry.slice(CurrentPage * (page - 1), CurrentPage * page)"
        style="width: 100%"
      >
        <el-table-column prop="NAME" label="名称" min-width="80">
        </el-table-column>
        <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          min-width="80"
        >
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" min-width="80">
        </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" min-width="80">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
              <i class="el-icon-edit"></i>
              修改</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <i class="el-icon-delete"></i>
              删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="display: flex;justify-content: left;padding-top: 10px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 30, 50, 80]"
        :page-size="CurrentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="arry.length"
      >
      </el-pagination>
    </div>
    <!--修改数据-->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="原价" :label-width="formLabelWidth">
          <el-input v-model="form.region" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="现价" :label-width="formLabelWidth">
          <el-input v-model="form.date1" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Determine()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: {},
  data() {
    return {
      arr: [], //接收数据
      arry: [], //展示的数组
      CurrentPage: 10, //每页展示多少条数据
      page: 1, //第几页
      form: {
        name: "",
        region: "",
        date1: "",
        index: ""
      }, //修改后的数据
      dialogFormVisible: false, //控制对话框开关
      formLabelWidth: "120px", //弹出框的宽度
      input: "" //输入框的值
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/tableData")
        .then(res => {
          this.arr = res.data;
          this.arry = this.arr;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //修改每页显示的数据条数
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.CurrentPage = val;
    },
    //当前多少页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
    },
    //修改
    handleEdit(index, row) {
      // console.log(index,row);
      this.dialogFormVisible = true;
      this.form.index = index;
      this.form.name = row.NAME;
      this.form.region = row.ORI_PRICE;
      this.form.date1 = row.PRESENT_PRICE;
    },
    //修改数据确定后
    Determine() {
      this.arry[this.form.index].NAME = this.form.name;
      this.arry[this.form.index].ORI_PRICE = this.form.region;
      this.arry[this.form.index].PRESENT_PRICE = this.form.date1;
      this.dialogFormVisible = false;
    },
    //删除
    handleDelete(index) {
      // console.log(index, row);
      if (window.confirm(`确认删除${this.arry[index].title}吗?`)) {
        this.arry.splice(index, 1);
      }
    },
    //搜索功能
    search() {
      if (this.input !== "") {
        this.arry = this.arr.filter(item => {
          return item.NAME.indexOf(this.input) >= 0;
        });
      } else {
        this.arry = this.arr;
      }
    }
  },
  mounted() {
    this.getCity();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.search {
  width: 300px;
  display: block !important;
}
</style>
