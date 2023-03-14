<template>
  <div
    class="sticky bg-white flex justify-between items-center h-[88px] px-[8%] shadow-lg z-50"
  >
    <div class="flex items-center">
      <img :src="mainLogo" />
    </div>
    <div class="flex items-center gap-8">
      <RouterLink
        to="/"
        class="text-sm font-medium text-black hover:text-main-blue hover:border-b-2 border-black"
        >Home</RouterLink
      >
      <RouterLink
        to="#"
        class="text-sm font-medium text-black hover:text-main-blue hover:border-b-2 border-black"
        >Services</RouterLink
      >
      <RouterLink
        to="/about-us"
        class="text-sm font-medium text-black hover:text-main-blue hover:border-b-2 border-black"
        >About Us</RouterLink
      >
      <RouterLink
        to="#"
        class="text-sm font-medium bg-main-red p-3 rounded-md text-white"
        >WE ARE HIRING</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import mainLogo from "@/assets/images/logo.svg";
</script>
<style scoped></style>
