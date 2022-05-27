<script setup lang="ts">
import { loadCountryData } from "../data/query/country-data";
import { useRoute } from "vue-router";
import { useCountryStore } from "../stores/CountryStore";
import { ref, onBeforeMount } from "vue";
import ButtonBackPage from "../components/ButtonBackPage.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const countryStore = useCountryStore();
const { id } = route.params;
const country = ref();
onBeforeMount(async () => {
  await loadCountryData(id);
  country.value = countryStore.getCountry;
});
</script>

<template>
  <main class="main max-w animate__animated animate__fadeInRight slower">
    <ButtonBackPage />
    <h1 class="country__titlename">{{ country.name }}</h1>
    <section class="country__info">
      <p>
        🏛️ {{ t("label.capital") }}: <span>{{ country.capital }}</span>
      </p>
      <p>
        🪙 {{ t("label.currency-abbreviations") }}:
        <span>{{ country.currency }}</span>
      </p>
      <p>
        📞 {{ t("label.phone-code") }}: <span>+{{ country.phone }} </span>
      </p>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import "src/css/variables";
main {
  padding: 1.6rem;
  color: white;
  height: calc(100vh - 300px);

  .country__titlename {
    font-size: 2.4rem;
  }
  .country__info {
    p {
      color: var(--color-light);
      font-size: 1.2rem;
    }

    span {
      color: var(--color-text-highlight);
    }
  }
}
</style>
