import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserPage from "./pages/UserPage.vue";
import ApartamentPage from "./pages/ApartamentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/user", component: UserPage, name: "user" },
  { path: "/apartment/:id", component: ApartamentPage, name: "apartment" },
  { path: "/:pathMatch(.*)*", component: ErrorPage, name: "error-page" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
