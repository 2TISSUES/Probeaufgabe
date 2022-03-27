<template>
  <ul>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :available="product.available"
      :description="product.description"
      :imageURL="product.imageURL"
      :name="product.name"
      :price="product.price.value"
      :currency="product.price.currency"
      :rating="product.rating"
      :date="product.releaseDate"
    ></ProductCard>
  </ul>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";

defineProps({
  products: Object,
});
</script>

<style scoped>
</style>
