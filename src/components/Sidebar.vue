<template>
  <div id="Sidebar">
    <el-menu
      router
      :default-active="$route.path"
      background-color="#344055"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <template slot="title">
          <i class="el-icon-loading"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/table">
        <i class="el-icon-menu"></i>
        <span slot="title">分页表格</span>
      </el-menu-item>
      <el-menu-item index="/label">
        <i class="el-icon-document"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
      <el-menu-item index="/upload">
        <i class="el-icon-picture"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-shopping-bag-2"></i>
        <span slot="title">已发表</span>
      </el-menu-item>
      <el-menu-item index="/release">
        <i class="el-icon-message"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/statistics">
        <i class="el-icon-s-help"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="/export">
        <i class="el-icon-bottom-right"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
      <el-menu-item index="/sign-out">
        <i class="el-icon-error"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    Home() {}
  },
  mounted() {
    //   activeMenu() {
    //     const route = this.$route;
    //     const { meta, path } = route;
    //     if (meta.activeMenu) {
    //       return meta.activeMenu
    //     }
    //     return path
    //   }
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#Sidebar {
  .tac {
    width: 0px;
  }
}
.el-menu-item {
  text-align: left;
  font-size: 20px;
}
</style>
