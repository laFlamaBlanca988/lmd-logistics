<template>
  <div
    class="fixed left-0 right-0 top-[88px] bottom-[88px] z-50 m-auto w-[90%] animate-fadeIn overflow-y-auto rounded-xl bg-white p-6"
  >
    <div class="relative flex flex-col gap-10">
      <Icon
        @click="globalStore.fleetModalIsActive = false"
        icon="ph:x-circle-bold"
        class="absolute -top-5 -right-6 z-50 h-[50px] w-[50px] cursor-pointer rounded-full bg-white text-[#DFE6F0]"
      ></Icon>

      <div
        class="flex flex-col items-center gap-8 rounded-xl bg-[#DFE6F0] p-3 xl:justify-start"
      >
        <img :src="imageUrl" class="w h-[250px] w-[320px] pl-4 xl:-mt-6" />
        <div class="flex flex-col">
          <h4 class="mb-4 text-start text-2xl text-main-blue">
            {{ model }}
          </h4>
          <p class="mb-4 text-start text-4xl font-bold">
            {{ modelTitle }}
          </p>
          <p class="text-start text-2xl">{{ modelDescription }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div class="w-3/6 text-2xl font-medium text-main-blue">Year:</div>
          <div class="w-3/6 text-2xl font-medium">{{ year }}</div>
        </div>

        <div class="flex h-[60px] items-center rounded-lg bg-white px-4">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Horsepower:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ horsepower }}</div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Engine model:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ engineModel }}</div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-white px-4">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Transmission:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ transmission }}</div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div class="w-3/6 text-2xl font-medium text-main-blue">
            Sleeper size:
          </div>
          <div class="w-3/6 text-2xl font-medium">{{ sleeperSize }}</div>
        </div>
      </div>
      <div class="flex items-center justify-between px-4">
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
