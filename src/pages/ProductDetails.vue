<template>
    {{ product }}
    <article class="m-4">
        <section class="flex flex-col">
            <div class="flex">
                <img :src="product.imageURL" class="content-start mr-2 min-w-1/4 h-auto" />
                <div class="flex flex-col justify-between flex-grow">
                    <div>
                        <div class="flex justify-between">
                            <h1
                                class="font-semibold"
                                :class="{ 'text-blue-600': isInWatchlist }"
                            >{{ product.name }}</h1>
                            <time
                                class="text-xs text-gray-500"
                                v-if="product.available"
                            >{{ new Date(product.releaseDate).toLocaleDateString("de-DE") }}</time>
                        </div>
                        <p class="line-clamp-2 text-gray-500">{{ product.description }}</p>
                    </div>
                </div>

                <div class="flex justify-between">
                    <div class="flex" v-if="product.available">
                        <p class="font-semibold">Preis:</p>
                        <p class="mx-1 text-gray-500">{{ product.price.value }}</p>
                        <p class="text-gray-500 capitalize">{{ product.price.currency }}</p>
                    </div>
                    <p>{{ product.rating }}</p>
                </div>
            </div>
        </section>
        <button
            class="bg-blue-600 text-white py-1"
            @click="addToWatchlist"
        >{{ isInWatchlist ? 'Vergessen' : 'Vormerken' }}</button>
        <section>
            <h1>Beschreibung</h1>
            <p>{{ product.longDescription }}</p>
        </section>
    </article>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const id = route.params.id;

const product = computed(() => store.getters.getProductById(id));

const addToWatchlist = function () {
    store.dispatch('updateWatchlist', id)
    console.log(store.state.watchlist)
}

const isInWatchlist = computed(() => store.getters.inWatchlist(id))
console.log(isInWatchlist.value)


</script>
<style scoped>
</style>