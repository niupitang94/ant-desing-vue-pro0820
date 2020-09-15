import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
// import "ant-design-vue/dist/antd.less";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Input,
  Menu,
  Form,
  Select,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized.vue";
import Auth from "./directives/auth";
// import "ant-design-vue/lib/button/style";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Menu);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(DatePicker);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2053858_a09ltml9xk8.js" // 在 iconfont.cn 上生成
});
Vue.component("IconFont", IconFont);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
