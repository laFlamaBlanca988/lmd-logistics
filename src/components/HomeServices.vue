<template>
  <div
    ref="animatedElement"
    class="relative mb-20 flex flex-col items-center px-[5%] md:flex-row md:px-[3%]"
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
        <Transition :name="innerWidth > 1280 ? 'services-title' : ''">
          <div
            v-if="targetIsVisible"
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
        </Transition>
      </div>
      <p class="my-4 text-center text-lg md:text-left xl:text-2xl">
        We provide reliable and efficient solutions for all our customers
        logistics needs to help customers cut costs and increase efficiency.
      </p>
      <RouterLink
        to="#"
        class="mx-auto my-2 flex w-[240px] items-center justify-end gap-9 rounded-lg bg-main-red p-4 text-white hover:bg-button-hover md:ml-0"
        >Find Out More
        <Icon icon="material-symbols:arrow-forward-ios-rounded"></Icon>
      </RouterLink>
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <Transition :name="innerWidth > 1280 ? 'services-title' : ''">
          <div
            v-if="targetIsVisible"
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
        </Transition>
      </div>

      <div ref="truckElement">
        <carousel
          :items-to-show="4"
          :wrap-around="true"
          :breakpoints="breakpoints"
          snap-align="start"
          class="w-[99%] md:w-[120%]"
        >
          <slide
            @click="showModal(1)"
            @mouseover="onMouseHover('1')"
            @mouseleave="onMouseLeave('1')"
            class="relative cursor-pointer"
          >
            <img
              v-if="activeHoverBackground !== '1'"
              :src="fleetData[0].carouselImageUrl"
              class="max-h-[201px] rounded-xl"
            />
            <FleetOnHoverBackground
              :model="fleetData[0].model"
              :engine-number="fleetData[0].engineModel"
              v-if="activeHoverBackground === '1'"
            ></FleetOnHoverBackground>
          </slide>
          <slide
            @click="showModal(2)"
            @mouseover="onMouseHover('2')"
            @mouseleave="onMouseLeave('2')"
            class="relative cursor-pointer"
          >
            <img
              v-if="activeHoverBackground !== '2'"
              :src="fleetData[1].carouselImageUrl"
              class="max-h-[201px] rounded-xl"
            />
            <FleetOnHoverBackground
              :model="fleetData[1].model"
              :engine-number="fleetData[1].engineModel"
              v-if="activeHoverBackground === '2'"
            ></FleetOnHoverBackground>
          </slide>
          <slide
            @click="showModal(3)"
            @mouseover="onMouseHover('3')"
            @mouseleave="onMouseLeave('3')"
            class="relative cursor-pointer"
          >
            <img
              v-if="activeHoverBackground !== '3'"
              :src="fleetData[2].carouselImageUrl"
              class="max-h-[201px] rounded-xl"
            />
            <FleetOnHoverBackground
              :model="fleetData[2].model"
              :engine-number="fleetData[2].engineModel"
              v-if="activeHoverBackground === '3'"
            ></FleetOnHoverBackground>
          </slide>
          <slide
            @click="showModal(4)"
            @mouseover="onMouseHover('4')"
            @mouseleave="onMouseLeave('4')"
            class="relative cursor-pointer"
          >
            <img
              v-if="activeHoverBackground !== '4'"
              :src="fleetData[3].carouselImageUrl"
              class="max-h-[201px] rounded-xl"
            />
            <FleetOnHoverBackground
              :model="fleetData[3].model"
              :engine-number="fleetData[3].engineModel"
              v-if="activeHoverBackground === '4'"
            ></FleetOnHoverBackground>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <Transition :name="innerWidth > 1280 ? 'services-image' : ''">
      <div
        v-if="targetIsVisible"
        class="order-0 mb-10 flex h-full w-auto items-center md:order-1"
      >
        <img class="m-auto h-full w-auto" :src="truckDriver_3" />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, computed, watch, reactive, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import AppOverlay from "../components/AppOverlay.vue";
import FleetOnHoverBackground from "./FleetOnHoverBackground.vue";
import { onClickOutside } from "@vueuse/core";
import truckDriver_3 from "@/assets/images/truck-driver-3.webp";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import HomeFleetModal from "./HomeFleetModal.vue";
import { useGlobalStore } from "../stores/global";
import { useIntersectionObserver } from "@vueuse/core";

const innerWidth = window.innerWidth;
const globalStore = useGlobalStore();
const fleetData = computed(() => globalStore.fleetData);
const fleetModalIsActive = computed(() => globalStore.fleetModalIsActive);
const hoverIsActive = ref(false);
const elementModal = ref(null);
const animatedElement = ref(null);
const targetIsVisible = ref(false);
const activeHoverBackground = ref("");
const truckElement = ref([]);
let fleetModalData = ref([]);

const onMouseHover = (slideID) => {
  hoverIsActive.value = true;
  activeHoverBackground.value = slideID;
};
const onMouseLeave = (slideID) => {
  hoverIsActive.value = false;
  activeHoverBackground.value = "";
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

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
let breakpoints = reactive({
  // 700px and up
  320: {
    itemsToShow: 1,
    snapAlign: "start",
  },

  503: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  760: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1550: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>
<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-from-bottom {
  from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0);
  }
}

.services-title-enter-active {
  animation: slide-in 1.5s ease;
}
.services-image-enter-active {
  animation: slide-from-bottom 1.5s ease;
}
</style>
