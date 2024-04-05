import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw = {
    path: '/user',
    name: 'DashboardLayout',
    component: () => import('./UserMain.vue'),
    redirect: { name: 'Dashboard' },
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('./views/dashboard/DashboardView.vue'),
      },{
        path: ':id',
        name: 'UserDetail',
        component: () => import('./views/user-detail/UserDetailView.vue'),
        props: true,
      }
    ],
  };


export default routes;