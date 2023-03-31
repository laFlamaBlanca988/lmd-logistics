<template>
  <div class="relative left-0 right-0 top-0 flex h-[calc(100vh-130px)]">
    <video autoplay muted loop class="background-video">
      <source :src="driverVideo" type="video/mp4" />
    </video>
    <div
      class="md:gap-8l g:gap-3 absolute top-[130px] left-0 flex w-3/6 flex-col items-start justify-center gap-4 pl-[8%] xxs:gap-6 3xl:pb-28"
    >
      <div>
        <div>
          <div>
            <div
              class="animate-[slideFromLeft_1s_ease] font-black italic text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
            >
              LOAD.MOVE.
            </div>
            <div
              class="animate-[slideFromLeft_2s_ease] font-black italic text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
            >
              DELIVER.
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-start font-semibold leading-[72px] text-white lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
      >
        <h3 class="mr-2">FAST</h3>
        <Icon
          icon="material-symbols:star"
          class="mr-3 h-[22px] w-[22px]"
        ></Icon>
        <h3 class="mr-3">RELIABLE</h3>
        <Icon
          icon="material-symbols:star"
          class="mr-3 h-[22px] w-[22px]"
        ></Icon>
        <h3>REFINED</h3>
      </div>
      <p class="leading-9 text-white lg:text-lg xl:text-xl 2xl:text-2xl">
        Our vision is to be the leading cargo transportation and logistics
        company, recognized for our excellence in service, innovation, and
        commitment.
      </p>
      <div class="mt-2 flex items-center gap-6 font-semibold">
        <AppButton url="#" content="Give Us A Call"></AppButton>
        <RouterLink to="#" class="text-white">Drive With Us</RouterLink>
      </div>
    </div>
    <div
      class="absolute bottom-0 right-0 flex h-[30%] px-[3%] xxs:h-[38%] xl:h-[65%] 2xl:h-[75%]"
    >
      <img :src="videoOverlayImage" class="mx-auto h-full w-auto" />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import videoOverlayImage from "@/assets/images/mobile-video-overlay-img.webp";
import AppButton from "./AppButton.vue";
import driverVideo from "@/assets/videos/bg-video-v2.webm";
import Navbar from "./Navbar.vue";
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
}

.load-move-enter-active {
  animation: slide-in 0.5s ease;
}
.deliver-enter-active {
  animation: slide-in 0.5s ease;
  animation-delay: 0.5s;
}
.background-video {
  width: 100vw;
  height: 937px;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
