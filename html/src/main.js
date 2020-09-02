import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "ant-design-vue/dist/antd.less";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Input,
  Menu,
  Form
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
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
