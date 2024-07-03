<script
  setup
  lang="ts"
>
import {useCustomerStore} from "@/store/customerStore";
import {storeToRefs} from "pinia";

const {shoppingCart} = storeToRefs(useCustomerStore());
const {getTotalPrice} = useCustomerStore()
</script>
<template>
  <VAppBar color="primary">
    <VContainer class="d-flex">
      <div class="text-h6">Smartphone shop</div>
      <VSpacer/>
      <div class="d-flex align-center ">
        <div v-if="getTotalPrice()>0">
          Total: {{ getTotalPrice() }}$
        </div>
        <VBtn
          to="/cart"
        >
          <VBadge
            :content="shoppingCart.length"
            :model-value="shoppingCart.length > 0"
            color="red"
          >
            <VIcon size="28">mdi-cart-variant</VIcon>
          </VBadge>
        </VBtn>
      </div>
    </VContainer>
  </VAppBar>
</template>
<style
  lang="scss"
  scoped
>
.v-btn.v-btn--active {
  --v-activated-opacity: 0;
}
</style>
