<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/outline";

import MagixBox from "@/assets/magic-box.svg";
import FooterBar from "@/components/FooterBar.vue";
import MovieCard from "@/components/MovieCard.vue";

import { computed } from "@vue/reactivity";
import { useStore } from "../store";

const store = useStore();
const fetchBookmarks = () => store.dispatch("fetchBookmarks");
fetchBookmarks();

const bookmarks = computed(() => store.getters.bookmarks);
</script>

<template>
  <header class="flex justify-between py-4 px-4 w-full text-light citems-center">
    <ArrowLeftIcon @click="$router.go(-1)" class="w-7" />
    <h1 class="font-bold">Watch list</h1>
    <div></div>
  </header>
  <div
    v-if="!bookmarks?.length"
    class="flex flex-col gap-3 justify-center items-center m-auto w-full h-full"
  >
    <img :src="MagixBox" alt="" />
    <h1 class="text-inactive">There are no movies yet</h1>
  </div>
  <div v-else class="flex flex-col gap-3 py-6">
    <MovieCard
      v-for="bookmark in bookmarks"
      @toggleBookmark="fetchBookmarks"
      :key="bookmark.id_tmdb"
      :id="bookmark.id_tmdb"
      :title="bookmark.title"
      :releaseDate="bookmark.releaseDate"
      :posterPath="bookmark.posterPath"
      :genreIds="bookmark.genreIds"
      :voteAverage="bookmark.voteAverage"
    />
  </div>

  <FooterBar />
</template>
