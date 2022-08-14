<script setup lang="ts">
import FooterBar from "@/components/FooterBar.vue";
import NoResultsLogo from "@/assets/search.svg";

import LoadingScreen from "@/components/LoadingScreen.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieCard from "@/components/MovieCard.vue";

import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { useTMDBSearch } from "../api";

const { data, isLoading, execute } = useTMDBSearch();
</script>

<template>
  <header class="flex justify-between py-4 px-4 w-full text-light citems-center">
    <ArrowLeftIcon @click="$router.go(-1)" class="w-7" />
    <h1 class="font-bold">Search</h1>
    <div></div>
  </header>
  <SearchBar @debounce="execute" />

  <LoadingScreen v-if="isLoading" />
  <main v-else class="mt-10 w-full">
    <template></template>
    <div v-if="data?.results?.length" class="flex flex-col gap-5">
      <MovieCard
        v-for="result in data.results?.filter((result:any) => result.poster_path)"
        :key="result.id"
        :id="result.id"
        :title="result.title"
        :releaseDate="result.release_date"
        :posterPath="result.poster_path"
        :genreIds="result.genre_ids"
        :voteAverage="result.vote_average"
      />
    </div>

    <div v-else class="flex flex-col items-center mt-32 w-full">
      <img :src="NoResultsLogo" alt="noResults" />
      <h1 v-if="data" class="text-lg font-bold text-light">No results found :(</h1>
      <h2 class="font-bold text-inactive">Find your movie by title</h2>
    </div>
  </main>
  <FooterBar />
</template>
