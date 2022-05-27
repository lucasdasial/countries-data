<script setup lang="ts">
import ButtonTranslate from "../components/ButtonTranslate.vue";
</script>

<template>
  <header class="header">
    <h1>Contries data 🌐</h1>
    <ButtonTranslate />
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 700;
  }
}
</style>
