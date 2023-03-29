<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { usePokemonStore } from '@/store/pokemon';

const pokemon = usePokemonStore();
const { pokemonsName } = storeToRefs(pokemon);
</script>

<template>
  <h3>About page</h3>
  <p>Pokemons list</p>
  <div>{{ pokemonsName }}</div>
</template>
