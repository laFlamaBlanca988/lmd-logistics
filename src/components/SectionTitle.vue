<template>
  <div class="relative flex w-full flex-col items-center">
    <div
      class="absolute -top-10 flex h-full items-end text-7xl font-bold italic text-main-blue opacity-10"
    >
      {{ shadowTitle }}
    </div>
    <div
      class="mb-4 flex h-full items-end text-6xl font-bold italic text-main-blue"
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
