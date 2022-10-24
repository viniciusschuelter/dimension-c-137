<template>
  <div class="home">
    <SelectLocation :location-list="locationList" />
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
  locationList: LocationModel[] = []
  characterList: CharacterModel[] = []
  subs: Subscription = new Subscription()

  mounted() {
    this.getLocations()
  }

  beforeDestroy() {
    this.subs.unsubscribe()
  }

  getLocations(): void {
    this.subs.add(
      getLocations()
        .pipe()
        .subscribe((locations: LocationModel[]) => {
          this.locationList = locations
          const chars = this.locationList[0].residents.map(
            (_) => _.split('/').reverse()[0]
          )
          this.getMultiCharacters(chars)
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
}
</script>
