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
  dialog,
  ColorPicker,
  Slider
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
Vue.use(ColorPicker);
Vue.use(Slider);
//封装axios  ajax请求
import {post,fetch} from '@/axios/api'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;

// 引入vue-amap
import VueAMap  from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: 'eccf7dedb7fba5654c93556be3a52b8f',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue({
  el: "#app",
  render: h => h(App)
});
