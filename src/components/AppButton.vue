<template>
  <RouterLink
    :to="url"
    class="flex items-center justify-between gap-2 rounded-lg bg-main-red p-4 text-white hover:bg-button-hover"
    >{{ content }}
    <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
  </RouterLink>
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps(["content", "url"]);
</script>
