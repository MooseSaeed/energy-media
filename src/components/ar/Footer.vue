<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#000000"
      fill-opacity="1"
      d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,176C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
  <footer
    class="bg-black text-white text-center pb-20 px-10 flex flex-col justify-center items-center"
  >
    <slot />

    <div
      class="flex flex-col sd:flex-row gap-5 items-center justify-center text-white"
    >
      <div class="flex flex-col sm:flex-row items-center justify-center">
        <p class="mr-2 mb-2 sm:mb-0 text-sm xs:text-lg">سوف تجدنا هنا</p>
        <div class="flex flex-row gap-2">
          <a
            href="https://www.facebook.com/Energyformediaproduction1"
            target="_blank"
          >
            <img
              class="transition-transform hover:scale-125"
              width="40"
              src="../../assets/images/facebook.png"
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://www.instagram.com/energyformediaproduction1/"
            target="_blank"
          >
            <img
              class="transition-transform hover:scale-125"
              width="40"
              src="../../assets/images/instagram.png"
              alt="Instagram Icon"
            />
          </a>
          <a href="https://vimeo.com/user177402373" target="_blank">
            <img
              class="transition-transform hover:scale-125"
              width="40"
              src="../../assets/images/vimeo.png"
              alt="Vimeo Icon"
            />
          </a>
        </div>
      </div>
      <div class="flex xs:flex-row flex-col items-center justify-center">
        <p class="mr-2 mb-2 xs:mb-0 text-sm xs:text-lg">او قم بإرسال بريد</p>
        <a href="mailto:energyformediaproduction@gmail.com" target="_blank">
          <img
            class="transition-transform hover:scale-125"
            width="40"
            src="../../assets/images/email.png"
            alt="Email Icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
