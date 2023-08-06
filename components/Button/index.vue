<template>
  <a :href="link" target="_blank">
    <button
      :class="`font-teko max-w-fit rounded-md 
      ${withPadding && 'pt-2 pb-1 px-6'}
      ${backgroundColor ? backgroundColor : 'bg-white'}
      ${customClass}`"
    >
      <span class="text-2xl text-black">
        <slot />
      </span>
    </button>
  </a>
</template>

<script setup lang="ts">
interface Props {
  link?: string;
  withPadding?: boolean;
  customClass?: string;
  backgroundColor?: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
