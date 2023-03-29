<template>
  <div
    class="relative flex w-full overflow-visible rounded-xl border-2 shadow-lg sm:my-4 sm:mt-10 sm:h-[330px] sm:w-[500px]"
    :class="innerWidth < 640 ? 'h-auto min-h-[200px]' : ''"
  >
    <div class="flex w-3/6 flex-col p-4">
      <h4 class="text-start text-2xl font-bold text-main-blue">{{ name }}</h4>
      <p class="mb-4 text-start text-sm text-main-red">{{ title }}</p>
      <p class="text-start text-base">{{ description }}</p>
    </div>
    <div
      v-if="innerWidth > 640"
      class="-mt-[36px] flex h-[364px] bg-cover bg-center"
    >
      <img class="" :src="imgUrl" />
    </div>
    <div
      v-else
      class="mt-6 flex w-3/6 items-start justify-center bg-cover bg-center"
    >
      <img class="h-[160px]" :src="avatarUrl" />
    </div>
  </div>
</template>
<script setup>
const innerWidth = window.innerWidth;

defineProps(["name", "title", "description", "imgUrl", "avatarUrl"]);
</script>
