<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useStore } from "@/store";
const store = useStore();
onMounted(() => {
  store.dispatch("fetchProductsData");
  console.log("asd");
});
</script>
<style>
</style>
