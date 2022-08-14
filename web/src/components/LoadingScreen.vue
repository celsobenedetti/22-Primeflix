<script setup lang="ts">
import Popcorn from "@/assets/popcorn.png";
</script>

<template>
  <div class="flex flex-col justify-center items-center m-auto h-full">
    <img :src="Popcorn" alt="Loading..." class="w-40 h-40" />
    <h1 class="text-2xl font-bold text-light">Loading...</h1>
  </div>
</template>
