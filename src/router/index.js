import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/about-us",
    name: "AbouUs",
    component: () => import("../pages/AboutUsPage.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../pages/ServicesPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
export default router;
