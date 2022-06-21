<template>
  <section class="text-center mb-10 flex justify-center items-center flex-col">
    <h2
      id="gettobusiness"
      class="text-white text-4xl font-bold leading-relaxed mb-5"
    >
      لنبدأ
      <span class="bg-white px-2 py-1 text-red-500 rounded-xl">العمل معاً</span>
    </h2>

    <div class="mx-auto mb-5">
      <Brightlogoslogan class="xs:w-full w-60 s:w-60" />
    </div>

    <p class="text-white text-lg">
      نحن نفضل أن نجعل الأمور بسيطة. نتيجة لذلك ، لا تتردد في الاتصال بفريق
      انرچي عبر رقم الواتساب التجاري
    </p>
    <p
      class="underline text-red-500 font-bold hover:text-red-400 hover:no-underline"
    >
      +2 0100 694 7137
    </p>
  </section>
</template>

<script>
import Secondarybtn from "../Secondarybtn.vue";
import Brightlogoslogan from "../SVGs/Brightlogoslogan.vue";

export default {
  components: {
    Secondarybtn,
    Brightlogoslogan,
  },
};
</script>

<style></style>
