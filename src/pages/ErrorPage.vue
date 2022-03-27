<template>
  <div class="flex flex-col mx-4 justify-center min-h-full items-stretch">
    <h1 class="text-center text-4xl font-semibold">
      You seem lost, should we call your parents?
    </h1>
    <div class="flex flex-col items-center m-2">
      <img src="../assets/lost-child.jpg" height="428" width="612" />
    </div>
    <button
      @click="$router.push('/')"
      class="flex-grow-0 bg-blue-600 py-2 text-white font-semibold"
    >
      asd
    </button>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
body,
html,
div#app {
  height: 100%;
}

div#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>