<template>
  <div class="search-container mb-4 px-2 w-full">
    <div class="relative">
      <div class="absolute left-0 inset-y-0 pl-3 flex items-center">
        <svg
          class="fill-current h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
      </div>

      <input
        class="w-full bg-[#f0e14a] border pl-12 pr-4 py-2 text-[#3a2376] rounded-full border-orange-300 focus:border-orange-500 focus:shadow-outline outline-none"
        type="text"
        :autofocus="true"
        placeholder="Search..."
        @input="debounceSearch($event.target.value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue'

  let debounce: any = null
  const emits = defineEmits<{ input: any }>()

  const debounceSearch = (search: string) => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      emits('input', search)
    }, 500)
  }
</script>

<style scoped>
  .search-container {
    max-width: 1280px;
    margin: 0 auto 24px auto;
  }
</style>
