<template>
  <div class="overflow-auto h-full">
    <GalleryDropdownListItem
      v-for="data in GalleryDropdownData"
      :images="data.images"
      :title="data.title"
      :openedByDefault="data.openedByDefault"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryDropdownData from "./data.json";
</script>

<style scoped></style>
