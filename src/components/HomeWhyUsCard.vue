<template>
  <div
    class="mx-4 flex h-[303px] flex-col items-center justify-center rounded-2xl border-2 text-white"
  >
    <div>
      <img class="h-[100px]" :src="backgroundImage" />
    </div>
    <div
      class="flex h-[45%] flex-col items-center justify-center gap-2 rounded-b-2xl"
    >
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <Icon
        icon="mdi:horizontal-line"
        class="h-[3px] w-[37px] rounded-lg bg-white"
      />
      <p class="px-6 text-center text-sm">{{ description }}</p>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

defineProps(["backgroundImage", "title", "description"]);
</script>
