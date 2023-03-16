<template>
  <div
    class="fixed left-0 right-0 top-[88px] bottom-[88px] m-auto p-6 w-[90%] bg-white z-50 rounded-xl overflow-y-auto"
  >
    <div class="relative flex flex-col gap-10">
      <Icon
        @click="globalStore.fleetModalIsActive = false"
        icon="ph:x-circle-bold"
        class="absolute -top-5 -right-6 w-[50px] h-[50px] text-[#DFE6F0] rounded-full bg-white z-50 cursor-pointer"
      ></Icon>

      <div class="flex justify-start gap-8 p-3 bg-[#DFE6F0] rounded-xl">
        <img :src="imageUrl" class="h-[250px] -mt-6 pl-4" />
        <div class="flex flex-col">
          <h4 class="mb-4 text-start text-2xl text-main-blue">
            {{ model }}
          </h4>
          <p class="mb-4 text-start text-4xl font-bold">
            {{ modelTitle }}
          </p>
          <p class="text-2xl text-start">{{ modelDescription }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center px-4 h-[60px] bg-[#dfe6f080] rounded-lg">
          <div class="w-3/6 text-2xl font-medium text-main-blue">Year:</div>
          <div class="w-3/6 text-2xl font-medium">{{ year }}</div>
        </div>

        <div class="flex items-center px-4 h-[60px] bg-white rounded-lg">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Horsepower:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ horsepower }}</div>
        </div>
        <div class="flex items-center px-4 h-[60px] bg-[#dfe6f080] rounded-lg">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Engine model:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ engineModel }}</div>
        </div>
        <div class="flex items-center px-4 h-[60px] bg-white rounded-lg">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Transmission:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ transmission }}</div>
        </div>
        <div class="flex items-center px-4 h-[60px] bg-[#dfe6f080] rounded-lg">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Sleeper size:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ sleeperSize }}</div>
        </div>
      </div>
      <div class="flex justify-between items-center px-4">
        <div class="text-2xl">{{ footerText }}</div>
        <AppButton
          content="Start Driving"
          url="#"
          class="w-[200px]"
        ></AppButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import AppButton from "./AppButton.vue";
import { useGlobalStore } from "../stores/global";
const globalStore = useGlobalStore();
defineProps([
  "imageUrl",
  "model",
  "modelTitle",
  "modelDescription",
  "year",
  "horsepower",
  "engineModel",
  "transmission",
  "sleeperSize",
  "footerText",
]);
</script>
