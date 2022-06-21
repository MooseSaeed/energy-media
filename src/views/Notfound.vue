<template>
  <div
    class="h-screen flex flex-col text-white font-bold text-4xl justify-center items-center"
  >
    <Brightlogoslogan />
    <header class="mt-10 text-center">
      <h2>404</h2>
      <h3>Page Not Found!</h3>
    </header>

    <router-link class="hover:text-red-500 mt-10" to="/">
      <Secondarybtn> GET BACK HOME </Secondarybtn>
    </router-link>
  </div>
</template>

<script>
import Brightlogoslogan from "../components/SVGs/Brightlogoslogan.vue";
import Secondarybtn from "../components/Secondarybtn.vue";
export default {
  components: {
    Brightlogoslogan,
    Secondarybtn,
  },
};
</script>

<style></style>
