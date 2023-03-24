<template>
  <div class="mb-10 flex justify-between px-[8%]">
    <div class="relative flex w-3/6 flex-col">
      <div
        class="relative mb-6 flex w-full animate-slideFromLeft items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px]"
      >
        <h1
          class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl"
        >
          TRANSPORTATION
        </h1>
        <h1
          class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl"
        >
          FREIGHT TRANSPORTATION
        </h1>
      </div>
      <div class="mb-8 flex max-w-[700px] flex-col text-2xl">
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

    <div class="relative z-10 w-[45%] animate-slideFromRight">
      <video autoplay muted loop class="w-full bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
  </div>
  <div
    ref="animatedElement_2"
    class="mb-10 flex justify-between gap-12 px-[8%] py-36"
  >
    <div
      iv
      v-if="target_2_IsVisible"
      class="relative z-10 w-[45%] animate-slideFromLeft"
    >
      <video autoplay muted loop class="w-full bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
    <div class="flex w-3/6 flex-col" c>
      <div
        v-if="target_2_IsVisible"
        class="relative mb-6 flex w-full animate-slideFromRight items-center justify-center md:h-[60px] md:justify-start lg:h-[72px] xl:h-[96px]"
      >
        <h1
          class="text-center text-6xl font-black italic text-main-blue opacity-10 xxs:text-7xl xs:text-8xl sm:text-[110px] md:text-5xl lg:text-7xl xl:text-8xl"
        >
          BROKERAGE
        </h1>
        <h1
          class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl"
        >
          FREIGHT BROKERAGE
        </h1>
      </div>

      <div class="mb-8 flex max-w-[700px] flex-col text-2xl">
        <div class="mb-10">
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

  <SectionCertificates></SectionCertificates>
</template>
<script setup>
import { ref } from "vue";
import SectionCertificates from "./SectionCertificates.vue";
import serviceVideo_1 from "@/assets/videos/bg-services-video-1.mp4";
import { Icon } from "@iconify/vue";
import { useIntersectionObserver } from "@vueuse/core";

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
