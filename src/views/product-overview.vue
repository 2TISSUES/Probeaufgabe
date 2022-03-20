<template>
  <FiltersList :filters="filters" @setFilter="setFilter" />
  <ProductsList :products="filteredProducts" />
</template>
<script setup lang="ts">
import { reactive, computed, ref } from "@vue/runtime-core";
import { useStore } from "@/store";

import ProductsList from "@/components/ProductsList.vue";
import FiltersList from "@/components/FiltersList.vue";

const store = useStore();

const filters = computed(() => store.state.filters);
const currentFilter = ref<Filter>("Alle");
const filteredProducts = computed(() =>
  store.getters.filteredProducts(currentFilter.value)
);

const setFilter = (filter) => (currentFilter.value = filter);
</script>
<style scoped>
</style>