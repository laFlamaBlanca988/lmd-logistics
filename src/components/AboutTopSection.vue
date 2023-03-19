<template>
  <!-- <div class="my-14 text-center text-8xl font-extrabold italic text-main-red">
    WE DELIVER MORE
  </div> -->
  <div class="mb-40 flex flex-col">
    <div class="flex flex-col md:flex-row">
      <div class="flex w-full items-center justify-center md:w-3/6">
        <img class="w-full" :src="expertiseImage" />
      </div>

      <div
        class="z-0 flex w-full flex-col items-center justify-center overflow-visible pl-8 pr-10 md:w-3/6 2xl:pr-20"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            EXPERTISE
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            EXPERTISE
          </h1>
        </div>
        <div
          class="text-center text-sm md:text-left lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          Expertise is at the core of our logistics company, as we employ top
          talent with specialized knowledge and skills to provide our clients
          with the highest quality service.
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center md:flex-row">
      <div
        class="md:order-0 order-1 flex w-full flex-col items-center justify-center pr-20 md:w-3/6"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            CULTURE
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            CULTURE
          </h1>
        </div>
        <div
          class="text-center text-sm md:text-left lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          Our company culture is focused on fostering a positive and inclusive
          environment for our employees, promoting teamwork, growth, and
          respect.
        </div>
      </div>
      <div
        class="order-0 -m-[4.5%] flex w-full items-center justify-center md:order-1 md:w-3/6"
      >
        <img class="w-full" :src="cultureImage" />
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="flex w-full items-center justify-center md:w-3/6">
        <img class="w-full" :src="technologyImage" />
      </div>
      <div
        class="flex w-full flex-col items-center justify-center pl-8 pr-10 md:w-3/6 2xl:pr-20"
      >
        <div
          class="relative mb-4 flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] 2xl:h-[96px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl 2xl:text-8xl"
          >
            TECHNOLOGY
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            TECHNOLOGY
          </h1>
        </div>
        <div
          class="text-center text-sm md:text-left lg:text-lg xl:text-xl 2xl:text-2xl"
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
import expertiseImage from "@/assets/images/about/expertise.png";
import cultureImage from "@/assets/images/about/culture.png";
import technologyImage from "@/assets/images/about/technology.png";
</script>
