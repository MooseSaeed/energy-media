<template>
  <VideoBackground
    :src="require(`@/assets/images/sample.mp4`)"
    style="height: 100vh"
    overlay="linear-gradient(to bottom,  #0000, #000)"
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
