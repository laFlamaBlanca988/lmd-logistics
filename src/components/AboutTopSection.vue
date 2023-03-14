<template>
  <div class="text-center text-8xl text-main-red font-extrabold italic my-14">
    WE DELIVER MORE
  </div>
  <div class="flex flex-col">
    <div class="flex">
      <div
        class="w-3/6 h-[500px] bg-cover bg-no-repeat bg-center"
        :style="{ 'background-image': `url(${expertiseImage})` }"
      ></div>
      <div class="flex items-center w-3/6 pl-8 pr-40 z-0 overflow-visible">
        <div class="relative h-[100px]">
          <div
            class="absolute -top-10 flex items-end h-full text-9xl font-bold text-main-blue italic opacity-10"
          >
            EXPERTISE
          </div>
          <div
            class="flex items-end h-full pb-4 text-7xl font-bold text-main-blue italic"
          >
            EXPERTISE
          </div>
          <div class="text-2xl">
            Expertise is at the core of our logistics company, as we employ top
            talent with specialized knowledge and skills to provide our clients
            with the highest quality service.
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex items-center w-3/6 pl-8 pr-40">
        <div class="relative h-[100px]">
          <div
            class="absolute -top-10 flex items-end h-full text-9xl font-bold text-main-blue italic opacity-10"
          >
            CULTURE
          </div>
          <div
            class="flex items-end h-full pb-4 text-7xl font-bold text-main-blue italic"
          >
            CULTURE
          </div>
          <div class="text-2xl">
            Our company culture is focused on fostering a positive and inclusive
            environment for our employees, promoting teamwork, growth, and
            respect.
          </div>
        </div>
      </div>
      <div
        class="w-3/6 h-[500px] -mt-[35px] bg-cover bg-no-repeat bg-center z-50 overflow-visible"
        :style="{ 'background-image': `url(${cultureImage})` }"
      ></div>
    </div>
    <div class="flex">
      <div
        class="w-3/6 h-[500px] -mt-[13px] bg-cover bg-no-repeat bg-center"
        :style="{ 'background-image': `url(${technologyImage})` }"
      ></div>
      <div class="flex items-center w-3/6 pl-8 pr-40">
        <div class="relative h-[100px]">
          <div
            class="absolute -top-10 flex items-end h-full text-9xl font-bold text-main-blue italic opacity-10"
          >
            TECHNOLOGY
          </div>
          <div
            class="flex items-end h-full pb-4 text-7xl font-bold text-main-blue italic"
          >
            TECHNOLOGY
          </div>
          <div class="text-2xl">
            We leverage the latest technology and cutting-edge tools to
            streamline our operations, deliver efficient solutions, and stay
            ahead of the competition in the logistics industry.
          </div>
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
