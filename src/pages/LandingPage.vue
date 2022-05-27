<script setup lang="ts">
import BaseButton from "../components/ButtonBase.vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

function goToApp(): void {
  router.push("/app");
}
</script>

<template>
  <main class="animate__animated animate__fadeInRight slower">
    <main class="main max-w">
      <section class="landing_section">
        <p>{{ t("homepage.hello") }}</p>
        <h1>HABITUE</h1>
        <h2>Countries data</h2>
        <p>{{ t("homepage.landing.subtitle") }}</p>

        <section class="call__action">
          <BaseButton :label="t('label.explorer')" @click="goToApp" />
        </section>
      </section>

      <section class="hero__img">
        <img
          src="src/assets/svgs/world.svg"
          alt="Imagem ilustrativa do globo"
        />
      </section>
    </main>

    <section class="world__map__section max-w">
      <div class="wrap">
        <img
          src="src/assets/svgs/world_map.svg"
          alt="Imagem ilustrativa do mapa mundo"
        />
        <p>{{ t("homepage.worldmap.text") }} 🌎.</p>
        <BaseButton :label="t('label.discover')" @click="goToApp" />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "src/css/variables";
* {
  box-sizing: border-box;
}

.main {
  overflow: hidden;
  position: relative;

  padding: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  .landing_section {
    max-width: 600px;
    min-width: 350px;

    position: relative;
    // top: 60px;
    z-index: 10;

    h1 {
      line-height: 1;
      font-size: 3.2rem;
      font-weight: 700;

      background: -webkit-linear-gradient(#06619b, #02dd97);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--color-light);
    }
    p {
      font-size: 1.6rem;
      color: var(--color-dark-3);
    }
  }

  .hero__img {
    display: flex;
    justify-content: end;
    img {
      width: 90%;
      max-width: 700px;
    }
  }
}

.world__map__section {
  padding: 1.6rem;
  text-align: center;

  .wrap {
    background: white;
    padding: 1.6rem;

    p {
      font-size: 1.6rem;
      color: var(--color-dark-3);
      margin: 3.2rem 0;
    }

    img {
      width: 90%;
      max-width: 600px;
    }
  }
}
.call__action {
  padding: 16px 0;
}
</style>
