<template>
    <a href="/produtos-masculino">
    <section class="bannerMasculino">
        <div class="bannerDesk desk">
          <div class="cms-banners-nobre">
            <img v-lazy="bannerMascDesk" alt="">
          </div>
        </div>
        <div class="bannerMob mob" style="width:100%;">
            <img v-lazy="bannerMascMob" alt="">
        </div>
    </section>
    </a>
</template>
<style scoped>
  .cms-banners-nobre{
    text-align: center;
  }
  .cms-banners-nobre img, .cms-banners-nobre video{
    text-align: center;
    margin: 0 -375px auto;
  }
</style>
<script>

//Import Imagens
import imgBannerMascDesk from "../../../assets/img/newhair-masculino/banner/New-Hair-Desktop-Produtos-Acido-Hialuronico-Masculino.jpg"
import loadBannerMascDesk from "../../../assets/img/banner_masculino_desk-load.jpg"
import imgBannerMascMob from "../../../assets/img/newhair-masculino/banner/mob/New-Hair-Mobile-Produtos-Acido-Hialuronico-Masculino.jpg"
import loadBannerMascMob from "../../../assets/img/banner_mobile-load.jpg"

export default {
  data() {
    return {
      bannerMascDesk: {
        src: imgBannerMascDesk,
        error: loadBannerMascDesk,
        loading: loadBannerMascDesk,
      },
      bannerMascMob: {
        src: imgBannerMascMob,
        error: loadBannerMascMob,
        loading: loadBannerMascMob,
      },
    };
  },
};
</script>