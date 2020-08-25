<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
        width="256px"
      >
        <div class="logo">Ant Design Vue Pro</div>
        <SideMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import SettingDrawer from "../components/SettingDrawer/index";
export default {
  components: {
    Header,
    Footer,
    SideMenu,
    SettingDrawer
  },
  name: "BasicLayout",
  computed: {
    // 获取抽屉传过来的主题的颜色
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    // 获取抽屉传过来的导航模式
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less" scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
  &:hover {
    background: #eee;
  }
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark /deep/ .logo {
  color: #fff;
}
</style>
