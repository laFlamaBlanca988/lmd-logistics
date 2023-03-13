<template>
  <div class="relative flex flex-col gap-4 pt-60 mb-40 pl-[8%]">
    <h4 class="text-6xl text-main-blue font-bold italic">OUR SERVICES</h4>
    <p class="text-2xl w-[50%]">
      We provide reliable and efficient solutions for all our customers
      logistics needs to help customers cut costs and increase efficiency.
    </p>

    <AppButton url="#" content="Find Out More" class="w-[240px]"></AppButton>
    <h1
      class="absolute top-[160px] italic font-black text-9xl text-main-blue opacity-10"
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
    <carousel :items-to-show="4" class="w-[50%]">
      <slide
        v-for="slide in caoruselData"
        :key="slide"
        class="w-[230px] h-[200px]"
      >
        <img :src="slide.url" class="rounded-xl" />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
    <img
      class="absolute top-[100px] right-0 -z-10 w-[50%] h-auto"
      :src="truckDriver_3"
    />
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
];
</script>
<style scoped>
.carousel {
  width: 50%;
}
.carousel__slide {
  width: 230px;
}
</style>
