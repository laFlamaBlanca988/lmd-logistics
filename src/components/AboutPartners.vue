<template>
  <carousel
    :items-to-show="6"
    :wrap-around="true"
    :breakpoints="breakpoints"
    snap-align="start"
    class="mx-auto mb-20 w-[80%]"
  >
    <slide v-for="image in images" :key="image">
      <img :src="image.path" class="h-[150px]" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>
<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import image_1 from "@/assets/images/about/partner-1.png";
import image_2 from "@/assets/images/about/partner-2.png";
import image_3 from "@/assets/images/about/partner-3.png";
import image_4 from "@/assets/images/about/partner-4.png";
import image_5 from "@/assets/images/about/partner-5.png";
import image_6 from "@/assets/images/about/partner-6.png";

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
    path: image_5,
  },
  {
    path: image_6,
  },
]);

let breakpoints = reactive({
  320: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  500: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  650: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 5,
    snapAlign: "start",
  },
  1500: {
    itemsToShow: 6,
    snapAlign: "start",
  },
});
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
