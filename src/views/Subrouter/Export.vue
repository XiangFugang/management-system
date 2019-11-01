<template>
  <div id="Export">
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
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              type="primary"
            >
              <download-excel
                :data="arry.slice(index, 1)"
                :fields="json_field"
                name="filename.xls"
              >
                <i class="el-icon-right"></i>
                导出xls
              </download-excel>
            </el-button>
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <download-excel
                :data="arry.slice(index, 1)"
                :fields="json_fields"
                name="filename.csv"
                type="csv"
              >
                <i class="el-icon-right"></i>
                导出csv
              </download-excel>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="aaa">
        <el-button type="primary">
          <download-excel
            :data="arry.slice(CurrentPage * (page - 1), CurrentPage * page)"
            :fields="json_fiel"
            name="filename.xls"
          >
            导出当前页xls
          </download-excel>
        </el-button>
        <el-button type="success">
          <download-excel
            :data="arry.slice(CurrentPage * (page - 1), CurrentPage * page)"
            :fields="json_fie"
            name="filename.csv"
            type="csv"
          >
            导出当前页csv
          </download-excel>
        </el-button>
      </div>
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
  </div>
</template>

<script>
export default {
  name: "Export",
  components: {},
  props: {},
  data() {
    return {
      json_fields: {
        商品名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      json_field: {
        商品名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      json_fiel: {
        商品名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      json_fie: {
        商品名称: "NAME",
        商品编号: "GOODS_SERIAL_NUMBER",
        原价: "ORI_PRICE",
        现价: "PRESENT_PRICE"
      },
      arr: [], //接收数据
      arry: [], //展示的数组
      CurrentPage: 10, //每页展示多少条数据
      page: 1, //第几页
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
.aaa {
  display: flex;
  justify-content: left;
}
</style>
