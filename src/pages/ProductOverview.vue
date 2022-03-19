<template>
  <AppHeader />
  <FiltersList :filters="filters" />
  <div class="m-4">
    <AppTitle />
    <ProductsList :products="filteredProducts" />
    <AppFooter />
  </div>
  <FiltersList />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import FiltersList from "@/components/FiltersList.vue";
import ProductsList from "@/components/ProductsList.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppTitle from "@/components/AppTitle.vue";

import { onMounted } from "@vue/runtime-core";
import { ref, computed, reactive } from "vue";

interface Price {
  value: Number;
  currency: String;
}

interface Product {
  name: String;
  id: Number;
  imageURL: String;
  available: Boolean;
  releaseDate: Number;
  description: String;
  longDescription: String;
  rating: Number;
  price: Price;
}

const currentFilter = ref<String>("");
let products: Array<Product> = reactive([]);

onMounted(async () => {
  const url = `https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

const filteredProducts = computed<ProductData>(() => {
  console.log(12);
  if (!currentFilter || currentFilter === "Alle") return products;
  if (currentFilter === "Verfügbar") return products.filter((p) => p.available);
  if (currentFilter === "Vorgemerkt")
    return products.filter((p) => watchList.includes(p.id));
});
</script>


<style scoped>
</style>
