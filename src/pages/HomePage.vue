<template>
  <HomeTopSection v-if="innerWidth > 1280"></HomeTopSection>
  <HomeTopSectionMobile v-else></HomeTopSectionMobile>
  <HomeRentalProgram></HomeRentalProgram>
  <HomeServices></HomeServices>
  <HomeTestimonials></HomeTestimonials>
  <HomeWhyUs></HomeWhyUs>
  <HomeAboutUs></HomeAboutUs>
  <HomeFooter></HomeFooter>
</template>
<script setup>
import HomeFooter from "../components/HomeFooter.vue";
import HomeAboutUs from "../components/HomeAboutUs.vue";
import HomeRentalProgram from "../components/HomeRentalProgram.vue";
import HomeServices from "../components/HomeServices.vue";
import HomeTestimonials from "../components/HomeTestimonials.vue";
import HomeTopSection from "../components/HomeTopSection.vue";
import HomeWhyUs from "../components/HomeWhyUs.vue";
import HomeTopSectionMobile from "../components/HomeTopSectionMobile.vue";

const innerWidth = window.innerWidth;
</script>
