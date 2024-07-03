<script
  setup
  lang="ts"
>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
<template>
  <TheHeader />
  <VMain>
    <RouterView />
  </VMain>
  <TheFooter />
</template>
<style scoped>
</style>
