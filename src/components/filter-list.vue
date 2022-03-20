<template>
  <ul>
    <button
      v-for="filter in filters"
      :key="filter"
      @click="$emit('setFilter', filter)"
    >
      {{ filter }}
    </button>
  </ul>
</template>
<script setup lang="ts">
// import { Product } from '@/types';

const props = defineProps<{
  filters: Filter[];
}>();

const emit = defineEmits<{
  (e: 'setFilter', filter: string): void
}>()
</script>
<style scoped>
</style>