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
import CreateShoppingView from '@/views/PortalViews/ShoppingViews/CreateShoppingView.vue'
import ShoppingHistoryView from '@/views/PortalViews/ShoppingViews/ShoppingHistoryView.vue'


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
        name: 'payroll',
        component: PayrollView,
        redirect: '/portal/nomina/historial',
        children : [
          {
            path: '/portal/nomina/historial',
            name: 'historyPayroll',
            component: () => import('@/views/PortalViews/PayrollViews/HistoryPayrollView.vue')
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
        name: 'sales',
        component: SalesView,
        redirect: '/portal/ventas/historial',
        children: [
          {
            path: '/portal/ventas/historial',
            name: 'historySales',
            component: () => import('@/views/PortalViews/SalesViews/HistorySalesView.vue')
          },
          {
            path: '/portal/ventas/estadisticas',
            name: 'statsSales',
            component: () => import('@/views/PortalViews/SalesViews/StatsSalesView.vue')
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
        name: 'shopping',
        component: ShoppingView,
        redirect: '/portal/compras/historial',
        children:[
        {
          path: '/portal/compras/crear',
          name: 'createShopping',
          component: CreateShoppingView,
          props: true
        },
        {
          path: '/portal/compras/editar/:id',
          name: 'editShopping',
          component: () => import('@/views/PortalViews/ShoppingViews/EditShoppingView.vue'),
          props: true
        },
        {
          path: '/portal/compras/historial',
          name: 'historyShopping',
          component: ShoppingHistoryView,
          props: true
        },
        {
          path: '/portal/compras/estadisticas',
          name: 'statsShopping',
          component: () => import('@/views/PortalViews/ShoppingViews/StatsShoppingView.vue'),
          props: true
        }
        ]
      },
      {
        path: '/portal/inventario',
        name: 'inventory',
        component: InventoryView,
        redirect: '/portal/inventario/historial',
        children: [
          {
            path: '/portal/inventario/historial',
            name: 'historyInventory',
            component: () => import('@/views/PortalViews/InventoryViews/HistoryInventoryView.vue')
          },
          {
            path: '/portal/inventario/estadisticas',
            name: 'statsInventory',
            component: () => import('@/views/PortalViews/InventoryViews/StatsInventoryView.vue')
          },
          {
            path: '/portal/inventario/editar/:id',
            name: 'editInventory',
            component: () => import('@/views/PortalViews/InventoryViews/EditProductView.vue'),
            props: true
          },
          {
            path: '/portal/inventario/crear_producto',
            name: 'createInventory',
            component: () => import('@/views/PortalViews/InventoryViews/CreateProductView.vue')
          },
        ]
      },
      {
        path: '/portal/terceros',
        name: 'third',
        component: TercerosView
        //children : [
          /*
          {
            path: '/portal/terceros',
            name: 'third',
            component: () => import('@/views/PortalViews/TercerosViews/MainTercerosView.vue')
          },
          {
            path: '/portal/terceros/editar/:id',
            name: 'editThird',
            component: () => import('@/views/PortalViews/TercerosViews/EditThirdView.vue'),
            props: true
          },
          {
            path: '/portal/terceros/crear',
            name: 'createThird',
            component: () => import('@/views/PortalViews/TercerosViews/CreateThirdView.vue')
          }
          */
        //]
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
router.beforeEach((to, from, next) => {
  const { cookies } = useCookies();
  if (to.meta.requiresAuth && !cookies.isKey('jwt')) {
    next('/');
  } else {
    next();
  }
})

export default router
