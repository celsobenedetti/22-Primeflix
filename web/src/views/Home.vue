<script setup lang="ts">
import Logo from "@/assets/logo.png";
import LoadingScreen from "@/components/LoadingScreen.vue";
import SearchBar from "@/components/home/SearchBarHome.vue";
import MovieCard from "@/components/home/MovieCard.vue";

import { useGetTMDB } from "../api";
import { useStore } from "../store";

const store = useStore();
store.dispatch("configTMDB");

const { isLoading, data, execute } = useGetTMDB("movie/upcoming");
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div class="bg-main-900" v-else>
    <header class="flex gap-1 justify-center items-center p-2 w-full text-xl">
      <p class="text-light">Primeflix</p>
      <img :src="Logo" class="w-8 h-8" alt="" />
    </header>
    <SearchBar />

    <MovieCard v-for="result in data.results" :key="result.id" :id="result.id" />
  </div>
</template>
