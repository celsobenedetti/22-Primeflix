<script setup lang="ts">
import { LogoutIcon } from "@heroicons/vue/solid";
import { useStore } from "./store";

const store = useStore();
store.dispatch("configTMDB");
store.dispatch("fetchBookmarks");
</script>

<template>
  <!-- <header class="shadow" v-if="$route.meta.title"></header> -->
  <main class="overflow-y-auto pb-16 h-screen">
    <router-view />
  </main>
</template>
