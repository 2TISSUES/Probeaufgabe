<template>
  <div class="flex flex-col mx-4">
    <div class="flex my-2 text-xs">
      <img :src="product.imageURL" class="content-start w-24 h-24 mr-2" />
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex justify-between">
          <h1 class="font-semibold text-sm">{{ product.name }}</h1>
        </div>

        <div class="flex" v-if="product.available">
          <p class="font-semibold">Preis:</p>
          <p class="mx-1 text-gray-500">{{ product.price.value }}</p>
          <p class="text-gray-500 capitalize">
            {{ product.price.currency.toLowerCase() }}
          </p>
        </div>
        <div class="flex justify-between">
          <Rating :rating="product.rating" />
          <time class="text-xs text-gray-500" v-if="product.available">{{
            new Date(product.releaseDate).toLocaleDateString("de-DE")
          }}</time>
        </div>
      </div>
    </div>

    <p class="line-clamp-2 text-gray-500">{{ product.description }}</p>
    <button class="bg-blue-600 text-white p-1" @click="updateWatchlist()">
      {{ isInWatchlist ? "Vergessen" : "Vormerken" }}
    </button>
    <div>
      <h2 class="font-semibold">Beschreibung</h2>
      <p class="text-gray-500">{{ product.longDescription }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Rating from "@/components/Rating.vue";

const route = useRoute();
const store = useStore();

const id: Number = Number(route.params.id);

const product: Product = computed(() => store.getters.getProductById(id));

const updateWatchlist = function () {
  store.dispatch("updateWatchlist", id);
  console.log(store.state.watchlist);
};

const isInWatchlist = computed(() => store.getters.inWatchlist(id));
console.log(isInWatchlist.value);
</script>
<style scoped>
</style>