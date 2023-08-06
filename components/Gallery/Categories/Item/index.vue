<template>
  <div class="items-center relative flex min-w-fit flex-col">
    <img :src="`/categories/${image}.jpg`" class="w-14 h-14 object-cover rounded-full" />
    <div
      class="w-14 h-14 object-cover rounded-full bg-black/75 absolute"
      v-if="!selected"
    />
    <p :class="`text-center font-teko ${!selected && 'text-grayLight'}`">
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: number;
  title: string;
  selected: boolean;
}
defineProps<Props>();
</script>

<style scoped></style>
