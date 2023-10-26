<template>
    <section class="bannerDesafio" id="bannerDesafio">
      <a href="/pagina/termos">
        <div class="bannerDesk desk">
            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesafioDesk" alt="" loading="lazy">
            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Banner-Desafio-90-Dias.jpg" alt="">
        </div>
        <div class="bannerMob mob" style="width:100%">
            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesafioMob" width="100%" alt="" loading="lazy">
            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Banner-Desafio-90-Dias.jpg" width="100%" alt="">
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
    background-color: #f5f5f5;
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
import imgBannerDesafioDesk from "../../assets/img/banners/home/desk/New-Hair-Desktop-Banner-Desafio-90-Dias.jpg"
import loadBannerDesafioDesk from "../../assets/img/geral/preloader.svg"
import imgBannerDesafioMob from "../../assets/img/banners/home/mob/New-Hair-Mobile-Banner-Desafio-90-Dias.jpg"
import loadBannerDesafioMob from "../../assets/img/geral/preloader.svg"
export default {
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

<style scoped>
.bannerDesk img{
  max-width: 100%;
  max-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
