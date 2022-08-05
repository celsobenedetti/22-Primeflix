<script setup lang="ts">
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <!-- <header class="shadow" v-if="$route.meta.title"></header> -->
  <main class="pb-16 h-screen">
    <router-view />
  </main>
  <FooterBar>Johnson</FooterBar>
</template>
