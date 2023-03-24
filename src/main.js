import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserPage from "./pages/UserPage.vue";
import "./assets/scss/index.scss";

const routes = [
  { path: "/", component: HomePage },
  { path: "/user", component: UserPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.use(router);
app.mount("#app");
