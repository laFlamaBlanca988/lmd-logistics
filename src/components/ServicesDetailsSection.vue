<template>
  <div class="flex justify-between mb-40">
    <ServicesDetailsCard>
      <template #title><div class="text-main-blue">SERVICE #1</div></template>
      <template #shadowTitle
        ><div class="text-main-blue">SERVICE #1</div></template
      >
      <template #service-features
        ><div class="text-main-blue">Service features</div></template
      >
      <template #description
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </template>
      <template #icon>
        <div>
          <Icon
            icon="material-symbols:arrow-circle-right-outline-rounded"
            class="w-[40px] h-[40px] text-main-blue"
          />
        </div>
      </template>
      <template #service_1
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_2
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_3
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_4
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
    </ServicesDetailsCard>
    <div class="relative flex justify-center w-[50%] -m-6 z-10">
      <video autoplay muted loop class="w-[75%] h-auto bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
  </div>
  <div class="flex justify-between mb-40 bg-main-blue pt-36 text-white">
    <div class="relative flex justify-center w-[50%] -m-6 z-10">
      <video autoplay muted loop class="w-[75%] h-auto bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
    <ServicesDetailsCard class="text-white">
      <template #title>SERVICE #1</template>
      <template #shadowTitle>SERVICE #1</template>

      <template #description
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.</template
      >
      <template #icon>
        <Icon
          icon="material-symbols:arrow-circle-right-outline-rounded"
          class="w-[40px] h-[40px] text-white"
        />
      </template>
      <template #service_1
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_2
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_3
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_4
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
    </ServicesDetailsCard>
  </div>
  <div class="flex justify-between mb-40">
    <ServicesDetailsCard>
      <template #title><div class="text-main-blue">SERVICE #3</div></template>
      <template #shadowTitle
        ><div class="text-main-blue">SERVICE #3</div></template
      >
      <template #service-features
        ><div class="text-main-blue">Service features</div></template
      >
      <template #description
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </template>
      <template #icon>
        <div>
          <Icon
            icon="material-symbols:arrow-circle-right-outline-rounded"
            class="w-[40px] h-[40px] text-main-blue"
          />
        </div>
      </template>
      <template #service_1
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_2
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_3
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
      <template #service_4
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</template
      >
    </ServicesDetailsCard>
    <div class="relative flex justify-center w-[50%] -m-6 z-10">
      <video autoplay muted loop class="w-[75%] h-auto bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
  </div>
  <SectionCertificates></SectionCertificates>
</template>
<script setup>
import ServicesDetailsCard from "./ServicesDetailsCard.vue";
import SectionCertificates from "./SectionCertificates.vue";
import serviceVideo_1 from "@/assets/videos/bg-services-video-1.mp4";
import { Icon } from "@iconify/vue";
</script>
