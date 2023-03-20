<template>
  <Header></Header>
  <Navbar></Navbar>

  <router-view></router-view>
</template>
<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
const innerWidth = window.innerWidth;
</script>
