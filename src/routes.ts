import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserRoutes  from "./user/user.routes";

const routes : RouteRecordRaw[] = [
  {
    path: "",
    redirect: { name: "DashboardLayout" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./core/views/NotFoundView.vue"),
  },
  UserRoutes, 
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
