import { createRouter, createWebHashHistory } from 'vue-router';

import ProductOverview from './views/product-overview.vue';
import ProductDetails from './views/product-details.vue';

const routes = [
  { path: '/', component: ProductOverview, name: "ProductOverview" },
  { path: '/details/:id', component: ProductDetails, name: "ProductDetails" },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
