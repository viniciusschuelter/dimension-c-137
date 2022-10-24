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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CharacterCard from '@/components/CharacterCard.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import { CharacterModel } from '@/models/character.model'

export enum ModuleEnum {
  character = 'character',
  episode = 'episode',
  location = 'location',
}

@Component({
  components: {
    CharacterCard,
    SearchCharacter,
  },
})
export default class CharacterGrid extends Vue {
  @Prop() characterList: CharacterModel[]
}
</script>

<style scoped>
.grid-container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
