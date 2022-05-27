import { createRouter, createWebHistory } from "vue-router";

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
      {
        path: "/country/:id",
        component: () => import("pages/CountryPage.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
