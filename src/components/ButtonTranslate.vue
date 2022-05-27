<script setup lang="ts">
import { TranslateIcon } from "@heroicons/vue/solid";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const lang = ref("");
const langs = ["pt", "en"];

const i18n = useI18n();

watch(lang, (currentVal) => {});
</script>

<template>
  <div class="wrap">
    <TranslateIcon class="icon icon--translate" />
    <select v-model="$i18n.locale" class="select--sm">
      <option v-for="(lang, i) in langs">{{ lang }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import "src/css/variables";
.wrap {
  display: flex;
  align-items: center;
}
.icon {
  width: 30px;
  color: var(--color-highlight);
}

select {
  color: white;
  background-color: var(--color-dark-2);

  option {
    color: var(--color-light);
  }
}
</style>
