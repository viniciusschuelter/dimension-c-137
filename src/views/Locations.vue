<template>
  <div class="home">
    <SelectLocation v-on:selectedLocation="selectedLocation($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script setup lang="ts">
import CharacterGrid from '@/components/CharacterGrid.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { LocationModel } from '@/models/location.model'
import { getLocations } from '@/services/location.service'
import { getMultiCharacters } from '@/services/character.service'
import SelectLocation from '@/components/SelectLocation.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import store from '@/store'

const characterList = ref<CharacterModel[]>([])
const subs: Subscription = new Subscription()

onMounted(() => {
  if (store.state.locations.length) {
    selectedLocation()
  } else {
    getLocations()
  }
})

onBeforeUnmount(() => {
  subs.unsubscribe()
})

function getLocations(): void {
  store.dispatch('toogleLoading')
  subs.add(
    getLocations()
      .pipe()
      .subscribe((locations: LocationModel[]) => {
        store.dispatch('fetchLocations', locations)
        store.dispatch('toogleLoading')
        selectedLocation()
      })
  )
}

function getMultiCharacters(chars: string[]): void {
  store.dispatch('toogleLoading')
  subs.add(
    getMultiCharacters(chars)
      .pipe()
      .subscribe((chars: CharacterModel[]) => {
        characterList.value = [...chars]
        this.$store.dispatch('toogleLoading')
      })
  )
}

function selectedLocation(locationId?: number): void {
  const episode =
    store.state.locations.find((_) => _.id == locationId) || store.state.locations[0]
  const chars = episode.residents.map((_) => _.split('/').reverse()[0])
  getMultiCharacters(chars)
}
</script>
