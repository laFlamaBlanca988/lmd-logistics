<template>
  <div
    class="relative hidden xl:flex  justify-between h-[42px] px-[8%] bg-main-blue text-xs text-white font-bold z-50"
  >
    <div class="flex items-center justify-start gap-8">
      <div class="flex items-center gap-2">
        <Icon icon="ph:map-pin" class="w-[24px] h-[24px]"></Icon>
        <p>Street Address, Chicago, IL</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          icon="material-symbols:phone-in-talk-sharp"
          class="w-[24px] h-[24px]"
        ></Icon>
        <p>(708) 400 - 7258</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon icon="ic:twotone-mail-outline" class="w-[24px] h-[24px]"></Icon>
        <p>recruiting@lmdlogisticsinc.com</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          icon="mdi:clock-time-four-outline"
          class="w-[24px] h-[24px]"
        ></Icon>
        <p>[Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Icon
        icon="ant-design:facebook-outlined"
        class="w-[24px] h-[24px] cursor-pointer"
      ></Icon>
      <Icon
        icon="ri:instagram-line"
        class="w-[24px] h-[24px] cursor-pointer"
      ></Icon>
      <Icon
        icon="jam:linkedin-square"
        class="w-[24px] h-[24px] cursor-pointer"
      ></Icon>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style scoped>
.custom {
  backface-visibility: hidden;
}
</style>
