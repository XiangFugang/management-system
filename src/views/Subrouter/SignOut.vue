<template>
  <div id="SignOut">
    <div class="text">欢迎您的下次光临</div>
    <el-row>
      <el-button type="primary" @click="Out">确定退出</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SignOut",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    Out() {
      localStorage.clear()
      this.$router.push("/Signin")
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
#SignOut{
  margin: 100px auto;
  .text{
    line-height: 20px;
    font-size: 18px;
    font-weight:700 ;
    letter-spacing:4px;
  }
  .el-row{
    margin-top: 20px;
  }
}
</style>
