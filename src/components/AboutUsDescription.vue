<template>
  <div
    class="relative mb-8 flex w-full items-center justify-center md:h-[96pxpx] lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
  >
    <h1
      class="text-center text-[40px] font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
    >
      ABOUT US
    </h1>
    <h1
      class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
    >
      ABOUT US
    </h1>
  </div>
  <div
    class="mb-10 flex flex-col justify-center gap-8 px-[10%] text-xl sm:flex sm:text-xl lg:flex-row lg:text-2xl xl:px-[20%]"
  >
    <div class="w-full lg:w-3/6">
      At our company, we are dedicated to providing top-notch cargo transport
      and logistics services to our clients. With a team of experienced
      professionals and a fleet of modern trucks and equipment, we are equipped
      to handle any challenge that comes our way. Whether it's local or
      long-distance transport, warehousing and distribution, or supply chain
      management, we are committed to delivering timely, efficient, and
      cost-effective solutions that meet our clients' needs. Trust us to handle
      your cargo with care.
    </div>
    <div class="w-full lg:w-3/6">
      We have built our reputation on a foundation of hard work, dedication, and
      a commitment to excellence that has allowed us to thrive in a constantly
      evolving industry. Despite our traditional roots, we are constantly
      looking to the future and implementing new technologies and strategies to
      stay ahead of the curve. We believe that innovation and forward-thinking
      are key to our continued success, and we are always exploring new ways to
      improve our services and exceed our clients' expectations.
    </div>
  </div>
  <SectionCertificates class="mb-10"></SectionCertificates>

  <div
    ref="animatedElement"
    class="mb-20 flex flex-col justify-center gap-8 bg-main-blue py-14 px-[10%] text-xl sm:flex sm:text-xl lg:flex-row lg:text-2xl xl:px-[20%]"
  >
    <div
      v-if="targetIsVisible"
      class="flex w-full animate-slideFromLeft flex-col lg:w-3/6"
    >
      <div class="mb-2 text-4xl font-extrabold italic text-white">MISSION</div>

      <div class="w-full text-white">
        Our mission is to provide reliable and efficient cargo transportation
        and logistics services to businesses and individuals around the world,
        while prioritizing safety, sustainability, and customer satisfaction.
      </div>
    </div>
    <div
      v-if="targetIsVisible"
      class="flex w-full animate-slideFromRight flex-col lg:w-3/6"
    >
      <div class="mb-2 text-4xl font-extrabold italic text-white">VISION</div>

      <div class="w-full text-white">
        Our vision is to be the leading cargo transportation and logistics
        company, recognized for our excellence in service, innovation, and
        commitment to our clients' success.
      </div>
    </div>
  </div>
  <div class="mb-10 flex flex-col items-center justify-center">
    <div class="text-4xl font-extrabold italic text-main-red">OUR PARTNERS</div>
    <div
      class="w-full px-[10%] text-center text-xl sm:text-xl lg:w-3/4 lg:text-2xl xl:px-[20%]"
    >
      We recognizes that our clients are at the heart of everything we do, and
      we prioritize their needs above all else
    </div>
  </div>
</template>
<script setup>
import SectionTitle from "./SectionTitle.vue";
import SectionCertificates from "./SectionCertificates.vue";
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
