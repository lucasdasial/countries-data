import { createRouter, createWebHistory } from "vue-router";

import teste from "pages/LandingPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/landing",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/landing",
        component: () => import("pages/LandingPage.vue"),
      },
      {
        path: "/app",
        component: () => import("pages/AppPage.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
