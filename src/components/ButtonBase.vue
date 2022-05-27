<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
    },
  },
});
</script>

<template>
  <button class="btn">{{ label }} ✨</button>
</template>

<style lang="scss" scoped>
@import "src/css/variables";
.btn {
  cursor: pointer;
  background: var(--color-highlight);
  padding: 0.8rem 2.4rem;
  min-width: 80px;
  border-radius: 8px;

  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-dark-0);

  transition: 400ms;

  &:hover {
    background: var(--color-dark-0);
    color: white;
  }
}
</style>
