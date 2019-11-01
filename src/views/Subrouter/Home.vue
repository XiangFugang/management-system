<template>
  <div id="Home">
    <el-main><top></top></el-main>
    <el-main><diagram></diagram></el-main>
    <el-main><Statistics></Statistics></el-main>
    <el-main id="bottom"><bottom></bottom></el-main>
  </div>
</template>

<script>
import top from "../../components/Homepage/Top";
import diagram from "../../components/Homepage/Center";
import Statistics from "../../components/Homepage/Center1";
import bottom from "../../components/Homepage/Bottom";
export default {
  name: "Home",
  components: {
    top,
    diagram,
    bottom,
    Statistics
  },
  props: {},
  data() {
    return {};
  },
  methods: {

  },
  mounted() {

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#Home {
  .el-main {
    overflow: hidden;
    /*background-color: #e9eef3;*/
    /*border-bottom: 2px solid black;*/
  }
}
</style>
