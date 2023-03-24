<template>
  <div class="flex flex-col">
    <div class="flex h-[180px]">
      <div
        class="flex w-[70%] flex-col justify-center gap-2 bg-main-blue px-[8%] text-white"
      >
        <h4 class="text-4xl font-bold">Join our team</h4>
        <p class="text-xl">
          Join our team and be part of a dynamic and innovative company that
          values its employees, fosters growth and development, and is dedicated
          to delivering exceptional service to our clients.
        </p>
      </div>
      <div class="flex w-[30%] items-center justify-center bg-main-red">
        <a
          href="#"
          target="_blank"
          class="flex h-[60px] w-[280px] items-center justify-center rounded-lg bg-white text-2xl font-bold text-main-red hover:border-2 hover:bg-main-red hover:text-white"
          >WE ARE HIRING</a
        >
      </div>
    </div>
    <div class="relative flex justify-between">
      <div class="flex h-[552px] w-[70%] justify-between bg-white pl-[5.5%]">
        <ContactForm></ContactForm>

        <div
          class="mt-24 flex h-[200px] w-[45%] flex-col justify-between gap-6"
        >
          <div class="flex items-center gap-2">
            <Icon
              icon="ph:map-pin"
              class="h-[38px] w-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">Street Address, Chicago, IL</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="material-symbols:phone-in-talk-sharp"
              class="h-[38px] w-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">(708) 400 - 7258</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="ic:twotone-mail-outline"
              class="h-[38px] w-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">recruiting@lmdlogisticsinc.com</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon
              icon="mdi:clock-time-four-outline"
              class="h-[38px] w-[38px] text-main-blue"
            ></Icon>
            <p class="text-xl font-medium">
              [Mon-Fri] 6am - 18pm [SAT, SUN] 6am - 16pm
            </p>
          </div>
          <div class="mt-10 flex flex-col gap-2">
            <h4 class="text-3xl font-medium">Folow Us On:</h4>
            <div class="flex items-center gap-3">
              <Icon
                icon="ant-design:facebook-outlined"
                class="flex h-[55px] w-[55px] cursor-pointer justify-start text-main-red"
              ></Icon>
              <Icon
                icon="ri:instagram-line"
                class="h-[55px] w-[55px] cursor-pointer text-main-red"
              ></Icon>
              <Icon
                icon="jam:linkedin-square"
                class="h-[55px] w-[55px] cursor-pointer text-main-red"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-[30%] items-center justify-center">
        <div
          class="flex h-[361px] w-[430px] flex-col items-center justify-evenly rounded-xl bg-white shadow-xl"
        >
          <div class="flex items-center justify-center">
            <h4 class="text-center text-4xl font-bold">
              Ready To <br />
              Start Driving
            </h4>
          </div>
          <div
            class="flex w-full -translate-x-[15px] items-center justify-center"
          >
            <img :src="postCar" class="h-[84px] w-[173px]" />
          </div>
          <RouterLink
            to="#"
            class="flex h-[59px] w-[241px] items-center justify-center rounded-lg border-[3px] border-main-red bg-white text-xl font-bold text-main-red hover:bg-main-red hover:text-white"
            >Fill The Form</RouterLink
          >
        </div>
      </div>
    </div>
    <div
      ref="animatedElement"
      class="flex h-[200px] items-center justify-end bg-main-blue"
    >
      <div class="flex w-[30%] items-center justify-center px-10">
        <p class="text-xl text-white">
          At our company, we are dedicated to providing top-notch cargo
          transport and logistics services to our clients. With a team of
          experienced professionals and a fleet of modern trucks.
        </p>
      </div>
      <div
        v-if="targetIsVisible"
        class="z-50 flex w-[30%] animate-slideFromLeft justify-center bg-cover bg-center"
      >
        <img class="h-[250px]" :src="footerTruck" />
      </div>
    </div>

    <div class="flex h-[51px] items-center justify-center bg-[#13285B]">
      <p class="text-sm text-white">
        Copyright 2023 LMD Logistics All Rights Reserved
      </p>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import postCar from "@/assets/images/post-car.svg";
import ContactForm from "./ContactForm.vue";
import footerTruck from "@/assets/images/footer-truck.png";
const targetIsVisible = ref(false);
const animatedElement = ref(null);

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      console.log(targetIsVisible.value);

      stop();
    }
  }
);
</script>
<style scoped></style>
