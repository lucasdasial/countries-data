<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";
const router = useRouter();

function backPage(): void {
  router.push("/");
}
</script>

<template>
  <button @click="backPage" style="color: white">
    <ArrowLeftIcon class="icon" />
  </button>
</template>

<style lang="scss">
@import "src/css/variables";
.icon {
  cursor: pointer;
  width: 30px;
  margin-bottom: 16px;
  color: var(--color-highlight);

  border-radius: 50%;

  &:hover {
    background: var(--color-dark-0);
  }
  &:active {
    color: var(--color-light);
  }
}
</style>
