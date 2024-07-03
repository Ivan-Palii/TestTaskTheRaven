<script
  setup
  lang="ts"
>
import {PropType, ref} from "vue";
import {Product} from "@/assets/products";
import {useCustomerStore} from "@/store/customerStore";

const {addProductToCart} = useCustomerStore();

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const qty = ref<number>(1)
</script>
<template>
  <VCard
    class="flex-1-1 d-flex flex-column cursor-pointer"
    elevation="6"
  >
    <VRow>
      <VImg
        :src="product.img"
        :aspect-ratio="16/9"
        :width="256"
        class="card-image ma-4 mt-8"
      />
    </VRow>
    <VRow class="flex-1-1-100">
      <VCol class="d-flex flex-column">
        <VCardTitle class="text-h5 text-wrap flex-1-1-100">
          {{ product.brand + " " + product.model }}
        </VCardTitle>
        <VCardText class="text-wrap text-h6">
          {{ "Price: " + product.price + "$" }}
        </VCardText>
        <VCardActions class="border">
          <VBtn
            @click="qty--"
            :disabled="qty<=1"
            icon="mdi-minus"
          />
          <span class="text-h6">{{ qty }}</span>
          <VBtn
            class="ma-0"
            @click="qty++"
            icon="mdi-plus"
          />
        </VCardActions>
        <VCardActions>
          <VBtn
            block
            variant="outlined"
            append-icon="mdi-cart-variant"
            @click="addProductToCart(product, qty)"
          >Buy
          </VBtn>
        </VCardActions>
      </VCol>
    </VRow>
  </VCard>
</template>
<style scoped>
</style>
