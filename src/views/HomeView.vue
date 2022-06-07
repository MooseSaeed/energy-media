<template>
  <main class="min-h-screen flex justify-center items-center">
    <Hero />
    <Vidbg />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Vidbg from "../components/Vidbg.vue";
export default {
  name: "Homepage",
  components: {
    Hero,
    Vidbg,
  },
};
</script>

<style></style>
