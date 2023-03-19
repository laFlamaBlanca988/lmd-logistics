<template>
  <div
    class="mb-40 flex flex-col justify-center gap-20 bg-cover bg-fixed bg-center py-32 text-white"
    :style="{ 'background-image': `url(${parallax})` }"
  >
    <div
      class="relative flex w-full items-center justify-center md:h-[60px] lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
    >
      <h1
        class="text-center text-6xl font-black italic opacity-20 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
      >
        TEAM
      </h1>
      <h1
        class="absolute bottom-0 block text-2xl font-extrabold italic xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
      >
        OUR TEAM
      </h1>
    </div>
    <div class="flex w-full flex-col items-center justify-center text-2xl">
      <p class="mb-4 text-4xl font-medium">
        We are constantly working on resolving your logistical problems!
      </p>
      <p>
        We are proud that our Team members covers Dispatch, Safety,Maintenance,
      </p>
      <p>Accounting and recruiting department.</p>
    </div>
    <div class="flex justify-center gap-6">
      <div
        class="flex h-[200px] w-[20%] flex-col items-center justify-center gap-4"
      >
        <h1 class="text-6xl font-extrabold">23</h1>
        <div class="flex w-[50%] items-center justify-center">
          <h4 class="text-center text-2xl">Dedicated Team members</h4>
        </div>
      </div>
      <div
        class="flex h-[200px] w-[20%] flex-col items-center justify-center gap-4"
      >
        <h1 class="text-6xl font-extrabold">85</h1>
        <div class="flex w-[50%] items-center justify-center">
          <h4 class="text-center text-2xl">Vehicles in Our Fleet</h4>
        </div>
      </div>
      <div
        class="flex h-[200px] w-[20%] flex-col items-center justify-center gap-4"
      >
        <h1 class="text-6xl font-extrabold">2128</h1>
        <div class="flex w-[50%] items-center justify-center">
          <h4 class="text-center text-2xl">Number of Shipments</h4>
        </div>
      </div>
      <div
        class="flex h-[200px] w-[20%] flex-col items-center justify-center gap-4"
      >
        <h1 class="text-6xl font-extrabold">97%</h1>
        <div class="flex w-[50%] items-center justify-center">
          <h4 class="text-center text-2xl">On-Time Delivery Rate</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import HomeTestimonial from "./HomeTestimonial.vue";
import image_1 from "@/assets/images/testimonials-businessman-1.svg";
import image_3 from "@/assets/images/testimonials-businessman-3.svg";
import { ref } from "vue";
import SectionTitle from "./SectionTitle.vue";
import parallax from "@/assets/images/about/paralax-about-us.png";

// const testimonials = ref([
//   {
//     name: "John Doe",
//     title: "CEO of Logistics Inc",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     imageUrl: image_1,
//   },
//   {
//     name: "John Doe",
//     title: "Driver",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     imageUrl: image_3,
//   },
//   {
//     name: "John Doe",
//     title: "CEO of Logistics Inc",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
//     imageUrl: image_1,
//   },
//   {
//     name: "John Doe",
//     title: "CEO of Logistics Inc",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     imageUrl: image_1,
//   },
//   {
//     name: "John Doe",
//     title: "Driver",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     imageUrl: image_3,
//   },
//   {
//     name: "John Doe",
//     title: "CEO of Logistics Inc",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
//     imageUrl: image_1,
//   },
// ]);
</script>
