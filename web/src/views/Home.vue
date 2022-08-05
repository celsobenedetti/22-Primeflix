<script setup lang="ts">
import Logo from "@/assets/logo.png";
import LoadingScreen from "@/components/LoadingScreen.vue";
import SearchBar from "@/components/home/SearchBarHome.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "../store";

const store = useStore();
const isLoading = computed(() => store.getters.isLoading);
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div class="bg-main-900" v-else>
    <div class="flex gap-1 justify-center items-center p-2 w-full text-xl">
      <p class="text-light">Primeflix</p>
      <img :src="Logo" class="w-8 h-8" alt="" />
    </div>
    <SearchBar />
  </div>
</template>
