import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AuthRoutes  from "./auth/auth.routes";
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
  AuthRoutes
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
