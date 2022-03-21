<template>
	<h1 class="font-semibold">{{ props.title }}</h1>
	<h2 class="text-gray-500">{{ props.subtitle }}</h2>
</template>

<script setup lang="ts">

const props = defineProps({
	title: String,
	subtitle: String,
})

</script>
