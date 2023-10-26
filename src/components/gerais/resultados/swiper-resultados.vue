<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-01.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-02.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-03.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-04.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-05.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-06.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-07.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-08.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-09.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-10.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-11.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-12.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/img/resultados-reais/New-Hair-Comparativo-Com-Vs-Sem-464x464-13.jpg" alt="">
      </div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

// import Swiper styles
import 'swiper/dist/css/swiper.css'

// Swiper.use()

export default {
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })
  }
}
</script>

<style scoped>

.swiper-container {
  width: 750px;
  padding-top: 50px;
  padding-bottom: 25px;
}
.swiper-slide{
  width: 490px;
}

.swiper-button-prev{
  background-image: url("../../../assets/img/icones/prev.png");
  width: 32px;
  height: 32px;
  background-size: cover;
}

.swiper-button-next{
  background-image: url("../../../assets/img/icones/next.png");
  width: 32px;
  height: 32px;
  background-size: cover;
}
/* macbook alisson com seta azul sobrepondo */
.swiper-button-prev::after, .swiper-button-next::after {
    display:none;
}

/* for mobile  */
@media screen and (max-width: 768px) {
  .swiper-container {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 40px;
  }
  .swiper-slide{
    width: 105%;
  }
}
</style>