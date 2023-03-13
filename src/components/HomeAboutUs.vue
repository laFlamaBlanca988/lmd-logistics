<template>
  <div class="flex w-full h-auto min-h-[1000px]">
    <div
      class="w-3/6 bg-cover bg-center"
      :style="{ 'background-image': `url(${aboutUsImage})` }"
    ></div>
    <div class="flex flex-col w-3/6 gap-6">
      <div class="flex flex-col gap-6 mb-8">
        <h1
          class="italic font-black text-9xl text-main-blue opacity-10 translate-y-14"
        >
          ABOUT US
        </h1>
        <h4 class="text-6xl text-main-blue font-bold italic">ABOUT US</h4>
        <div>
          <p class="text-3xl font-bold">OUT TEAM NEVER SLEEPS!</p>
          <p class="text-2xl w-[80%]">
            We are constantly working on resolving your logistical problems!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <AppButton
          url="#"
          content="Find Out More"
          class="w-[240px]"
        ></AppButton>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="text-4xl font-bold italic">OUR PARTNERS</h4>
        <p class="text-xl max-w-[60%]">
          We recognizes that our clients are at the heart of everything we do,
          and we prioritize their needs above all else
        </p>
        <carousel
          :items-to-show="4"
          class="flex flex-col justify-start w-[675px] -translate-x-4"
        >
          <slide v-for="image in images" :key="image">
            <div
              class="w-full h-[119px] bg-cover bg-no-repeat bg-center"
              :style="{ 'background-image': `url(${image.path})` }"
            ></div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import aboutUsImage from "@/assets/images/about-us-image.png";
import AppButton from "./AppButton.vue";
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import image_1 from "@/assets/images/about-us-partners-1.png";
import image_2 from "@/assets/images/about-us-partners-2.png";
import image_3 from "@/assets/images/about-us-partners-3.png";
import image_4 from "@/assets/images/about-us-partners-4.png";
const images = ref([
  {
    path: image_1,
  },
  {
    path: image_2,
  },
  {
    path: image_3,
  },
  {
    path: image_4,
  },
]);
</script>
<style scoped>
/* .carousel__slide {
  display: flex;
  justify-content: flex-start;
} */
.carousel__slide {
  width: 169px !important;
}
</style>
