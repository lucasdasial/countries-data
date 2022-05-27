<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const store = useContinentStore();

const emit = defineEmits(["quantitySelected"]);
const { t } = useI18n();
const quantity = ref("");
</script>

<template>
  <select v-model="quantity" @change="$emit('quantitySelected', quantity)">
    <option value="" selected disabled>{{ t("label.select-quant") }}</option>
    <option value="more">{{ t("label.select-quant-opt-more") }}</option>
    <option value="one">{{ t("label.select-quant-opt-one") }}</option>
    <option value="all">{{ t("label.select-quant-opt-all") }}</option>
  </select>
</template>
