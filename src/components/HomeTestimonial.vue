<template>
  <div class="relative flex w-[500px] h-[330px] shadow-lg -z-10 mr-4 p-2">
    <div class="flex flex-col w-3/6">
      <h4 class="text-start text-2xl text-main-blue font-bold">{{ name }}</h4>
      <p class="mb-4 text-start text-sm text-main-red">{{ title }}</p>
      <p class="text-start">{{ description }}</p>
    </div>
    <div class="flex bg-center bg-cover">
      <img class="h-[120%]" :src="imgUrl" />
    </div>
  </div>
</template>
<script setup>
defineProps(["name", "title", "description", "imgUrl"]);
</script>
