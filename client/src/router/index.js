import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AboutInfo from "../pages/AboutInfo.vue";

const routes = [ 
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutInfo",
    component: AboutInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;