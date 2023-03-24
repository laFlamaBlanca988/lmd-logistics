<template>
  <div
    class="relative z-50 hidden h-[42px] justify-between bg-main-blue px-[8%] text-xs font-bold text-white xl:flex"
  >
    <div class="flex items-center justify-start gap-8">
      <div class="flex items-center gap-2">
        <Icon icon="ph:map-pin" class="h-[24px] w-[24px]"></Icon>
        <p>Street Address, Chicago, IL</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          icon="material-symbols:phone-in-talk-sharp"
          class="h-[24px] w-[24px]"
        ></Icon>
        <p>(708) 400 - 7258</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon icon="ic:twotone-mail-outline" class="h-[24px] w-[24px]"></Icon>
        <p>recruiting@lmdlogisticsinc.com</p>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          icon="mdi:clock-time-four-outline"
          class="h-[24px] w-[24px]"
        ></Icon>
        <p>[Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Icon
        icon="ant-design:facebook-outlined"
        class="h-[24px] w-[24px] cursor-pointer"
      ></Icon>
      <Icon
        icon="ri:instagram-line"
        class="h-[24px] w-[24px] cursor-pointer"
      ></Icon>
      <Icon
        icon="jam:linkedin-square"
        class="h-[24px] w-[24px] cursor-pointer"
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
