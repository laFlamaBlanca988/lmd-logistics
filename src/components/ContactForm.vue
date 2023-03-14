<template>
  <form class="m-10 border rounded-2xl shadow-xl w-[55%] h-[135%] bg-white">
    <div class="flex flex-col p-6">
      <div class="flex flex-col">
        <p class="text-2xl text-main-blue">CONTACT US</p>
        <h3 class="text-4xl font-bold">Drop Us A Message</h3>
      </div>
      <div class="flex flex-col my-4 gap-4">
        <div class="border-b-2 h-[50px]">
          <input
            class="bg-white h-full w-full outline-none placeholder-black placeholder:text-2xl"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="border-b-2 h-[50px]">
          <input
            class="bg-white h-full w-full outline-none placeholder-black placeholder:text-2xl"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="border-b-2 h-[50px]">
          <input
            class="bg-white h-full w-full outline-none placeholder-black placeholder:text-2xl"
            type="text"
            placeholder="Phone"
          />
        </div>

        <p class="text-2xl">Message:</p>

        <textarea
          class="bg-white border-2 rounded-xl"
          rows="10"
          cols="50"
        ></textarea>
      </div>
      <button
        class="w-[241px] h-[59px] mt-4 bg-main-red p-4 flex items-center justify-center gap-2 text-white rounded-lg"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</template>
<script setup>
console.log(window.innerHeight);
</script>
