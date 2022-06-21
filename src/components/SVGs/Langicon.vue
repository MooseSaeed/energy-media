<template>
  <div
    class="relative flex flex-col justify-center items-center"
    v-click-outside="onClickOutside"
  >
    <svg
      @click="langToggle"
      class="cursor-pointer group"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="group-hover:stroke-red-500"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"
      />
    </svg>
    <div
      v-if="langOn"
      class="bg-white/90 backdrop-blur-md rounded-xl flex flex-col justify-center items-center text-black absolute -bottom-9 px-4 py-1"
    >
      <a v-if="this.$route.path == '/'" href="/en" class="hover:text-red-500"
        >English</a
      >
      <a v-if="this.$route.path == '/en'" href="/" class="hover:text-red-500"
        >العربية</a
      >
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      langOn: false,
    };
  },
  methods: {
    onClickOutside(event) {
      this.langOn = false;
    },
    langToggle() {
      this.langOn = !this.langOn;
    },
  },
};
</script>

<style></style>
