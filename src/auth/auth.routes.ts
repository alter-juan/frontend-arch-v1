import { RouteRecordRaw } from "vue-router";

import AuthCallback from './views/AuthCallback.vue';


export enum AuthRoutes {
    AUTH_CALLBACK = 'AuthCallback',
    LOGIN = "LoginPage",
}

const router: RouteRecordRaw = {
    path: "/auth",
    component: () => import("./AuthMain.vue"),
    children: [
        {
            path: "sign-in",
            name: AuthRoutes.LOGIN,
            component: () => import("./views/login/LoginView.vue"),
        },
        {
            path: 'callback',
            name: AuthRoutes.AUTH_CALLBACK,
            component: AuthCallback,
        },
    ],
};

export default router;