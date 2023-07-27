<template>
  <div class="home">
    <SelectEpisode @selectedEpisode="selectedEpisode($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script setup lang="ts">
  import CharacterGrid from '@/components/CharacterGrid.vue'
  import { CharacterModel } from './../models/character.model'
  import { Subscription } from 'rxjs'
  import { EpisodeModel } from './../models/episode.model'
  import { getEpisodes } from './../services/episode.service'
  import { getMultiCharacters } from './../services/character.service'
  import SelectEpisode from '@/components/SelectEpisode.vue'
  import store from './../store'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const characterList = ref<CharacterModel[]>([])
  const subs: Subscription = new Subscription()

  onMounted(() => {
    if (store.state.episodes.length) {
      selectedEpisode()
    } else {
      fetchEpisodes()
    }
  })

  onBeforeUnmount(() => {
    subs.unsubscribe()
  })

  function fetchEpisodes(): void {
    store.dispatch('toogleLoading')
    subs.add(
      getEpisodes()
        .pipe()
        .subscribe((episodes: EpisodeModel[]) => {
          store.dispatch('fetchEpisodes', episodes)
          store.dispatch('toogleLoading')
          selectedEpisode()
        })
    )
  }

  function fetchMultiCharacters(chars: string[]): void {
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

  function selectedEpisode(episodeId?: number): void {
    const episode =
      store.state.episodes.find((_) => _.id == episodeId) ||
      store.state.episodes[0]
    const chars = episode.characters.map((_) => _.split('/').reverse()[0])
    fetchMultiCharacters(chars)
  }
</script>
