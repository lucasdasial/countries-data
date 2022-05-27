<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref } from "vue";

const emit = defineEmits(["continentSelected"]);

const contient = ref("");
const store = useContinentStore();
</script>

<template>
  <select v-model="contient" @change="$emit('continentSelected', contient)">
    <option value="" selected disabled>Selecione um continente</option>
    <option value="SA">America do sul</option>
    <option value="AF">Africa</option>
    <option value="AS">Asia</option>
    <option value="EU">Europa</option>
    <option value="NA">America do norte</option>
    <option value="OC">Oceania</option>
  </select>
</template>
