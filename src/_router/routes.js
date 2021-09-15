import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const NotFound = () => import('../views/NotFound.vue');


const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

export const router = createRouter({
  history: createWebHistory('/proto/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes: routes,
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
