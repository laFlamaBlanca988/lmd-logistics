<template>
  <form
    action=""
    class="my-4 w-full rounded-2xl border bg-white shadow-xl xl:my-10 2xl:h-[120%] 2xl:w-3/6"
    @submit.prevent="sendEmail"
  >
    <div class="flex flex-col p-6">
      <div class="flex flex-col">
        <p class="text-lg font-bold text-main-blue xl:text-xl 2xl:text-2xl">
          CONTACT US
        </p>
        <h3 class="font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Drop Us A Message
        </h3>
      </div>
      <div class="my-4 flex flex-col gap-2 2xl:gap-4">
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-2xl"
            type="text"
            placeholder="Name"
            v-model="name"
          />
        </div>
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-2xl"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-2xl"
            type="text"
            placeholder="Phone"
            v-model="phone"
          />
        </div>

        <p class="text-lg xl:text-xl 2xl:text-2xl">Message:</p>

        <textarea
          v-model="message"
          class="rounded-xl border-2 bg-white p-4 text-2xl"
          cols="50"
        ></textarea>
      </div>
      <button
        class="mt-2 flex h-[59px] w-full items-center justify-center gap-2 rounded-lg bg-main-red p-4 text-white hover:bg-button-hover md:w-[241px]"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</template>
<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
</script>
