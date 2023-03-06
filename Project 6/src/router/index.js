import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Cookies from '../views/Cookies.vue'
import Login from '../views/Login.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ProductDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
