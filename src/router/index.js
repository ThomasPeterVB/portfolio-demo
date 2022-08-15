import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'main',
    component: () => import('@/Views/MainView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/Views/SkillsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/Views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/Views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
