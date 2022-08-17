<script setup lang="ts">
import ModalAlert from "@/components/ModalAlert.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { ZodObject } from "zod";
import { usePostServer } from "../api";

import { IForm } from "../interfaces";
import { validateSignForm } from "../services/validation";
import { useStore } from "../store";

const router = useRouter();
const store = useStore();

const props = defineProps({
  isSignUp: Boolean,
  formSchema: {
    type: ZodObject<IForm>,
    default: {},
  },
});

const endpoint = "v1/auth" + `${props.isSignUp ? "/signup" : "/signin"}`;

const formInput = ref({
  email: "",
  password: "",
  name: "",
});

const { execute, isLoading } = usePostServer(endpoint, { data: formInput.value });

const modalAlert = ref({
  title: "",
  content: "",
});

const closeAlert = () => (modalAlert.value.content = "");
const activateAlert = (title: string, content: string) => (modalAlert.value = { title, content });

const handleSubmit = async () => {
  const formErrors = validateSignForm(props.formSchema, formInput.value);
  if (formErrors) return activateAlert("Invalid form input", formErrors);

  const { data, error } = await execute();

  if (error.value) {
    return activateAlert(
      error.value.response?.statusText || "Something went wrong",
      error.value.response?.data?.message || ":(",
    );
  }

  const { token } = data.value;
  store.commit("setToken", token);
  router.push("/");
};
</script>

<template>
  <h1 @click="router.push('/')" class="my-8 text-4xl font-bold text-secondary">Primeflix</h1>
  <LoadingScreen v-if="isLoading" />
  <form
    v-else
    @submit.prevent="handleSubmit"
    action="#"
    class="flex flex-col gap-3 justify-center px-12 pt-7 pb-5 w-10/12 rounded-xl shadow h-fit shadow-gray-900 bg-main-700"
  >
    <div v-if="props.isSignUp" class="w-full">
      <label for="name" class="mx-1 text-lg font-bold text-secondary">Name</label>
      <input
        v-model="formInput.name"
        type="name"
        placeholder="Name"
        name="name"
        class="p-2 w-full rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
    </div>

    <div class="w-full">
      <label for="email" class="mx-1 text-lg font-bold text-secondary">Email</label>
      <input
        v-model="formInput.email"
        type="text"
        placeholder="Email"
        name="email"
        class="p-2 w-full rounded-lg border shadow-sm focus:ring-2 border-secondary text-dark bg-main-terciary focus:ring-secondary focus:border-secondary focus:ouline-none"
      />
    </div>

    <div class="w-full">
      <label for="password" class="mx-1 text-lg font-bold text-secondary">Password</label>
      <input
        v-model="formInput.password"
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
    v-if="modalAlert.content"
    :title="modalAlert.title"
    :content="modalAlert.content"
    @close-modal-button="closeAlert"
    @close-modal-x="closeAlert"
  />
</template>
