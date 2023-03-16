<template>
  <div
    class="flex flex-col items-center w-full h-auto pb-20 bg-center bg-cover bg-fixed"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <h1 class="italic font-black text-9xl text-white opacity-50 translate-y-14">
      WHY US
    </h1>
    <h3 class="text-6xl text-white font-bold italic mb-4">WHY US</h3>
    <p class="text-2xl mb-10 text-white">
      What our partners and satisfied customers say about our work
    </p>
    <div class="grid grid-cols-2 w-full px-[8%]">
      <HomeWhyUsCard
        title="HIGH EARNINGS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        :background-image="image_1"
      ></HomeWhyUsCard>
      <HomeWhyUsCard
        title="GOOD MAINTENANCE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        :background-image="image_2"
      ></HomeWhyUsCard>
      <HomeWhyUsCard
        title="24/7 SUPPORT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        :background-image="image_3"
      ></HomeWhyUsCard>
      <HomeWhyUsCard
        title="BEST PAYING LOADS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        :background-image="image_4"
      ></HomeWhyUsCard>
    </div>
  </div>
</template>
<script setup>
import backgroundImage from "@/assets/images/bg-why-us.jpg";
import HomeWhyUsCard from "./HomeWhyUsCard.vue";
import image_1 from "@/assets/images/why-us-image-1.png";
import image_2 from "@/assets/images/why-us-image-2.png";
import image_3 from "@/assets/images/why-us-image-3.png";
import image_4 from "@/assets/images/why-us-image-4.png";
</script>
<style scoped></style>
