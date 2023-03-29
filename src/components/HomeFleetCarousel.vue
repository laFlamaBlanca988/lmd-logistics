<template>
  <div ref="fleetElement">
    <Transition name="fleet-carousel">
      <div v-if="targetIsVisible">
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
            <pagination />
          </template>
        </carousel>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
