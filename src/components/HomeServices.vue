<template>
  <div class="relative flex min-h-[1000px] pl-[8%] pr-20">
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
          <div v-for="slide in caoruselData" :key="slide">
            <slide
              @mouseover="onMouseHover(slide.id)"
              @mouseleave="onMouseLeave(slide.id)"
              class="relative z-10 cursor-pointer"
            >
              <input type="hidden" :id="slide.id" ref="slideID" />
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
import { ref } from "vue";
import AppButton from "./AppButton.vue";
import fleetTruck_1 from "@/assets/images/fleet-truck-1.png";
import fleetTruck_2 from "@/assets/images/fleet-truck-2.png";
import fleetTruck_3 from "@/assets/images/fleet-truck-3.png";
import fleetTruck_4 from "@/assets/images/fleet-truck-4.png";
import hoverImage from "@/assets/images/fleet-explore-card.png";
import truckDriver_3 from "@/assets/images/truck-driver-3.png";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

let hoverIsActive = ref(false);
let slideID = ref(null);
const caoruselData = ref([
  { url: fleetTruck_1, id: 1 },
  { url: fleetTruck_2, id: 2 },
  { url: fleetTruck_4, id: 3 },
  { url: fleetTruck_4, id: 4 },
]);
const onMouseHover = (slideID) => {
  hoverIsActive.value = true;
  caoruselData.value[slideID - 1].url = hoverImage;
};
const onMouseLeave = (slideID) => {
  hoverIsActive.value = false;
  caoruselData.value[
    slideID - 1
  ].url = `src/assets/images/fleet-truck-${slideID}.png`;
};
</script>
<style></style>
