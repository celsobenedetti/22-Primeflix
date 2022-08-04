<script setup>
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <div>
    <header class="shadow" v-if="$route.meta.title"></header>
    <main>
      <router-view />
    </main>
    <FooterBar>Johnson</FooterBar>
  </div>
</template>
