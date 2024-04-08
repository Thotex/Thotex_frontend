import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import RegistrationForm from '@/views/RegistrationForm.vue'
// import LoginForm from '@/views/LoginForm.vue'
import HomeView from '@/views/HomePageViews/HomeView.vue'
import AboutView from '@/views/HomePageViews/AboutView.vue'
import PricesView from '@/views/HomePageViews/PricesView.vue'
import ProfileView from '@/views/PortalViews/ProfileView.vue'
import HomePage from '@/views/HomePage.vue'
import PortalView from '@/views/PortalView.vue'
import BoardView from '@/views/PortalViews/BoardView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/conocenos',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/precios',
        name: 'prices',
        component: PricesView
      },
    ]
  },
  {
    path: '/portal',
    name: 'portal',
    component: PortalView,
    children: [
      {
        path: '/tablero',
        name: 'dashboard',
        component: BoardView
      },
      {
        path: '/perfil',
        name: 'profile',
        component: ProfileView
      }
      // Children of /portal
    ]
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
