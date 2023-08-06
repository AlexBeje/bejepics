<template>
  <NuxtLink
    :to="localRoute"
    :href="route"
    :target="route && '_blank'"
    class="flex flex-1 h-full justify-center py-2 w-full"
  >
    <Icon
      :class="`h-full w-full ${
        disabled ? 'cursor-not-allowed text-grayLight' : 'cursor-pointer'
      }`"
      :name="`mingcute:${name}-${state}`"
    />
  </NuxtLink>
</template>

<style scoped></style>

<script lang="ts" setup>
import { useSelectedMenuItemStore } from "@/stores/selectedMenuItem";

interface Props {
  id: number;
  name: string;
  disabled: boolean;
  route?: string;
  localRoute?: string;
}

const props = defineProps<Props>();

const { selectedMenuItem } = storeToRefs(useSelectedMenuItemStore());

const state = computed(() => {
  return props.id === selectedMenuItem.value ? "fill" : "line";
});
</script>
