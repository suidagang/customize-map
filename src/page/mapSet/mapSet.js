import Vue from "vue";
import App from "./mapSet.vue"
import 'element-ui/lib/theme-chalk/index.css';;
import "@/less/common.less";
import "@/less/siderBar.less";
//按需引入elementUI的样式
import {
  Button,
  Select,
  Option,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Icon,
  Link,
  dialog
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Icon);
Vue.use(Link);
Vue.use(dialog);
//封装axios  ajax请求
import {post,fetch} from '@/axios/api'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;

new Vue({
  el: "#app",
  render: h => h(App)
});
