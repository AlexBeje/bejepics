<template>
  <div class="gap-6 px-6 py-2 flex overflow-auto min-h-[96px]">
    <GalleryCategoriesItem
      v-for="data in GalleryCategoriesItemData"
      :image="data.image"
      :title="data.title"
      :selected="data.selected"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryCategoriesItemData from "./data.json";
</script>

<style scoped></style>
