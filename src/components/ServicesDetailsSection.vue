<template>
  <div class="mb-40 flex justify-between">
    <ServicesDetailsCard>
      <template #title
        ><div class="text-main-blue">FREIGHT TRANSPORTATION</div></template
      >
      <template #shadowTitle
        ><div class="text-main-blue">TRANSPORTATION</div></template
      >
      <template #description-top
        >Freight transportation is the backbone of global commerce, responsible
        for the movement of goods across vast distances and multiple modes of
        transportation. From shipping containers on massive cargo ships to
        pallets on semi-trucks, freight transportation is essential for
        businesses of all sizes to reach customers around the world. With a
        range of transportation options available, including air, rail, sea, and
        road, companies can choose the best mode of transportation to meet their
        shipping needs.
      </template>
      <template #description-bottom
        >Whether it's delivering raw materials to a factory or transporting
        finished products to retail stores, reliable freight transportation is
        critical to the success of any supply chain. By partnering with a
        trusted freight transportation provider, businesses can ensure that
        their products arrive on time and in good condition, no matter where
        they are headed.
      </template>
    </ServicesDetailsCard>
    <div class="relative z-10 flex w-[50%] justify-center">
      <video autoplay muted loop class="h-auto w-[75%] bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
  </div>
  <div class="mb-40 flex justify-center px-[8%] py-36">
    <div class="6 relative z-10 flex w-[50%] justify-center">
      <video autoplay muted loop class="h-auto w-[75%] bg-transparent">
        <source :src="serviceVideo_1" type="video/mp4" />
      </video>
    </div>
    <ServicesDetailsCard>
      <template #title
        ><div class="text-main-blue">FREIGHT BROKERAGE</div></template
      >
      <template #shadowTitle
        ><div class="text-main-blue">BROKERAGE</div></template
      >

      <template #description-top
        >Freight brokerage is a service that connects shippers and carriers to
        facilitate the transportation of goods. At its core, freight brokerage
        involves matching the shipping needs of businesses with available
        transportation capacity. Brokers act as intermediaries, negotiating
        rates and contracts between shippers and carriers to ensure the timely
        and efficient delivery of goods.
      </template>
      <template #description-bottom
        >With their deep knowledge of the transportation industry, freight
        brokers can help businesses streamline their supply chain and reduce
        shipping costs. By partnering with a reputable freight brokerage firm,
        companies can benefit from a range of services, including freight
        tracking, logistics management, and customs clearance.
      </template>
    </ServicesDetailsCard>
  </div>

  <SectionCertificates></SectionCertificates>
</template>
<script setup>
import ServicesDetailsCard from "./ServicesDetailsCard.vue";
import SectionCertificates from "./SectionCertificates.vue";
import serviceVideo_1 from "@/assets/videos/bg-services-video-1.mp4";
import { Icon } from "@iconify/vue";
</script>
