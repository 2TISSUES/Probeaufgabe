<template>
  {{ product }}
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { onMounted, reactive, computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

import ProductList from "@/components/product-list.vue";

const route = useRoute();
const store = useStore();

const id = route.params.id;

const product = computed(() => store.getters.getProductById(id));
</script>
<style scoped>
</style>