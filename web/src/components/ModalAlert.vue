<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
});

const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div
    class="flex fixed top-0 justify-center items-center p-6 w-screen h-full bg-red-50 rounded-xl bg-tr-dark"
  >
    <div
      class="flex flex-col justify-around items-center py-4 max-w-md bg-red-200 rounded-xl min-w-[250px]"
    >
      <h1 class="font-bold">{{ props.title }}</h1>
      <p class="text-center whitespace-pre-line">{{ props.content }}</p>
      <button @click="() => emit('close-modal')">Ok</button>
    </div>
  </div>
</template>
