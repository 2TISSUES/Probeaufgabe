<template>
  <nav
    role="menubar"
    class="
      flex
      bg-gray-300
      filter
      shadow-md shadow-slate-300
      bg-gradient-to-b
      from-slate-50
      to-slate-300
    "
  >
    <button
      v-for="filter: Filter in filters"
      :key="filter"
      class="text-gray-900 text-center flex-grow hover:bg-gray-400 py-2"
      @click="$emit('setFilter', filter)"
    >
      {{ filter }}
    </button>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  filters: Filter[];
}>();

defineEmits<{
  (e: "setFilter", filter: string): void;
}>();
</script>

<style scoped>
</style>
