<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
});

const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div class="fixed top-0 p-6 w-full max-w-md h-full rounded-xl min-w-[250px]">
    <div class="flex flex-col justify-around items-center">
      <h1 class="font-bold">{{ props.title }}</h1>
      <p class="text-center whitespace-pre-line">{{ props.content }}</p>
      <button @click="() => emit('close-modal')">Ok</button>
    </div>
  </div>
</template>
