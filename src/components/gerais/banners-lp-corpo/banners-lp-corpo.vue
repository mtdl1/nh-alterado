<template>
  <div class="container-fluid">
    <div class="container pt-5">

      <div class="desktop d-flex flex-wrap justify-content-between">
        <div class="banners" v-for="banner in banners" :key="banner.src">
          <a :href="banner.link">
            <img v-if="$route.name == 'homeTesteB'" v-lazy="banner" alt="" title="" class="mb-3">
            <img v-else :src="banner.src" alt="" title="" class="mb-3">
          </a>
        </div>
      </div>

      <div class="mob text-center">
        <div class="banners" v-for="bannerMob in bannersMob" :key="bannerMob.src">
          <a :href="bannerMob.link">
            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob" alt="" class="mb-3">
            <img v-else :src="bannerMob.src" alt="" class="mb-3">
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import loadingBannerDesk from "../../../assets/img/geral/preloader.svg";

export default {
  name: 'BannersLpCorpo',
  data() {
    return {
    banners: [
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Acido-Hialuronico.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'vitamina-para-cabelo-e-unha-em-comprimido',
      },
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Biotina.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'vitamina-para-gestante-e-lactantes'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Serum-Facial.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'serum-facial'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Gomas.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'new-hair-gummy-vitamina-em-goma-para-cabelo'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Linha-Essential.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'tratamento-capilar-linha-essential'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/New-Hair-Desktop-Home-Banner-Saiba-Mais-Masculina.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina'
      }
    ],
    bannersMob: [
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Acido-Hialuronico.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'vitamina-para-cabelo-e-unha-em-comprimido'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Biotina.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'vitamina-para-gestante-e-lactantes'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Serum-Facial.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'serum-facial'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Gomas.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'new-hair-gummy-vitamina-em-goma-para-cabelo'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Linha-Essential.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'tratamento-capilar-linha-essential'
      },
      {
        src: require('@/assets/img/banners/corpo-lp/mob/New-Hair-Mobile-Home-Banner-Saiba-Mais-Masculino.jpg'),
        error: loadingBannerDesk,
				loading: loadingBannerDesk,
        link: 'new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina'
      }
    ],
  }
}
}
</script>

<style scoped>
img{
  border-radius: 10px;
  min-width: 380px;
  max-height: 208px;
}

@media (max-width: 767px) {
  img{
    min-width: 100%;
    max-height: 100%;
  }
  .desktop{
    display: none!important;
  }
}
</style>