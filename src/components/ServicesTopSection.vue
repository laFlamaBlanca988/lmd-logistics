<template>
  <div
    class="mb-20 flex min-h-[600px] flex-col items-center justify-start gap-8 pt-40 text-white xl:mb-28"
    :style="{ 'background-image': `url(${servicesParallax})` }"
  >
    <div class="flex animate-fadeIn flex-col items-center justify-start gap-8">
      <div
        class="relative mb-8 flex w-full items-center justify-center md:h-[96px] xl:h-[96px] 2xl:h-[128px]"
      >
        <h1
          class="text-center text-6xl font-black italic text-white opacity-10 xs:text-6xl sm:text-7xl md:text-8xl xl:text-8xl 2xl:text-9xl"
        >
          SERVICES
        </h1>
        <h1
          class="absolute bottom-0 block text-4xl font-extrabold italic text-white xs:text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-7xl"
        >
          OUR SERVICES
        </h1>
      </div>
      <div
        class="mx-auto flex w-[90%] justify-center text-center text-2xl sm:text-3xl md:w-[70%]"
      >
        We offer full transportation and logistic services for all our drivers,
        brokers and customers in more efficient, reliable, safer and profitable
        way.
      </div>
    </div>
  </div>
</template>
<script setup>
import servicesParallax from "@/assets/images/services/services-parallax.webp";
</script>
