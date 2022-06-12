<template>
  <section class="text-center py-10">
    <h2
      id="Projects"
      class="text-white text-4xl font-bold leading-relaxed mb-10"
    >
      Latest <span class="bg-black px-2 py-1 text-red-500">PROJECTS</span>
    </h2>
    <div class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div
              class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="../assets/images/robotthumbnail.png"
                alt="sample"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  <a class="text-blue-500">Category</a>
                </h2>

                <h1
                  class="title-font text-lg font-medium text-gray-600 mb-3 hover:text-blue-500"
                >
                  A Big Title Goes Here
                </h1>

                <p class="leading-relaxed mb-3">Some description</p>
                <div class="flex items-center flex-wrap">
                  <button
                    class="text-white bg-gradient-to-r from-red-400 to-red-600 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
