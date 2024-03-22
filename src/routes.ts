import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "",
    redirect: { name: "DashboardLayout" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
