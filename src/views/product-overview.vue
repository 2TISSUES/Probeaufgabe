<template>
  <div>a</div>
  <FilterList :filters="data.filters" @set-filter="setFilter" />
  <ProductList :products="filteredProducts" />
</template>
<script setup lang="ts">
import { onMounted, reactive, computed, ref } from "@vue/runtime-core";
import { useStore } from "@/store";

import ProductList from "@/components/product-list.vue";
import FilterList from "@/components/filter-list.vue";

const store = useStore();

//store.state.

let data = reactive<ProductData>({
  products: [],
  filters: [],
  header: {
    headerTitle: "unknown",
    headerDescription: "unknown",
  },
  watchlist: []
});

const currentFilter = ref<Filter>("Alle");

const setFilter = (filter) => (currentFilter.value = filter);


const filteredProducts = computed(() => {
  switch (currentFilter.value) {
    case "Verfügbar":
      return data.products.filter((p) => p.available);
      break;
    case "Vorgemerkt":
      return data.products;
      break;
    default:
      return data.products;
      break;
  }
});

</script>
<style scoped>
</style>