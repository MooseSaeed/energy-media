<template>
  <VideoBackground
    :src="require(`@/assets/images/sample.mp4`)"
    style="height: 100vh"
    overlay="radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 21%, rgba(0,0,0,0) 100%), linear-gradient(to bottom,  #0000, #000)"
  >
    <slot />
  </VideoBackground>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
export default {
  components: {
    VideoBackground,
  },
};
</script>

<style></style>
