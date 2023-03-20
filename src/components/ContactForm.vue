<template>
  <form class="m-10 h-[120%] w-[50%] rounded-2xl border bg-white shadow-xl">
    <div class="flex flex-col p-6">
      <div class="flex flex-col">
        <p class="text-2xl text-main-blue">CONTACT US</p>
        <h3 class="text-4xl font-bold">Drop Us A Message</h3>
      </div>
      <div class="my-4 flex flex-col gap-4">
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-2xl"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-2xl"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="h-[50px] border-b-2">
          <input
            class="h-full w-full bg-white text-2xl placeholder-black outline-none placeholder:text-2xl"
            type="text"
            placeholder="Phone"
          />
        </div>

        <p class="text-2xl">Message:</p>

        <textarea
          class="rounded-xl border-2 bg-white p-4 text-2xl"
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <button
        class="mt-2 flex h-[59px] w-[241px] items-center justify-center gap-2 rounded-lg bg-main-red p-4 text-white hover:bg-button-hover"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</template>
<script setup></script>
