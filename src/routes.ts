import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import UserRoutes  from "./user/user.routes";
import AuthRoutes  from "./auth/auth.routes";

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
