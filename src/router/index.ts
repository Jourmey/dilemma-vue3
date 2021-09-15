import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Task from '../views/Task.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Task',
    component: Task
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
