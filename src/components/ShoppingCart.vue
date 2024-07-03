<script
  setup
  lang="ts"
>
import {Customer, useCustomerStore} from "@/store/customerStore";
import {storeToRefs} from "pinia";
import CartItem from "@/components/CartItem.vue";
import {reactive, Ref, ref, UnwrapRef} from "vue";
import router from "@/router/router";

const {shoppingCart} = storeToRefs(useCustomerStore());
const {getTotalPrice} = useCustomerStore()

const orderUrl = ref('#')
const orderName = ref('')

const customerDetails: Ref<UnwrapRef<Customer>> = ref({name: '', surname: '', phone: '', address: ''})

const createOrder = (customer: Customer) => {
  const order = {
    customer,
    shoppingCart: shoppingCart.value,
  }
  const jsonData = JSON.stringify(order)

  orderUrl.value = `data:text/plain;charset=utf-8,${jsonData}`
  orderName.value = 'order.json'
  router.push('/').then(() => {
    shoppingCart.value = []
  })
}

// Rules for form validation
const isValid = ref(false)
const emptyCheck = (v: string) => !!v || 'This field must not be empty';
const rule = reactive({
  textFields: [emptyCheck, (v: string) => v.length >= 4 || "This field must contain more than 3 characters"],
  phone: [emptyCheck, (v: string) => /^[0-9]{9,15}$/.test(v) || "The telephone number must contain from 9 to 15 digits"],
});
</script>
<template>
  <VContainer>
    <template v-if="shoppingCart.length">
      <VRow>
        <VCol
          cols="12"
          md="8"
        >
          <VCard>
            <VCardTitle class="text-h4 mb-4 text-wrap">Shopping cart: {{ shoppingCart.length }} item(s)</VCardTitle>
            <VRow v-for="product in shoppingCart">
              <VCol class="pt-0">
                <CartItem :cart-item="product"/>
              </VCol>
            </VRow>
            <VCardTitle class="text-wrap">Total price: {{ getTotalPrice() }}$</VCardTitle>
          </VCard>
          <VBtn
            class="mt-8"
            prepend-icon="mdi-arrow-left"
            to="/"
          >Back to shopping
          </VBtn>
        </VCol>
        <VCol
          cols="12"
          md="4"
        >
          <VCard>
            <VContainer>
              <VForm
                validate-on="lazy"
                v-model="isValid"
              >
                <VTextField
                  placeholder="Name"
                  v-model="customerDetails.name"
                  :rules="rule.textFields"
                />
                <VTextField
                  placeholder="Surname"
                  v-model="customerDetails.surname"
                  :rules="rule.textFields"
                />
                <VTextField
                  placeholder="Address"
                  v-model="customerDetails.address"
                  :rules="rule.textFields"
                />
                <VTextField
                  placeholder="Phone number"
                  v-model="customerDetails.phone"
                  :rules="rule.phone"
                />
                <VBtn
                  block
                  class="flex-column align-stretch pa-0"
                  :disabled="!isValid"
                >
                  <a
                    @click="createOrder(customerDetails)"
                    :href="orderUrl"
                    :download="orderName"
                    class="text-decoration-none text-black flex-1-0-100 order-btn-line-height"
                  >
                    Order
                  </a>
                </VBtn>
              </VForm>
            </VContainer>
          </VCard>
        </VCol>
      </VRow>
    </template>
    <template v-else>
      <VCard>
        <VContainer class="d-flex flex-column align-center justify-center">
          <VCardTitle class="text-h3 mt-12 text-wrap text-center">
            Sorry your shopping cart is empty
          </VCardTitle>
          <VBtn
            class="mt-8 mb-16"
            prepend-icon="mdi-arrow-left"
            to="/"
          >Back to shopping
          </VBtn>
        </VContainer>
      </VCard>
    </template>
  </VContainer>
</template>
<style
  lang="scss"
  scoped
>
.order-btn-line-height {
  line-height: 36px;
}
</style>
