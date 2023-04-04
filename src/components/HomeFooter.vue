<template>
  <div class="flex flex-col">
    <div class="flex flex-col xl:flex-row">
      <div
        class="flex h-[180px] flex-col justify-center gap-2 bg-main-blue px-[3%] text-white xl:w-3/6 2xl:w-[70%]"
      >
        <h4 class="text-center text-2xl font-bold lg:text-4xl xl:text-left">
          Join our team
        </h4>
        <p class="text-center text-base lg:text-xl xl:text-left">
          Join our team and be part of a dynamic and innovative company that
          values its employees, fosters growth and development, and is dedicated
          to delivering exceptional service to our clients.
        </p>
      </div>
      <div
        class="flex h-[130px] items-center justify-center bg-main-red lg:h-[180px] xl:w-3/6 2xl:w-[30%]"
      >
        <a
          href="https://intelliapp.driverapponline.com/c/lmdlogisticsinc?uri_b=ia_lmdlogisticsinc_467948023"
          target="_blank"
          class="flex h-[50px] w-[280px] items-center justify-center rounded-lg bg-white text-xl font-bold text-main-red hover:border-2 hover:bg-main-red hover:text-white lg:h-[60px] lg:text-2xl"
          >WE ARE HIRING</a
        >
      </div>
    </div>
    <div class="relative flex flex-col justify-between md:flex-row">
      <div
        class="flex w-full justify-between bg-white p-[3%] md:w-3/6 lg:pl-[5%] 2xl:w-[70%] 2xl:pl-[8%]"
      >
        <ContactForm></ContactForm>
        <HomeFooterSocial
          class="hidden 2xl:mt-24 2xl:flex 2xl:h-[200px] 2xl:w-[45%]"
        ></HomeFooterSocial>
      </div>
      <div
        class="mb-4 flex w-full items-center justify-center px-[3%] md:w-3/6 2xl:w-[30%]"
      >
        <div
          class="flex h-[361px] w-full flex-col items-center justify-evenly rounded-xl bg-white px-[5%] shadow-xl md:mx-[5%] xl:w-[430px]"
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
          <a
            target="_blank"
            href="https://intelliapp.driverapponline.com/c/lmdlogisticsinc?uri_b=ia_lmdlogisticsinc_467948023"
            class="flex h-[59px] w-full items-center justify-center rounded-lg border-[3px] border-main-red bg-white text-xl font-bold text-main-red hover:bg-main-red hover:text-white md:w-[241px]"
            >Fill The Form</a
          >
        </div>
      </div>
    </div>
    <HomeFooterSocial class="flex justify-center 2xl:hidden"></HomeFooterSocial>

    <div
      ref="animatedElement"
      class="flex h-auto items-center justify-between bg-main-blue py-6 md:h-[200px] 2xl:justify-end"
    >
      <div
        class="flex w-full items-center justify-center px-[3%] md:w-[50%] md:px-10 xl:w-[70%] 2xl:w-[30%]"
      >
        <p class="text-center text-xl text-white md:text-left">
          At our company, we are dedicated to providing top-notch cargo
          transport and logistics services to our clients. With a team of
          experienced professionals and a fleet of modern trucks.
        </p>
      </div>
      <div
        v-if="targetIsVisible"
        class="z-50 hidden w-[50%] animate-slideTruckFromLeft justify-end bg-cover bg-center pr-[3%] md:flex 2xl:w-[30%]"
      >
        <img class="h-[250px]" :src="footerTruck" />
      </div>
    </div>

    <div class="flex h-[51px] items-center justify-center bg-[#13285B]">
      <p
        class="text-sm text-white"
        v-text="
          `Copyright 2023 LMD Logistics All Rights Reserved ${new Date().getFullYear()}`
        "
      ></p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import postCar from "@/assets/images/post-car.svg";
import ContactForm from "./ContactForm.vue";
import footerTruck from "@/assets/images/footer-truck.webp";
import HomeFooterSocial from "./HomeFooterSocial.vue";
const targetIsVisible = ref(false);
const animatedElement = ref(null);

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
</script>
<style scoped></style>
