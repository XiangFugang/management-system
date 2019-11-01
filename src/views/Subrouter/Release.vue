<template>
  <div id="Release">
    <div class="hede">
      <div class="See" @click="See">查看</div>
      <div class="Release" @click="submitForm('ruleForm')">发布</div>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="Title">
        <el-input v-model="ruleForm.Title"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="ruleForm.abstract"></el-input>
      </el-form-item>
      <div class="zuozhe">
        <el-form-item label="作者" prop="author" size="small">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="Category">
          <el-select
            v-model="ruleForm.Category"
            placeholder="请选择"
            size="small"
          >
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
          <el-select
            v-model="ruleForm.source"
            placeholder="请选择"
            size="small"
          >
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作" value="与他人合作"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性" prop="important">
          <el-select
            v-model="ruleForm.important"
            placeholder="请选择"
            size="small"
          >
            <el-option label="1" value= 1></el-option>
            <el-option label="2" value= 2></el-option>
            <el-option label="3" value= 3></el-option>
            <el-option label="4" value= 4></el-option>
            <el-option label="5" value= 5></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间" prop="time" size="small">
          <el-date-picker
            style="width: 130px"
            v-model="ruleForm.time"
            type="datetime"
            placeholder="选择日期时间"
            align="centre"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>
      </div>
      <mavon-editor v-model="ruleForm.text" />
      <el-row style="margin-top: 10px">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >发布</el-button
        >
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Release",
  components: {},
  props: {},
  data() {
    let region = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空"));
      } else {
        callback();
        return false;
      }
    };
    return {
      ruleForm: {
        Title: "",
        abstract: "",
        author: "",
        Category: "",
        source: "",
        important: "",
        time: "",
        text: ""
      },
      rules: {
        Title: [{ validator: region, required: true, trigger: "blur" }],
        abstract: [{ validator: region, required: true, trigger: "blur" }],
        author: [{ validator: region, required: true, trigger: "blur" }],
        Category: [{ validator: region, required: true, trigger: "blur" }],
        source: [{ validator: region, required: true, trigger: "blur" }],
        important: [{ validator: region, required: true, trigger: "blur" }],
        text: [{ validator: region, required: true, trigger: "blur" }]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ],
        //时间过滤
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  methods: {
    getCaty() {
      this.$axios
        .req("api/article/create", {
          title: this.ruleForm.Title,
          abstract: this.ruleForm.abstract,
          author: this.ruleForm.author,
          category: this.ruleForm.Category,
          source: this.ruleForm.source,
          star: this.ruleForm.important,
          text: this.ruleForm.text,
          date: this.ruleForm.time
        })
        .then(res => {
          if (res.code === 200) {
            alert(res.data);
            this.ruleForm.Title = "";
            this.ruleForm.abstract = "";
            this.ruleForm.author = "";
            this.ruleForm.Category = "";
            this.ruleForm.source = "";
            this.ruleForm.important = "";
            this.ruleForm.time = "";
            this.ruleForm.text = "";
            console.log(res);
          } else {
            alert("创建失败了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //表单验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.time === "") {
            let date = new Date();
            console.log(date);
            this.ruleForm.time = date;
          }
          this.getCaty();
        } else {
          alert("请填写完整");
          return false;
        }
      });
    },
    See() {
      this.$router.push("/publish");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#Release {
  .hede {
    justify-content: flex-end;
    line-height: 40px;
    display: flex;
    height: 40px;
    background-color: #42b983;
    .See {
      margin-top: 5px;
      padding: 2px 5px 2px 5px;
      height: 26px;
      line-height: 26px;
      margin-right: 20px;
      background-color: red;
      border-radius: 5px;
      cursor: pointer;
    }
    .Release {
      cursor: pointer;
      margin-top: 5px;
      padding: 2px 5px 2px 5px;
      height: 26px;
      line-height: 26px;
      border-radius: 5px;
      background-color: #00b7ff;
      margin-right: 30px;
    }
  }
  .demo-ruleForm {
    margin-top: 30px;
  }
  .zuozhe {
    display: flex;
  }
}
.el-input__inner {
  width: 100px !important;
}
</style>
