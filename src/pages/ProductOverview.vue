<template>
  <div class="flex flex-col overflow-hidden h-full w-full">
    <FiltersList :filters="filters" @setFilter="setFilter" class="shrink-0" />
    <main class="flex flex-col overflow-hidden h-full w-full p-2">
      <AppTitle :title="title" :subtitle="subtitle" class="shrink-0" />
      <ProductsList
        class="overflow-y-scroll w-full styled-scrollbars px-1"
        :products="filteredProducts"
      />
    </main>
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
.styled-scrollbars {
  /* Foreground, Background */
  scrollbar-color: rgb(37, 99, 235) rgba(37, 99, 235, 0.2);
}

.styled-scrollbars::-webkit-scrollbar {
  width: 5px; /* Mostly for vertical scrollbars */
  height: 5px; /* Mostly for horizontal scrollbars */
}
.styled-scrollbars::-webkit-scrollbar-thumb {
  /* Foreground */
  background: rgb(37, 99, 235);
}
.styled-scrollbars::-webkit-scrollbar-track {
  /* Background */
  background: rgba(37, 99, 235, 0.2);
}
</style>
