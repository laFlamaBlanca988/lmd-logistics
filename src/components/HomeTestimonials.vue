<template>
  <div class="flex flex-col pb-20">
    <div class="flex flex-col justify-center items-center mb-20">
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
    <Swiper
      :slides-per-view="4"
      :modules="[Pagination]"
      :loop="true"
      :pagination="true"
      :space-between="50"
      pagination="true"
      class="flex testimonials-swiper"
    >
      <SwiperSlide
        v-for="testimonial in testimonials"
        :key="testimonial"
        class="testimonials-slide"
      >
        <HomeTestimonial
          :name="testimonial.name"
          :title="testimonial.title"
          :description="testimonial.description"
          :img-url="testimonial.imageUrl"
        ></HomeTestimonial>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

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
<style>
.testimonials-swiper,
.swiper {
  width: 100% !important;
  margin-right: 0 !important;
  margin-right: 0 !important;
}
.testimonials-swiper,
.swiper-wrapper {
  display: flex !important;
  justify-content: space-between !important;
  width: 100% !important;
  overflow: visible;
  gap: 4rem !important;
}

.testimonials-slide,
.swiper-slide {
  overflow: visible;
  width: 500px;
}
</style>
