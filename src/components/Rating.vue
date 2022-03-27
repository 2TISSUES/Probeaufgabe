<template>
  <div class="flex">
    <RatingStar v-for="i in 5" :key="i" :type="getStarType(i)" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import RatingStar from "@/components/RatingStar.vue";
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
});

const stars = computed(() => Math.round(props.rating));
const lastStarHalf = computed(() => props.rating % 1 >= 0.5);

const getStarType = (pos) =>
  pos < stars.value
    ? "full"
    : pos > stars.value
    ? "empty"
    : lastStarHalf.value
    ? "half"
    : "full";
</script>