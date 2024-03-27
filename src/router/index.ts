import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationForm from '@/views/RegistrationForm.vue'
import LoginForm from '@/views/LoginForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/conocenos',
    name: 'conocenos',
    component: () => import( '../views/ConocenosView.vue')
  },
  //Direccion al login
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  //Dirección al registro
  {
    path: '/register',
    name: 'register',
    component: RegistrationForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
