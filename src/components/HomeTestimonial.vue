<template>
  <div
    class="relative m-4 mt-10 flex h-[330px] w-[500px] overflow-visible rounded-xl shadow-xl"
  >
    <div class="flex w-3/6 flex-col p-2">
      <h4 class="text-start text-2xl font-bold text-main-blue">{{ name }}</h4>
      <p class="mb-4 text-start text-sm text-main-red">{{ title }}</p>
      <p class="text-start">{{ description }}</p>
    </div>
    <div class="-mt-[32px] flex h-[364px] bg-cover bg-center">
      <img class="" :src="imgUrl" />
    </div>
  </div>
</template>
<script setup>
defineProps(["name", "title", "description", "imgUrl"]);
</script>
