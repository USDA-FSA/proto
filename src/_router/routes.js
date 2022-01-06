import { createRouter, createWebHistory } from 'vue-router';

import { sharedRoutes } from './shared.routes';
import { demosRoutes } from './demos.routes';
import { webRoutes } from './web.routes';

const routes = [
  ...sharedRoutes,
  ...demosRoutes,
  ...webRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/proto/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
