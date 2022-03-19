<template>
  <li
    class="flex p-2 border-2 my-2"
    :class="{ 'flex-row-reverse': !isAvailable }"
  >
    <img :src="imageURL" class="content-start mr-2" />
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <div class="flex justify-between">
          <h1 class="font-semibold">{{ name }}</h1>
          <p class="text-xs text-gray-500" v-if="isAvailable">
            {{ new Date(date).toLocaleDateString("de-DE") }}
          </p>
        </div>
        <p class="line-clamp-2 text-gray-500">{{ description }}</p>
      </div>

      <div class="flex justify-between">
        <div class="flex" v-if="isAvailable">
          <p class="font-semibold">Preis:</p>
          <p class="mx-1 text-gray-500">{{ price }}</p>
          <p class="text-gray-500">{{ capitalizedCurrency }}</p>
        </div>
        <p>{{ rating }}</p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/runtime-core";

const props = defineProps<{
  name: String;
  imageURL: String;
  description: String;
  available: Boolean;
  price: Number;
  currency: String;
  rating: Number;
  date: Number;
}>();

const isAvailable = ref<Boolean>(props.available);

const capitalizedCurrency = computed(() => {
  return props.currency.charAt(0) + props.currency.slice(1).toLowerCase();
});
</script>


<style scoped>
</style>
