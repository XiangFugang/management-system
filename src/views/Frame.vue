<template>
  <div id="Frame">
    <el-container>
      <el-header><top></top></el-header>
      <el-container>
        <el-aside width="15%"><sidebar></sidebar></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from "../components/Head.vue";
import sidebar from "../components/Sidebar.vue";
export default {
  name: "Frame",
  components: {
    top,
    sidebar
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#Frame {
  position: relative;
  .el-header {
    width: 100%;
    background-color: #2e5e85;
    text-align: center;
    line-height: 60px;
    position: fixed;
    z-index: 9;
  }
  .el-main {
    width: 85%;
    position: absolute;
    right: 0;
    top: 60px;
    overflow: hidden;

    background-color: #f0f2f5;
  }
  .el-aside {
    height: 100%;
    position: fixed;
    top: 60px;
    z-index: 9;
    background-color: #344055;
    overflow: hidden;
  }
}
</style>
