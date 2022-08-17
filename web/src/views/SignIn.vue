<script setup lang="ts">
import SignForm from "@/components/SignPageForm.vue";
import { signInSchema } from "../services/validation";
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-full">
    <SignForm :isSignUp="false" :formSchema="signInSchema" />
  </main>
</template>
