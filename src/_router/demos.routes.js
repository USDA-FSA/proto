

export const demosRoutes = [
  {
    path: '/demos/global-nav',
    name: 'GlobalNavDemo',
    component: () => import('@/views/demos/GlobalNavDemo.vue')
  },
  {
    path: '/demos/name/:id',
    name: 'Name',
    component: () => import('@/views/demos/Name.vue'),
    props: true
  },
  {
    path: '/demos/users',
    name: 'Users',
    component: () => import('@/views/demos/Users.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/demos/help/Help.vue')
  }
]