<template>
  <div class="home">
    <SearchCharacter v-on:input="getCharacters($event)" />
    <CharacterGrid :character-list="characterList" />
    <Paginator :page="page" :page-count="pageCount" v-on:page="page = $event; getCharacters()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CharacterGrid from '@/components/CharacterGrid.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import Paginator from '@/components/Paginator.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { getCharacters } from '@/services/character.service'

@Component({
  components: {
    CharacterGrid,
    SearchCharacter,
    Paginator
  },
})
export default class Home extends Vue {
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()
  page = 1
  pageCount = 0

  mounted() {
    this.getCharacters()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getCharacters(name = ''): void {
    this.subs.add(
      getCharacters({ name, page: this.page})
        .pipe()
        .subscribe((reponse: { results: CharacterModel[], info: {count: number} }) => {
          this.pageCount = reponse.info.count
          this.characterList = [...reponse.results]
        })
    )
  }
}
</script>
