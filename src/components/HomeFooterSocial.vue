<template>
  <div class="my-6 flex flex-col justify-between px-[5%]">
    <div class="flex flex-col justify-between gap-3 lg:gap-4 2xl:gap-6">
      <div class="flex items-center justify-center gap-2">
        <Icon icon="ph:map-pin" class="h-[38px] w-[38px] text-main-blue"></Icon>
        <p class="text-xl font-medium">Street Address, Chicago, IL</p>
      </div>
      <div class="flex items-center justify-center gap-2">
        <Icon
          icon="material-symbols:phone-in-talk-sharp"
          class="h-[38px] w-[38px] text-main-blue"
        ></Icon>
        <p class="text-xl font-medium">(708) 400 - 7258</p>
      </div>
      <div class="flex items-center justify-center gap-2">
        <Icon
          icon="ic:twotone-mail-outline"
          class="h-[38px] w-[38px] text-main-blue"
        ></Icon>
        <p class="text-xl font-medium">recruiting@lmdlogisticsinc.com</p>
      </div>
      <div class="flex items-center justify-center gap-2">
        <Icon
          icon="mdi:clock-time-four-outline"
          class="h-[38px] w-[38px] text-main-blue"
        ></Icon>
        <p class="text-xl font-medium">
          [Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm
        </p>
      </div>
    </div>
    <div
      class="mt-10 flex flex-col items-center justify-center gap-2 2xl:items-start 2xl:gap-4"
    >
      <h4 class="text-xl font-medium xl:text-2xl 2xl:text-3xl">Folow Us On:</h4>
      <div class="flex items-center justify-center gap-3">
        <a
          target="_blank"
          href="https://www.facebook.com/people/LMD-Logistics-INC-CargoFreight/100085688446262/"
        >
          <Icon
            icon="ant-design:facebook-outlined"
            class="flex h-[55px] w-[55px] cursor-pointer justify-start text-main-red"
          ></Icon>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/lmdloginc/?igshid=YmMyMTA2M2Y%3D"
        >
          <Icon
            icon="ri:instagram-line"
            class="h-[55px] w-[55px] cursor-pointer text-main-red"
          ></Icon>
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/lmd-log-inc/">
          <Icon
            icon="jam:linkedin-square"
            class="h-[55px] w-[55px] cursor-pointer text-main-red"
          ></Icon>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
