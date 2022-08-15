<script setup lang="ts">
import ModalAlert from "@/components/ModalAlert.vue";
import { ref } from "vue";

let showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const handleSubmit = async () => {
  console.log("dale");
  showModal.value = true;
};
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-full">
    <h1 class="my-8 text-4xl font-bold text-secondary">Primeflix</h1>
    <form
      @submit.prevent="handleSubmit"
      action="#"
      class="flex flex-col gap-3 justify-center py-20 px-12 w-10/12 h-4/6 rounded-xl shadow shadow-gray-900 bg-main-700"
    >
      <label for="email" class="mx-1 text-lg font-bold text-secondary">Email</label>
      <input
        type="text"
        placeholder="email"
        name="email"
        class="rounded-lg border shadow-sm focus:ring-1 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
      <label for="password" class="mx-1 text-lg font-bold text-secondary">Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        class="rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
      <button
        class="p-2 my-3 mx-auto w-1/2 font-bold rounded-xl border shadow shadow-gray-900 text-secondary bg-main-600 border-secondary"
      >
        Login
      </button>
    </form>
    <ModalAlert
      v-if="showModal"
      title="modal maneiro"
      content="content content"
      @close-modal="closeModal"
    />
  </main>
</template>
