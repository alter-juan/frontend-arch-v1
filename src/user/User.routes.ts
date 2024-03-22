import { RouteRecordRaw, Router } from 'vue-router';

const routes: RouteRecordRaw = {
    path: '/user',
    name: 'DashboardLayout',
    component: () => import('./UserMain.vue'),
    redirect: { name: 'Dashboard' },
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
  
  export const UserRouter = (router: Router) => {
    router.addRoute('User', routes);
  };