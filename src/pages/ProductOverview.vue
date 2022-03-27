<template>
  <FiltersList :filters="filters" @setFilter="setFilter" />
  <div class="mx-4">
    <AppTitle :title="title" :subtitle="subtitle" />
    <ProductsList :products="filteredProducts" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "@/store";
import ProductsList from "@/components/ProductsList.vue";
import FiltersList from "@/components/FiltersList.vue";
import AppTitle from "@/components/AppTitle.vue";

const store = useStore();

const filters = computed(() => store.state.filters);
const currentFilter = ref<Filter>("Alle");
const filteredProducts = computed(() =>
  store.getters.filteredProducts(currentFilter.value)
);

const title = computed(() => store.state.header.headerTitle);
const subtitle = computed(() => store.state.header.headerDescription);

const setFilter = (filter) => (currentFilter.value = filter);
</script>


<style scoped>
</style>
