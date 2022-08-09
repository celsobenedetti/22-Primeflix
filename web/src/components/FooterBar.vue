<script setup lang="ts">
import { HomeIcon, SearchIcon, BookmarkIcon } from "@heroicons/vue/outline";
</script>

<template>
  <footer
    class="flex fixed bottom-0 justify-around items-center w-full h-16 border-t-2 border-inactive text-inactive"
  >
    <div class="flex flex-col gap-1 items-center">
      <HomeIcon class="w-7" />
      <h5 class="text-xs">Home</h5>
    </div>

    <div class="flex flex-col gap-1 items-center">
      <SearchIcon class="w-7" />
      <h5 class="text-xs">Search</h5>
    </div>

    <div class="flex flex-col gap-1 items-center">
      <BookmarkIcon class="w-7" />
      <h5 class="text-xs">Watchlist</h5>
    </div>
  </footer>
</template>
