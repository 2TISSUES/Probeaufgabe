<template>
  <nav role="menubar" class="flex bg-gray-300 py-2">
    <button
      v-for="filter in filters"
      :key="filter"
      class="text-gray-900 text-center flex-grow hover:bg-gray-400"
      @click="$emit('setFilter', filter)"
    >{{ filter }}</button>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  filters: Array,
});
const emit = defineEmits<{
  (e: "setFilter", filter: String): void;
}>();
</script>

<style scoped>
</style>
