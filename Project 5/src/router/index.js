import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'

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
