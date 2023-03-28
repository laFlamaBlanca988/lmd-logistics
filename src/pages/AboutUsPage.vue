<template>
  <NavbarMobile
    v-if="innerWidth < 1280"
    :logo="logo"
    icon-color="text-main-red"
  ></NavbarMobile>
  <AboutTopSection></AboutTopSection>
  <AboutOurTeam></AboutOurTeam>
  <AboutUsDescription></AboutUsDescription>
  <AboutPartners></AboutPartners>
  <HomeFooter></HomeFooter>
</template>
<script setup>
import AboutTopSection from "../components/AboutTopSection.vue";
import AboutOurTeam from "../components/AboutOurTeam.vue";
import AboutUsDescription from "../components/AboutUsDescription.vue";
import AboutPartners from "../components/AboutPartners.vue";
import HomeFooter from "../components/HomeFooter.vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import logo from "@/assets/images/logo.svg";
import { useGlobalStore } from "../stores/global";
import NavbarMobile from "../components/NavbarMobile.vue";
const innerWidth = window.innerWidth;
const globalStore = useGlobalStore();
const router = useRouter();
const toggleMenu = () => {
  globalStore.navbarMobileIsActive = !globalStore.navbarMobileIsActive;
};
</script>
