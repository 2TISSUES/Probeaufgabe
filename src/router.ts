import VueRouter from 'vue-router'
import Overview from '@/pages/ProductOverview.vue'
// import Details from '@/pages/ProductDetails.vue'

const routes = [
  { path: '/', component: Overview },
  // { path: '/details', component: Details },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router