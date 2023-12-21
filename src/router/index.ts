import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnViewVue from '@/views/LearnView.vue'
import SignUpViewVue from '@/views/SignUpView.vue'
import LayoutVue from '@/views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutVue,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/learn',
          name: 'learn',
          component: LearnViewVue
        },
      ]
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpViewVue
    }
  ]
})

export default router
