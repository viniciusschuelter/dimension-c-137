<template>
  <div>
    <div
      class="grid-container grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg px-5"
    >
      <CharacterCard
        v-for="character in characterList"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import { CharacterModel } from '@/models/character.model'

export enum ModuleEnum {
  character = 'character',
  episode = 'episode',
  location = 'location',
}

const props = defineProps<{ characterList: CharacterModel[] }>()
</script>

<style scoped>
.grid-container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
