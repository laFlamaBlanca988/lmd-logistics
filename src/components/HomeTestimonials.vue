<template>
  <div class="flex flex-col pb-20">
    <div
      class="flex flex-col items-center justify-center gap-4 px-[5%] sm:mb-20"
    >
      <div
        ref="animatedElement"
        class="flex flex-col items-center justify-center md:items-start md:justify-start"
      >
        <Transition :name="innerWidth > 1280 ? 'testimonials-title' : ''">
          <div
            v-if="targetIsVisible"
            class="relative flex w-full items-center justify-center md:h-[96pxpx] lg:h-[72px] xl:h-[96px] 2xl:h-[128px]"
          >
            <h1
              class="text-center text-[40px] font-black italic text-main-blue opacity-10 xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl"
            >
              TESTIMONIALS
            </h1>
            <h1
              class="absolute bottom-0 block text-2xl font-extrabold italic text-main-blue xxs:text-3xl xs:text-4xl sm:text-5xl md:text-[29px] lg:text-4xl 2xl:text-5xl 3xl:text-6xl"
            >
              TESTIMONIALS
            </h1>
          </div>
        </Transition>
      </div>
      <p class="mb-10 px-[3%`] text-center text-xl md:px-[5%] md:text-3xl">
        What our partners and satisfied customers say about our work
      </p>
    </div>
    <div class="px-[8%]">
      <carousel
        :items-to-show="3"
        :wrap-around="true"
        :breakpoints="breakpoints"
        snap-align="start"
      >
        <slide v-for="testimonial in testimonials" :key="testimonial">
          <HomeTestimonial
            :name="testimonial.name"
            :title="testimonial.title"
            :description="testimonial.description"
            :img-url="testimonial.imageUrl"
            :avatar-url="testimonial.avatarUrl"
          ></HomeTestimonial>
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
// import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useIntersectionObserver } from "@vueuse/core";

import HomeTestimonial from "./HomeTestimonial.vue";

import image_1 from "@/assets/images/testimonials-img-1.png";
import image_2 from "@/assets/images/testimonials-img-2.png";
import image_3 from "@/assets/images/testimonials-img-3.png";
import avatar_1 from "@/assets/images/testimonials-img-1-mob.webp";
import avatar_2 from "@/assets/images/testimonials-img-2-mob.webp";
import avatar_3 from "@/assets/images/testimonials-img-3-mob.webp";

const innerWidth = window.innerWidth;

const testimonials = ref([
  {
    name: "James Grant",
    title: "Freight Broker",
    description:
      "It's a great company and it's growing. I believe that if you want to start somewhere and grow with a company, LMD would be a great company for you.",
    imageUrl: image_1,
    avatarUrl: avatar_1,
  },
  {
    name: "Robert Sabatka",
    title: "Driver",
    description:
      "You have to join the team to actually understand how a truly caring and friendly company treats drivers and how a hard job like mine can become a Stress Free Cruising of the roads.",
    imageUrl: image_2,
    avatarUrl: avatar_2,
  },
  {
    name: "Tomas Johnson",
    title: "Driver",
    description:
      "The best things about LMD are the pay, the open door policies, the people, and you've got room for advancement.",
    imageUrl: image_3,
    avatarUrl: avatar_3,
  },
]);
let breakpoints = reactive({
  // 700px and up
  320: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  1266: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1564: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

const animatedElement = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  animatedElement,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting;
      stop();
    }
  }
);
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

.testimonials-title-enter-active {
  animation: slide-in 1.5s ease;
}
.testimonials-image-enter-active {
  animation: slide-from-bottom 1.5s ease;
}
</style>
