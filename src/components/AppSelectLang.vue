<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const store = useContinentStore();
const emit = defineEmits(["idiomSelected"]);
const { t } = useI18n();
const idioms = ref(store.getLangs);

const lang = ref("");
</script>

<template>
  <select v-model="lang" @change="$emit('idiomSelected', lang)">
    <option value="" selected disabled>{{ t("label.select-idiom") }}</option>
    <option v-for="(lang, i) in idioms" key="i">
      {{ lang }}
    </option>
  </select>
</template>
