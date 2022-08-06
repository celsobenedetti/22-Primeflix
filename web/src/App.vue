<script setup lang="ts">
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <main class="pb-16 h-screen">
    <router-view />
  </main>
  <FooterBar />
</template>
