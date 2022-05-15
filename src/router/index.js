import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Menu.vue'),
    meta: {Protected: true}
  },
  {
    path: '/agregar_contacto',
    name: 'Agregar_Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Agregar_Contacto.vue'),
    meta: {Protected: true}
  },
  {
    path: '/agregar_empresa',
    name: 'Agregar_Empresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Agregar_Empresa.vue'),
    meta: {Protected: true}
  },
  {
    path: '/empresas',
    name: 'Menu_Empresas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Menu_Empresas.vue'),
    meta: {Protected: true}
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Ajustes.vue'),
    meta: {Protected: true, Admin: true}
  },
  {
    path: '/registro_usuario',
    name: 'Registro_Usuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Registro_Usuario.vue'),
    meta: {Protected: true, Admin: true}
  },
  {
    path: '/contacto/:id',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Contacto.vue'),
    meta: {Protected: true}
  },
  {
    path: '/editar_contacto/:id',
    name: 'Editar_Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Editar_Contacto.vue'),
    meta: {Protected: true}
  },
  {
    path: '/empresa/:id',
    name: 'Empresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Empresa.vue'),
    meta: {Protected: true}
  },
  {
    path: '/editar_empresa/:id',
    name: 'Editar_Empresa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Editar_Empresa.vue'),
    meta: {Protected: true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * funcion que nos ayuda a proteger vistas
 */
router.beforeEach((to, from, next) => {
  /**
   * linea que nos sirve para saber si un meta es true o false,
   * en este caso si la ruta lo tiene es: true, si no lo tiene es
   * false
   */
  const routeIsProtected = to.matched.some(item => item.meta.Protected);
  const routeIsForAdmin  = to.matched.some(item => item.meta.Admin);

  if(routeIsProtected === false && store.state.token != null){
    router.replace({ path: '/menu' });
  }
  if(routeIsForAdmin && store.state.rol != "Administrador"){
    router.replace({ path: '/menu' });
  }
  if(routeIsProtected && store.state.token === null){
    /**
     * Si la ruta es protegida y el token es null
     * se redirige a Inicio.
     */
    router.replace({ path: '/' });
  } else {
    next();
  }
}) 

export default router
