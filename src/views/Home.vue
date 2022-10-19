<template>
  <div class="home">
    <CharacterGrid msg="Welcome to Your Vue.js + TypeScript App" />
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
export default class Home extends Vue {}
</script>
