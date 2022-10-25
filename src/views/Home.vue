<template>
  <div class="home">
    <SearchCharacter v-on:input="getCharacters($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CharacterGrid from '@/components/CharacterGrid.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { getCharacters } from '@/services/character.service'

@Component({
  components: {
    CharacterGrid,
    SearchCharacter
  },
})
export default class Home extends Vue {
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    this.getCharacters()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getCharacters(name = ''): void {
    this.subs.add(
      getCharacters({ name })
        .pipe()
        .subscribe((chars: CharacterModel[]) => (this.characterList = [...chars]))
    )
  }
}
</script>
