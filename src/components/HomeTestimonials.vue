<template>
  <div class="flex flex-col">
    <div class="flex flex-col justify-center items-center">
      <h1
        class="italic font-black text-9xl text-main-blue opacity-10 translate-y-14"
      >
        TESTIMONIALS
      </h1>
      <h3 class="text-6xl text-main-blue font-bold italic mb-4">
        TESTIMONIALS
      </h3>
      <p class="text-2xl mb-10">
        What our partners and satisfied customers say about our work
      </p>
    </div>
    <carousel :items-to-show="3" class="flex flex-col">
      <slide v-for="testimonial in testimonials" :key="testimonial">
        <HomeTestimonial
          :name="testimonial.name"
          :title="testimonial.title"
          :description="testimonial.description"
          :img-url="testimonial.imageUrl"
        ></HomeTestimonial>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import image_1 from "@/assets/images/testimonials-businessman-1.svg";
import image_3 from "@/assets/images/testimonials-businessman-3.svg";

import HomeTestimonial from "./HomeTestimonial.vue";
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
</script>
<style scoped>
.carousel {
  margin: auto;
}
</style>
