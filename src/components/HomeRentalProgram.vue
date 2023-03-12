<template>
  <div class="flex justify-start gap-10">
    <HomeTruckDriver_2></HomeTruckDriver_2>
    <div class="relative flex flex-col gap-4 w-[40%] pt-60">
      <h4 class="text-6xl text-main-blue font-bold italic">
        OUR AWARD WINNING RENTAL PROGRAM
      </h4>
      <p>
        Get all the benefits owners have but spare yourself from all the hassle
        owners have!
      </p>
      <div class="flex items-center gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="w-[65px] h-[65px] bg-white text-main-blue"
        ></Icon>
        <p class="text-black text-2xl font-bold">
          Drive a well maintained truck
        </p>
      </div>
      <div class="flex items-center gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="w-[65px] h-[65px] bg-white text-main-blue"
        ></Icon>
        <p class="text-black text-2xl font-bold">Make $2,300 - $4,700/week</p>
      </div>
      <div class="flex items-center gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="w-[65px] h-[65px] bg-white text-main-blue"
        ></Icon>
        <p class="text-black text-2xl font-bold">
          Don't worry about maintenance
        </p>
      </div>
      <div class="flex gap-4">
        <RouterLink
          to="#"
          class="flex items-center justify-center w-[240px] bg-white p-4 gap-2 text-main-red border border-main-red rounded-lg"
          >Sign Up
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="text-main-red"
          ></Icon>
        </RouterLink>
        <RouterLink
          to="#"
          class="flex items-center justify-center w-[240px] bg-main-red per gap-2 text-white rounded-lg"
          >Give Us A Call
          <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
        </RouterLink>
      </div>
      <h1
        class="absolute top-[160px] italic font-black text-9xl text-main-blue opacity-10"
      >
        WINNING
      </h1>
    </div>
  </div>
  <!-- <div class="min-h-[300px]">sadfsdafdfsdfs</div> -->
</template>
<script setup>
import { Icon } from "@iconify/vue";
import HomeTruckDriver_2 from "./HomeTruckDriver_2.vue";
</script>
