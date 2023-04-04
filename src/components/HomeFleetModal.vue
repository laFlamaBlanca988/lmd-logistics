<template>
  <div
    class="fixed left-0 right-0 top-[88px] bottom-[88px] z-50 m-auto w-[90%] animate-fadeIn overflow-y-auto rounded-xl bg-white p-6"
  >
    <div class="relative flex flex-col gap-10">
      <Icon
        @click="globalStore.fleetModalIsActive = false"
        icon="ph:x-circle-bold"
        class="absolute -top-5 -right-6 z-50 h-[40px] w-[40px] cursor-pointer rounded-full bg-white text-[#DFE6F0] md:h-[50px] md:w-[50px]"
      ></Icon>

      <div
        class="flex flex-col items-center gap-8 rounded-xl bg-[#DFE6F0] p-3 xl:flex-row xl:justify-start"
      >
        <img
          :src="imageUrl"
          class="h-[200px] w-[300px] md:pl-4 xl:-mt-6 xl:h-[250px] xl:w-[350px]"
        />
        <div class="flex flex-col">
          <h4 class="mb-4 text-start text-2xl text-main-blue">
            {{ model }}
          </h4>
          <p class="mb-4 text-start text-2xl font-bold md:text-3xl xl:text-4xl">
            {{ modelTitle }}
          </p>
          <p class="text-start text-base md:text-xl xl:text-2xl">
            {{ modelDescription }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div
            class="w-3/6 text-base font-medium text-main-blue md:text-xl xl:text-2xl"
          >
            Year:
          </div>
          <div class="w-3/6 text-base font-medium md:text-xl xl:text-2xl">
            {{ year }}
          </div>
        </div>

        <div class="flex h-[60px] items-center rounded-lg bg-white px-4">
          <div
            class="w-3/6 text-base font-medium text-main-blue md:text-xl xl:text-2xl"
          >
            Horsepower:
          </div>
          <div class="w-3/6 text-base font-medium md:text-xl xl:text-2xl">
            {{ horsepower }}
          </div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div
            class="w-3/6 text-base font-medium text-main-blue md:text-xl xl:text-2xl"
          >
            Engine model:
          </div>
          <div class="w-3/6 text-base font-medium md:text-xl xl:text-2xl">
            {{ engineModel }}
          </div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-white px-4">
          <div
            class="w-3/6 text-base font-medium text-main-blue md:text-xl xl:text-2xl"
          >
            Transmission:
          </div>
          <div class="w-3/6 text-base font-medium md:text-xl xl:text-2xl">
            {{ transmission }}
          </div>
        </div>
        <div class="flex h-[60px] items-center rounded-lg bg-[#dfe6f080] px-4">
          <div
            class="w-3/6 text-base font-medium text-main-blue md:text-xl xl:text-2xl"
          >
            Sleeper size:
          </div>
          <div class="w-3/6 text-base font-medium md:text-xl xl:text-2xl">
            {{ sleeperSize }}
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-between gap-6 lg:flex-row lg:px-4"
      >
        <div class="text-center text-base md:text-2xl lg:text-left">
          {{ footerText }}
        </div>
        <a
          target="_blank"
          href="https://intelliapp.driverapponline.com/c/lmdlogisticsinc?uri_b=ia_lmdlogisticsinc_467948023"
          class="relative flex w-full items-center justify-center gap-2 rounded-lg bg-main-red p-4 px-6 text-white hover:bg-button-hover lg:w-[200px]"
          >Start Driving
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="absolute right-[1%] flex items-center"
          ></Icon>
        </a>
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
