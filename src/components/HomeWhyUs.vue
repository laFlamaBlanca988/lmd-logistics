<template>
  <div
    class="flex flex-col items-center w-full h-auto pb-20 bg-center bg-cover bg-fixed"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <h1 class="italic font-black text-9xl text-white opacity-50 translate-y-14">
      WHY US
    </h1>
    <h3 class="text-6xl text-white font-bold italic mb-4">WHY US</h3>
    <p class="text-2xl mb-10 text-white">
      What our partners and satisfied customers say about our work
    </p>
    <div class="w-full px-[8%]">
      <Carousel
        :items-to-show="4"
        :wrap-around="true"
        :items-to-scroll="1"
        :breakpoints="breakpoints"
        snap-align="center"
      >
        <Slide v-for="card in whyUsCards" :key="card">
          <HomeWhyUsCard
            class="carousel__item"
            :title="card.title"
            :description="card.description"
            :background-image="card.backgroundImage"
          ></HomeWhyUsCard>
        </Slide>
        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive } from "vue";
import backgroundImage from "@/assets/images/bg-why-us.jpg";
import HomeWhyUsCard from "./HomeWhyUsCard.vue";
// import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useGlobalStore } from "../stores/global";
const globalStore = useGlobalStore();
const whyUsCards = computed(() => globalStore.whyUsCards);

let breakpoints = reactive({
  // 700px and up
  360: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  940: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1402: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1864: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>
<style>
.carousel {
  /* background: red !important; */
}
.carousel__pagination-button {
  height: 30px;
  border-radius: 50% !important;
  border: 1px solid #244088;
  border-color: red !important;
}
.carousel__pagination-button::after {
  border-radius: 50% !important;
  border: 2px !important;
  border-color: white !important;
  color: red !important;
  background: #f2f7fb;
}
</style>
