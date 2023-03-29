<template>
  <div
    class="mb-10 flex flex-col justify-center gap-10 bg-cover bg-fixed bg-center py-20 text-white md:gap-20 md:py-32"
    :style="{ 'background-image': `url(${parallax})` }"
  >
    <div
      v-if="targetIsVisible"
      class="relative flex h-[60px] w-full items-center justify-center xxs:h-[72px] xs:h-[96px] 2xl:h-[128px]"
      :class="innerWidth > 1280 ? 'animate-fadeIn' : ''"
    >
      <h1
        class="text-center text-6xl font-black italic opacity-20 xxs:text-7xl xs:text-8xl 2xl:text-9xl"
      >
        TEAM
      </h1>
      <h1
        class="absolute bottom-0 block text-3xl font-extrabold italic xxs:text-4xl xs:text-5xl 2xl:text-6xl"
      >
        OUR TEAM
      </h1>
    </div>
    <div
      class="flex w-full flex-col items-center justify-center px-[5%] text-2xl"
    >
      <p class="ms:text-4xl mb-4 text-center text-2xl font-medium">
        We are constantly working on resolving your logistical problems!
      </p>
      <p class="text-center text-base md:text-xl">
        We are proud that our Team members covers Dispatch, Safety, Maintenance,
      </p>
      <p class="text-center text-base md:text-xl">
        Accounting and recruiting department.
      </p>
    </div>
    <div
      ref="ourTeamElement"
      class="mx-auto grid w-[90%] grid-cols-2 gap-0 xs:w-[80%] md:grid-cols-4 md:gap-6 lg:w-[80%]"
    >
      <div
        class="flex h-[200px] w-full flex-col items-center justify-center gap-4"
      >
        <h1 class="text-5xl font-extrabold italic md:text-6xl">23</h1>
        <div class="flex items-center justify-center">
          <div class="text-center text-xl md:text-2xl">
            Dedicated <br />
            Team members
          </div>
        </div>
      </div>
      <div
        class="flex h-[200px] w-full flex-col items-center justify-center gap-4"
      >
        <h1 class="text-5xl font-extrabold italic md:text-6xl">85</h1>
        <div class="flex items-center justify-center">
          <div class="text-center text-xl md:text-2xl">
            Vehicles in <br />
            Our Fleet
          </div>
        </div>
      </div>
      <div
        class="flex h-[200px] w-full flex-col items-center justify-center gap-4"
      >
        <h1 class="text-5xl font-extrabold italic md:text-6xl">2128</h1>
        <div class="flex items-center justify-center">
          <div class="text-center text-xl md:text-2xl">
            Number of<br />
            Shipments
          </div>
        </div>
      </div>
      <div
        class="flex h-[200px] w-full flex-col items-center justify-center gap-4"
      >
        <h1 class="text-5xl font-extrabold italic md:text-6xl">97%</h1>
        <div class="flex items-center justify-center">
          <div class="text-center text-xl md:text-2xl">
            On-Time <br />
            Delivery Rate
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import parallax from "@/assets/images/about/paralax-about-us.webp";
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
const ourTeamElement = ref(null);
const targetIsVisible = ref(false);
const innerWidth = window.innerWidth;
const { stop } = useIntersectionObserver(
  ourTeamElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
</script>
