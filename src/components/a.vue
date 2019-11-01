<template>
  <div>
<!--    <top class="Frame_top"></top>-->
<!--    <div class="Frame_center">-->
<!--      <sidebar class="Frame_sidebar"></sidebar>-->
<!--      <router-view class="Frame_route"></router-view>-->
<!--    </div>-->
  </div>
  <!--  <el-menu-item index="2">-->
  <!--    <i class="el-icon-menu"></i>-->
  <!--    <span slot="title">导航二</span>-->
  <!--  </el-menu-item>-->
  <!--  <el-menu-item index="3" disabled>-->
  <!--    <i class="el-icon-document"></i>-->
  <!--    <span slot="title">导航三</span>-->
  <!--  </el-menu-item>-->
  <!--  <el-menu-item index="4">-->
  <!--    <i class="el-icon-setting"></i>-->
  <!--    <span slot="title">导航四</span>-->
  <!--  </el-menu-item>-->
  <!--  <div id="Frame">-->
  <!--    <el-container>-->
  <!--      <el-header><top></top></el-header>-->
  <!--      <el-container>-->
  <!--        <el-aside width="172px"><sidebar></sidebar></el-aside>-->
  <!--        <el-main><router-view></router-view></el-main>-->
  <!--      </el-container>-->
  <!--    </el-container>-->
  <!--  </div>-->
  <!--  <el-row :gutter="20">-->
  <!--    <el-col :span="6">-->
  <!--      <div class="grid-content bg-purple">-->
  <!--        <div class="Home_left">-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </el-col>-->
  <!--    <el-col :span="6">-->
  <!--      <div class="grid-content bg-purple">-->
  <!--        <div class="Home_center">-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </el-col>-->
  <!--    <el-col :span="6">-->
  <!--      <div class="grid-content bg-purple">-->
  <!--        <div class="Home_center1">-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </el-col>-->
  <!--    <el-col :span="6">-->
  <!--      <div class="grid-content bg-purple">-->
  <!--        <div class="Home_bottom">-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </el-col>-->
  <!--  </el-row>-->
<!--  #d3dce6-->
<!--  #99a9bf-->
<!--  #e5e9f2-->
<!--  routes: [-->
<!--  // 重定向，打开接口文档页面就重定向到 概览-->
<!--  {-->
<!--  path: '/apiDocument',-->
<!--  redirect: '/apiDocument/cdnSummary',-->
<!--  hidden: true // 不需要再Menu菜单上显示的就设置这个属性-->
<!--  },-->
<!--  // 接口文档路由-->
<!--  {-->
<!--  // 接口文档菜单的动态加载配置 start-->
<!--  path: '',-->
<!--  name: 'apiDocument',-->
<!--  component: customerLayout,-->
<!--  gotoPath: '/apiDocument', // 自定义属性 （主菜单中的index属性值）-->
<!--  meta: {-->
<!--  title: '接口文档',-->
<!--  activeMenu: '/apiDocument'-->
<!--  },-->
<!--  showOne: true, // 自定义属性-->
<!--  hidden: true,-->
<!--  // 接口文档菜单的动态加载配置 end-->
<!--  children: [{-->
<!--  path: '',-->
<!--  component: apiDoc,-->
<!--  children: [-->
<!--  {-->
<!--  path: '/apiDocument/cdnSummary',-->
<!--  component: cdnSummary,-->
<!--  meta: {-->
<!--  activeMenu: '/apiDocument', // 主菜单 的 接口文档 高亮-->
<!--  apiActiveMenu: '/apiDocument/cdnSummary' // 接口文档的子菜单高亮-->
<!--  }-->
<!--  },-->
<!--  {-->
<!--  path: '/apiDocument/pushRefresh',-->
<!--  component: pushRefresh,-->
<!--  meta: {-->
<!--  activeMenu: '/apiDocument',-->
<!--  apiActiveMenu: '/apiDocument/pushRefresh' // 接口文档的子菜单高亮-->
<!--  }-->
<!--  },-->
<!--  {-->
<!--  path: '/apiDocument/refreshTasks',-->
<!--  component: refreshTasks,-->
<!--  meta: {-->
<!--  activeMenu: '/apiDocument',-->
<!--  apiActiveMenu: '/apiDocument/refreshTasks' // 接口文档的子菜单高亮-->
<!--  }-->
<!--  }-->
<!--  ]-->
<!--  }]-->
<!--  }-->
<!--  ]-->
<!--  <mavon-editor v-model="value"/>-->

</template>

<script>
export default {
  name: "a",
  components: {},
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

<style scoped lang="scss"></style>
