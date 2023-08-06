<template>
  <div class="h-full relative">
    <img
      :src="`/categories/${image}.jpg`"
      class="absolute h-full object-cover w-full"
    />
    <div
      class="absolute bg-black/50 flex flex-col h-full items-center justify-center p-10 top-0 w-full"
    >
      <h2 class="mb-3 text-center">{{ title }}</h2>
      <p class="max-w-md mb-6 text-center">{{ subtitle }}</p>
      <Button :link="link" with-padding>SABER MÁS</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: number;
  title: string;
  subtitle: string;
  link: string;
  id: number;
}
defineProps<Props>();
</script>
