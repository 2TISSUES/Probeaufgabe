import { createRouter, createWebHistory } from "vue-router";

import ProductOverview from "@/pages/ProductOverview.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const routes = [
  { path: "/", component: ProductOverview, name: "ProductOverview" },
  { path: "/details/:id", component: ProductDetails, name: "ProductDetails" },
  { path: "/:catchAll(.*)", component: ErrorPage, name: "ErrorPage"}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
