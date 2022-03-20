<template>
  {{ products.length }}
  <ul>
    <li v-for="product in products" :key="product.id"><router-link :to="`/details/${product.id}`">{{ product.name }}</router-link></li>
  </ul>
</template>
<script setup lang="ts">
// import { Product } from '@/types';

const props = defineProps<{
  products: Product[];
}>();
</script>
<style scoped>
</style>