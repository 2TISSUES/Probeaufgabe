<template>
  <Icon :icon="starType" color="#ffce31" height="16" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import starIcon from "@iconify-icons/dashicons/star-empty";
import starIconFilled from "@iconify-icons/dashicons/star-filled";
import starIconHalf from "@iconify-icons/dashicons/star-half";
import { computed } from "@vue/runtime-core";

const props = defineProps({
  type: {
    default: "full",
    type: String,
  },
});

const starType = computed(() => {
  switch (props.type) {
    case "full":
      return starIconFilled;
    case "half":
      return starIconHalf;
    case "empty":
      return starIcon;
  }
});
</script>