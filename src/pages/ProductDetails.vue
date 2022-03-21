<template>{{ product }}
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const id = route.params.id;

const product = computed(() => store.getters.getProductById(id));
</script>
<style scoped>
</style>