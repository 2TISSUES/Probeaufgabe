import { createRouter, createWebHistory } from "vue-router";

import ProductOverview from "@/pages/ProductOverview.vue";
import ProductDetails from "@/pages/ProductDetails.vue";

const routes = [
  { path: "/", component: ProductOverview, name: "ProductOverview" },
  { path: "/details/:id", component: ProductDetails, name: "ProductDetails" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
