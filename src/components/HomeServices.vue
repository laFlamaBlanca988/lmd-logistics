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
      <carousel :items-to-show="4" class="w-[120%]">
        <slide
          v-for="slide in caoruselData"
          :key="slide"
          class="relative w-[230px] h-[200px] z-10"
        >
          <img :src="slide.url" class="rounded-xl" />
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
    <!-- <div
      class="absolute right-10 z-0 w-[50%] h-full bg-cover bg-no-repeat"
      :style="{ 'background-image': `url(${truckDriver_3})` }"
    ></div> -->
    <div class="flex items-center h-full w-auto">
      <img class="w-auto h-full m-auto" :src="truckDriver_3" />
    </div>
  </div>
</template>
<script setup>
import AppButton from "./AppButton.vue";
import fleetTruck_1 from "@/assets/images/fleetTruck_1.svg";
import "vue3-carousel/dist/carousel.css";
import truckDriver_3 from "@/assets/images/truck-driver-3.png";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const caoruselData = [
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
  { url: fleetTruck_1 },
];
</script>
<style scoped>
.carousel__track {
  justify-content: space-between;
}
.carousel__slide {
  width: 230px;
}
</style>
