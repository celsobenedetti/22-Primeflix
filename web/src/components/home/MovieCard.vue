<script setup lang="ts">
const props = defineProps({
  id: Number,
});
</script>

<template>
  <div class="flex w-full bg-red-300">{{ props.id }}</div>
</template>
