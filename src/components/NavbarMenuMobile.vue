<template>
  <Transition name="slide">
    <div class="absolute top-0 right-0 left-0 bottom-0 z-50 bg-main-blue">
      <div
        class="mb-[200px] flex h-[88px] items-center justify-between px-[4%]"
      >
        <img
          class="mt-2 h-[45px]"
          :src="logo"
          @click="router.push('/'), (globalStore.navbarMobileIsActive = false)"
        />
        <Icon
          v-if="!navbarMobileIsActive"
          @click="openMenu"
          icon="ci:hamburger-md"
          class="h-[45px] w-[45px] text-white"
        ></Icon>
        <Icon
          v-else
          @click="closeMenu"
          icon="ph:x-bold"
          class="h-[45px] w-[45px] text-white"
        ></Icon>
      </div>
      <div
        class="flex flex-col items-center justify-center gap-10 px-[4%] text-5xl text-white"
      >
        <RouterLink @click="globalStore.navbarMobileIsActive = false" to="/"
          >Home</RouterLink
        >
        <RouterLink
          @click="globalStore.navbarMobileIsActive = false"
          to="/about-us"
          >About</RouterLink
        >
        <RouterLink
          @click="globalStore.navbarMobileIsActive = false"
          to="/services"
          >Services</RouterLink
        >
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import logo from "@/assets/images/navbar-logo-mobile.svg";
import { useGlobalStore } from "../stores/global";
import { useRouter } from "vue-router";
const router = useRouter();
const globalStore = useGlobalStore();
const navbarMobileIsActive = computed(() => globalStore.navbarMobileIsActive);
const openMenu = () => {
  globalStore.navbarMobileIsActive = true;
  navbarAnimation.value = "animate-slideNavbarFromRight";
};
const closeMenu = () => {
  globalStore.navbarMobileIsActive = false;
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
</style>
