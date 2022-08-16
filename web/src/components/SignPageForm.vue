<script setup lang="ts">
import ModalAlert from "@/components/ModalAlert.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  isSignUp: Boolean,
});

let showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const handleSubmit = async () => {
  showModal.value = true;
};
</script>

<template>
  <h1 class="my-8 text-4xl font-bold text-secondary">Primeflix</h1>
  <form
    @submit.prevent="handleSubmit"
    action="#"
    class="flex flex-col gap-3 justify-center px-12 pt-7 pb-5 w-10/12 rounded-xl shadow h-fit shadow-gray-900 bg-main-700"
  >
    <div v-if="props.isSignUp" class="w-full">
      <label for="name" class="mx-1 text-lg font-bold text-secondary">Name</label>
      <input
        type="name"
        placeholder="Name"
        name="name"
        class="p-2 w-full rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
    </div>

    <div class="w-full">
      <label for="email" class="mx-1 text-lg font-bold text-secondary">Email</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        class="p-2 w-full rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
    </div>

    <div class="w-full">
      <label for="password" class="mx-1 text-lg font-bold text-secondary">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        class="p-2 w-full rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
    </div>

    <button
      class="p-2 my-3 mx-auto w-1/2 font-bold rounded-xl border shadow shadow-gray-900 text-secondary bg-main-600 border-secondary"
    >
      {{ props.isSignUp ? "Sign up" : "Login" }}
    </button>
  </form>
  <h1
    @click="router.push(`${props.isSignUp ? '/signin' : '/signup'}`)"
    class="p-2 underline cursor-pointer text-secondary underline-offset-4"
  >
    {{ props.isSignUp ? "Have an account? Sign in." : "Dont have an account? Sign up." }}
  </h1>
  <ModalAlert
    v-if="showModal"
    title="modal maneiro"
    content="content content"
    @close-modal="closeModal"
  />
</template>
