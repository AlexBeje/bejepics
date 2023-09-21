<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
/** Variables **/
const route = useRoute();
const indexRoute = ref(route.path === "/");

/** onCreated Lifecycle **/
const onCreated = () => {
  if (indexRoute.value) return setPageLayout("white");
};
onCreated();

/** onMounterd Lifecycle **/
onMounted(() => {
  if (indexRoute.value) {
    window.location.href = "https://www.instagram.com/beje.pics/";
  }
});
</script>
