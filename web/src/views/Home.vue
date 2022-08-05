<script setup lang="ts">
import Logo from "@/assets/logo.png";
</script>

<template>
  <div class="bg-main-900">
    <div class="flex gap-1 justify-center items-center p-2 w-full text-xl">
      <p class="text-light">Primeflix</p>
      <img :src="Logo" class="w-8 h-8" alt="" />
    </div>
  </div>
</template>
