import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Example',
    component: () => import('../modules/example/views/ExampleView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../modules/example/views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
