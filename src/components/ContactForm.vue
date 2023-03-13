<template>
  <div class="flex flex-col">
    <div class="flex h-[210px]">
      <div
        class="flex flex-col justify-center px-[8%] gap-2 bg-main-blue w-[70%] text-white"
      >
        <h4 class="text-4xl font-bold">Join our team</h4>
        <p class="text-xl">
          Join our team and be part of a dynamic and innovative company that
          values its employees, fosters growth and development, and is dedicated
          to delivering exceptional service to our clients.
        </p>
      </div>
      <div class="flex items-center justify-center bg-main-red w-[30%]">
        <RouterLink
          to="#"
          class="flex items-center justify-center w-[300px] h-[75px] text-2xl text-main-red font-bold bg-white rounded-lg"
          >WE ARE HIRING</RouterLink
        >
      </div>
    </div>
    <div class="flex justify-between">
      <div class="h-[552px] w-[70%] pl-[35%] text-2xl bg-white">
        <div class="flex flex-col mt-24 justify-between h-[200px]">
          <div class="flex items-center gap-2">
            <Icon
              icon="ph:map-pin"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-base font-medium">Street Address, Chicago, IL</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="material-symbols:phone-in-talk-sharp"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-base font-medium">(708) 400 - 7258</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="ic:twotone-mail-outline"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-base font-medium">recruiting@lmdlogisticsinc.com</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="mdi:clock-time-four-outline"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-base font-medium">
              [Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-10">
          <h4 class="text-2xl">Folow Us On:</h4>
          <div class="flex items-center gap-3">
            <Icon
              icon="ant-design:facebook-outlined"
              class="w-[38px] h-[38px] text-main-red cursor-pointer"
            ></Icon>
            <Icon
              icon="ri:instagram-line"
              class="w-[38px] h-[38px] text-main-red cursor-pointer"
            ></Icon>
            <Icon
              icon="jam:linkedin-square"
              class="w-[38px] h-[38px] text-main-red cursor-pointer"
            ></Icon>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-[30%]">
        <div class="w-[80%] h-[70%] shadow-xl rounded-xl"></div>
      </div>
    </div>
    <div class="h-[275px] bg-main-blue"></div>
    <div class="h-[51px] bg-[#13285B]"></div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
