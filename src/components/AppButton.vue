<template>
  <RouterLink
    :to="url"
    class="bg-main-red p-4 flex items-center justify-center gap-2 text-white rounded-lg"
    >{{ content }}
    <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
  </RouterLink>
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps(["content", "url"]);
</script>
