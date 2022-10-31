<template>
  <div class="home">
    <SearchCharacter v-on:input="page = 1; getCharacters($event)" />
    <CharacterGrid :character-list="characterList" />
    <Paginator v-if="!searchTerm" :page="page" :page-count="pageCount" v-on:page="page = $event; getCharacters()" />
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
  searchTerm = ''

  mounted() {
    this.getCharacters()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getCharacters(name = ''): void {
    this.searchTerm = name
    this.$store.dispatch('toogleLoading');
    this.subs.add(
      getCharacters({ name, page: this.page})
        .pipe()
        .subscribe((response: { results: CharacterModel[], info: {count: number} }) => {
          this.pageCount = response.info.count
          this.characterList = [...response.results]
          this.$store.dispatch('toogleLoading');
        })
    )
  }
}
</script>
