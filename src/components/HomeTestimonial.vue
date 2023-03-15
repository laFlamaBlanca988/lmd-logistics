<template>
  <div
    class="relative flex h-[330px] w-[500px] shadow-xl m-4 mt-10 p-2 overflow-visible rounded-xl"
  >
    <div class="flex flex-col w-3/6">
      <h4 class="text-start text-2xl text-main-blue font-bold">{{ name }}</h4>
      <p class="mb-4 text-start text-sm text-main-red">{{ title }}</p>
      <p class="text-start">{{ description }}</p>
    </div>
    <div
      class="absolute bottom-0 -right-[50px] flex h-[364px] bg-center bg-cover"
    >
      <img class="" :src="imgUrl" />
    </div>
  </div>
</template>
<script setup>
defineProps(["name", "title", "description", "imgUrl"]);
</script>
