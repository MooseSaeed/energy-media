<template>
  <div class="container">
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text class="font-bold" text-anchor="middle" x="50%" y="80%">
          ENERGY
        </text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
        <use xlink:href="#s-text" class="text-copy stroke-white"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body {
  height: 100%;
  font-weight: 800;
  margin: 0;
  padding: 0;
}

body {
  background: #030321;
  font-family: Arial;
}

.container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

svg {
  display: block;
  font: 10.5em "Montserrat";
  width: 960px;
}

.text-copy {
  fill: none;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
  stroke: #ef4444;
  animation-delay: -1;
}

.text-copy:nth-child(2) {
  stroke: #ffffff;
  animation-delay: -2s;
}

.text-copy:nth-child(3) {
  stroke: #ff0000;
  animation-delay: -3s;
}

.text-copy:nth-child(4) {
  stroke: #ef4444;
  animation-delay: -4s;
}

.text-copy:nth-child(5) {
  stroke: #ffffff;
  animation-delay: -5s;
}
.text-copy:nth-child(6) {
  stroke: #ff0000;
  animation-delay: -6s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>
