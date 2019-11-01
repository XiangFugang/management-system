<template>
  <div id="Register">
    <el-container>
      <el-main class="zhuce">
        <div class="Title">欢迎来到风落木归山后台管理系统</div>
        <el-form
          :model="Register"
          :rules="rules"
          status-icon
          ref=" Register"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="Register.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="Password">
            <el-input
              type="password"
              v-model="Register.Password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item class="function">
            <el-button type="primary" @click="submitForm(Register)"
              >立即注册</el-button
            >
            <el-button @click="resetForm('/Signin')">立即登录</el-button>
          </el-form-item>
        </el-form></el-main
      >
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    let reg = new RegExp("[\u4e00-\u9fa5]","g");
    let checkAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error("用户名不能为空"));
      } else {
        if(reg.test(value)) {
          callback(new Error("不能有中文"));
        }else {
          callback()
        }
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      Register: {
        username: "",
        Password: ""
      },
      rules: {
        Password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      },
      obj: {}
    };
  },
  methods: {
    //请求数据与验证用户是否注册
    submitForm(Register) {
      this.$axios
        .req("api/user/register", {
          username: this.Register.username,
          password: this.Register.Password
        })
        .then(res => {
          let reg = new RegExp("[\u4e00-\u9fa5]","g");
          console.log(res);
          if (Register.username !== "" && !reg.test(Register.username)) {
            if (Register.Password !== "") {
              if (res.code === 200) {
                alert(res.message);
                Register.username = "";
                Register.Password = "";
              } else {
                alert("该用户已存在");
              }
            } else {
              alert("请输入密码");
            }
          } else {
            alert("请输入用户名并且用户名不能为中文");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //立即登录
    resetForm(sign) {
      this.$router.push(sign);
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
#Register {
  max-width: 740px;
  margin: 100px auto;
  .zhuce {
    padding: 30px 50px 20px 20px !important;
  }
  .function {
    display: flex;
    justify-content: left;
  }
  .Title{
    line-height: 50px;
    font-size: 20px;
    color: #00B7FF;
    padding-bottom: 10px;
  }
}
.el-main {
  background: url("../Imges/timg.jpg") no-repeat;
  background-size: 100%;
  /*background-color: #e9eef3;*/
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container:nth-child(5) {
  line-height: 260px;
}
</style>
