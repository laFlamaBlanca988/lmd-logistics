<template>
  <div class="flex h-screen justify-between pl-[8%]">
    <div
      class="mt-[8%] flex w-3/6 flex-col gap-4 lg:justify-start lg:gap-3 3xl:pb-28"
    >
      <div>
        <div>
          <div
            class="animate-[slideFromLeft_1s_ease] font-black italic text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
          >
            LOAD.MOVE.
          </div>
          <div
            class="animate-[slideFromLeft_2s_ease] font-black italic text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
          >
            DELIVER.
          </div>
        </div>
      </div>
      <div
        class="flex items-center font-semibold leading-[72px] text-black lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
      >
        <h3 class="mr-2">FAST</h3>
        <Icon
          icon="material-symbols:star"
          class="mr-3 h-[22px] w-[22px] text-main-blue"
        ></Icon>
        <h3 class="mr-3">RELIABLE</h3>
        <Icon
          icon="material-symbols:star"
          class="mr-3 h-[22px] w-[22px] text-main-blue"
        ></Icon>
        <h3>REFINED</h3>
      </div>
      <p class="leading-9 lg:text-lg xl:text-xl 2xl:text-2xl">
        Our vision is to be the leading cargo transportation and logistics
        company, recognized for our excellence in service, innovation, and
        commitment.
      </p>
      <div class="mt-2 flex items-center gap-6 font-semibold">
        <button
          @click="makePhoneCall"
          class="relative flex items-center justify-center gap-2 rounded-lg bg-main-red p-4 px-6 text-white hover:bg-button-hover"
        >
          Give Us A Call
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="absolute right-[1%] flex items-center"
          ></Icon>
        </button>
        <a
          target="_blank"
          href="https://intelliapp.driverapponline.com/c/lmdlogisticsinc?uri_b=ia_lmdlogisticsinc_467948023"
          class="text-black"
          >Drive With Us</a
        >
      </div>
    </div>

    <HomeTruckDriver_1 class="h-[calc(100%-160px)]"></HomeTruckDriver_1>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import HomeTruckDriver_1 from "./HomeTruckDriver_1.vue";
const makePhoneCall = () => {
  window.location.href = "tel:7087018175";
};
</script>
<style scoped></style>
