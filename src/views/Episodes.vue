<template>
  <div class="home">
    <CharacterGrid />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterGrid from "@/components/CharacterGrid.vue";

@Component({
  components: {
    CharacterGrid,
  },
})
export default class Episodes extends Vue {}
</script>
