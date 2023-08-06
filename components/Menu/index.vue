<template>
  <div class="bg-black flex h-12 text-white w-full px-2">
    <MenuItem
      v-for="{ id, name, disabled, route, localRoute } in MenuItemData"
      :id="id"
      :name="name"
      :disabled="disabled"
      :route="route"
      :localRoute="localRoute"
    />
  </div>
</template>

<script lang="ts" setup>
import MenuItemData from "./data.json";
</script>
