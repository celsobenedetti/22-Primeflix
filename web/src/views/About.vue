<script setup>
import { ref } from "vue";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

let show = ref(true);
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10"
      >
        About Page
        <br />
        <TransitionRoot
          :show="show"
          enter="transition transform duration-300 ease-out"
          enter-from="translate-x-4 opacity-0"
          enter-to="translate-x-0 opacity-100"
          leave="transition transform duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
          class="text-indigo-600"
        >
          <TransitionChild
            enter="transition transform duration-300 ease-out"
            enter-from="rotate-90 opacity-0 scale-50"
            enter-to="opacity-0 scale-100 opacity-100"
            leave="transition transform duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            >Vite</TransitionChild
          >
          <TransitionChild
            enter="transition transform duration-300 ease-out"
            enter-from="translate-x-4 opacity-0"
            enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            >Vue</TransitionChild
          >
          <TransitionChild>Tailwind</TransitionChild>
        </TransitionRoot>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-indigo-600 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
            >Back Home</router-link
          >
        </div>

        <div @click="show = !show" class="inline-flex ml-3 rounded-md shadow">
          <p
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-indigo-600 bg-white rounded-md border border-transparent transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none"
          >
            Show
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
