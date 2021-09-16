<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark">
        <a-menu-item key="1" @click="changeMenu('task')">
          <pie-chart-outlined />
          <span>任务管理</span>
        </a-menu-item>
        <a-menu-item key="2" @click="changeMenu('taskinfo')">
          <desktop-outlined />
          <span>视频详情</span>
        </a-menu-item>
        <a-menu-item key="3" @click="changeMenu('video')">
          <desktop-outlined />
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
          <a-breadcrumb-item>任务管理</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!--定义路由出口-->
          <router-view />
        </div>
      </a-layout-content>
      <!--右边页脚-->
      <!-- <a-layout-footer style="text-align: center"> </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import task from "./task.vue";
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
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
