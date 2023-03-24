<template>
  <div
    class="z-50 hidden h-[88px] w-full items-center justify-between overflow-hidden bg-white px-[8%] shadow-lg lg:flex"
    ref="navbarElement"
    :class="stickyStyle"
  >
    <div class="flex cursor-pointer items-center" @click="router.push('/')">
      <img :src="mainLogo" />
    </div>
    <div class="flex items-center gap-8 text-base">
      <RouterLink
        to="/"
        class="border-black font-medium text-black hover:border-b-2 hover:text-main-blue"
        >Home</RouterLink
      >
      <RouterLink
        to="services"
        class="border-black font-medium text-black hover:border-b-2 hover:text-main-blue"
        >Services</RouterLink
      >
      <RouterLink
        to="/about-us"
        class="border-black font-medium text-black hover:border-b-2 hover:text-main-blue"
        >About Us</RouterLink
      >
      <a
        href="#"
        target="_blank"
        class="rounded-md bg-main-red p-3 text-sm font-medium text-white hover:bg-button-hover"
        >WE ARE HIRING</a
      >
    </div>
  </div>
</template>

<script setup>
import mainLogo from "@/assets/images/logo.svg";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const navbarElement = ref(null);
const stickyStyle = ref([]);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = (event) => {
  if (window.scrollY >= 42) {
    stickyStyle.value = ["fixed", "top-0", "w-100vh", "right-0", "left-0"];
  } else {
    stickyStyle.value = [];
  }
};
</script>
<style scoped>
.router-link-active {
  @apply border-b-2 border-main-blue text-main-blue;
}
</style>
