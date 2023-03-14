<template>
  <div class="relative flex min-h-[1000px] pl-[8%] pr-20">
    <div class="flex flex-col gap-4 w-[50%] pt-40 z-50">
      <h4 class="text-6xl text-main-blue font-bold italic">OUR SERVICES</h4>
      <p class="text-2xl w-[50%]">
        We provide reliable and efficient solutions for all our customers
        logistics needs to help customers cut costs and increase efficiency.
      </p>

      <AppButton url="#" content="Find Out More" class="w-[240px]"></AppButton>
      <h1
        class="absolute top-[80px] italic font-black text-9xl text-main-blue opacity-10"
      >
        SERVICES
      </h1>
      <h4 class="mt-[100px] mb-10 text-6xl text-main-blue font-bold italic">
        OUR FLEET
      </h4>
      <h1
        class="absolute top-[475px] italic font-black text-9xl text-main-blue opacity-10"
      >
        FLEET
      </h1>
      <div>
        <swiper
          :slides-per-view="4"
          :modules="[Pagination]"
          :loop="true"
          :pagination="true"
          :space-between="50"
          pagination="true"
          class="default-slider"
        >
          <swiper-slide
            v-for="slide in caoruselData"
            :key="slide"
            class="relative z-10"
          >
            <img :src="slide.url" class="rounded-xl" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="flex items-center h-full w-auto">
      <img class="w-auto h-full m-auto" :src="truckDriver_3" />
    </div>
  </div>
</template>
<script setup>
import AppButton from "./AppButton.vue";
import fleetTruck_1 from "@/assets/images/fleetTruck_1.svg";
import truckDriver_3 from "@/assets/images/truck-driver-3.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

const caoruselData = [
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
];
</script>
<style>
.default-slider {
  /* overflow: visible; */
  height: 200px !important;
}
.default-slider .swiper-wrapper {
  display: flex !important;
  justify-content: space-between !important;
  width: 100% !important;
  /* overflow: visible; */
  height: 100% !important;
  gap: 4rem !important;
}
.default-slider .swiper-slide {
  display: flex;
  justify-content: center;

  margin-right: 0 !important;
  width: 150px !important;
}
</style>
