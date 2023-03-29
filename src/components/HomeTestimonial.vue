<template>
  <div
    v-if="innerWidth > 640"
    class="relative flex w-full overflow-visible rounded-xl border-2 shadow-lg sm:my-4 sm:mt-10 sm:h-[330px] sm:w-[500px]"
  >
    <div class="flex w-3/6 flex-col p-4">
      <h4 class="text-start text-2xl font-bold text-main-blue">{{ name }}</h4>
      <p class="mb-4 text-start text-sm text-main-red">{{ title }}</p>
      <p class="text-start text-base">{{ description }}</p>
    </div>
    <div class="-mt-[36px] flex h-[364px] bg-cover bg-center">
      <img class="" :src="imgUrl" />
    </div>
  </div>
  <div
    v-if="innerWidth <= 640"
    class="flex h-auto min-h-[250px] w-full flex-1 flex-col rounded-xl border-2 shadow-lg"
  >
    <div class="flex h-auto items-center justify-center pt-4">
      <div class="flex flex-1 flex-col justify-center gap-2 pl-4">
        <h4 class="text-start text-xl font-bold text-main-blue xs:text-2xl">
          {{ name }}
        </h4>
        <p class="text-start text-sm text-main-red">{{ title }}</p>
      </div>
      <div class="flex flex-1 items-center justify-center bg-cover bg-center">
        <img class="w-[100px]" :src="avatarUrl" />
      </div>
    </div>
    <div class="flex h-[200px] flex-1 items-center px-2">
      <p class="text-center text-base">{{ description }}</p>
    </div>
  </div>
</template>
<script setup>
const innerWidth = window.innerWidth;

defineProps(["name", "title", "description", "imgUrl", "avatarUrl"]);
</script>
