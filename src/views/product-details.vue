<template>
  {{ $route.params.id }}
</template>
<script setup lang="ts">
import ProductList from '@/components/product-list.vue';

import { onMounted, reactive, computed, ref } from "@vue/runtime-core";
import { useRouter } from 'vue-router';



let product = ref<Product>();

const fetchProductData = async () => await (await fetch("https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json")).json();

onMounted(async ()=>{
  const jsonData = await fetchProductData();
  Object.assign(product.value, jsonData);
});

</script>
<style scoped>
</style>