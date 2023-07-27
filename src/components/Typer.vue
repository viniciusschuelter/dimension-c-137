<template>
  <div>
    <Typer
      :onInit="
        (typewriter) => {
          typewriter
            .typeString('<h1>Plumbus</h1>')
            .pauseFor(1000)
            .changeDelay(20)
            .typeString(
              'Everyone has a plumbus in their home.<br> First they take the dingle bop and they smooth it out with a bunch of schleem.<br> The schleem is then...repurposed for later batches.<br>They take the dingle bop and they push it through the grumbo, where the fleeb is rubbed against it.<br> It\'s important that the fleeb is rubbed, becasue the fleeb has all the fleeb juice.<br>Then, a schlami shows up, and he rubs it...and spits on it.<br>They cut the fleeb. There\'s several hizzards in the way.<br>The blamfs rub against the chumbles, and the...plubis, and grumbo are shaved away.<br>That leaves you with...a regular old plumbus.'
            )
            .start()
        }
      "
      :options="{ wrapperClassName: 'font-bold', delay: 50 }"
    />
  </div>
</template>

<script setup lang="ts">
  import { applyPureReactInVue } from 'veaury'
  import Typewriter from 'typewriter-effect'

  const Typer = applyPureReactInVue(Typewriter)
</script>
