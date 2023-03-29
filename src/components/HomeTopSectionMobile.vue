px
<template>
  <div class="custom-height relative left-0 right-0 top-0 mb-10 flex">
    <NavbarMobile :logo="logo" icon-color="text-white"></NavbarMobile>
    <video autoplay muted loop class="background-video w-full object-cover">
      <source :src="driverVideo" type="video/mp4" />
    </video>
    <div
      class="absolute top-[130px] left-0 right-0 m-auto flex w-full flex-col items-center justify-center gap-6 xxs:gap-6 md:gap-8"
    >
      <div>
        <Transition name="load-move" appear mode="in-out">
          <div class="flex flex-col md:flex-row">
            <div
              class="text-5xl font-black italic text-main-red xxs:text-5xl xs:text-6xl"
            >
              LOAD.MOVE.
            </div>
            <div
              class="text-center text-5xl font-black italic text-main-red xxs:text-5xl xs:text-6xl md:text-left"
            >
              DELIVER.
            </div>
          </div>
        </Transition>
      </div>
      <div
        class="flex items-center text-2xl font-semibold text-white xxs:text-[28px] md:text-4xl"
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
      <p class="w-[90%] text-center text-sm text-white xxs:text-base">
        Our vision is to be the leading cargo transportation and logistics
        company, recognized for our excellence in service, innovation, and
        commitment.
      </p>
      <RouterLink
        to="#"
        class="relative flex w-[200px] items-center justify-end gap-7 rounded-lg bg-main-red p-3 font-semibold text-white md:pl-10"
        >Give Us A Call
        <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
      </RouterLink>
    </div>
    <div class="absolute bottom-0 right-0 left-0 flex px-[3%]">
      <img :src="videoOverlayImage" class="mx-auto h-full w-auto" />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import logo from "@/assets/images/navbar-logo-mobile.svg";
import videoOverlayImage from "@/assets/images/mobile-video-overlay-img.webp";
import driverVideo from "@/assets/videos/bg-video.mp4";
import NavbarMobile from "./NavbarMobile.vue";
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
  height: 100dvh;
  object-fit: cover;
  position: absolute;
}
.custom-height {
  height: 100dvh;
}
</style>
