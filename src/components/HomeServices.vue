<template>
  <div class="relative flex min-h-[1000px] pl-[8%] pr-20">
    <AppOverlay v-if="fleetModalIsActive">
      <HomeFleetModal
        ref="elementModal"
        :image-url="modalFleetTruck_1"
        :model="fleetModalData.model"
        :model-title="fleetModalData.modelTitle"
        :model-description="fleetModalData.modelDescription"
        :year="fleetModalData.year"
        :horsepower="fleetModalData.horsePower"
        :engine-model="fleetModalData.engineModel"
        :transmission="fleetModalData.transmission"
        :sleeper-size="fleetModalData.sleeperSize"
        :footer-text="fleetModalData.footerText"
      ></HomeFleetModal>
    </AppOverlay>
    <div class="flex flex-col gap-4 w-[50%] pt-40 z-40">
      <h4 class="text-6xl text-main-blue font-bold italic">OUR SERVICES</h4>
      <p class="text-2xl w-[50%]">
        We provide reliable and efficient solutions for all our customers
        logistics needs to help customers cut costs and increase efficiency.
      </p>

      <AppButton url="#" content="Find Out More" class="w-[240px]"></AppButton>
      <h1
        class="absolute top-[80px] italic font-black text-9xl text-main-blue opacity-10"
      >
        SERVICES
      </h1>
      <h4 class="mt-[80px] text-6xl text-main-blue font-bold italic">
        OUR FLEET
      </h4>
      <h1
        class="absolute top-[455px] italic font-black text-9xl text-main-blue opacity-10"
      >
        FLEET
      </h1>
      <div>
        <carousel
          :items-to-show="4"
          :wrap-around="true"
          snap-align="start"
          class="w-[120%]"
        >
          <div v-for="slide in fleetData" :key="slide">
            <slide
              @click="showModal(slide.id)"
              @mouseover="onMouseHover(slide.id)"
              @mouseleave="onMouseLeave(slide.id)"
              class="relative cursor-pointer"
            >
              <img :src="slide.url" class="rounded-xl h-full" />
            </slide>
          </div>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="flex items-center h-full w-auto">
      <img class="w-auto h-full m-auto" :src="truckDriver_3" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import AppButton from "./AppButton.vue";
import AppOverlay from "../components/AppOverlay.vue";

import { onClickOutside } from "@vueuse/core";

import hoverImage from "@/assets/images/fleet-explore-card.png";
import truckDriver_3 from "@/assets/images/truck-driver-3.png";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import HomeFleetModal from "./HomeFleetModal.vue";
import modalFleetTruck_1 from "@/assets/images/modal-fleet-truck-1.png";
import { useGlobalStore } from "../stores/global";

const globalStore = useGlobalStore();
let hoverIsActive = ref(false);
let fleetModalIsActive = computed(() => globalStore.fleetModalIsActive);
const elementModal = ref(null);
const fleetData = computed(() => globalStore.fleetData);
let fleetModalData = computed(() => globalStore.fleetModalData);
const onMouseHover = (slideID) => {
  hoverIsActive.value = true;
  globalStore.fleetData[slideID - 1].url = hoverImage;
};
const onMouseLeave = (slideID) => {
  hoverIsActive.value = false;
  globalStore.fleetData[
    slideID - 1
  ].url = `src/assets/images/fleet-truck-${slideID}.png`;
};
const showModal = (id) => {
  globalStore.fleetModalIsActive = true;
  globalStore.fleetModalData = fleetData.value.find((el) => el.id === id);
};
watch(fleetModalIsActive, (newVal) => {
  newVal === true
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
});
onClickOutside(
  elementModal,
  (event) => (globalStore.fleetModalIsActive = false)
);
</script>
<style></style>
