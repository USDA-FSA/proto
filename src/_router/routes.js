import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Users = () => import('../views/Users.vue');
const Name = () => import('../views/Name.vue');
const Web = () => import('../views/Web.vue');
const NotFound = () => import('../views/NotFound.vue');


const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/name/:id',
    name: 'Name',
    component: Name,
    props: true
  },
  {
    path: '/web',
    name: 'Web',
    component: Web
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
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
