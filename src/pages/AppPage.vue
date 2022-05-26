<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";

const router = useRouter();

function backPage() {
  router.push("/");
}
</script>

<template>
  <main class="max-w animate__animated animate__fadeInRight slower">
    <button @click="backPage" style="color: white">
      <ArrowLeftIcon class="icon" />
    </button>
  </main>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
main {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url(src/assets/svgs/world_map.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  .icon {
    width: 30px;
    color: #02dd97;

    &:active {
      color: white;
    }
  }
}
</style>
