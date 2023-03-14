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
    <div class="relative flex justify-between">
      <div class="flex justify-between h-[552px] w-[70%] bg-white">
        <ContactForm></ContactForm>

        <div
          class="flex flex-col mt-24 gap-6 justify-between w-[45%] h-[200px]"
        >
          <div class="flex items-center gap-2">
            <Icon
              icon="ph:map-pin"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">Street Address, Chicago, IL</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="material-symbols:phone-in-talk-sharp"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">(708) 400 - 7258</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="ic:twotone-mail-outline"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">recruiting@lmdlogisticsinc.com</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="mdi:clock-time-four-outline"
              class="w-[38px] h-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">
              [Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm
            </p>
          </div>
          <div class="flex flex-col gap-2 mt-10">
            <h4 class="text-3xl font-medium">Folow Us On:</h4>
            <div class="flex items-center gap-3">
              <Icon
                icon="ant-design:facebook-outlined"
                class="flex justify-start w-[55px] h-[55px] text-main-red cursor-pointer"
              ></Icon>
              <Icon
                icon="ri:instagram-line"
                class="w-[55px] h-[55px] text-main-red cursor-pointer"
              ></Icon>
              <Icon
                icon="jam:linkedin-square"
                class="w-[55px] h-[55px] text-main-red cursor-pointer"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-[30%]">
        <div
          class="flex flex-col justify-evenly items-center w-[430px] h-[361px] shadow-xl rounded-xl bg-white"
        >
          <h4 class="text-4xl px-[10%] text-center font-bold">
            Ready To Start Driving
          </h4>
          <img :src="postCar" class="w-[173px] h-[84px]" />
          <RouterLink
            to="#"
            class="flex items-center justify-center w-[241px] h-[59px] border-[3px] border-main-red text-2xl text-main-red font-bold bg-white rounded-lg"
            >Fill The Form</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center h-[275px] bg-main-blue">
      <div class="flex items-center justify-center w-[30%]">
        <p class="text-xl text-white">
          At our company, we are dedicated to providing top-notch cargo
          transport and logistics services to our clients. With a team of
          experienced professionals and a fleet of modern trucks.
        </p>
      </div>
      <div class="w-[30%] h- bg-cover bg-center z-50">
        <img :src="footerTruck" />
      </div>
    </div>

    <div class="flex justify-center items-center h-[51px] bg-[#13285B]">
      <p class="text-sm text-white">
        Copyright 2023 LMD Logistics All Rights Reserved
      </p>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import postCar from "@/assets/images/post-car.svg";
import ContactForm from "./ContactForm.vue";
import footerTruck from "@/assets/images/footer-truck.png";
</script>
