<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue";
import BaseButton from "../components/ButtonBase.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <TheHeader class="max-w" />
  <main class="main max-w">
    <section class="landing_section">
      <h1>HABITUE</h1>
      <h2>Contries info</h2>
      <p>Ache o que procura sobre os países aqui.</p>

      <section class="call__action">
        <BaseButton :label="'Explorar'" />
      </section>
    </section>

    <section class="hero__img">
      <img src="src/assets/svgs/world.svg" />
    </section>
  </main>

  <section class="world__map__section max-w">
    <div class="wrap">
      <img src="src/assets/svgs/world_map.svg" />
      <p>
        Descubra informações e curiosidades sobre países ao redor do mundo 🌎.
      </p>
      <BaseButton :label="'Descobrir'" />
    </div>
  </section>

  <TheFooter class="max-w" />
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
