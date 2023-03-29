<template>
  <div
    ref="animatedElement"
    class="my-14 flex h-auto w-full flex-col justify-between gap-14 px-[5%] xl:flex-row xl:px-14"
  >
    <Transition :name="innerWidth > 1280 ? 'why-us-image' : ''">
      <div v-if="targetIsVisible" class="flex h-full w-auto items-center">
        <img class="m-auto h-full w-auto" :src="aboutUsImage" />
      </div>
    </Transition>

    <div class="flex w-full flex-col justify-center gap-2 xl:mt-8 xl:w-3/6">
      <div class="mb-8 flex flex-col gap-6">
        <Transition :name="innerWidth > 1280 ? 'why-us-title' : ''">
          <div
            v-if="targetIsVisible"
            class="relative flex justify-center md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:justify-start xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
          >
            <h1
              class="text-6xl font-black italic text-main-blue opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
            >
              ABOUT
            </h1>
            <h4
              class="absolute bottom-0 text-xl font-extrabold italic text-main-blue md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            >
              ABOUT US
            </h4>
          </div>
        </Transition>

        <div>
          <p class="text-center text-3xl font-bold xl:text-left">
            OUT TEAM NEVER SLEEPS!
          </p>
          <p class="mb-3 text-center text-2xl xl:w-[80%] xl:text-left">
            We are constantly working on resolving your logistical problems!
          </p>
        </div>

        <AppButton
          url="#"
          content="Find Out More"
          class="mx-auto w-full md:w-[240px] xl:mx-0"
        ></AppButton>
      </div>
      <div class="flex flex-col gap-4">
        <h4 class="text-center text-4xl font-bold italic xl:text-left">
          OUR PARTNERS
        </h4>
        <p class="mb-4 text-center text-xl xl:max-w-[60%] xl:text-left">
          We recognizes that our clients are at the heart of everything we do,
          and we prioritize their needs above all else
        </p>
        <carousel
          :breakpoints="breakpoints"
          :items-to-show="4"
          :wrap-around="true"
          snap-align="start"
          id="custom-swiper"
          class="w-full"
        >
          <slide v-for="image in images" :key="image" class="custom-slide">
            <div
              class="h-[140px] w-full bg-center bg-no-repeat"
              :style="{ 'background-image': `url(${image.path})` }"
            ></div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import aboutUsImage from "@/assets/images/about-us-image.webp";
import AppButton from "./AppButton.vue";
import { ref, reactive } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useIntersectionObserver } from "@vueuse/core";

import image_1 from "@/assets/images/about/partner-1.png";
import image_2 from "@/assets/images/about/partner-2.png";
import image_3 from "@/assets/images/about/partner-3.png";
import image_4 from "@/assets/images/about/partner-4.png";
import image_5 from "@/assets/images/about/partner-5.png";
import image_6 from "@/assets/images/about/partner-6.png";
const innerWidth = window.innerWidth;
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

const animatedElement = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
let breakpoints = reactive({
  // 700px and up
  320: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  460: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  600: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  900: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1080: {
    itemsToShow: 5,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1500: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>
<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-from-bottom {
  from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0);
  }
}

/* .why-us-image-enter-active {
  animation: slide-in 0.9s ease;
} */
.why-us-image-enter-active {
  animation: slide-from-bottom 1.5s ease;
}
.why-us-title-enter-active {
  animation: slide-in 1.5s ease;
}
</style>
