<template>
  <div class="flex justify-between pl-[8%] h-auto">
    <div class="flex flex-col w-3/6 mt-10 2xl:mt-16">
      <div>
        <Transition name="load-move" appear mode="in-out">
          <div>
            <div
              class="font-black text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl italic"
            >
              LOAD.MOVE.
            </div>
            <div
              class="font-black text-main-red lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl italic"
            >
              DELIVER.
            </div>
          </div>
        </Transition>
      </div>
      <div
        class="flex items-center text-black font-semibold leading-[72px] lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
      >
        <h3 class="mr-2">FAST</h3>
        <Icon
          icon="material-symbols:star"
          class="w-[22px] h-[22px] mr-3"
        ></Icon>
        <h3 class="mr-3">RELIABLE</h3>
        <Icon
          icon="material-symbols:star"
          class="w-[22px] h-[22px] mr-3"
        ></Icon>
        <h3>REFINED</h3>
      </div>
      <p class="lg:text-lg xl:text-xl 2xl:text-2xl leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="flex items-center gap-6 mt-8 font-semibold">
        <AppButton url="#" content="Give Us A Call"></AppButton>
        <RouterLink to="#" class="text-black">Drive With Us</RouterLink>
      </div>
    </div>

    <HomeTruckDriver_1 class="w-[45%]"></HomeTruckDriver_1>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import HomeTruckDriver_1 from "./HomeTruckDriver_1.vue";
import AppButton from "./AppButton.vue";
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

.load-move-enter-active {
  animation: slide-in 0.5s ease;
}
.deliver-enter-active {
  animation: slide-in 0.5s ease;
  animation-delay: 0.5s;
}
</style>
