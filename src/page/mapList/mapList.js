import Vue from "vue";
import App from "./mapList.vue";
import "@/less/common.less";
//封装axios  ajax请求
import {post,fetch} from '@/axios/api'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;

new Vue({
  el: "#app",
  render: h => h(App)
});
