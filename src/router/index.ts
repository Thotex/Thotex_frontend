import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import RegistrationForm from '@/views/RegistrationForm.vue'
// import LoginForm from '@/views/LoginForm.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PricesView from '@/views/PricesView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/conocenos',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView,
  },
  {
    path: '/precios',
    name: 'prices',
    component: PricesView
  }
  /*

  //Tocó quitar las rutas dado que dan conflictos con el router

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
  },
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
