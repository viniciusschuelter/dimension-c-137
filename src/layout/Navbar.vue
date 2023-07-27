<template>
  <div class="font-sans antialiased pb-8" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-[#F29901] p-6">
      <div class="flex items-center flex-no-shrink text-cyan-200 mr-6">
        <img class="rounded-full w-[3rem] mr-3" src="@/assets/logo.gif" />
        <h1 class="font-extrabold md:text-[2rem] text-[1rem] md:hidden lg:block">
          Dimension C-137
        </h1>
      </div>
      <div class="block md:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow md:flex md:items-center md:w-auto"
      >
        <div class="text-xl md:flex-grow text-center navbar" id="nav">
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-8"
            to="/"
            >Home</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-8"
            to="/plumbus"
            >Plumbus</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-8"
            to="/episodes"
            >Episodes</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 shover:text-white"
            to="/locations"
            >Locations</router-link
          >
        </div>
        <div class="text-center pt-3">
          <GithubButton />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GithubButton from '../components/GithubButton'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>
