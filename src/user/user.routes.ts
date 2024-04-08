import { RouteRecordRaw } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";

const routes: RouteRecordRaw = {
  path: "/user",
  name: "DashboardLayout",
  component: () => import("./UserMain.vue"),
  redirect: { name: "Dashboard" },
  children: [
    {
      path: "dashboard",
      name: "Dashboard",
      component: () => import("./views/dashboard/DashboardView.vue"),
    },
    {
      path: ":id",
      name: "UserDetail",
      component: () => import("./views/user-detail/UserDetailView.vue"),
      props: true,
    },
  ],
  beforeEnter: authGuard,
};

export default routes;
