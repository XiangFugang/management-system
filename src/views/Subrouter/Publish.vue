<template>
  <div id="Publish">
    <div v-show="this.fabu">
      <div>
        <el-table
          align="center"
          :data="arry.slice(CurrentPage * (page - 1), CurrentPage * page)"
          style="width: 100%"
          border
        >
          <el-table-column label="#" type="index" min-width="80" align="center">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            align="center"
          ></el-table-column>
          <el-table-column prop="author" label="作者" align="center">
          </el-table-column>
          <el-table-column prop="category" label="类目" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.category === 'Vue'"
                ><el-tag type="success">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === 'React'"
                ><el-tag type="info">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === 'Nodejs'"
                ><el-tag type="success">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === '性能优化'"
                ><el-tag type="primary">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === 'Javascript'"
                ><el-tag type="warning">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === '小程序'"
                ><el-tag type="primary">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === '工具类'"
                ><el-tag type="danger">{{ scope.row.category }}</el-tag></span
              >
              <span v-if="scope.row.category === '其它'"
                ><el-tag>{{ scope.row.category }}</el-tag></span
              >
            </template>
          </el-table-column>
          <el-table-column prop="source" label="来源" align="center">
          </el-table-column>
          <el-table-column prop="star" label="重要性" align="center" min-width="100px">
            <template slot-scope="scope">
              <el-rate v-model="scope.row.star" :colors="colors"> </el-rate>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="发布时间" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center" min-width="180px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >
                <i class="el-icon-edit-outline"></i>
                编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handdelete(scope.$index, scope.row)"
              >
                <i class="el-icon-edit"></i>
                删除</el-button
              >
              <el-button
                size="mini"
                type="success"
                @click="handleDelete(scope.$index, scope.row)"
              >
                <i class="el-icon-search"></i>
                查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--分页-->
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
  </div>
</template>

<script>
export default {
  name: "Publish",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      fabu: true, //控制发布页
      bianji: false, //控制编辑页
      delete: false, //控制删除页
      chakan: false, //控制查看页
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      arr: [], //接收数据
      arry: [], //展示的数组
      CurrentPage: 10, //每页展示多少条数据
      page: 1, //第几页
      form: {
        name: "",
        region: "",
        date1: "",
        index: ""
      } //修改后的数据
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.arr = res.data;
          // this.arr.map(item => {
          //   console.log(item.date);
          //   item.date = this.$dayjs(item.date).format(
          //     "YYYY年MM月DD日 hh时mm分ss秒"
          //   );
          //   item.star = Number(item.star);
          // });
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
      this.page = val;
    },
    //编辑
    handleEdit(index, row) {
      this.$router.push({ name: "edit", query: { id: row._id } });
    },
    //删除
    handdelete(index, row) {
      this.$axios
        .req("api/article/delete", { _id: row._id })
        .then(res => {
          console.log(res);
          this.getCity();
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查看
    handleDelete(index, row) {
      this.$router.push({ name: "see", query: { id: row._id } });
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
.flex {
  display: flex;
}
</style>
