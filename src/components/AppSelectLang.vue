<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref, watch } from "vue";
const store = useContinentStore();

const emit = defineEmits(["idiomSelected"]);

const idioms = ref(store.getLangs);

const lang = ref("");
</script>

<template>
  <select v-model="lang" @change="$emit('idiomSelected', lang)">
    <option value="" selected disabled>Selecione um idioma</option>
    <option v-for="(lang, i) in idioms" key="i">
      {{ lang }}
    </option>
  </select>
</template>
