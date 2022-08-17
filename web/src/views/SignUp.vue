<script setup lang="ts">
import SignForm from "@/components/SignPageForm.vue";
import { signUpSchema } from "../services/validation";
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-full">
    <SignForm :isSignUp="true" :formSchema="signUpSchema" />
  </main>
</template>
