import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list',
      component: HomeView,
      children:[
        {
          path: '/arr',
          name: 'arr',
          meta: {
            name: '商品分类',
          },
          component: () => import('../views/children/arr.vue')
        },
        {
          path: '/goods',
          name: 'goods',
          meta: {
            name: '商品列表',
          },
          component: () => import('../views/children/goods.vue')
        },
        {
          path: '/index',
          name: 'index',
          meta: {
            name: '商品管理',
          },
          component: () => import('../views/children/index.vue')
        },
        {
          path: '/list',
          name: 'list',
          meta: {
            name: '积云官网',
          },
          component: () => import('../views/children/list.vue')
        },
        {
          path: '/vite',
          name: 'vite',
          meta: {
            name: '用户管理',
          },
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
