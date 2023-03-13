<template>
  <div class="flex flex-col w-[375px] h-[303px]">
    <div
      class="w-full h-3/6 bg-center bg-no-repeat bg-cover"
      :style="{ 'background-image': `url(${backgroundImage})` }"
    ></div>
    <div
      class="flex flex-col items-center justify-center gap-3 h-3/6 bg-white rounded-b-lg"
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
