<template>
  <div class="flex flex-col text-center mx-6 h-[inherit]">
    <img class="w-[12rem] mx-auto mb-8" src="@/assets/plumbus.png" />
    <Typer />
    <div class="aspect-w-16 aspect-h-9 h-[36rem] mt-5">
      <iframe
          class="w-full h-full"
        src="https://www.youtube.com/embed/SWMGd_rzRdY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Typer from '@/components/Typer'

@Component({
  components: {
    Typer,
  },
})
export default class Plumbus extends Vue {}
</script>
