<template>
  <div
    class="mb-14 flex flex-col items-center justify-center gap-10 px-[5%] md:flex-row md:justify-start md:px-[3%] xl:gap-20"
  >
    <Transition :name="innerWidth > 1280 ? 'truck-driver' : ''">
      <div v-show="targetIsVisible" class="flex w-full items-center lg:w-[50%]">
        <img class="m-auto h-full w-auto" :src="truckDriver" />
      </div>
    </Transition>

    <div
      ref="animatedElement"
      class="relative flex w-full flex-col justify-center gap-2 lg:w-[40%] lg:gap-4"
    >
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <Transition :name="innerWidth > 1280 ? 'rental-program-title' : ''">
          <div
            v-show="targetIsVisible"
            class="relative flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
          >
            <h1
              class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
            >
              WINNING
            </h1>
            <h1
              class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
            >
              OUR AWARD WINNING
            </h1>
          </div>
        </Transition>
      </div>
      <p
        class="mt-2 mb-4 text-center text-lg xxs:text-xl md:mt-4 md:text-left xl:text-2xl"
      >
        Get all the benefits owners have but spare yourself from all the hassle
        owners have!
      </p>

      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-base font-bold text-black xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Drive a well maintained truck
        </p>
      </div>
      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px]w-[40px] h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-base font-bold text-black xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Make $2,300 - $4,700/week
        </p>
      </div>
      <div class="flex items-center gap-2 md:gap-3 xl:gap-4">
        <Icon
          icon="material-symbols:check-circle"
          class="h-[40px] w-[40px] bg-white text-main-blue lg:h-[45px] lg:w-[45px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px] 3xl:h-[65px] 3xl:w-[65px]"
        ></Icon>
        <p
          class="text-base font-bold text-black xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
        >
          Don't worry about maintenance
        </p>
      </div>
      <div
        ref="animatedElement"
        class="mt-4 flex flex-col gap-3 md:gap-4 lg:flex-row"
      >
        <RouterLink
          to="#"
          class="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-main-red bg-white text-main-red hover:bg-main-red hover:text-white xl:h-[57px] xl:w-[240px]"
          >Sign Up
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="text-main-red"
          ></Icon>
        </RouterLink>
        <RouterLink
          to="#"
          class="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-main-red text-white hover:bg-button-hover xl:h-[57px] xl:w-[240px]"
          >Give Us A Call
          <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import truckDriver from "@/assets/images/truck-driver-2.webp";

const animatedElement = ref(null);
const targetIsVisible = ref(false);
const innerWidth = window.innerWidth;

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
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

.rental-program-title-enter-active {
  animation: slide-in 1.5s ease;
}
.truck-driver-enter-active {
  animation: slide-from-bottom 1.5s ease;
}
</style>
