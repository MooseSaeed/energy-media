<template>
  <div class="flex flex-col justify-center items-center sm:mt-1 mt-1 mx-2">
    <div class="max-w-72 order-1 md:-order-none">
      <div
        class="w-[16rem] overflow-hidden xs:w-[32rem] animate__animated animate__flipInX"
      >
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
          class="mt-5 text-sm xs:text-lg text-center max-w-lg text-white animate__animated animate__bounceInUp animate__slow"
        >
          This is the right place for you if you want to take your brand to the
          next level of success and popularity.
        </p>
      </header>
      <footer>
        <div
          class="realtive flex flex-col sm:flex-row gap-4 items-center justify-center overflow-hidden py-5 px-2"
        >
          <a
            href="#gettobusiness"
            class="animate__animated animate__bounceInUp animate__delay-1s"
          >
            <Primarybtn class="text-sm sm:text-base">
              GET TO BUSINESS
            </Primarybtn>
          </a>
          <a
            class="ml-3 animate__animated animate__bounceInUp animate__slow animate__delay-1s"
            href="#aboutus"
          >
            <Secondarybtn class="text-sm sm:text-base"> ABOUT US </Secondarybtn>
          </a>
        </div>
      </footer>
    </section>
    <!--     <a
      href="#Projects"
      class="mt-20 bottom-8 w-10 h-10 animate-[bounce_3s_ease-in-out_infinite]"
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          style="fill: #2d2d2d"
          d="M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256
	C512,114.608,397.392,0,256,0z"
        />
        <path
          style="fill: #db2b42"
          d="M119.52,147.056l136.4,87.488l136.4-87.472L255.92,431.36L119.52,147.056z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </a> -->
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
