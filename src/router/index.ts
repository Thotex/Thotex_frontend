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
import PayrollView from '@/views/PortalViews/PayrollView.vue'
import InventoryView from '@/views/PortalViews/InventoryView.vue'


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
        path: '/portal/tablero',
        name: 'dashboard',
        component: BoardView
      },
      {
        path: '/portal/perfil',
        name: 'profile',
        component: ProfileView
      },
      {
        path: '/portal/nomina',
        name: 'payroll',
        component: PayrollView
      },
      {
        path: '/portal/nomina/crear',
        name: 'createEmployee',
        component: () => import('@/views/PortalViews/PayrollViews/CreateEmployeeView.vue')
      },
      {
        path: '/portal/inventario',
        name: 'inventario',
        component: InventoryView

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
