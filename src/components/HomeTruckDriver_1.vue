<template>
  <div class="relative flex justify-end w-full z-10">
    <video autoplay muted loop class="w-[85%] h-auto">
      <source :src="driverVideo" type="video/mp4" />
    </video>
  </div>
</template>
<script setup>
import driverVideo from "@/assets/videos/bg-home-video.mp4";
</script>
<style scoped></style>
