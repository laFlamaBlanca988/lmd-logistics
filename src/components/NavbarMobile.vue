<template>
  <div
    class="absolute top-0 right-0 left-0 flex justify-between items-center px-[4%] h-[88px] bg-transparent"
  >
    <img class="h-[45px] mt-2" :src="logo" />
    <Icon icon="ci:hamburger-md" class="w-[45px] h-[45px] text-white"></Icon>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import logo from "@/assets/images/navbar-logo-mobile.svg";
const router = useRouter();
</script>
