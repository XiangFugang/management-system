<template>
  <div>
    <div class="hede">
      <div class="See">查看</div>
      <div class="Release" @click="Release">发布</div>
    </div>
    <el-form :v-model="edit" label-width="100px" class="demo-ruleForm">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="edit.title"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="edit.abstract"></el-input>
      </el-form-item>
      <div class="zuozhe">
        <el-form-item label="作者" prop="author" size="small">
          <el-input v-model="edit.author"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="category">
          <el-select v-model="edit.category" placeholder="请选择" size="small">
            <el-option label="Vue" value="Vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Nodejs" value="Nodejs"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="Javascript" value="Javascript"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其它" value="其它"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源" prop="source">
          <el-select v-model="edit.source" placeholder="请选择" size="small">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="star">
          <el-select v-model="edit.star" placeholder="请选择" size="small">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" prop="date" size="small">
          <el-date-picker
            style="width: 130px"
            v-model="edit.date"
            type="datetime"
            placeholder="选择日期时间"
            align="centre"
          >
          </el-date-picker>
        </el-form-item>
      </div>
      <mavon-editor v-model="edit.text" />
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      edit: {}
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("/api/article/article", {
          _id: this.id
        })
        .then(res => {
          this.edit = res.data;
          console.log(res);
          // this.edit.map(item => {
          //   item.date = this.$dayjs(item.date).format(
          //     "YYYY年MM月DD日 hh时mm分ss秒"
          //   );
          //   item.star = Number(item.star);
          // });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //发布
    Release() {
      this.$axios
        .req("/api/article/update", {
          id: this.id,
          title: this.edit.title,
          abstract: this.edit.abstract,
          author: this.edit.author,
          category: this.edit.category,
          source: this.edit.source,
          star: this.edit.star,
          text: this.edit.text,
          date: this.edit.date
        })
        .then(res => {
          if(res.success){
            this.$router.push("/publish")
          }else {
            alert("网络错误")
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
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
.hede {
  display: flex;
  justify-content: space-around;
  .See {
    padding: 2px 5px 2px 5px;
    height: 26px;
    line-height: 26px;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
  }
  .Release {
    padding: 2px 5px 2px 5px;
    height: 26px;
    line-height: 26px;
    background-color: #00b7ff;
    border-radius: 5px;
    cursor: pointer;
  }
}
.demo-ruleForm {
  margin-top: 20px;
}
.zuozhe {
  display: flex;
}
</style>
