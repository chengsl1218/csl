import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '/arr',
          name: 'arr',
          component: () => import('../views/children/arr.vue')
        },
        {
          path: '/goods',
          name: 'goods',
          component: () => import('../views/children/goods.vue')
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/children/index.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('../views/children/list.vue')
        },
        {
          path: '/vite',
          name: 'vite',
          component: () => import('../views/children/vite.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
