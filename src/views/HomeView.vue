<template>
  <main class="relative h-screen flex justify-center items-center">
    <div class="z-10">
      <Hero />
    </div>
    <div class="absolute left-0 right top-0 h-full w-full z-0">
      <Vidbg />
    </div>
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
