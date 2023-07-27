<template>
  <div class="home">
    <SearchCharacter
      v-on:input="
        page = 1
        getCharacters($event)
      "
    />
    <CharacterGrid :character-list="characterList" />
    <Paginator
      v-if="!searchTerm"
      :page="page"
      :page-count="pageCount"
      v-on:page="
        page = $event
        getCharacters()
      "
    />
  </div>
</template>

<script setup lang="ts">
import CharacterGrid from '@/components/CharacterGrid.vue'
import SearchCharacter from '@/components/SearchCharacter.vue'
import Paginator from '@/components/Paginator.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { getCharacters } from '@/services/character.service'
import { onBeforeUnmount, onMounted, ref } from 'vue/dist/vue'
import store from '@/store'

const characterList = ref<CharacterModel[]>([])
const subs: Subscription = new Subscription()

const page = ref<number>(1)
const pageCount = ref<number>(0)
const searchTerm = ref<string>('')

onMounted(() => {
  getCharacters()
})

onBeforeUnmount(() => {
  subs.unsubscribe()
})

function getCharacters(name = ''): void {
  searchTerm.value = name
  store.dispatch('toogleLoading')
  subs.add(
    getCharacters({ name, page: page.value })
      .pipe()
      .subscribe((response: { results: CharacterModel[]; info: { count: number } }) => {
        pageCount.value = response.info.count
        characterList.value = [...response.results]
        store.dispatch('toogleLoading')
      })
  )
}
</script>
