<template>
  <ul>
    <ProductTile
      v-for="product in products"
      :key="product.id"
      :available="product.available"
      :description="product.description"
      :imageURL="product.imageURL"
      :name="product.name"
      :price="product.price.value"
      :currency="product.price.currency"
      :rating="product.rating"
      :date="product.releaseDate"
    ></ProductTile>
  </ul>
</template>

<script setup lang="ts">
import ProductTile from "@/components/ProductTile.vue";
const props = defineProps({
  products: Object,
});
</script>

<style scoped>
</style>
