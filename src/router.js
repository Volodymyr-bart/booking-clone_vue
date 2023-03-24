import FooPage from "./pages/UserPage.vue";
import BarPage from "./pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/foo",
    component: FooPage,
  },
  {
    path: "/bar",
    component: BarPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
