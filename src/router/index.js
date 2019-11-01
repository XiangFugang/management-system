import Vue from "vue";
import VueRouter from "vue-router";
//首页
import Home from "../views/Subrouter/Home";
//框架
import Frame from "../views/Frame";
//注册
import Register from "../views/Register";
//登录
import SignIn from "../views/Signin";

Vue.use(VueRouter);

const routes = [
  //父路由----------------------->
  {
    path: "/",
    redirect: "/home"
  },
  // {
  //   path: "/frame",
  //   name: "frame",
  //   component: Frame
  // },
  //注册
  {
    path: "/register",
    name: "register",
    component: Register
  },
  //登录
  {
    path: "/Signin",
    name: "Signin",
    component: SignIn
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: Home
  // },

  //子路由------------------------------------------------>
  //首页
  {
    path: "/",
    component: Frame,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },

  //分页表格
  {
    path: "/table",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Table")
      }
    ]
  },
  //标签页
  {
    path: "/label",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Label")
      }
    ]
  },
  //图片上传
  {
    path: "/upload",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Upload")
      }
    ]
  },
  //已发表
  {
    path: "/publish",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Publish")
      }
    ]
  },
  //编辑
  {
    path: "/edit",
    component: Frame,
    children: [
      {
        path: "",
        name: "edit",
        component: () => import("../views/Subrouter/Edit")
      }
    ]
  },
  //查看
  {
    path: "/see",
    component: Frame,
    children: [
      {
        path: "",
        name: "see",
        component: () => import("../views/Subrouter/See")
      }
    ]
  },
  //发布文章
  {
    path: "/release",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Release")
      }
    ]
  },
  //统计
  {
    path: "/statistics",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Statistics")
      }
    ]
  },
  //导出excel
  {
    path: "/export",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/Export")
      }
    ]
  },
  //退出系统
  {
    path: "/sign-out",
    component: Frame,
    children: [
      {
        path: "",
        component: () => import("../views/Subrouter/SignOut")
      }
    ]
  },
  //错误路径
  {
    path: "*",
    component: Frame,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user",);
  if (to.path === "/Signin" || to.path === "/register") {
    next();
  } else {
    user ? next() : next("/Signin");
  }
});

export default router;
