<template>
  <div
    class="mb-14 flex flex-col items-center justify-center gap-10 px-[5%] md:flex-row md:justify-start md:px-[3%] xl:gap-20"
  >
    <HomeTruckDriver_2></HomeTruckDriver_2>
    <div
      class="relative mt-4 flex w-full flex-col justify-center gap-2 md:pt-14 lg:w-[40%] lg:gap-4"
    >
      <!-- <Transition name="rental-text"> -->
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <div
          class="relative flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            WINNING
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            OUR AWARD WINNING
          </h1>
        </div>
      </div>
      <p class="my-4 text-lg xl:text-2xl">
        Get all the benefits owners have but spare yourself from all the hassle
        owners have!
      </p>

      <!-- </Transition> -->

      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-sm font-bold text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Drive a well maintained truck
        </p>
      </div>
      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px]w-[40px] h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-sm font-bold text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Make $2,300 - $4,700/week
        </p>
      </div>
      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-sm font-bold text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Don't worry about maintenance
        </p>
      </div>
      <div class="mt-4 flex flex-col gap-3 md:gap-4 lg:flex-row">
        <RouterLink
          to="#"
          class="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-main-red bg-white text-main-red xl:h-[57px] xl:w-[240px]"
          >Sign Up
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="text-main-red"
          ></Icon>
        </RouterLink>
        <RouterLink
          to="#"
          class="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-main-red text-white xl:h-[57px] xl:w-[240px]"
          >Give Us A Call
          <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import HomeTruckDriver_2 from "./HomeTruckDriver_2.vue";
</script>
<style scoped></style>
