<template>
  <nav
    v-click-outside="onClickOutside"
    class="bg-gray-900/25 backdrop-blur-md md:px-0 py-4 w-full fixed z-50 top-0"
  >
    <div
      class="max-w-7xl px-5 md:px-10 flex flex-wrap justify-between items-center mx-auto"
    >
      <a href="/" class="flex items-center">
        <span
          class="self-center font-sans text-lg sm:text-2xl text-white font-semibold whitespace-nowrap"
        >
          <Brightlogo />
        </span>
      </a>
      <div class="flex md:hidden items-center md:order-2">
        <button
          @click="navToggle"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!toggle"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            v-if="toggle"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <a
              class="block py-2 pr-4 pl-3 text-white font-semibold border-b border-gray-100 hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 text-white font-semibold border-b border-gray-100 hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              href="#aboutus"
            >
              About us
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 text-white font-semibold border-b border-gray-100 hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              href="#Projects"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              class="block py-2 pr-4 pl-3 text-white font-semibold border-b border-gray-100 hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
              href="#gettobusiness"
            >
              Get to Business
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 text-white font-semibold border-b border-gray-100 hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0"
            >
              <Langicon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import vClickOutside from "click-outside-vue3";
import Brightlogo from "./SVGs/Brightlogo.vue";
import Langicon from "./SVGs/Langicon.vue";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    Brightlogo,
    Langicon,
  },
  data() {
    return {
      toggle: false,
    };
  },

  methods: {
    onClickOutside(event) {
      document.getElementById("mobile-menu").classList.add("hidden");
      this.toggle = false;
    },
    navToggle() {
      this.toggle = !this.toggle;
      if (this.toggle) {
        document.getElementById("mobile-menu").classList.remove("hidden");
      } else {
        document.getElementById("mobile-menu").classList.add("hidden");
      }
    },
  },
};
</script>

<style scoped></style>
