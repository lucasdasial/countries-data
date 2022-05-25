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
.btn {
  cursor: pointer;
  background: #02dd97;
  padding: 0.8rem 2.4rem;
  min-width: 80px;
  border-radius: 8px;

  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  color: #1e212b;

  transition: 400ms;

  &:hover {
    background: #1e212b;
    color: white;
  }
}
</style>
