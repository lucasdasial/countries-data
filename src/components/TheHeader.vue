<script lang="ts">
import { defineComponent } from "vue";
import { ChevronDownIcon, TranslateIcon } from "@heroicons/vue/solid";
import Logo from "../components/Logo.vue";

export default defineComponent({
  components: {
    Logo,
    ChevronDownIcon,
    TranslateIcon,
  },
});
</script>

<template>
  <header class="header">
    <h1>Contries info 🌐</h1>

    <button>
      <TranslateIcon class="icon icon--translate" />
      <ChevronDownIcon class="icon" />
    </button>
  </header>
</template>

<style lang="scss" scoped>
.icon {
  width: 30px;
  color: #02dd97;
}

.header {
  height: 60px;
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 700;
  }
}
</style>
