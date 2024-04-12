import { RouteRecordRaw } from "vue-router";

export enum AuthRoutes {
  LOGIN = "LoginPage",
}

const router: RouteRecordRaw = {
  path: "/auth",
  component: () => import("./AuthMain.vue"),
  children: [
    {
    path: "sign-in",
    name: AuthRoutes.LOGIN,
    component: () => import("./views/LoginView.vue"),
    },
  ],
 };

export default router;
