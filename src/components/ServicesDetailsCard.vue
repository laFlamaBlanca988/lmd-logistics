<template>
  <div class="relative flex flex-col w-[50%] pl-[8%]">
    <div
      class="absolute -top-[73px] flex items-start text-9xl font-extrabold italic opacity-10"
    >
      <slot name="shadowTitle"></slot>
    </div>
    <div class="flex items-start pb-4 text-5xl font-extrabold italic">
      <slot name="title"></slot>
    </div>
    <div class="text-2xl mb-8 max-w-[700px]">
      <slot name="description"></slot>
    </div>
    <div class="flex flex-col text-2xl">
      <div class="mb-8 text-3xl italic font-bold">
        <slot name="service-features"></slot>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-3">
          <slot name="icon"></slot>
          <div class="pb-1">
            <slot name="service_1"></slot>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <slot name="icon"></slot>

          <div class="pb-1">
            <slot name="service_2"></slot>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <slot name="icon"></slot>
          <div class="pb-1">
            <slot name="service_3"></slot>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <slot name="icon"></slot>
          <div class="pb-1">
            <slot name="service_4"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["textColor"]);
</script>
