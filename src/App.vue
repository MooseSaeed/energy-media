<template>
  <div class="bg-neutral-900">
    <router-view v-slot="{ Component, route }">
      <Navbar
        v-if="this.$route.path == '/en'"
        :class="
          scrollingDown
            ? 'animate__animated animate__fadeOutUp '
            : 'animate__animated animate__fadeInDown '
        "
      />
      <Navbarar
        v-if="this.$route.path == '/'"
        :class="
          scrollingDown
            ? 'animate__animated animate__fadeOutUp '
            : 'animate__animated animate__fadeInDown '
        "
      />
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <div :key="route.name">
          <Component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Navbarar from "./components/ar/Navbarar.vue";
export default {
  components: {
    Navbar,
    Navbarar,
  },
  data() {
    return {
      lastScrollTop: 0,
      scrollingDown: false,
      scrollingUp: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function (e) {
      let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > this.lastScrollTop) {
        this.scrollingDown = true;
        this.scrollingUp = false;
      } else {
        this.scrollingDown = false;
        this.scrollingUp = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
