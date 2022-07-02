import { createRouter, createWebHistory } from 'vue-router'
import TicketSearch from "/src/components/tickets/TicketSearch.vue";
const routes = [
  {
    path: "/",
    redirect: { name: "ticket-search" },
  },
  {
    path: '/tickets/search',
    name: 'ticket-search',
    component: TicketSearch,
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