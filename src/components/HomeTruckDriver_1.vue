<template>
  <figure class="mask">
    <video autoplay muted loop>
      <source :src="driverVideo" type="video/webm" />
    </video>
  </figure>
</template>
<script setup>
import driverVideo from "@/assets/videos/bg-home-video.webm";
</script>
<style scoped>
.mask {
  -webkit-mask-box-image: url("@/assets/images/video-mask.png");
}
</style>
