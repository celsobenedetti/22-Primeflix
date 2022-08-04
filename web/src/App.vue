<script setup>
import { ref } from "vue";

let counter = ref(0);
let myState = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header class="shadow  bg-main-900" v-if="$route.meta.title">
      <div class="py-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 @click="counter = 0" class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }} / {{ counter }}
        </h1>
      </div>

      <div class="py-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 @click="myState++" class="text-3xl font-bold leading-tight text-gray-900">
          {{ myState }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
