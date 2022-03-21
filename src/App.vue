<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useStore } from "@/store";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
const store = useStore();
onMounted(() => {
  store.dispatch("fetchProductsData");
  console.log("asd");
});
</script>
<style>
</style>
