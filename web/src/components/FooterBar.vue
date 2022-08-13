<script setup lang="ts">
import { HomeIcon, SearchIcon, BookmarkIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";

const route = useRoute();

const home = route.path == "/";
</script>

<template>
  <footer
    class="flex fixed bottom-0 z-10 justify-around items-center w-full h-16 border-t-2 border-gray-600 bg-main-700 text-inactive"
  >
    <div
      @click="$router.push('/')"
      class="flex flex-col gap-1 items-center cursor-pointer"
      :class="home && 'text-secondary'"
    >
      <HomeIcon class="w-7" />
      <h5 class="text-xs">Home</h5>
    </div>

    <div class="flex flex-col gap-1 items-center cursor-pointer">
      <SearchIcon class="w-7" />
      <h5 class="text-xs">Search</h5>
    </div>

    <div class="flex flex-col gap-1 items-center cursor-pointer">
      <BookmarkIcon class="w-7" />
      <h5 class="text-xs">Watchlist</h5>
    </div>
  </footer>
</template>
