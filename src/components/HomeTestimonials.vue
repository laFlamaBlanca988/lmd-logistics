<template>
  <div class="flex flex-col pb-20">
    <div class="mb-20 flex flex-col items-center justify-center gap-4">
      <div
        class="relative flex justify-center md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
      >
        <h1
          class="text-center text-6xl font-black italic text-main-blue opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
        >
          TESTIMONIALS
        </h1>
        <h4
          class="absolute bottom-0 text-center text-xl font-extrabold italic text-main-blue md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          TESTIMONIALS
        </h4>
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

import image_1 from "@/assets/images/testimonials-businessman-1.svg";
import image_3 from "@/assets/images/testimonials-businessman-3.svg";

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
    imageUrl: image_3,
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
});
</script>
<style></style>
