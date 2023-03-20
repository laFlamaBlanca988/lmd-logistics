<template>
  <div
    class="relative mb-20 flex flex-col items-center px-[5%] md:flex-row md:pl-[8%] md:pr-20"
  >
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
    <div
      class="z-40 order-1 flex w-full flex-col justify-center gap-4 md:order-1 md:w-[50%]"
    >
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <div
          class="relative flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            SERVICES
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            OUR SERVICES
          </h1>
        </div>
      </div>
      <p class="my-4 text-center text-lg md:text-left xl:text-2xl">
        Get all the benefits owners have but spare yourself from all the hassle
        owners have!
      </p>

      <AppButton
        url="#"
        content="Find Out More"
        class="mx-auto my-2 w-[240px] md:ml-0"
      ></AppButton>

      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <div
          class="relative flex w-full items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
        >
          <h1
            class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            FLEET
          </h1>
          <h1
            class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
          >
            OUR FLEET
          </h1>
        </div>
      </div>

      <div>
        <carousel
          :items-to-show="4"
          :wrap-around="true"
          :breakpoints="breakpoints"
          snap-align="start"
          class="w-[99%] md:w-[120%]"
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

    <div class="order-0 flex h-full w-auto items-center md:order-1">
      <img class="m-auto h-full w-auto" :src="truckDriver_3" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, reactive } from "vue";
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
// let breakpoints = reactive({
//   // 700px and up
//   360: {
//     itemsToShow: 1,
//     snapAlign: "start",
//   },

//   1402: {
//     itemsToShow: 4,
//     snapAlign: "start",
//   },
// });
</script>
<style></style>
