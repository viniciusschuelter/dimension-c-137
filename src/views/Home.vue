<template>
  <div class="home">
    <SearchCharacter @input="fetchCharacters($event)" />
    <CharacterGrid :character-list="characterList" />
    <Paginator
      v-if="!searchTerm"
      :page="page"
      :page-count="pageCount"
      @page="fetchCharacters(searchTerm, $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import CharacterGrid from '../components/CharacterGrid.vue'
  import SearchCharacter from '../components/SearchCharacter.vue'
  import Paginator from '../components/Paginator.vue'
  import { CharacterModel } from './../models/character.model'
  import { Subscription } from 'rxjs'
  import { getCharacters } from '../services/character.service'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'

  const characterList = ref<CharacterModel[]>([])
  const subs: Subscription = new Subscription()
  const store = useStore()

  const page = ref<number>(1)
  const pageCount = ref<number>(0)
  const searchTerm = ref<string>('')

  onMounted(() => {
    fetchCharacters()
  })

  onBeforeUnmount(() => {
    subs.unsubscribe()
  })

  function fetchCharacters(name = '', currPage = 1): void {
    page.value = currPage
    searchTerm.value = name
    store.dispatch('toogleLoading')
    subs.add(
      getCharacters({ name, page: currPage })
        .pipe()
        .subscribe(
          (response: { results: CharacterModel[], info: { count: number} }) => {
            pageCount.value = response.info.count
            characterList.value = [...response.results]
            store.dispatch('toogleLoading')
          }
        )
    )
  }
</script>
