<template>
  <!-- Place this tag where you want the button to render. -->
  <a
    class="github-button"
    href="https://github.com/viniciusschuelter"
    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
    data-size="large"
    aria-label="Follow @viniciusschuelter on GitHub"
    >Follow</a
  >
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GithubButton extends Vue {}
</script>
