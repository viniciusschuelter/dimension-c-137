<template>
  <header>
    <h1 class="text-orange-700 font-extrabold">{{title}}</h1>
  </header>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() title!: string;
}
</script>
