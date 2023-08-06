<template>
  <Carousel />
</template>

<script lang="ts" setup>
import { useSelectedMenuItemStore } from "@/stores/selectedMenuItem";

const { selectedMenuItem } = storeToRefs(useSelectedMenuItemStore());

onMounted(() => {
  selectedMenuItem.value = 1;
});
</script>
