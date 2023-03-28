<template>
  <NavbarMobile :logo="logo" icon-color="text-white"></NavbarMobile>
  <ServicesTopSection></ServicesTopSection>
  <ServicesDetailsSection></ServicesDetailsSection>
  <HomeFooter></HomeFooter>
</template>
<script setup>
import NavbarMobile from "../components/NavbarMobile.vue";
import HomeFooter from "../components/HomeFooter.vue";
import ServicesDetailsSection from "../components/ServicesDetailsSection.vue";
import ServicesTopSection from "../components/ServicesTopSection.vue";
import logo from "@/assets/images/navbar-logo-mobile.svg";
</script>
