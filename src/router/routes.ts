export const constRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'Login',
      hidden: true,
      icon: 'Promotion', // Menu icon
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: 'Home',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: 'Data Screen',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    name: 'Acl',
    meta: {
      title: 'Authenticator',
      icon: 'Lock',
    },

    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: 'User',
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: 'Role',
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: 'Permission',
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: 'Product',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: 'Trademark',
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: 'Attributes',
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU',
          icon: 'Calendar',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU',
          icon: 'Orange',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: 'Not Found',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: 'Any',
      hidden: true,
      icon: 'DataLine',
    },
  },
]
