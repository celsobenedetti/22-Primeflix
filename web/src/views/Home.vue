<script setup lang="ts">
import FooterBar from "@/components/FooterBar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import SearchBar from "@/components/home/SearchBarHome.vue";
import MovieCard from "@/components/home/MovieCard.vue";

import { useGetTMDB } from "../api";

const { isLoading, data, execute } = useGetTMDB("movie/now_playing");
const log = () => console.log({ data: data.value });
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div class="flex flex-col gap-5 bg-main-900" v-else>
    <header class="flex gap-1 items-center p-2 mx-7 mt-4 w-full text-xl">
      <p class="text-light">Primeflix</p>
    </header>
    <SearchBar />

    <MovieCard
      v-for="result in data.results"
      :key="result.id"
      :id="result.id"
      :title="result.title"
      :releaseDate="result.release_date"
      :posterPath="result.poster_path"
      :genreIds="result.genre_ids"
      :voteAverage="result.vote_average"
    />
    <button @click="log">johson</button>
  </div>
  <FooterBar />
</template>
