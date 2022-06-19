<template>
  <section class="text-center">
    <h2
      id="Projects"
      class="text-white text-4xl font-bold leading-relaxed mb-10"
    >
      Latest <span class="bg-black px-2 py-1 text-red-500">PROJECTS</span>
    </h2>
    <div class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <!-- Card -->
          <div class="p-4 md:w-1/3">
            <div
              class="h-full rounded-xl bg-gradient-to-r shadow-md shadow-black from-slate-800 to-gray-900 overflow-hidden"
            >
              <div
                class="lg:h-48 md:h-36 w-full object-cover object-center md:scale-105 transition-all duration-400 hover:scale-100"
              >
                <div style="padding: 56.25% 0 0 0; position: relative">
                  <iframe
                    src="https://player.vimeo.com/video/720190144?h=4ca72a65f2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style="
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                    "
                    title="Commercial video"
                  ></iframe>
                </div>
              </div>
              <div class="p-6">
                <h1
                  class="title-font text-lg font-medium text-gray-200 mt-7 mb-3"
                >
                  A Big Title Goes Here
                </h1>

                <p class="leading-relaxed mb-5 text-white">Some description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
      <path
        fill="#171717"
        fill-opacity="1"
        d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,149.3C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg> -->
  </section>
</template>

<script>
import Primarybtn from "./Primarybtn.vue";
export default {
  components: {
    Primarybtn,
  },
};
</script>

<style></style>
