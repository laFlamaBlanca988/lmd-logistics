<template>
  <div
    class="absolute top-0 right-0 left-0 z-10 flex h-[88px] items-center justify-between bg-transparent px-[4%]"
  >
    <img class="mt-2 h-[45px]" :src="logo" />
    <Icon icon="ci:hamburger-md" class="h-[45px] w-[45px] text-white"></Icon>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import logo from "@/assets/images/navbar-logo-mobile.svg";
const router = useRouter();
</script>
