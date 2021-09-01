import { createRouter, createWebHistory } from "vue-router";
import Postsview from "../views/Postsview.vue";

const routes = [
  {
    path: "/",
    name: "Postsview",
    component: Postsview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
