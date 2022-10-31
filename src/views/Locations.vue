<template>
  <div class="home">
    <SelectLocation v-on:selectedLocation="selectedLocation($event)" />
    <CharacterGrid :character-list="characterList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CharacterGrid from '@/components/CharacterGrid.vue'
import { CharacterModel } from '@/models/character.model'
import { Subscription } from 'rxjs'
import { LocationModel } from '@/models/location.model'
import { getLocations } from '@/services/location.service'
import { getMultiCharacters } from '@/services/character.service'
import SelectLocation from "@/components/SelectLocation.vue";

@Component({
  components: {
    SelectLocation,
    CharacterGrid,
  },
})
export default class Locations extends Vue {
  locations: LocationModel[] = this.$store.state.locations;
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    if (this.locations.length) {
      this.selectedLocation()
    } else {
      this.getLocations()
    }
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getLocations(): void {
    this.$store.dispatch('toogleLoading');
    this.subs.add(
      getLocations()
        .pipe()
        .subscribe((locations: LocationModel[]) => {
          this.$store.dispatch('fetchLocations', locations);
          this.locations = locations
          this.$store.dispatch('toogleLoading');
          this.selectedLocation()
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

  selectedLocation(locationId?: number): void {
    const episode = this.locations.find( _ => _.id == locationId) || this.locations[0];
    const chars = episode.residents.map((_) => _.split('/').reverse()[0]);
    this.getMultiCharacters(chars);
  }
}
</script>
