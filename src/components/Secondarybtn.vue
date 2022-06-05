<template>
  <div class="relative group block w-full">
    <span
      class="absolute inset-0 border-2 border-red-600 border-dashed rounded-xl translate-x-0.5 group-hover:translate-x-0 delay-150 duration-300 translate-y-0.5 group-hover:translate-y-0"
    ></span>

    <div
      class="relative flex items-end h-full transition-all transform border-2 rounded-xl group-hover:border-white border-red-600 -translate-x-1 group-hover:-translate-x-0 -translate-y-1 group-hover:-translate-y-0 bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-700"
    >
      <div class="py-2.5 px-7 transition-opacity group-hover:relative">
        <h2 class="font-semibold text-white">
          <slot />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
