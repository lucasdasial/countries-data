<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const emit = defineEmits(["continentSelected"]);
const { t } = useI18n();
const contient = ref("");
const store = useContinentStore();
</script>

<template>
  <select v-model="contient" @change="$emit('continentSelected', contient)">
    <option value="" selected disabled>{{ t("label.select-cont") }}</option>
    <option value="SA">{{ t("continent.sa") }}</option>
    <option value="AF">{{ t("continent.af") }}</option>
    <option value="AS">{{ t("continent.as") }}</option>
    <option value="EU">{{ t("continent.eu") }}</option>
    <option value="NA">{{ t("continent.na") }}</option>
    <option value="OC">{{ t("continent.oc") }}</option>
  </select>
</template>
