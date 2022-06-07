<template>
  <div class="flex flex-col justify-center items-center sm:mt-8 mt-20 mx-10">
    <div class="max-w-72 order-1 md:-order-none">
      <div class="max-w-xs sm:max-w-xl animate__animated animate__flipInX">
        <Energy />
      </div>
    </div>
    <section class="order-2 md:-order-none pb-2">
      <header
        class="pb-2 overflow-hidden flex flex-col justify-center items-center"
      >
        <h1
          class="dark:text-white text-center text-white font-bold text-3xl leading-relaxed animate__animated animate__bounceInUp"
        >
          <div class="text-center">
            <span class="text-2xl sm:text-3xl">For</span>
            <span class="inline">
              <keep-alive>
                <Changingname />
              </keep-alive>
            </span>
            <div class="text-2xl sm:text-3xl">
              Media Production and Advertising
            </div>
          </div>
        </h1>
        <p
          class="mt-5 text-sm sm:text-lg text-center max-w-lg text-white animate__animated animate__bounceInUp animate__slow"
        >
          This is the right place for you if you want to take your brand to the
          next level of success and popularity.
        </p>
      </header>
      <footer>
        <div
          class="flex flex-col sm:flex-row gap-4 items-center justify-center overflow-hidden py-5 px-2"
        >
          <a
            href="/tools"
            class="animate__animated animate__bounceInUp animate__delay-1s"
          >
            <Primarybtn class="text-sm sm:text-base">
              GET TO BUSINESS
            </Primarybtn>
          </a>
          <a
            class="ml-3 animate__animated animate__bounceInUp animate__slow animate__delay-1s"
            href="/components"
          >
            <Secondarybtn class="text-sm sm:text-base"> ABOUT US </Secondarybtn>
          </a>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import Primarybtn from "./Primarybtn.vue";
import Secondarybtn from "./Secondarybtn.vue";
import Changingname from "./Changingname.vue";
import Energy from "./Energy.vue";
export default {
  name: "Homepage",
  components: {
    Primarybtn,
    Secondarybtn,
    Changingname,
    Energy,
  },
};
</script>

<style></style>
