<template>
  <section class="text-center">
    <h2
      id="aboutus"
      class="text-white text-4xl font-bold leading-relaxed mb-10"
    >
      About <span class="bg-black px-2 py-1 text-red-500">US</span>
    </h2>

    <div class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <Card class="rounded-xl">
          <article
            class="post-card text-white bg-gradient-to-r shadow-md shadow-black from-slate-800 to-gray-900 transition-all duration-1000 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
          >
            <div class="py-6 px-5 lg:flex">
              <div class="flex-1 lg:mr-8 self-center">
                <img
                  src="../assets/images/energythumbnail.png"
                  alt="Blog Post illustration"
                  class="rounded-xl object-cover"
                />
              </div>

              <div class="flex-1 flex flex-col justify-between">
                <header class="mt-8 lg:mt-0">
                  <div class="mt-4 card-info">
                    <a href="/">
                      <h1 class="text-3xl text-red-500 font-bold">
                        Energy for Media Production
                      </h1>
                    </a>
                  </div>
                </header>

                <div class="card-info text-md mt-2">
                  <p>
                    A comprehensive technical production team of specialists
                    outfitted with cutting-edge technology to create all videos
                    in a unique and creative manner.
                  </p>
                  <p>
                    Sameh Mohamed Essam, the company&#39;s creator, is a
                    graduate of the International Academy For Engineering &amp;
                    Media Science - IAEMS Film Production Department. He worked
                    as an assistant assistant director in the film &quot;Al
                    Areef&quot; starring Magdy Kamel and Enas Al-Najjar, and as
                    an assistant director at the dmc channel.
                  </p>
                </div>

                <footer
                  class="flex flex-col sm:flex-row justify-between items-center mt-8"
                >
                  <div></div>

                  <a class="w-full" href="#gettobusiness">
                    <Secondarybtn class="mt-4 cursor-pointer">
                      Learn more
                    </Secondarybtn>
                  </a>
                </footer>
              </div>
            </div>
          </article>
        </Card>
        <div class="mt-10 text-white w-full text-left">
          <div class="md:flex flex-row space-between">
            <div class="md:border-r-2 flex-1 prose prose-invert">
              <h3>A Team Of:</h3>
              <ul>
                <li>Directors</li>
                <li>Photography and Monterrey Directors</li>
                <li>Sound Engineers</li>
                <li>Graphic Designers</li>
                <li>Fullstack Developers</li>
              </ul>
            </div>
            <div class="flex-1 md:ml-5 prose prose-invert">
              <h3>
                We provide you with media, advertising and promotion services
                for various fields such as:
              </h3>
              <ul>
                <li>Sponsored ads</li>
                <li>Advertisements for products or openings</li>
                <li>
                  Implementation of programs, short films and documentaries
                </li>
                <li>Graduation projects for students</li>
                <li>Implementation of clips for singers and brands</li>
                <li>
                  Managing social media pages and promoting their contents
                </li>
                <li>Covering events, parties, conferences and seminars</li>
                <li>Web Design / Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Secondarybtn from "./Secondarybtn.vue";
import Card from "./Card.vue";

export default {
  components: {
    Secondarybtn,
    Card,
  },
};
</script>

<style></style>
