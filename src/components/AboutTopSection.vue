<template>
  <div
    class="my-14 animate-slideFromLeft text-center text-3xl font-extrabold italic text-main-red xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
  >
    WE DELIVER MORE
  </div>
  <div class="flex max-w-full flex-col">
    <div class="flex flex-col md:flex-row">
      <div
        class="flex w-full animate-slideFromLeft items-center justify-center md:w-3/6"
      >
        <img class="w-full" :src="expertiseImage" />
      </div>

      <div
        class="z-0 flex w-full animate-slideFromRight flex-col items-center justify-center py-6 sm:px-[5%] sm:pt-10 sm:pb-10 md:w-3/6 md:py-0 md:pl-8 md:pr-10 2xl:pr-20"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-4xl font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-[80px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            EXPERTISE
          </h1>
          <h1
            class="absolute bottom-0 block text-xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-3xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            EXPERTISE
          </h1>
        </div>
        <div
          class="px-[5%] text-center text-lg md:pl-0 md:pr-[5%] md:text-left md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          Expertise is at the core of our logistics company, as we employ top
          talent with specialized knowledge and skills to provide our clients
          with the highest quality service.
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center md:flex-row">
      <div
        class="md:order-0 order-1 flex w-full animate-slideFromLeft flex-col items-center justify-center py-6 sm:pt-14 sm:pb-20 md:w-3/6 md:py-0"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-4xl font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-[80px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            CULTURE
          </h1>
          <h1
            class="absolute bottom-0 block text-xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-3xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            CULTURE
          </h1>
        </div>
        <div
          class="px-[5%] text-center text-lg md:pl-0 md:pr-[15%] md:text-left md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          Our company culture is focused on fostering a positive and inclusive
          environment for our employees, promoting teamwork, growth, and
          respect.
        </div>
      </div>
      <div
        class="order-0 flex animate-slideFromRight items-center justify-center md:order-1 md:-m-[4.5%] md:w-3/6"
      >
        <img class="w-full" :src="cultureImage" />
      </div>
    </div>
    <div ref="animatedElement" class="flex flex-col md:flex-row">
      <div
        v-if="targetIsVisible"
        class="flex w-full animate-slideFromLeft items-center justify-center md:w-3/6"
      >
        <img class="w-full" :src="technologyImage" />
      </div>
      <div
        v-if="targetIsVisible"
        class="flex w-full animate-slideFromRight flex-col items-center justify-center py-6 sm:pt-10 sm:pb-10 md:w-3/6 md:pb-0 md:pl-8 md:pr-10 2xl:pr-20"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-4xl font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-[80px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            TECHNOLOGY
          </h1>
          <h1
            class="absolute bottom-0 block text-xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-3xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            TECHNOLOGY
          </h1>
        </div>
        <div
          class="px-[5%] text-center text-lg md:pl-0 md:pr-[5%] md:text-left md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          We leverage the latest technology and cutting-edge tools to streamline
          our operations, deliver efficient solutions, and stay ahead of the
          competition in the logistics industry.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import expertiseImage from "@/assets/images/about/expertise.webp";
import cultureImage from "@/assets/images/about/culture.webp";
import technologyImage from "@/assets/images/about/technology.webp";
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
const animatedElement = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
</script>
