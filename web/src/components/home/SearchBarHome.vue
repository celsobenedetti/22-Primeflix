<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="relative w-[90%] mx-auto">
    <input
      type="text"
      placeholder="Search"
      class="w-full rounded-2xl border-none text-light bg-main-700 placeholder:text-inactive"
    />
    <SearchIcon class="absolute top-2 right-2 w-6 text-inactive" />
  </div>
</template>
