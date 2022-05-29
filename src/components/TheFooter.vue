<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <div>
      <h2>Contries Data</h2>
      <a href="https://github.com/luccasalves" target="_blank">
        By Lucas alves
      </a>
    </div>

    <div>
      <h2>{{ t("footer.test") }}</h2>
      <a href="https://instruct.com.br" target="_blank">Instruct</a>
    </div>

    <i class="devicon-github-original"></i>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/css/variables";
.footer {
  padding: 3.2rem 1.6rem;
  padding-top: 1rem;
  color: var(--color-light);
  display: flex;
  gap: 4rem;

  h2 {
    font-size: 1.2rem;
  }
  a,
  p {
    font-size: 1rem;
  }

  a {
    color: var(--color-text-highlight);
    &:hover {
      color: var(--color-highlight);
    }
  }
}
</style>
