<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      v-model:selectedKeys="selectedKeys"
      collapsible
    >
      <div class="logo" />
      <a-menu theme="dark">
        <a-menu-item key="1" @click="changeMenu('homepage')">
          <PieChartOutlined />
          <span>主页</span>
        </a-menu-item>
        <a-menu-item key="2" @click="changeMenu('task')">
          <DesktopOutlined />
          <span>任务管理</span>
        </a-menu-item>
        <a-menu-item key="3" @click="changeMenu('taskinfo')">
          <InboxOutlined />
          <span>视频详情</span>
        </a-menu-item>
        <a-menu-item key="4" @click="changeMenu('video')">
          <MailOutlined />
          <span>视频下载</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!--右边主要内容-->
    <a-layout>
      <!--右边头部-->
      <!-- <a-layout-header style="background: #fff; padding: 0"> </a-layout-header> -->
      <!--右边内容-->
      <a-layout-content style="margin: 0 16px">
        <!--内容头部title-->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!--定义路由出口-->
          <router-view> </router-view>
        </div>
      </a-layout-content>
      <!--右边页脚-->
      <!-- <a-layout-footer style="text-align: center"> </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined,
    MailOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
    };
  },
  methods: {
    //路由内容切换
    changeMenu(route: any) {
      console.log(route);
      //获取路由对象并切换
      this.$router.push(route);
    },
  },
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
