<script
  setup
  lang="ts"
>
import {products} from "@/assets/products"
import ProductItem from "@/components/ProductItem.vue";

</script>
<template>
  <VContainer>
    <VRow>
      <template v-if="products.length">
        <VCol
          v-for="product in products"
          :key="product.id"
          cols="12"
          lg="3"
          md="6"
          sm="12"
          class="d-flex"
        >
          <ProductItem :product="product"/>
        </VCol>
      </template>
    </VRow>
<!--    <RouterLink to="/cart">To cart</RouterLink>-->
  </VContainer>
</template>
<style scoped>
</style>
