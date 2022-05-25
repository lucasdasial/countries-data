<script setup lang="ts">
import { ChevronDownIcon, TranslateIcon } from "@heroicons/vue/solid";
import { ref, watch } from "vue";

const lang = ref(null);
const langs = ["PT", "EN"];

watch(lang, (currentVal) => {
  alert(currentVal);
});
</script>

<template>
  <div class="wrap">
    <TranslateIcon class="icon icon--translate" />
    <select v-model="lang">
      <option v-for="(lang, i) in langs">{{ lang }}</option>
    </select>
  </div>
</template>

<style lang="scss">
@import "src/css/variables";
.wrap {
  display: flex;
  align-items: center;
}
.icon {
  width: 30px;
  color: #02dd97;
}

select {
  color: white;
  background-color: var(--color-dark-1);
}
</style>
