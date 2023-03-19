<template>
  <div class="my-14 flex h-auto w-full justify-between gap-14 px-14">
    <div class="flex h-full w-auto items-center">
      <img class="m-auto h-full w-auto" :src="aboutUsImage" />
    </div>
    <div class="mt-16 flex w-3/6 flex-col gap-6">
      <div class="mb-8 flex flex-col gap-6">
        <div
          class="relative md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
        >
          <h1
            class="text-6xl font-black italic text-main-blue opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
          >
            ABOUT US
          </h1>
          <h4
            class="absolute bottom-0 text-xl font-extrabold italic text-main-blue md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          >
            ABOUT US
          </h4>
        </div>
        <div>
          <p class="text-3xl font-bold">OUT TEAM NEVER SLEEPS!</p>
          <p class="mb-3 w-[80%] text-2xl">
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
        <p class="max-w-[60%] text-xl">
          We recognizes that our clients are at the heart of everything we do,
          and we prioritize their needs above all else
        </p>
        <carousel
          :items-to-show="4"
          :wrap-around="true"
          snap-align="start"
          id="custom-swiper"
          class="w-[70%]"
        >
          <slide v-for="image in images" :key="image" class="custom-slide">
            <div
              class="h-[119px] w-full bg-cover bg-center bg-no-repeat"
              :style="{ 'background-image': `url(${image.path})` }"
            ></div>
          </slide>
          <template #addons>
            <navigation />
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
<style></style>
