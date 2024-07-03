import {createRouter, createWebHistory} from 'vue-router'
import ShoppingCart from "@/components/ShoppingCart.vue";
import MainComponent from "@/components/MainComponent.vue";
import * as process from "node:process";

const routes = [
  {
    path: '/',
    component: MainComponent,
  },
  {
    path: '/cart',
    component: ShoppingCart,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
