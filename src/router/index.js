import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/tickets/search',
    name: 'ticket-search',
    //  component: () => import('@/views/pages/authentication/Login.vue'),
  },
  {
    path: '/tickets/index',
    name: 'ticket-index',
    //  component: () => import('@/views/pages/authentication/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router