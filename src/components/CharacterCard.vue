<template>
  <div class="card-container card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
    <a href="#">
      <img class="w-full h-64 rounded-md transition hover:bg-cyan-300"
           :src="character.image"
           alt="">
    </a>
    <div id="description" class="space-y-4">
      <a href="#">
        <h2 class="text-white font-semibold text-xl transition hover:text-cyan-300">
          {{ character.name }}
        </h2>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CharacterModel } from '@/models/character.model'

@Component
export default class CharacterCard extends Vue {
  @Prop() character!: CharacterModel
}
</script>
