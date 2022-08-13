<script setup lang="ts">
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";
import { useStore } from "../../store";

const props = defineProps({
  id: Number,
  title: String,
  releaseDate: String,
  genreIds: Array<string>,
  posterPath: String,
  voteAverage: Number,
});

const store = useStore();
const posterBaseUrl = store.getters.posterUrlTMDB;
const genreNames = store.getters.genresMap;

const posterUrl = `${posterBaseUrl}/${props.posterPath}`;

const formattedGenres = props.genreIds
  ?.reduce((genresString, genreId) => genreNames.get(genreId) + ", " + genresString, "")
  .slice(0, -2);
</script>

<template>
  <div class="flex gap-6 justify-between m-auto w-11/12 text-light">
    <img
      @click="$router.push(`movies/${props.id}`)"
      class="w-24 rounded-3xl shadow-xl cursor-pointer shadow-gray-900"
      :src="posterUrl"
      alt=""
    />
    <div class="flex flex-col justify-center w-full text-sm">
      <h3
        @click="$router.push(`movies/${props.id}`)"
        class="my-1 text-base font-bold rounded-md cursor-pointer"
      >
        {{ props.title }}
      </h3>
      <div class="mx-1 text-sm">
        <h3 class="font-bold text-secondary">Release date:</h3>
        <p class="mx-1">{{ props.releaseDate }}</p>
      </div>
      <div class="mx-1 text-sm">
        <h3 class="font-bold text-secondary">Genres:</h3>
        <p class="mx-1">{{ formattedGenres }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-4 justify-center">
      <BookmarkIconOutline class="w-6 text-inactive" />
      <div class="flex flex-col items-center">
        <StarIcon class="w-6" />
        <h4 class="text-sm">{{ props.voteAverage }}</h4>
      </div>
    </div>
  </div>
</template>
