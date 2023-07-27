<template>
  <header>
    <h1 class="text-orange-700 font-extrabold">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string }>()
</script>
