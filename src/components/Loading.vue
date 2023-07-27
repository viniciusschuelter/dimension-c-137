<template>
  <div class="flex flex-col justify-center items-center white-overlay">
    <img class="w-[24rem]" src="@/assets/loading.png" />
    <h1 class="text-4xl text-cyan-200">Loading...</h1>
  </div>
</template>

<script setup></script>

<style scoped>
.white-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  margin: 0;
}
</style>
