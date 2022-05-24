import { createRouter, createWebHistory } from "vue-router";

import teste from "pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: () => import("pages/HomePage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
