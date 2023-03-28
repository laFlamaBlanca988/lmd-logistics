<template>
  <div
    class="grid h-[800px] grid-cols-1 items-center justify-center gap-8 bg-[#F4F6F9] px-[5%] xs:h-[400px] xs:grid-cols-2 md:h-[200px] md:grid-cols-4"
  >
    <div
      class="mx-auto h-[123px] w-[162px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage1})` }"
    ></div>
    <div
      class="mx-auto h-[123px] w-[162px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage2})` }"
    ></div>
    <div
      class="mx-auto h-[123px] w-[162px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': `url(${certImage3})` }"
    ></div>
    <div
      class="mx-auto h-[123px] w-[162px] rounded-t-2xl bg-cover bg-center bg-no-repeat"
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
