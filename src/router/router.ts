import {createRouter, createWebHashHistory} from 'vue-router'
import ShoppingCart from "@/components/ShoppingCart.vue";
import MainComponent from "@/components/MainComponent.vue";

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
  history: createWebHashHistory(),
  routes,
})

export default router
