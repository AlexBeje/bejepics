<script lang="ts" setup></script>

<template>
  <div class="flex flex-col absolute inset-0 max-w-[600px] mx-auto">
    <div class="overflow-hidden">
      <Header />
      <Divider />
    </div>
    <div class="bg-grayDark text-white overflow-hidden flex-1">
      <slot />
    </div>
    <div class="overflow-hidden">
      <Divider />
      <Menu />
    </div>
  </div>
</template>

<style scoped></style>
