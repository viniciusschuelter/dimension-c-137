<template>
  <div class="font-sans antialiased pb-8" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-[#F29901] p-6">
      <div class="flex items-center flex-no-shrink text-cyan-200 mr-6">
        <span class="font-semibold text-xl tracking-tight">Dimension C-137</span>
      </div>
      <div class="block sm:hidden">
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
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-xl sm:flex-grow text-center" id="nav">
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-4"
            to="/"
            >Home</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-4"
            to="/about"
            >About</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-4"
            to="/episodes"
            >Episodes</router-link
          >
          <router-link
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-cyan-200 shover:text-white mr-4"
            to="/locations"
            >Locations</router-link
          >
        </div>
        <div>
          <a
            href="#"
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0"
            >Download</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  open = false

  constructor() {
    super()
    this.$el
  }

  toggle() {
    this.open = !this.open
  }
}
</script>
