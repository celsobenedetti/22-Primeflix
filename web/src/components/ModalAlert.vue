<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
});

const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div
    @click="() => emit('close-modal')"
    class="flex fixed top-0 justify-center items-center p-6 w-screen h-full bg-red-50 rounded-xl bg-tr-dark"
  >
    <div
      @click="(e) => e.stopPropagation()"
      class="flex flex-col justify-around items-center p-4 rounded-xl border bg-main-100 border-dark min-w-[250px]"
    >
      <h1 class="font-bold">{{ props.title }}</h1>
      <p class="text-center whitespace-pre-line">{{ props.content }}</p>
      <button
        @click="() => emit('close-modal')"
        class="py-1 px-10 my-4 font-bold rounded-lg border shadow-sm bg-main-500 text-secondary border-dark shadow-gray-900"
      >
        Ok
      </button>
    </div>
  </div>
</template>
