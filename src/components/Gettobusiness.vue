<template>
  <section class="text-center mb-10 flex justify-center items-center flex-col">
    <h2
      id="gettobusiness"
      class="text-white text-4xl font-bold leading-relaxed mb-5"
    >
      Get to
      <span class="bg-white px-2 py-1 text-red-500 rounded-xl">BUSINESS</span>
    </h2>

    <div class="mx-auto mb-5">
      <Brightlogoslogan class="xs:w-full w-60 s:w-60" />
    </div>

    <p class="text-white text-lg">
      We like to keep it simple. Therefore, feel free to fill this
      <span
        class="underline text-red-500 font-bold hover:text-red-400 hover:no-underline cursor-pointer"
      >
        <a href="/">form</a>
      </span>
      to contact Energy team.
    </p>
  </section>
</template>

<script>
import Secondarybtn from "./Secondarybtn.vue";
import Brightlogoslogan from "./SVGs/Brightlogoslogan.vue";
import Card from "./Card.vue";

export default {
  components: {
    Secondarybtn,
    Card,
    Brightlogoslogan,
  },
};
</script>

<style></style>
