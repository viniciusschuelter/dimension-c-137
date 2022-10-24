<template>
  <div>
    <SearchCharacter v-on:input="getChars($event)" />
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
import { Component, Vue } from 'vue-property-decorator'
import CharacterCard from '@/components/CharacterCard.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import { CharacterModel } from '@/models/character.model'
import { getCharacters } from '@/services/character.service'
import { Subscription } from 'rxjs'

@Component({
  components: {
    CharacterCard,
    SearchCharacter,
  },
})
export default class CharacterGrid extends Vue {
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    this.getChars()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getChars(name = ''): void {
    console.log(name)
    this.subs.add(
      getCharacters({ name })
        .pipe()
        .subscribe((chars: CharacterModel[]) => (this.characterList = chars))
    )
  }
}
</script>

<style scoped>
.grid-container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
