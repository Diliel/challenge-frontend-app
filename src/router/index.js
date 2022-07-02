import Vue from 'vue'
import VueRouter from 'vue-router'
import TicketSearch from "/src/components/tickets/ticket-search/TicketSearch.vue";
import TicketIndex from "/src/components/tickets/ticket-index/TicketIndex.vue";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes: [
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
      component: TicketIndex,
    },
    {
      path: "*",
      redirect: "/tickets/search",
    },
  ]
})
router.beforeEach((to, from, next) => {
  return next();
});
export default router