<template>
  <carousel :items-to-show="6" :wrap-around="true" snap-align="start">
    <slide v-for="image in images" :key="image">
      <!-- <div
        class="w-full h-[150px] bg-cover bg-no-repeat bg-center"
        :style="{ 'background-image': `url(${image.path})` }"
      ></div> -->
      <img :src="image.path" class="h-[150px]" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import image_1 from "@/assets/images/about/partner-1.png";
import image_2 from "@/assets/images/about/partner-2.png";
import image_3 from "@/assets/images/about/partner-3.png";
import image_4 from "@/assets/images/about/partner-4.png";
const images = ref([
  {
    path: image_1,
  },
  {
    path: image_2,
  },
  {
    path: image_3,
  },
  {
    path: image_4,
  },
  {
    path: image_1,
  },
  {
    path: image_2,
  },
  {
    path: image_3,
  },
  {
    path: image_4,
  },
]);
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto !important;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
