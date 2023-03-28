<template>
  <div
    class="ml-[5%] flex h-[201px] w-[230px] flex-col justify-evenly rounded-2xl bg-main-blue text-white hover:animate-fadeIn"
  >
    <div class="flex flex-col gap-1">
      <div class="text-2xl font-bold">{{ model }}</div>
      <div class="text-xl font-semibold">{{ engineNumber }}</div>
    </div>

    <button class="mx-auto w-4/5 rounded-lg border border-white p-2 text-base">
      Explore Truck
    </button>
  </div>
</template>
<script setup>
defineProps(["model", "engineNumber"]);
</script>
