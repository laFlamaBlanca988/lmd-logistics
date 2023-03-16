<template>
  <SectionTitle
    main-title="ABOUT US"
    shadow-title="ABOUT US"
    class="mb-8"
  ></SectionTitle>
  <div
    class="flex flex-col justify-center gap-8 mb-10 text-xl lg:flex-row sm:text-xl lg:text-2xl px-[10%] sm:flex xl:px-[20%]"
  >
    <div class="w-full lg:w-3/6">
      At our company, we are dedicated to providing top-notch cargo transport
      and logistics services to our clients. With a team of experienced
      professionals and a fleet of modern trucks and equipment, we are equipped
      to handle any challenge that comes our way. Whether it's local or
      long-distance transport, warehousing and distribution, or supply chain
      management, we are committed to delivering timely, efficient, and
      cost-effective solutions that meet our clients' needs. Trust us to handle
      your cargo with care.
    </div>
    <div class="w-full lg:w-3/6">
      We have built our reputation on a foundation of hard work, dedication, and
      a commitment to excellence that has allowed us to thrive in a constantly
      evolving industry. Despite our traditional roots, we are constantly
      looking to the future and implementing new technologies and strategies to
      stay ahead of the curve. We believe that innovation and forward-thinking
      are key to our continued success, and we are always exploring new ways to
      improve our services and exceed our clients' expectations.
    </div>
  </div>
  <SectionCertificates class="mb-10"></SectionCertificates>

  <div
    class="flex flex-col justify-center mb-20 lg:flex-row text-xl sm:text-xl lg:text-2xl px-[10%] gap-8 sm:flex xl:px-[20%]"
  >
    <div class="flex flex-col w-full lg:w-3/6">
      <div class="mb-2 text-4xl text-main-blue italic font-extrabold">
        MISSION
      </div>

      <div class="w-full">
        Our mission is to provide reliable and efficient cargo transportation
        and logistics services to businesses and individuals around the world,
        while prioritizing safety, sustainability, and customer satisfaction.
      </div>
    </div>
    <div class="flex flex-col w-full lg:w-3/6">
      <div class="mb-2 text-4xl text-main-blue italic font-extrabold">
        VISION
      </div>

      <div class="w-full">
        Our vision is to be the leading cargo transportation and logistics
        company, recognized for our excellence in service, innovation, and
        commitment to our clients' success.
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center mb-10">
    <div class="text-4xl text-main-red italic font-extrabold">OUR PARTNERS</div>
    <div
      class="w-full px-[10%] xl:px-[20%] text-xl lg:w-3/4 sm:text-xl lg:text-2xl"
    >
      We recognizes that our clients are at the heart of everything we do, and
      we prioritize their needs above all else
    </div>
  </div>
</template>
<script setup>
import SectionTitle from "./SectionTitle.vue";
import SectionCertificates from "./SectionCertificates.vue";
</script>
