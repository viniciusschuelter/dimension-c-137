<template>
  <div class="home">
    <SelectEpisode :episode-list="episodeList" v-on:selectedEpisode="selectedEpisode($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CharacterGrid from '@/components/CharacterGrid.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { EpisodeModel } from '@/models/episode.model'
import { getEpisodes } from '@/services/episode.service'
import { getMultiCharacters } from '@/services/character.service'
import SelectEpisode from "@/components/SelectEpisode.vue";

@Component({
  components: {
    CharacterGrid,
    SelectEpisode
  },
})
export default class Episodes extends Vue {
  episodeList: EpisodeModel[] = []
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    this.getEpisodes()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getEpisodes(): void {
    this.subs.add(
      getEpisodes()
        .pipe()
        .subscribe((episodes: EpisodeModel[]) => {
          this.episodeList = episodes
          this.selectedEpisode()
        })
    )
  }

  getMultiCharacters(chars: string[]): void {
    this.subs.add(
      getMultiCharacters(chars)
        .pipe()
        .subscribe((chars: CharacterModel[]) => (this.characterList = chars))
    )
  }

  selectedEpisode(episodeId?: number): void {
    const episode = this.episodeList.find( _ => _.id == episodeId) || this.episodeList[0];
    const chars = episode.characters.map((_) => _.split('/').reverse()[0]);
    this.getMultiCharacters(chars);
  }
}
</script>
