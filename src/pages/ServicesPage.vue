<template>
  <NavbarMobile :logo="logo" icon-color="text-white"></NavbarMobile>
  <ServicesTopSection></ServicesTopSection>
  <ServicesDetailsSection></ServicesDetailsSection>
  <SectionCertificates></SectionCertificates>

  <HomeFooter></HomeFooter>
</template>
<script setup>
import NavbarMobile from "../components/NavbarMobile.vue";
import HomeFooter from "../components/HomeFooter.vue";
import ServicesDetailsSection from "../components/ServicesDetailsSection.vue";
import SectionCertificates from "../components/SectionCertificates.vue";
import ServicesTopSection from "../components/ServicesTopSection.vue";
import logo from "@/assets/images/navbar-logo-mobile.svg";
</script>
