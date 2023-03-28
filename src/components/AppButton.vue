<template>
  <RouterLink
    :to="url"
    class="relative flex items-center justify-center gap-2 rounded-lg bg-main-red p-4 text-white hover:bg-button-hover"
    >{{ content }}
    <Icon
      icon="material-symbols:arrow-forward-ios-rounded"
      class="absolute right-[1%] flex items-center"
    ></Icon>
  </RouterLink>
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps(["content", "url"]);
</script>
