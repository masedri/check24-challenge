import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/core/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: () => import('@/core/pages/SplashPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    }
  ]
})

export default router
