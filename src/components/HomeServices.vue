<template>
  <div class="relative mb-20 flex pl-[8%] pr-20">
    <AppOverlay v-if="fleetModalIsActive">
      <HomeFleetModal
        ref="elementModal"
        :image-url="fleetModalData.modalImageUrl"
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
    <div class="z-40 flex w-[50%] flex-col justify-center gap-4">
      <div
        class="relative md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
      >
        <h1
          class="text-6xl font-black italic text-main-blue opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
        >
          SERVICES
        </h1>
        <h4
          class="absolute bottom-0 text-xl font-extrabold italic text-main-blue md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          OUR SERVICES
        </h4>
      </div>

      <p class="text-sm md:text-2xl">
        We provide reliable and efficient solutions for all our customers
        logistics needs to help customers cut costs and increase efficiency.
      </p>

      <AppButton
        url="#"
        content="Find Out More"
        class="my-2 w-[240px]"
      ></AppButton>

      <div
        class="relative md:h-[48px] md:text-5xl lg:h-[60px] lg:text-6xl xl:h-[72px] xl:text-7xl 2xl:h-[128px] 2xl:text-9xl"
      >
        <h1
          class="text-6xl font-black italic text-main-blue opacity-10 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl"
        >
          FLEET
        </h1>
        <h4
          class="absolute bottom-0 text-xl font-extrabold italic text-main-blue md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          OUR FLEET
        </h4>
      </div>

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
              <img
                :src="slide.carouselImageUrl"
                class="max-h-[201px] rounded-xl"
              />
            </slide>
          </div>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="flex h-full w-auto items-center">
      <img class="m-auto h-full w-auto" :src="truckDriver_3" />
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
let fleetModalData = ref([]);
const onMouseHover = (slideID) => {
  hoverIsActive.value = true;
  globalStore.fleetData[slideID - 1].carouselImageUrl = hoverImage;
};
const onMouseLeave = (slideID) => {
  hoverIsActive.value = false;
  globalStore.fleetData[
    slideID - 1
  ].carouselImageUrl = `src/assets/images/fleet-truck-${slideID}.png`;
};
const showModal = (id) => {
  globalStore.fleetModalIsActive = true;
  fleetModalData.value = fleetData.value.find((el) => el.id === id);
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
