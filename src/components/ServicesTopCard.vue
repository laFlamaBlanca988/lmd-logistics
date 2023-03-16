<template>
  <div class="flex flex-col w-[470px] h-[550px] shadow-xl rounded-b-xl">
    <div
      class="w-full h-[55%] bg-center bg-no-repeat bg-cover rounded-t-2xl"
      :style="{ 'background-image': `url(${backgroundImage})` }"
    ></div>
    <div
      class="flex flex-col items-start justify-start p-4 gap-3 h-[45%] bg-white rounded-b-2xl"
    >
      <h3 class="text-main-blue text-2xl font-extrabold italic">{{ title }}</h3>

      <p class="text-left text-lg text-black">{{ description }}</p>
    </div>
    <div class="flex justify-end p-2">
      <Icon
        icon="material-symbols:check-circle-outline"
        class="text-main-red w-[30px] h-[30px]"
      />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps(["backgroundImage", "title", "description"]);
</script>
