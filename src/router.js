import HomePage from "./pages/HomePage.vue";
import UserPage from "./pages/UserPage.vue";
import ApartamentPage from "./pages/ApartamentPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/user", component: UserPage },
  { path: "/apartament", component: ApartamentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
