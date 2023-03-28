<template>
  <div v-if="innerWidth > 1280">
    <Header></Header>
    <Navbar></Navbar>
  </div>
  <NavbarMenuMobile v-show="navbarMobileIsActive"></NavbarMenuMobile>
  <router-view></router-view>
</template>
<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import { computed } from "vue";
import NavbarMenuMobile from "./components/NavbarMenuMobile.vue";
import { useGlobalStore } from "./stores/global";
const globalStore = useGlobalStore();
const innerWidth = window.innerWidth;
const navbarMobileIsActive = computed(() => globalStore.navbarMobileIsActive);
</script>
