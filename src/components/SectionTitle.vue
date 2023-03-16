<template>
  <div class="relative flex flex-col w-full items-center">
    <div
      class="absolute -top-10 flex items-end h-full text-9xl font-bold text-main-blue italic opacity-10"
    >
      {{ shadowTitle }}
    </div>
    <div
      class="flex items-end mb-4 h-full text-7xl font-bold text-main-blue italic"
    >
      {{ mainTitle }}
    </div>
    <div class="text-2xl">
      {{ paragraph }}
    </div>
  </div>
</template>
<script setup>
defineProps(["mainTitle", "shadowTitle", "paragraph"]);
</script>
