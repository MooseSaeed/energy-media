import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeViewAr from "../views/HomeViewAr.vue";
import Notfound from "../views/Notfound.vue";

const routes = [
  {
    path: "/",
    name: "homear",
    component: HomeViewAr,
  },
  {
    path: "/en",
    name: "home",
    component: HomeView,
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: Notfound,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
