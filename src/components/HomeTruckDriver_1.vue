<template>
  <div class="w-full -z-10">
    <video
      autoplay
      muted
      loop
      class="w-full h-auto translate-x-[9%] -translate-y-[9%] 2xl:translate-x-[21%] 2xl:-my-[21%]"
    >
      <source :src="driverVideo" type="video/mp4" />
    </video>
  </div>
</template>
<script setup>
import driverVideo from "@/assets/videos/bg-video-main.mp4";
</script>
<style scoped>
.image {
  transform: rotateY(0deg) rotate(0deg);
}
</style>
