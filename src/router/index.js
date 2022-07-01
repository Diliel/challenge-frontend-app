import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './routes/pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    ...pages,
  ],
})

router.beforeEach((to, _, next) => {
  return next()
})

export default router
