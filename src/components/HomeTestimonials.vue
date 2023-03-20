<template>
  <div class="flex flex-col pb-20">
    <div class="mb-20 flex flex-col items-center justify-center gap-4">
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <div
          class="relative flex w-full items-center justify-center md:h-[96pxpx] lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
        >
          <h1
            class="text-center text-[40px] font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
          >
            TESTIMONIALS
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            TESTIMONIALS
          </h1>
        </div>
      </div>
      <p class="mb-10 text-3xl">
        What our partners and satisfied customers say about our work
      </p>
    </div>
    <div class="px-[10%]">
      <carousel
        :items-to-show="3"
        :wrap-around="true"
        :breakpoints="breakpoints"
        snap-align="start"
        class="overflow-visible"
      >
        <slide v-for="testimonial in testimonials" :key="testimonial">
          <HomeTestimonial
            class="z-50"
            :name="testimonial.name"
            :title="testimonial.title"
            :description="testimonial.description"
            :img-url="testimonial.imageUrl"
          ></HomeTestimonial>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import HomeTestimonial from "./HomeTestimonial.vue";

import image_1 from "@/assets/images/testimonials-img-1.png";

const testimonials = ref([
  {
    name: "John Doe",
    title: "CEO of Logistics Inc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: image_1,
  },
  {
    name: "John Doe",
    title: "Driver",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: image_1,
  },
  {
    name: "John Doe",
    title: "CEO of Logistics Inc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    imageUrl: image_1,
  },
]);
let breakpoints = reactive({
  // 700px and up
  320: {
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
});
</script>
<style></style>
