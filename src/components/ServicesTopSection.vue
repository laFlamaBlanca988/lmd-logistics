<template>
  <div
    class="mb-40 flex min-h-[600px] flex-col items-center justify-start gap-8 pt-40 text-white"
    :style="{ 'background-image': `url(${servicesParallax})` }"
  >
    <div class="flex animate-fadeIn flex-col items-center justify-start gap-8">
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <div
          class="relative flex w-full items-center justify-center md:h-[60px] lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
        >
          <h1
            class="text-center text-6xl font-black italic opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            SERVICES
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            OUR SERVICES
          </h1>
        </div>
      </div>
      <div class="mx-auto flex w-[70%] justify-center text-center text-3xl">
        We offer full transportation and logistic services for all our drivers,
        brokers and customers in more efficient, reliable, safer and profitable
        way.
      </div>
    </div>
  </div>
</template>
<script setup>
import servicesParallax from "@/assets/images/services/services-parallax.png";
</script>
