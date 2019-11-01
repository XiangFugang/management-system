<template>
  <div id="Sign">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="Verification">
        <el-form-item label="验证码">
          <el-input
            type="text"
            v-model="ruleForm.code"
            autocomplete="off"
            class="inputv"
          ></el-input>
        </el-form-item>
        <div v-html="code" @click="Verification" class="aet"></div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即登录</el-button
        >
        <el-button @click="resetForm('/register')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Signin",
  components: {},
  props: {},
  data() {
    let reg = new RegExp("[\u4e00-\u9fa5]", "g");
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        if (reg.test(value)) {
          callback(new Error("用户名不能为中文"));
        } else {
          callback();
        }
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      code: "",
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        code: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    //获取验证码
    Verification() {
      this.$axios
        .req("api/captcha")
        .then(res => {
          this.code = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取登录验证信息
    submitForm(formName) {
      this.$axios
        .req("api/user/login", {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          code: this.ruleForm.code
        })
        .then(res => {
          console.log(res);
          let reg = new RegExp("[\u4e00-\u9fa5]", "g");
          this.$refs[formName].validate(valid => {
            // console.log(1);
            if (valid && !reg.test(valid)) {
              if (res.code === 200) {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    username: this.ruleForm.username,
                    password: this.ruleForm.password,
                    date: res.data[0].date
                  })
                );
                this.$router.push("/");
              } else {
                alert(res.message);
              }
            } else {
              alert("用户名为不能为空或中文");
              return false;
            }
          });
        });
    },
    //立即注册路由跳转
    resetForm(yes) {
      this.$router.push(yes);
    }
  },
  mounted() {
    this.Verification();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.Verification {
  display: flex;
  justify-content: left;
}
#Sign {
  max-width: 500px;
  margin: 100px auto;
}
.aet {
  height: 40px;
}
.el-input__inner {
  height: 50px !important;
  line-height: 40px !important;
}
</style>
