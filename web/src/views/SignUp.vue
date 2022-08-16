<script setup lang="ts">
import SignForm from "@/components/SignPageForm.vue";
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-full">
    <SignForm :isSignUp="true" />
  </main>
</template>
