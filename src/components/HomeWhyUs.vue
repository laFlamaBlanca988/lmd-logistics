<template>
  <div
    class="flex h-auto w-full flex-col items-center bg-cover bg-fixed bg-center pb-20"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <div
      class="relative flex justify-center md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
    >
      <h1
        class="text-center text-6xl font-black italic text-white opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
      >
        WHY US
      </h1>
      <h4
        class="absolute bottom-0 text-center text-xl font-extrabold italic text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
      >
        WHY US
      </h4>
    </div>
    <p class="mb-10 text-2xl text-white">
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
<style></style>
