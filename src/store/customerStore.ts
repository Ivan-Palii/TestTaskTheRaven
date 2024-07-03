import {defineStore} from "pinia";
import {Ref, ref, UnwrapRef, watch} from "vue";
import {Product} from "@/assets/products";

export const useCustomerStore = defineStore("CustomerStore", () => {
  const shoppingCart: Ref<UnwrapRef<CartItem[]>> = ref([])

  const shoppingCartInLocalStorage: string | null = localStorage.getItem('shoppingCartInLocalStorage')
  if (shoppingCartInLocalStorage) {
    shoppingCart.value = JSON.parse(shoppingCartInLocalStorage)._value
  }

  //Track of shoppingCart and writes to Local Storage when changes occur
  watch(() => shoppingCart, (state) => {
    localStorage.setItem('shoppingCartInLocalStorage', JSON.stringify(state));
  }, {deep: true})

  //Add new product to customer basket
  //if this item is already in the cart, performs quantity addition
  const addProductToCart = (product: Product, quantity: number) => {
    const item =
      shoppingCart.value
        .find(item => item.product.id === product.id)

    if (item) {
      updateProductInCart(item.product, quantity)
      return
    }

    shoppingCart.value.push({product, quantity})
  }

  //Modify quantity of products in basket
  const updateProductInCart = (product: Product, quantity: number) => {
    const item =
      shoppingCart.value
        .find(item => item.product.id === product.id)

    if (item) {
      item.quantity += quantity
      if (item.quantity <= 0) {
        deleteProductFromCart(item.product)
      }
    }
  }

  //Delete product from customer basket
  const deleteProductFromCart = (product: Product) => {
    const index =
      shoppingCart.value
        .findIndex(item => item.product.id === product.id)

    if (index > -1) {
      shoppingCart.value.splice(index, 1)
    }
  }

  //Get total price of all items in the basket
  const getTotalPrice = (): number => {
    return shoppingCart.value
      .reduce((sum, current) =>
        sum + current.product.price * current.quantity, 0)
  }

  return {
    shoppingCart,
    addProductToCart,
    updateProductInCart,
    deleteProductFromCart,
    getTotalPrice
  }
})

export interface CartItem {
  product: Product
  quantity: number
}

export interface Customer {
  name: string,
  surname: string,
  address: string,
  phone: string
}
