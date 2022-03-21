<template>
  <router-link :to="`/details/${id}`">
    <li class="flex p-2 border-2 my-2" :class="{ 'flex-row-reverse': !available }">
      <img :src="imageURL" class="content-start mr-2 min-w-1/4 h-auto" />
      <div class="flex flex-col justify-between flex-grow">
        <div>
          <div class="flex justify-between">
            <h1 class="font-semibold">{{ name }}</h1>
            <time
              class="text-xs text-gray-500"
              v-if="available"
            >{{ new Date(date).toLocaleDateString("de-DE") }}</time>
          </div>
          <p class="line-clamp-2 text-gray-500">{{ description }}</p>
        </div>

        <div class="flex justify-between">
          <div class="flex" v-if="available">
            <p class="font-semibold">Preis:</p>
            <p class="mx-1 text-gray-500">{{ price }}</p>
            <p class="text-gray-500 capitalize">{{ currency }}</p>
          </div>
          <p>{{ rating }}</p>
        </div>
      </div>
    </li>
  </router-link>
</template>

<script setup lang="ts">


defineProps<{
  id: Number;
  name: String;
  imageURL: String;
  description: String;
  available: Boolean;
  price: Number;
  currency: String;
  rating: Number;
  date: Number;
}>();

</script>


<style scoped>
</style>
