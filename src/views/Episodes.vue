<template>
  <div class="home">
    <SelectEpisode v-on:selectedEpisode="selectedEpisode($event)" />
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
  episodes: EpisodeModel[] = this.$store.state.episodes;
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    if (this.episodes.length) {
      this.selectedEpisode()
    } else {
      this.getEpisodes()
    }
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getEpisodes(): void {
    this.$store.dispatch('toogleLoading');
    this.subs.add(
      getEpisodes()
        .pipe()
        .subscribe((episodes: EpisodeModel[]) => {
          this.$store.dispatch('fetchEpisodes', episodes);
          this.episodes = episodes;
          this.$store.dispatch('toogleLoading');
          this.selectedEpisode()
        })
    )
  }

  getMultiCharacters(chars: string[]): void {
    this.$store.dispatch('toogleLoading');
    this.subs.add(
      getMultiCharacters(chars)
        .pipe()
        .subscribe((chars: CharacterModel[]) => {
          this.characterList = [...chars]
          this.$store.dispatch('toogleLoading');
        })
    )
  }

  selectedEpisode(episodeId?: number): void {
    const episode = this.episodes.find( _ => _.id == episodeId) || this.episodes[0];
    const chars = episode.characters.map((_) => _.split('/').reverse()[0]);
    this.getMultiCharacters(chars);
  }
}
</script>
