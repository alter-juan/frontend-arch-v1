import { RouteRecordRaw } from "vue-router";

const LoginCallback = () => import("./views/login-callback/LoginCallback.vue");

const router: RouteRecordRaw = {
  path: "/auth",
  children: [
    {
        path: "callback",
        component: LoginCallback,
    }
  ]
};

export default router;
