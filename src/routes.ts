import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AuthRoutes, { AuthRoutes as AuthRouteAlias } from "./auth/auth.routes";
import { useAuthStore } from "./auth/store/auth.store";
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

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  const token = sessionStorage.getItem("token");

  if (token) {
    authStore.setAuthenticated(true);
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) next({ name: AuthRouteAlias.LOGIN })
  else if (to.name === AuthRouteAlias.LOGIN && authStore.isAuthenticated) next("/")
  else next()
})
