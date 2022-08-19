<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { LogoutIcon } from "@heroicons/vue/outline";

import FooterBar from "@/components/FooterBar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieCard from "@/components/MovieCard.vue";
import ModalAlert from "@/components/ModalAlert.vue";

import { useGetTMDB } from "../api";
import { useStore } from "../store";

const store = useStore();
store.dispatch("fetchBookmarks");

const router = useRouter();

const { isLoading, data } = useGetTMDB("movie/now_playing");

const showModal = ref(false);
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div class="flex flex-col gap-5 bg-main-900" v-else>
    <header class="flex gap-1 justify-between items-center p-2 mx-7 mt-4 w-full text-xl">
      <p class="font-bold text-light">Primeflix</p>
      <LogoutIcon
        v-if="store.getters.sessionToken"
        @click="store.commit('logUserOut')"
        class="mr-11 w-7 cursor-pointer text-inactive"
      />
    </header>
    <SearchBar @click="$router.push('/search')" />

    <MovieCard
      v-for="result in data.results"
      @show-signin-modal="showModal = true"
      :key="result.id"
      :id="result.id"
      :title="result.title"
      :releaseDate="result.release_date"
      :posterPath="result.poster_path"
      :genreIds="result.genre_ids"
      :voteAverage="result.vote_average"
    />
  </div>

  <FooterBar />

  <ModalAlert
    v-if="showModal"
    title="Login required"
    content="You must be logged in to set Bookmarks"
    buttonText="Login"
    @close-modal-button="router.push('/signin')"
    @close-modal-x="showModal = false"
  />
</template>
