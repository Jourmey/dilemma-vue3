import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Task from '../views/task.vue'
import Taskinfo from '../views/taskinfo.vue'
import Menu from '../views/menu.vue'
import Homepage from '../views/homepage.vue'
import Video from '../views/video.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'menu',
    component: Menu,
    redirect: '/homepage',
    //定义嵌套路由
    children: [
      {
        path: '/homepage',
        name: '主页',
        component: Homepage,
      },
      {
        path: '/task',
        name: '任务管理',
        component: Task,
      },
      {
        path: '/taskinfo',
        name: '视频详情',
        component: Taskinfo,
      },
      {
        path: '/video',
        name: '视频下载',
        component: Video,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
