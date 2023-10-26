<template>
    <section class="bannerDesafio" id="bannerDesafio">
      <a href="#produtos">
        <div class="bannerDesk desk">
            <img v-lazy="bannerDesafioDesk" alt="">
        </div>
        <div class="bannerMob mob" style="width:100%">
            <img v-lazy="bannerDesafioMob" width="100%" alt="">
        </div>
      </a>
    </section>
</template>
<style lang="scss" scoped>
.desk{
    display:block !important;
}
.mob{
  display:none !important;
}

.bannerDesk img {
    margin: 0 -255px 0;
}

section.bannerDesafio {
    text-align: center;
}
@media (max-width:768px) {
  .desk {
    display: none !important;
  }

  .mob {
    display: block !important;
  }
}
</style>
<script>
//Import Imagens
import imgBannerDesafioDesk from "../../assets/img/banners/home/desk/New-Hair-Desktop-Home-Para-Mamaes.jpg"
import loadBannerDesafioDesk from "../../assets/img/bannerDesafio-load.jpg"
import imgBannerDesafioMob from "../../assets/img/banners/home/mob/New-Hair-Mobile-Home-Biotina.jpg"
import loadBannerDesafioMob from "../../assets/img/bannerDesafioMob-load.jpg"
export default {
  name: 'BannerNHVitaminBiotina',
  data() {
    return {
      bannerDesafioDesk: {
        src: imgBannerDesafioDesk,
        error: loadBannerDesafioDesk,
        loading: loadBannerDesafioDesk,
      },
      bannerDesafioMob: {
        src: imgBannerDesafioMob,
        error: loadBannerDesafioMob,
        loading: loadBannerDesafioMob,
      },
    };
  },
};
</script>
