<script setup lang="ts">
import { BookmarkIcon, StarIcon } from "@heroicons/vue/outline";
import { computed } from "@vue/reactivity";
import { useStore } from "../../store";

const store = useStore();
const posterBaseUrl = store.getters.posterUrlTMDB;
const genresMap = store.getters.genresMap;

const props = defineProps({
  id: Number,
  title: String,
  releaseDate: String,
  genreIds: Array<string>,
  posterPath: String,
});

const genres = computed(() => {
  return props.genreIds?.reduce((genreString, genreId) => {
    return genresMap.get(genreId) + ",  " + genreString;
  }, "");
});

const posterUrl = `${posterBaseUrl}/${props.posterPath}`;
</script>

<template>
  <div class="flex gap-5 justify-between m-auto w-11/12 text-light">
    <img class="w-24 rounded-3xl shadow-xl shadow-gray-900" :src="posterUrl" alt="" />
    <div class="flex flex-col justify-center w-full">
      <div>
        <h3 class="font-bold">Title:</h3>
        <p class="text-sm">{{ props.title }}</p>
      </div>
      <div>
        <h3 class="font-bold">Release date:</h3>
        <p class="text-sm">{{ props.releaseDate }}</p>
      </div>
      <div>
        <h3 class="font-bold">Genres:</h3>
        <p class="text-sm">{{ genres }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-4 justify-center">
      <BookmarkIcon class="w-6 text-inactive" />
      <StarIcon class="w-6" />
    </div>
  </div>
</template>
