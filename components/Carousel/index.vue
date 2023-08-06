<template>
  <div class="flex flex-col h-full w-full justify-between relative">
    <div
      class="flex flex-1 mx-auto overflow-scroll scrollbar-none snap-mandatory snap-x w-full"
      ref="carouselRef"
    >
      <div
        class="flex-shrink-0 snap-center w-full"
        v-for="{ image, title, subtitle, link } in CarouselItemData"
      >
        <CarouselItem
          :image="image"
          :title="title"
          :subtitle="subtitle"
          :link="link"
        />
      </div>
    </div>
    <CarouselArrows :carouselRef="carouselRef" v-if="innerWidth > 600" />
  </div>
</template>

<script setup>
/** Data **/
import CarouselItemData from "./data.json";

/** Variables **/
const carouselRef = ref(null);
const innerWidth = typeof window !== "undefined" && window.innerWidth;
</script>
