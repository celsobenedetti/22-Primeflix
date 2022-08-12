<script setup lang="ts">
import FooterBar from "./components/FooterBar.vue";
import { useStore } from "./store";

const store = useStore();
store.dispatch("configTMDB");
</script>

<template>
  <!-- <header class="shadow" v-if="$route.meta.title"></header> -->
  <main class="overflow-y-auto pb-16 h-screen">
    <router-view />
  </main>
  <FooterBar>Johnson</FooterBar>
</template>
