<script setup lang="ts">
import { BookmarkIcon as BookmarkIconOutline, ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";

import LoadingScreen from "@/components/LoadingScreen.vue";
import { useGetTMDB } from "../api";
import { useStore } from "../store";
import { computed } from "@vue/reactivity";

const route = useRoute();

const store = useStore();
const posterBaseUrl = store.getters.posterUrlTMDB;
const backdropBaseUrl = store.getters.backdropUrlTMDB;

const { isLoading, data, execute } = useGetTMDB(`movie/${route.params.id}`);

const posterUrl = computed(() => `${posterBaseUrl}${data.value.poster_path}`);
const backdropUrl = computed(() => `${backdropBaseUrl}${data.value.backdrop_path}`);

const log = () => {
  console.log(posterUrl, backdropUrl);
};
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <header class="flex justify-between py-4 px-4 w-full text-light citems-center">
      <ArrowCircleLeftIcon @click="$router.go(-1)" class="w-7" />
      <h1 class="font-bold">Detail</h1>
      <BookmarkIconOutline @click="log" class="w-8" />
    </header>
    <img :src="backdropUrl" alt="johnson" />
    <div>This is a movie</div>
  </div>
</template>
