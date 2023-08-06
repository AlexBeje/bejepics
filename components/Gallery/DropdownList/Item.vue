<template>
  <div
    class="bg-black p-4 flex justify-between items-center cursor-pointer"
    @click="toggleDropdown()"
  >
    <div class="flex gap-6 items-center">
      <img
        class="w-14 h-14 object-cover rounded-full"
        :src="`/gallery/portrait-and-book/${title}/web-1.jpg`"
      />
      <h3>{{ formatedTitle }}</h3>
    </div>
    <Icon :name="`mingcute:${opened ? 'down' : 'right'}-fill`" class="w-8 h-8" />
  </div>
  <Divider />
  <div v-if="opened" class="grid grid-cols-3 bg-black">
    <img
      v-for="image in images"
      class="object-cover aspect-square cursor-pointer"
      :src="`/gallery/portrait-and-book/${title}/web-${image}.jpg`"
      @click="selectImage(image)"
    />
  </div>
  <Divider v-if="opened" />
  <div
    @click="showSelectedImage = false"
    class="fixed top-0 flex justify-center bg-black/80 h-full w-full"
    v-if="showSelectedImage"
  >
    <img
      class="object-cover m-auto p-4 max-h-full"
      :src="`/gallery/portrait-and-book/${title}/web-${selectedImage}.jpg`"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  images: number;
  openedByDefault: boolean;
}
const props = defineProps<Props>();

const opened = ref(props.openedByDefault || false);
const showSelectedImage = ref(false);
const selectedImage = ref(1);

const toggleDropdown = () => {
  opened.value = !opened.value;
};

const selectImage = (image: number) => {
  selectedImage.value = image;
  showSelectedImage.value = true;
};

const formatedTitle = computed(() => {
  return props.title
    .split("-")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
});
</script>

<style scoped></style>
