<template>
  <div class="flex flex-col h-[303px] mx-4">
    <div
      class="w-full h-[55%] bg-center bg-no-repeat bg-cover rounded-t-2xl"
      :style="{ 'background-image': `url(${backgroundImage})` }"
    ></div>
    <div
      class="flex flex-col items-center justify-center gap-3 h-[45%] bg-white rounded-b-2xl"
    >
      <h3 class="text-main-red text-xl font-bold">{{ title }}</h3>
      <Icon
        icon="mdi:horizontal-line"
        class="w-[37px] bg-black h-[3px] rounded-lg"
      />
      <p class="px-6 text-center text-sm text-black">{{ description }}</p>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";

defineProps(["backgroundImage", "title", "description"]);
</script>
