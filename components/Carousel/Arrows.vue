<template>
  <div class="flex justify-between absolute bottom-[4rem] w-full">
    <Button
      @click="scrollLeft"
      customClass="rounded-r-full relative border-r-[1.5px] border-t-[1.5px] border-b-[1.5px] border-grayLight"
      backgroundColor="bg-black"
    >
      <Icon name="mingcute:arrow-left-circle-fill" :class="arrowStyle()" />
    </Button>
    <Button
      @click="scrollRight"
      customClass="rounded-l-full relative border-l-[1.5px] border-t-[1.5px] border-b-[1.5px] border-grayLight"
      backgroundColor="bg-black"
    >
      <Icon name="mingcute:arrow-right-circle-fill" :class="arrowStyle()"
    /></Button>
  </div>
</template>

<script setup lang="ts">
/** Interfaces **/
interface Props {
  carouselRef: Element;
}

/** Props **/
const props = defineProps<Props>();

/** Methods **/
const scrollRight = () => {
  props.carouselRef.scrollBy({
    left: 100,
    behavior: "smooth",
  });
};

const scrollLeft = () => {
  props.carouselRef.scrollBy({
    left: -100,
    behavior: "smooth",
  });
};

const arrowStyle = () => "w-20 h-20 text-white";
</script>
