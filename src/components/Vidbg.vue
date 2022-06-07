<template>
  <VideoBackground
    :src="require(`@/assets/images/sample.mp4`)"
    style="max-height: 400px; height: 100vh"
  >
    <h1 style="color: white">Hello welcome!</h1>
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
