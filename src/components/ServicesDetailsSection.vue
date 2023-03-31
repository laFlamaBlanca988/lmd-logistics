<template>
  <div class="mb-10 flex flex-col justify-between px-[8%] xl:flex-row">
    <div class="relative flex flex-col xl:w-3/6">
      <Transition :name="innerWidth > 1280 ? 'rental-program-title' : ''">
        <div
          class="relative mb-6 flex w-full items-center justify-center md:h-[60px] lg:mb-10 lg:h-[72px] xl:justify-start"
        >
          <h1
            class="text-center text-3xl font-black italic text-main-blue opacity-10 xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl"
          >
            TRANSPORTATION
          </h1>
          <h1
            class="absolute bottom-0 block text-xl font-extrabold italic text-main-blue xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-4xl"
          >
            FREIGHT TRANSPORTATION
          </h1>
        </div>
      </Transition>
      <div class="mb-8 flex flex-col text-base lg:text-2xl xl:max-w-[700px]">
        <div class="mb-10">
          Freight transportation is the backbone of global commerce, responsible
          for the movement of goods across vast distances and multiple modes of
          transportation. From shipping containers on massive cargo ships to
          pallets on semi-trucks, freight transportation is essential for
          businesses of all sizes to reach customers around the world. With a
          range of transportation options available, including air, rail, sea,
          and road, companies can choose the best mode of transportation to meet
          their shipping needs.
        </div>
        <div>
          Whether it's delivering raw materials to a factory or transporting
          finished products to retail stores, reliable freight transportation is
          critical to the success of any supply chain. By partnering with a
          trusted freight transportation provider, businesses can ensure that
          their products arrive on time and in good condition, no matter where
          they are headed.
        </div>
      </div>
    </div>

    <div
      class="flex w-auto items-center"
      :class="innerWidth > 1280 ? 'animate-slideFromRight' : ''"
    >
      <img :src="firstImage" class="m-auto" />
    </div>
  </div>
  <div
    ref="animatedElement_2"
    class="my-10 flex flex-col justify-between gap-12 px-[8%] lg:my-20 xl:flex-row"
  >
    <div
      v-if="target_2_IsVisible"
      class="xl:order-0 order-1 flex w-full items-center xl:w-3/6"
      :class="innerWidth > 1280 ? 'animate-slideFromLeft' : ''"
    >
      <img :src="secondImage" class="m-auto" />
    </div>
    <div class="order-0 flex flex-col xl:order-1 xl:w-3/6" c>
      <div
        v-if="target_2_IsVisible"
        class="relative mb-6 flex w-full items-center justify-center md:h-[60px] lg:mb-10 lg:h-[72px] xl:justify-start"
        :class="innerWidth > 1280 ? 'animate-slideFromRight' : ''"
      >
        <h1
          class="text-center text-3xl font-black italic text-main-blue opacity-10 xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl"
        >
          BROKERAGE
        </h1>
        <h1
          class="absolute bottom-0 block text-xl font-extrabold italic text-main-blue xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-4xl"
        >
          FREIGHT BROKERAGE
        </h1>
      </div>
      <div
        class="mb-6 flex flex-col text-base lg:mb-10 lg:text-2xl xl:max-w-[700px]"
      >
        <div class="mb-6 lg:mb-10">
          Freight brokerage is a service that connects shippers and carriers to
          facilitate the transportation of goods. At its core, freight brokerage
          involves matching the shipping needs of businesses with available
          transportation capacity. Brokers act as intermediaries, negotiating
          rates and contracts between shippers and carriers to ensure the timely
          and efficient delivery of goods.
        </div>
        <div>
          With their deep knowledge of the transportation industry, freight
          brokers can help businesses streamline their supply chain and reduce
          shipping costs. By partnering with a reputable freight brokerage firm,
          companies can benefit from a range of services, including freight
          tracking, logistics management, and customs clearance.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import firstImage from "@/assets/images/services/freight-transport.webp";
import secondImage from "@/assets/images/services/broker.webp";

const innerWidth = window.innerWidth;
const target_1_IsVisible = ref(null);
const target_2_IsVisible = ref(null);
const animatedElement_1 = ref(null);
const animatedElement_2 = ref(null);

const { stop } = useIntersectionObserver(
  animatedElement_2,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      target_2_IsVisible.value = isIntersecting;
      stop();
    }
  }
);
</script>
<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(1000px);
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

.rental-program-title-enter-active {
  animation: slide-in 1.5s ease;
}
.truck-driver-enter-active {
  animation: slide-from-bottom 1.5s ease;
}
</style>
