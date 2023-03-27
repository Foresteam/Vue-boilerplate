<script lang="ts" setup>
  import { usePokemonStore } from '@/store/pokemon';
  import { storeToRefs } from 'pinia';

  const pokemon = usePokemonStore();
  const { pokemonsName } = storeToRefs(pokemon);
</script>

<template>
  <h3>About page</h3>
  <p>Pokemons list</p>
  <div>{{ pokemonsName }}</div>
</template>
