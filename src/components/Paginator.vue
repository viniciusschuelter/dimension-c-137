<template>
  <div class="flex justify-center mt-6">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li
          class="page-item"
          @click="page !== 1 ? goToPage(page - 1) : undefined"
        >
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded"
            :class="{
              'text-gray-500 pointer-events-none focus:shadow-none': page === 1,
            }"
            >Previous</a
          >
        </li>

        <li
          class="page-item"
          v-for="currPage in pages"
          :key="currPage"
          @click="goToPage(currPage)"
        >
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            :class="{ 'bg-[#F29901] text-white': currPage === page }"
            >{{ currPage }}</a
          >
        </li>

        <li
          class="page-item"
          @click="page !== pageCount ? goToPage(page + 1) : undefined"
        >
          <a
            class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            :class="{
              'text-gray-500 pointer-events-none focus:shadow-none':
                page === pageCount,
            }"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'

  const props = defineProps<{ page: number; pageCount: number }>()
  const emits = defineEmits<{ page: any }>()

  const pages = ref([1, 2, 3])

  const goToPage = (page: number): void => {
    pages.value = [page - 1 || 1, page, page + 1 || props.pageCount]
    emits('page', page)
  }
</script>
