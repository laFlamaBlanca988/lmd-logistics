<template>
  <div class="flex pl-[8%] h-auto mb-40">
    <div class="flex flex-col mt-20">
      <div class="font-black text-main-red xl:text-7xl 2xl:text-9xl italic">
        LOAD.MOVE.
      </div>
      <div class="font-black text-main-red xl:text-7xl 2xl:text-9xl italic">
        DELIVER.
      </div>
      <div
        class="flex items-center text-black font-semibold text-5xl leading-[72px]"
      >
        <h3>FAST</h3>
        <Icon icon="material-symbols:star" class="w-[22px] h-[22px]"></Icon>
        <h3>RELIABLE</h3>
        <Icon icon="material-symbols:star" class="w-[22px] h-[22px]"></Icon>
        <h3>REFINED</h3>
      </div>
      <p class="text-2xl leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="flex items-center gap-6 mt-8 font-semibold">
        <AppButton url="#" content="Give Us A Call"></AppButton>
        <RouterLink to="#" class="text-black">Drive With Us</RouterLink>
      </div>
    </div>
    <HomeTruckDriver_1></HomeTruckDriver_1>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import HomeTruckDriver_2 from "../components/HomeTruckDriver_2.vue";
import basedInUsa from "@/assets/images/based_in_usa.svg";
import HomeTruckDriver_1 from "./HomeTruckDriver_1.vue";
import AppButton from "./AppButton.vue";
</script>
