import { RouteRecordRaw } from 'vue-router';

export enum UserRoutes {
  DASHBOARD = 'Dashboard',
  DASHBOARD_LAYOUT = 'DashboardLayout',
  USER_DETAIL = 'UserDetail',
}

const routes: RouteRecordRaw = {
    path: '/user',
    name: UserRoutes.DASHBOARD_LAYOUT,
    component: () => import('./UserMain.vue'),
    redirect: { name: UserRoutes.DASHBOARD },
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: UserRoutes.DASHBOARD,
        component: () => import('./views/dashboard/DashboardView.vue'),
      },{
        path: ':id',
        name: UserRoutes.USER_DETAIL,
        component: () => import('./views/user-detail/UserDetailView.vue'),
        props: true,
      }
    ],
  };


export default routes;