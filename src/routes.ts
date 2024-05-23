import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import SurveysRoutes from "./surveys/surveys.routes";
import UserRoutes from "./user/user.routes";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: { name: "DashboardLayout" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./core/views/NotFoundView.vue"),
  },
  UserRoutes,
  SurveysRoutes,
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
