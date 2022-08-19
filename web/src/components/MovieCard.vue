<script setup lang="ts">
import { BookmarkIcon as BookmarkIconOutline, DotsHorizontalIcon } from "@heroicons/vue/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/vue/solid";
import { StarIcon } from "@heroicons/vue/solid";
import { computed } from "@vue/reactivity";
import { postToggleBookmark } from "../api";
import { useStore } from "../store";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  releaseDate: {
    type: String,
    default: "",
  },

  genreIds: {
    type: Array<number>,
    default: [],
  },
  posterPath: {
    type: String,
    default: "",
  },
  voteAverage: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["showSigninModal", "toggleBookmark"]);

const store = useStore();

const sessionToken = computed(() => store.getters.sessionToken);
const posterBaseUrl = computed(() => store.getters.posterUrlTMDB);
const genreNames = computed(() => store.getters.genresMap);
const bookmarks = computed(() => store.getters.bookmarks);

const isBookmarked = computed(() => {
  const wasBookmarked = bookmarks.value?.some(({ id_tmdb: tmdbId }: any) => tmdbId === props.id);
  return (wasBookmarked || response.value?.status === 201) && response.value?.status !== 204;
});

const posterUrl = computed(() => `${posterBaseUrl.value}/${props.posterPath}`);

const formattedGenres = computed(() =>
  props.genreIds
    ?.reduce((genresString, genreId) => genreNames.value?.get(genreId) + ", " + genresString, "")
    .slice(0, -2),
);

const { isLoading, execute, response } = postToggleBookmark(
  { ...props, id_tmdb: props.id },
  sessionToken.value,
);

const clickBookmark = async () => {
  if (!sessionToken.value) return emit("showSigninModal");
  if (isLoading.value) return;

  await execute();
  emit("toggleBookmark");
};
</script>

<template>
  <div class="flex gap-6 justify-between m-auto w-11/12 text-light">
    <img
      @click="$router.push(`movies/${props.id}`)"
      class="w-24 h-36 rounded-3xl shadow-xl cursor-pointer shadow-gray-900"
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
      <DotsHorizontalIcon v-if="isLoading" />
      <template v-else>
        <BookmarkIconSolid
          v-if="isBookmarked"
          @click="clickBookmark"
          class="w-6 cursor-pointer text-secondary"
        />
        <BookmarkIconOutline
          v-else
          @click="clickBookmark"
          class="w-6 cursor-pointer text-inactive"
        />
      </template>

      <div class="flex flex-col items-center">
        <StarIcon class="w-6 text-secondary" />
        <h4 class="text-sm">{{ props.voteAverage }}</h4>
      </div>
    </div>
  </div>
</template>
