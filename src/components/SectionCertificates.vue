<template>
  <div
    class="grid h-auto grid-cols-1 items-center justify-center gap-4 bg-[#F4F6F9] px-[5%] py-10 align-middle xs:grid-cols-2 xs:gap-8 lg:grid-cols-4"
  >
    <div
      class="shadow-gray mx-auto h-[165px] w-full rounded-xl rounded-t-2xl bg-center bg-no-repeat shadow-xl shadow-gray-300"
      :style="{ 'background-image': `url(${certImage1})` }"
    ></div>
    <div
      class="shadow-gray mx-auto h-[165px] w-full rounded-xl rounded-t-2xl bg-center bg-no-repeat shadow-xl shadow-gray-300"
      :style="{ 'background-image': `url(${certImage2})` }"
    ></div>
    <div
      class="shadow-gray mx-auto h-[165px] w-full rounded-xl rounded-t-2xl bg-center bg-no-repeat shadow-xl shadow-gray-300"
      :style="{ 'background-image': `url(${certImage3})` }"
    ></div>
    <div
      class="shadow-gray mx-auto h-[165px] w-full rounded-xl rounded-t-2xl bg-center bg-no-repeat shadow-xl shadow-gray-300"
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
