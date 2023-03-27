<template>
  <div
    ref="animatedElement"
    class="flex h-auto w-full flex-col items-center bg-cover bg-fixed bg-center pb-20 pt-10"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <Transition name="why-us-title">
      <div
        v-if="targetIsVisible"
        class="relative mb-6 flex justify-center md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
      >
        <h1
          class="text-center text-6xl font-black italic text-white opacity-10 md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
        >
          WHY US
        </h1>
        <h4
          class="absolute bottom-0 text-center text-2xl font-extrabold italic text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          WHY US
        </h4>
      </div>
    </Transition>
    <p class="mb-10 text-2xl text-white">
      What our partners and satisfied customers say about our work
    </p>
    <div class="w-full px-[8%]">
      <Carousel
        :items-to-show="4"
        :wrap-around="true"
        :items-to-scroll="1"
        :breakpoints="breakpoints"
        snap-align="center"
      >
        <Slide v-for="card in whyUsCards" :key="card">
          <HomeWhyUsCard
            class="carousel__item"
            :title="card.title"
            :description="card.description"
            :background-image="card.backgroundImage"
          ></HomeWhyUsCard>
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import backgroundImage from "@/assets/images/bg-why-us.webp";
import HomeWhyUsCard from "./HomeWhyUsCard.vue";
import "vue3-carousel/dist/carousel.css";
import { useIntersectionObserver } from "@vueuse/core";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useGlobalStore } from "../stores/global";
const globalStore = useGlobalStore();
const whyUsCards = computed(() => globalStore.whyUsCards);
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
  360: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  940: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1402: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1864: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>
<style>
.carousel__icon {
  color: white;
}
.carousel__prev {
  transform: translateX(-100%);
}
.carousel__next {
  transform: translateX(100%);
}
@keyframes slide-in {
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.why-us-title-enter-active {
  animation: fade-in 1.5s ease;
}
</style>
