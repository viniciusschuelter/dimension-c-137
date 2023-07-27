<template>
  <div class="select-container mb-4 px-2 w-full">
    <select
      class="w-full bg-[#f0e14a] border px-4 py-2 text-[#3a2376] rounded-full border-orange-300 focus:border-orange-500 focus:shadow-outline outline-none"
      @change="$emit('selectedLocation', $event.target.value)"
    >
      <option
        v-for="opt in store.state.locations"
        :key="opt.id"
        :value="opt.id"
      >
        {{ opt.name }} - {{ opt.dimension }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<style scoped>
  .select-container {
    max-width: 1280px;
    margin: 0 auto 24px auto;
  }
</style>
