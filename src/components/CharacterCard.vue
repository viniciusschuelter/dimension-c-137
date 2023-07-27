<template>
  <div
    class="card-container card bg-[#97ce4c] w-100 h-[32rem] rounded-xl p-6 space-y-4 text-[#3a2376] hover:text-[#4644b3] cursor-pointer ease-out duration-300 hover:scale-105 relative"
    :class="{ 'hover:grayscale': character.status === 'Dead' }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="ribbon ribbon-top-right ease-out duration-300" v-show="hover">
      <span>{{ character.status }}</span>
    </div>
    <div
      class="absolute text-center pt-20 pl-20"
      v-show="hover && character.status === 'Dead'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-[5rem]"
        fill="white"
      >
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM224 256c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128 64c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
        />
      </svg>
    </div>
    <img
      class="w-full h-64 rounded-md transition hover:bg-cyan-300"
      :src="character.image"
      alt=""
    />
    <div id="description" class="space-y-4">
      <h2 class="font-semibold text-xl transition tracking-widest truncate">
        {{ character.name }}
      </h2>

      <p class="text-slate-500 text-sm font-bold select-none h-[3.5rem]">
        {{ character.name }} is from {{ character.origin.name }}, and your type is
        {{ character.type || 'unknown' }}
      </p>
      <div
        class="flex items-center justify-between font-bold text-sm text-slate-500 border-b border-slate-500 pb-3"
      >
        <span id="price" class="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="w-[10px] mr-1"
            fill="#3a2376"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M208 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM152 352V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
            />
          </svg>
          {{ character.species }}
        </span>
        <span class="flex justify-between items-center select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="w-[1rem] mr-1"
            fill="#3a2376"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M176 288c61.9 0 112-50.1 112-112s-50.1-112-112-112S64 114.1 64 176s50.1 112 112 112zM352 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H208v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0H616c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z"
            />
          </svg>
          {{ character.gender }}
        </span>
      </div>

      <div class="flex text-sm items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="w-[1rem]"
          fill="#3a2376"
        >
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
          />
        </svg>
        <h2 class="ml-2 truncate tracking-widest">{{ character.location.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CharacterModel } from '@/models/character.model'
import { ref } from 'vue'

const props = defineProps<{ character: CharacterModel }>()

const hover = ref(false)
</script>

<style scoped>
/* common */
.ribbon {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 190px;
  padding: 8px 16px 8px 0;
  background-color: #3498db;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 'Lato', RickAndMorty;
  letter-spacing: 2px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}
</style>
