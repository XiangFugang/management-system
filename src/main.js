import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import dayjs from "dayjs";
import lodash from "lodash";
import http from "./http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from "v-charts";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import JsonExcel from "vue-json-excel";

Vue.config.productionTip = false;
Vue.prototype.$axios = http;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$lodash = lodash;
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(mavonEditor);
Vue.component("downloadExcel", JsonExcel);

axios.defaults.timeout = 10000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
