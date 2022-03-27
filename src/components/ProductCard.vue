<template>
  <router-link :to="`/details/${id}`">
    <li
      class="
        flex
        p-2
        my-6
        text-xs
        rounded-md
        shadow-[3px_3px_10px_rgba(0,0,0,0.1)]
      "
      :class="{
        'flex-row-reverse': !available,
        'bg-watched-100': isInWatchlist,
      }"
    >
      <img
        :src="imageURL"
        class="content-start w-24 h-24"
        :class="!available ? 'ml-2' : 'mr-2'"
      />
      <div class="flex flex-col justify-between flex-grow">
        <div>
          <div class="flex justify-between">
            <h1 class="font-semibold">{{ name }}</h1>
            <time class="text-xs text-gray-500" v-if="available">{{
              new Date(date).toLocaleDateString("de-DE")
            }}</time>
          </div>
          <p class="line-clamp-2 text-gray-500">{{ description }}</p>
        </div>

        <div class="flex justify-between">
          <div class="flex" v-if="available">
            <p class="font-semibold">Preis:</p>
            <p class="mx-1 text-gray-500">{{ price }}</p>
            <p class="text-gray-500 capitalize">{{ currency.toLowerCase() }}</p>
          </div>
          <Rating :rating="rating" />
        </div>
      </div>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import Rating from "@/components/Rating.vue";
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";

const store = useStore();

const props = defineProps<{
  id: number;
  name: string;
  imageURL: string;
  description: string;
  available: boolean;
  price: number;
  currency: string;
  rating: number;
  date: number;
}>();

const isInWatchlist = computed(() => store.getters.inWatchlist(props.id));
</script>


<style scoped>
</style>
