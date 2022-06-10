<template>
  <header class="relative h-screen flex justify-center items-center">
    <div class="absolute left-0 right top-0 h-full w-full z-0">
      <Vidbg />
    </div>
    <div class="z-10">
      <Hero />
    </div>
  </header>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
    <path
      fill="#000000"
      fill-opacity="1"
      d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,149.3C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
  <main>
    <Projects />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Vidbg from "../components/Vidbg.vue";
import Projects from "../components/Projects.vue";
export default {
  name: "Homepage",
  components: {
    Hero,
    Vidbg,
    Projects,
  },
};
</script>

<style></style>
