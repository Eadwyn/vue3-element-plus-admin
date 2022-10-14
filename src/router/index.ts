import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/view/dashboard/index.vue'),
        meta: { affix: true },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/view/login/index.vue'),
    meta: { hidden: true },
  },
  {
    path: '/dashboard',
    component: () => import('@/view/dashboard/index.vue'),
    meta: { hidden: true },
  },
  {
    path: '/401',
    component: () => import('@/view/error/401.vue'),
    meta: { hidden: true },
  },
  {
    path: '/403',
    component: () => import('@/view/error/403.vue'),
    meta: { hidden: true },
  },
  {
    path: '/404',
    component: () => import('@/view/error/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/500',
    component: () => import('@/view/error/500.vue'),
    meta: { hidden: true },
  },
];

const router = createRouter({
  routes: constantRoutes as RouteRecordRaw[],
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }), // 刷新时，还原滚动条位置
});

export default router;
