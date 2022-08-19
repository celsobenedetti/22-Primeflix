<script setup lang="ts">
import { HomeIcon, SearchIcon, BookmarkIcon } from "@heroicons/vue/outline";
import { computed, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

import ModalAlert from "@/components/ModalAlert.vue";
import { useStore } from "../store";

const route = useRoute();
const router = useRouter();
const store = useStore();

const isSearch = route.path == "/search";
const isWatchlist = route.path == "/watchlist";
const isHome = !isSearch && !isWatchlist;

const sessionToken = computed(() => store.getters.sessionToken);

const showSignInModal = ref(false);

const clickBookmark = () => {
  if (!sessionToken.value) return (showSignInModal.value = true);
  router.push("/watchlist");
};
</script>

<template>
  <footer
    class="flex fixed bottom-0 z-10 justify-around items-center w-full h-16 border-t-2 border-gray-600 bg-main-700 text-inactive"
  >
    <div
      @click="$router.push('/')"
      class="flex flex-col gap-1 items-center cursor-pointer"
      :class="isHome && 'text-secondary'"
    >
      <HomeIcon class="w-7" />
      <h5 class="text-xs">Home</h5>
    </div>

    <div
      @click="$router.push('/search')"
      class="flex flex-col gap-1 items-center cursor-pointer"
      :class="isSearch && 'text-secondary'"
    >
      <SearchIcon class="w-7" />
      <h5 class="text-xs">Search</h5>
    </div>

    <div class="flex flex-col gap-1 items-center cursor-pointer">
      <BookmarkIcon @click="clickBookmark" class="w-7" :class="isWatchlist && 'text-secondary'" />
      <h5 class="text-xs">Watchlist</h5>
    </div>
  </footer>

  <ModalAlert
    v-if="showSignInModal"
    title="Login required"
    content="You must be logged in to use Bookmarks"
    buttonText="Login"
    @close-modal-button="router.push('/signin')"
    @close-modal-x="showSignInModal = false"
  />
</template>
