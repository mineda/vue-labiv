import Vue from 'vue'
import VueRouter from 'vue-router'
import AppView from '../views/AppView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: AppView,
    children: [
      {
        path: '/usuario',
        component: () => import('../views/UsuarioView.vue')
      },
      {
        path: '/',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
