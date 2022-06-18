<template>
  <section class="text-center py-10">
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
                  src="../assets/images/robotthumbnail.png"
                  alt="Blog Post illustration"
                  class="rounded-xl object-cover"
                />
              </div>

              <div class="flex-1 flex flex-col justify-between">
                <header class="mt-8 lg:mt-0">
                  <div class="mt-4 card-info">
                    <a href="/">
                      <h1 class="text-3xl text-red-500 font-bold">
                        Some Big Title
                      </h1>
                    </a>
                  </div>
                </header>

                <div class="card-info text-md mt-2">
                  <p>
                    Not an excerpt but some data of random lorem Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Sint minus
                    alias voluptatibus iusto odio facere officiis, possimus
                    laborum illum voluptatem cupiditate inventore expedita
                    obcaecati hic. Dignissimos iure error eius, animi qui quam
                    voluptatum ad cumque explicabo culpa, sunt quod eligendi
                    quis dolorem laboriosam! Explicabo minus autem quod illum
                    iste. Laudantium, delectus ipsum! Incidunt iusto recusandae
                    id sit vitae similique, ipsa ea cupiditate adipisci labore.
                    Voluptate labore eaque vitae ex dolor quam in temporibus
                    adipisci, suscipit corporis! Hic ut unde facilis non minus.
                    Enim, officiis alias beatae voluptate tempora, accusantium
                    inventore perspiciatis vitae, dignissimos dolores assumenda
                    recusandae sunt. Veniam, laudantium. Velit!
                  </p>
                </div>

                <footer
                  class="flex flex-col sm:flex-row justify-between items-center mt-8"
                >
                  <div></div>

                  <Secondarybtn class="mt-4 cursor-pointer">
                    Learn more
                  </Secondarybtn>
                </footer>
              </div>
            </div>
          </article>
        </Card>
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
