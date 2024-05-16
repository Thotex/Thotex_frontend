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
import SalesView from '@/views/PortalViews/SalesView.vue'
import ShoppingView from '@/views/PortalViews/ShoppingView.vue'
import TercerosView from '@/views/PortalViews/TercerosView.vue'
import AccountingView from '@/views/PortalViews/AccountingView.vue'
import CalendarView from '@/views/PortalViews/CalendarView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
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
    redirect: '/portal/tablero', //Corresponde al dashboard 
    component: PortalView,
    //meta: { requiresAuth: true },
    children: [
      {
        path: '/portal/tablero',
        name: 'dashboard',
        component: BoardView
      },
      {
        path: '/portal/nomina',
        name: 'indexPayroll',
        component: PayrollView,
        children : [
          {
            path: '/portal/nomina',
            name: 'payroll',
            component: () => import('@/views/PortalViews/PayrollViews/MainPayrollView.vue')
          },
          {
            path: '/portal/nomina/editar/:id',
            name: 'editPayroll',
            component: () => import('@/views/PortalViews/PayrollViews/EditEmployeeView.vue'),
            props: true
          },
          {
            path: '/portal/nomina/crear',
            name: 'createPayroll',
            component: () => import('@/views/PortalViews/PayrollViews/CreateEmployeeView.vue')
          }
        ]
      },
      {
        path: '/portal/ventas',
        name: 'indexSales',
        component: SalesView,
        children: [
          {
            path: '/portal/ventas',
            name: 'sales',
            component: () => import('@/views/PortalViews/SalesViews/MainSalesView.vue')
          },
          {
            path: '/portal/ventas/editar/:id',
            name: 'editSale',
            component: () => import('@/views/PortalViews/SalesViews/EditSaleView.vue'),
            props: true
          },
          {
            path: '/portal/ventas/crear',
            name: 'createSale',
            component: () => import('@/views/PortalViews/SalesViews/CreateSaleView.vue')
          }
        ]
      },
      {
        path: '/portal/compras',
        name: 'indexShopping',
        component: ShoppingView,
        children:[
          {
            path: '/portal/compras',
            name: 'shopping',
            component: MainShoppingView
        },
        {
          path: '/portal/compras/Crear',
          name: 'createShopping',
          component: CreateShoppingView,
          props: true
        },
        {
          path: '/portal/compras/Historial',
          name: 'historyShopping',
          component: ShoppingHistoryView,
          props: true
        },
        {
          path: '/portal/compras/Estadisticas',
          name: 'statisticsShopping',
          component: ShoppingStatisticsView,
          props: true
        }
        ]
      },
      {
        path: '/portal/inventario',
        name: 'indexInventory',
        component: InventoryView,
        children: [
          {
            path: '/portal/inventario',
            name: 'inventory',
            component: () => import('@/views/PortalViews/InventoryViews/MainInventoryView.vue')
          },
          {
            path: '/portal/inventario/editar/:id',
            name: 'editInventory',
            component: () => import('@/views/PortalViews/InventoryViews/EditProductView.vue'),
            props: true
          },
          {
            path: '/portal/inventario/crear_producto',
            name: 'registrarProducto',
            component: () => import('@/views/PortalViews/InventoryViews/RegistrarProductosView.vue')
          },
        ]
      },
      {
        path: '/portal/terceros',
        name: 'third',
        component: TercerosView
      },
      {
        path: '/portal/contabilidad',
        name: 'accounting',
        component: AccountingView
      },
      {
        path: '/portal/calendario',
        name: 'calendar',
        component: CalendarView
      },
      {
        path: '/portal/perfil',
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

import { useCookies } from 'vue3-cookies'
import MainShoppingView from '@/views/PortalViews/ShoppingViews/MainShoppingView.vue'
import CreateShoppingView from '@/views/PortalViews/ShoppingViews/CreateShoppingView.vue'
import ShoppingHistoryView from '@/views/PortalViews/ShoppingViews/ShoppingHistoryView.vue'
import ShoppingStatisticsView from '@/views/PortalViews/ShoppingViews/ShoppingStatisticsView.vue'
router.beforeEach((to, from, next) => {
  const { cookies } = useCookies();
  if (to.meta.requiresAuth && !cookies.isKey('jwt')) {
    next('/');
  } else {
    next();
  }
})

export default router
