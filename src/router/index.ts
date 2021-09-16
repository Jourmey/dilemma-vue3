import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Task from '../views/task.vue'
import Menu from '../views/menu.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'menu',
    component: Menu,
    //定义嵌套路由
    children: [
      {
        path: '/task',
        name: '任务管理',
        component: Task,
      },
      // {
      //   path: '/taskinfo',
      //   name: '视频详情',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/taskinfo.vue'),
      // },
      // {
      //   path: '/video',
      //   name: '视频下载',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/video.vue'),
      // },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
