<script setup lang="ts">
import { filterByIdiom } from "..//data/query/filter-by-idiom";
import { ArrowLeftIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppSelectContinent from "../components/AppSelectContinent.vue";
import AppSelectLang from "../components/AppSelectLang.vue";
import { filterByContinent } from "../data/query/filter-by-continent";

const router = useRouter();
const show = ref(false);

function handleClick(code: string) {}

async function handleChangeContinent(code: string) {
  show.value = false;
  await filterByContinent(code);
  show.value = true;
}
async function handleChangeIdiom(l: string) {
  filterByIdiom(l);
}

function backPage(): void {
  router.push("/");
}
</script>

<template>
  <main class="max-w animate__animated animate__fadeInRight slower">
    <button @click="backPage" style="color: white">
      <ArrowLeftIcon class="icon" />
    </button>
    <section class="actions">
      <label>
        <p>Continente</p>
        <AppSelectContinent
          @continentSelected="handleChangeContinent($event)"
        />
      </label>

      <label v-if="show">
        <p>Idiomas</p>
        <AppSelectLang @idiomSelected="handleChangeIdiom($event)" />
      </label>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../css/variables.css";
* {
  box-sizing: border-box;
}
.actions {
  padding: 0.5rem 1.6rem;

  border-radius: 8px;
  background: var(--color-dark-2);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  .checkbox {
    height: 25px;
    width: 25px;
  }
}

.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.6rem;
  background-color: #343249e0;

  transition: 400ms;
  min-height: 100px;

  max-height: 500px;
  color: var(--color-light);
  font-size: large;
  span {
    cursor: pointer;
    transition: 400ms;
    &:hover {
      color: #02dd97;
    }
  }
}

main {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url(src/assets/svgs/world_map.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 1.6rem;

  .icon {
    width: 30px;
    color: #02dd97;

    &:active {
      color: white;
    }
  }

  p {
    color: white;
    font-size: 1.2rem;
  }
}
</style>
