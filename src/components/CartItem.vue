<script
  setup
  lang="ts"
>
import {PropType} from "vue";
import {CartItem, useCustomerStore} from "@/store/customerStore";

const {updateProductInCart, deleteProductFromCart} = useCustomerStore();

defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
})
</script>
<template>
  <VContainer class="pt-0">
    <VCard>
      <VContainer class="d-flex align-center flex-column flex-sm-row">
        <div class="d-flex flex-1-1-100 align-center">
          <div>
            <VImg
              :src="cartItem.product.img"
              :aspect-ratio="16/9"
              :width="128"
              class=""
            />
          </div>
          <VCardTitle class="flex-1-1-100 text-wrap">{{
              cartItem.product.brand + " " + cartItem.product.model
            }}
          </VCardTitle>
        </div>
        <VCardActions class="d-flex flex-column">
          <div class="d-flex justify-start align-center">
            <VBtn
              icon="mdi-delete"
              color="red"
              @click="deleteProductFromCart(cartItem.product)"
            />
            <VBtn
              icon="mdi-minus"
              class="ma-0"
              @click="updateProductInCart(cartItem.product,-1)"
            />
            <VCardText class="text-h6 pa-2 flex-0-0">{{ cartItem.quantity }}</VCardText>
            <VBtn
              icon="mdi-plus"
              class="ma-0"
              @click="updateProductInCart(cartItem.product,1)"
            />
          </div>
          <VCardText class="text-h6 pa-2">{{ cartItem.quantity * cartItem.product.price }}$</VCardText>
        </VCardActions>
      </VContainer>
    </VCard>
  </VContainer>
</template>
<style scoped>
</style>
