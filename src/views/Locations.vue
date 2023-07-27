<template>
  <div class="home">
    <SelectLocation @selectedLocation="selectedLocation($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script setup lang="ts">
  import CharacterGrid from '@/components/CharacterGrid.vue'
  import { CharacterModel } from '../models/character.model'
  import { Subscription } from 'rxjs'
  import { LocationModel } from '../models/location.model'
  import { getLocations } from '../services/location.service'
  import { getMultiCharacters } from './../services/character.service'
  import SelectLocation from '@/components/SelectLocation.vue'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'

  const characterList = ref<CharacterModel[]>([])
  const subs: Subscription = new Subscription()
  const store = useStore()

  onMounted(() => {
    if (store.state.locations.length) {
      selectedLocation()
    } else {
      fetchLocations()
    }
  })

  onBeforeUnmount(() => {
    subs.unsubscribe()
  })

  function fetchLocations(): void {
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

  function fetchtMultiCharacters(chars: string[]): void {
    store.dispatch('toogleLoading')
    subs.add(
      getMultiCharacters(chars)
        .pipe()
        .subscribe((chars: CharacterModel[]) => {
          characterList.value = [...chars]
          store.dispatch('toogleLoading')
        })
    )
  }

  function selectedLocation(locationId?: number): void {
    const episode =
      store.state.locations.find((_: LocationModel) => _.id == locationId) ||
      (store.state.locations[0] as any)
    const chars = episode.residents.map((_: any) => _.split('/').reverse()[0])
    fetchtMultiCharacters(chars)
  }
</script>
