<script setup lang="ts">
import { useContinentStore } from "../stores/ContinentStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { loadContinentData } from "../data/query/continent-data";
import { filterByIdiom } from "../data/useCases/filter-by-idiom";
import {
  filterMoreThanOneIdiom,
  filterJustOneIdiom,
  filterAllIdioms,
} from "../data/useCases/filter-by-idiom-quantity";

import AppSelectContinent from "../components/AppSelectContinent.vue";
import AppSelectLang from "../components/AppSelectLang.vue";
import AppSelectQuantityLang from "../components/AppSelectQuantityLang.vue";
import ButtonBackPage from "../components/ButtonBackPage.vue";

import { useLoading } from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const { t } = useI18n();
const router = useRouter();
const show = ref(false);
const store = useContinentStore();

const load = useLoading();

let countries = ref();

function handleClick(codeCountry: string) {
  router.push("/country/" + codeCountry);
}

async function handleChangeContinent(code: string) {
  const loader = load.show({
    color: "#02dd97",
    backgroundColor: "#343249e0",
    loader: "dots",
  });
  show.value = false;
  await loadContinentData(code);
  countries.value = store.getCountries;
  loader.hide();
  show.value = true;
}
async function handleChangeIdiom(l: string) {
  filterByIdiom(l);
  countries.value = store.getCountries;
}

async function handleChangeQuantiy(flag: string) {
  if (flag == "more") {
    filterMoreThanOneIdiom();
    countries.value = store.getCountries;
    return;
  }
  if (flag == "one") {
    filterJustOneIdiom();
    countries.value = store.getCountries;
    return;
  }
  filterAllIdioms();
  countries.value = store.getCountries;
}

function backPage(): void {
  router.back();
}
</script>

<template>
  <main class="max-w animate__animated animate__fadeInRight slower">
    <ButtonBackPage />
    <section class="actions__box">
      <label>
        <p>{{ t("label.continent") }}</p>
        <AppSelectContinent
          @continentSelected="handleChangeContinent($event)"
        />
      </label>
      <label v-if="show">
        <p>{{ t("label.idiom") }}</p>

        <AppSelectLang @idiomSelected="handleChangeIdiom($event)" />
      </label>
      <label v-if="show" l>
        <p>{{ t("label.idiom-quantity") }}</p>
        <AppSelectQuantityLang
          @quantitySelected="handleChangeQuantiy($event)"
        />
      </label>
    </section>

    <section v-if="show" class="box__list">
      <ul class="list">
        <li class="list__item" v-for="(country, i) in countries" :key="i">
          <span @click="handleClick(country.code)">
            {{ country.name }}
          </span>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../css/variables.css";
* {
  box-sizing: border-box;
}

main {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/svgs/world_map.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 1.6rem;

  p {
    color: white;
    font-size: 1rem;
  }

  .actions__box {
    padding: 0.5rem 1.6rem;
    border-radius: 8px;
    background: var(--color-dark-2);
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .box__list {
    margin-top: 10px;
    padding: 1.6rem;
    border-radius: 8px;
    background-color: var(--color-dark-tranparent);
    transition: 200ms;
    color: var(--color-light);
    font-size: large;

    .list {
      padding-bottom: 2rem;
      min-height: 100px;
      max-height: 500px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 8px;
    }

    .list__item {
      margin-right: 16px;
      width: 210px;

      span {
        cursor: pointer;
        transition: 400ms;
        &:hover {
          color: var(--color-highlight);
        }
      }
    }
  }
}
</style>
