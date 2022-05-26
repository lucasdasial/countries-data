<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import "animate.css";
</script>
<template>
  <TheHeader class="max-w" />

  <router-view />

  <TheFooter class="max-w" />
</template>
