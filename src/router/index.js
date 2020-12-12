import { createRouter, createWebHistory } from 'vue-router'
import mainView from '@/mainView'
import notFound from '@/components/notFound'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: mainView,
    meta: {
      title: 'Home Page - Admin One'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          title: 'Dashboard - Admin One',
          metaTags: [
            {
              name: 'description',
              content: 'Dashboard admin one template'
            }
          ]
        }
      },
      {
        path: 'basic-ui/buttons',
        name: 'buttons',
        component: () => import('../views/basic-elements/Buttons.vue')
      },
      {
        path: 'basic-ui/dropdown',
        name: 'dropdown',
        component: () => import('../views/basic-elements/Dropdowns.vue')
      },
      {
        path: 'basic-ui/typography',
        name: 'typography',
        component: () => import('../views/basic-elements/Typography.vue')
      },
      {
        path: 'charts/chartjs',
        name: 'chartjs',
        component: () => import('../views/charts/Chartjs.vue')
      },
      {
        path: 'tables/basic-table',
        name: 'tables.basic',
        component: () => import('@/views/tables/BasicTable.vue')
      },
      {
        path: 'tables/datatables',
        name: 'tables.datatables',
        component: () => import('@/views/tables/Datatable.vue')
      },
      {
        path: '/mails',
        name: 'app.mails',
        component: () => import('@/views/mails/MailView.vue')
      },
      {
        path: '/general/users-listing',
        name: 'general.users-listing',
        component: () => import('@/views/pages/UsersListing.vue')
      },
      {
        path: '/general/user-profile',
        name: 'general.users-profile',
        component: () => import('@/views/pages/UserProfile.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/samples/user-pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/samples/user-pages/Register.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
