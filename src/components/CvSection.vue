<template>
  <div :class="['p-4 rounded-lg shadow-lg', bgColor]">
    <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  bgColor: {
    type: String,
    default: 'bg-gray-100 dark:bg-gray-800',
  },
});
</script>
