<template>
  <div class="flex h-[200px] items-center justify-center gap-8 bg-[#F4F6F9]">
    <div
      class="h-[123px] w-[172px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage1})` }"
    ></div>
    <div
      class="h-[123px] w-[172px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage2})` }"
    ></div>
    <div
      class="h-[123px] w-[172px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage3})` }"
    ></div>
    <div
      class="h-[123px] w-[172px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage4})` }"
    ></div>
  </div>
</template>
<script setup>
import certImage1 from "@/assets/images/about/cert-img-1.png";
import certImage2 from "@/assets/images/about/cert-img-2.png";
import certImage3 from "@/assets/images/about/cert-img-3.png";
import certImage4 from "@/assets/images/about/cert-img-4.png";
</script>
