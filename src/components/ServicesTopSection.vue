<template>
  <div class="flex flex-col mb-40">
    <SectionTitle
      main-title="OUR SERVICES"
      shadow-title="SERVICES"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
      class="mt-20 mb-10"
    ></SectionTitle>
    <div class="flex justify-between px-[8%] gap-8">
      <ServicesTopCard
        title="SERVICE #1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        :background-image="servicesCarImage"
      ></ServicesTopCard>
      <ServicesTopCard
        title="SERVICE #2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        :background-image="servicesCarImage"
      ></ServicesTopCard>
      <ServicesTopCard
        title="SERVICE #3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        :background-image="servicesCarImage"
      ></ServicesTopCard>
    </div>
  </div>
</template>
<script setup>
import SectionTitle from "../components/SectionTitle.vue";
import servicesCarImage from "@/assets/images/services/services-card-image.png";
import ServicesTopCard from "./ServicesTopCard.vue";
</script>
