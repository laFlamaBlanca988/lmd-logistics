<template>
  <div class="relative flex w-[50%] flex-col pl-[8%]">
    <div
      class="absolute -top-[73px] flex items-start text-8xl font-extrabold italic opacity-10"
    >
      <slot name="shadowTitle"></slot>
    </div>
    <div class="flex items-start pb-4 text-5xl font-extrabold italic">
      <slot name="title"></slot>
    </div>
    <div class="mb-8 flex max-w-[700px] flex-col text-2xl">
      <div class="mb-10">
        <slot name="description-top"></slot>
      </div>
      <slot name="description-bottom"></slot>
    </div>
  </div>
</template>
<script setup>
defineProps(["textColor"]);
</script>
