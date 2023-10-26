<template lang="html">
  <div class="detalhesProdTop-grid-imgs">
    <div class="containerFotoMaior">
      <div id="detalhesProdTop-grid-imgs-main" ref="containerImgsProd">
        <template v-if="prodInfo.midias.imagens.length > 0">
          <div class="detalhesProdTop-grid-imgs-main-imgContainer" v-for="(img, i) in prodInfo.midias.imagens" :key="i">
            <img class="detalhesProdTop-grid-imgs-main-img"
            :src="img[$tipoImg.prod].big" :alt="prodInfo.nome"
            @click="openZoom(i)">
          </div>
          <div class="detalhesProdTop-grid-imgs-main-imgContainer" v-if="videoURL">
            <iframe
              width="470"
              height="437"
              :src="this.videoURL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </template>
        <div class="detalhesProdTop-grid-imgs-main-imgContainer" v-else>
          <img class="detalhesProdTop-grid-imgs-main-img" :src="require(`@/${$imgDefaultB}`)" :alt="prodInfo.nome">
        </div>
      </div>
      <selo v-for="selo in prodInfo.selos" :key="selo.id" :selo="selo" />
    </div>
    <!-- <div id="detalhesProdTop-grid-imgs-nav" v-if="$screen.width >= 1024 && Object.keys(prodInfo.midias.imagens).length > 0">
      <div class="detalhesProdTop-grid-imgs-nav-scrollContainer">
        <div class="detalhesProdTop-grid-imgs-nav-scroll" ref="scrollBox" :style="{transform: `translateY(${translate}px)`}">
          <div class="detalhesProdTop-grid-imgs-nav-item" v-for="(img, i) in prodInfo.midias.imagens" :key="i">
            <img :src="prodInfo.midias.imagens.length > 0 ? img[$tipoImg.prod].medium : require(`@/${$imgDefaultM}`)" :alt="prodInfo.nome">
          </div>
        </div>
      </div>
    </div> -->

    <transition name="popupFade">
      <zoom v-if="zoomActive.open" :atual="zoomActive.imgAtual" :imgs="prodInfo.midias.imagens"></zoom>
    </transition>
  </div>
</template>

<script>
import comunicacao from '@/comunicacao.js'
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';

export default {
  components: {
    zoom: require('@/components/detalhe-produto/slider-prod/zoom.vue').default,
  },
  props: {
    prodInfo: Object,
    videoURL: String,
  },
  data(){
    return {
      zoomActive: {
        open: false,
        imgAtual: null
      },
      translate: 0,
      maxTranslate: null,
      startScroll: false
    }
  },
  methods: {
    calculeteMaxTranslate() {
      if (this.videoURL) {
        this.maxTranslate = (473 - ((Object.keys(this.prodInfo.midias.imagens).length + 1) * 120)) + 10
      } else {
        this.maxTranslate = (473 - (Object.keys(this.prodInfo.midias.imagens).length * 120)) + 10;
      }
    },
    scroll(direction) {
      if (direction == 'next') {
        this.translate = (this.translate - 120) > this.maxTranslate ? this.translate - 120 : this.maxTranslate;
      }
      else {
        this.translate = (this.translate + 120) < 0 ? this.translate + 120 : 0;
      }
    },
    openZoom(img){
      document.querySelector('body').style.overflow = 'hidden';
      this.zoomActive.open = true;
      this.zoomActive.imgAtual = img;
    },
    createSlider(){
      if (this.prodInfo.midias.imagens.length > 0) {
          tns({
            'container': '#detalhesProdTop-grid-imgs-main',
            'mouseDrag': true,
            'items': 1,
            'loop': false,
            'controls': false,
            'nav': false,
          })
      }
    }
  },
  created() {
    this.calculeteMaxTranslate();
  },
  mounted () {
    setTimeout(() => {
      this.createSlider();
    }, 100);
    comunicacao.$on('closePop', response => this.zoomActive.open = response);
    if (screen.width > 1023 && this.$refs.scrollBox) {
      this.startScroll = this.$refs.scrollBox.offsetHeight > 473;
    }
  }
}
</script>

<style lang="css">
@media (max-width: 800px) {
  #detalhesProdTop-grid-imgs-main-ow .tns-nav {
    display:flex;
    justify-content: center;
    bottom: -20px;
    padding: 0;
    width: 95vw;
  }
}
</style>
<style lang="css" scoped>
.percent-descont {
  position: absolute;
  top: 0;
  left: 0;
  background: #D81B60;
  color: #fff;
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.detalhesProdTop-grid-imgs{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 825px;
  margin: 0 auto;
}
#detalhesProdTop-grid-imgs-nav{
  min-width: 110px;
  margin-right: 30px;
}
.detalhesProdTop-grid-imgs-nav-prev,
.detalhesProdTop-grid-imgs-nav-next{
  height: 25px;
  width: 100%;
  background-color: #efefef;
  border-radius: 4px;
  color: #777;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 1;
  transition: 200ms opacity;
}
.detalhesProdTop-grid-imgs-nav-prev[disabled],
.detalhesProdTop-grid-imgs-nav-next[disabled]{
  opacity: 0.5;
  cursor: no-drop;
}
.detalhesProdTop-grid-imgs-nav-prev{
  margin-bottom: 10px;
}
.detalhesProdTop-grid-imgs-nav-scrollContainer{
  max-height: 519px;
  overflow: hidden;
}
.detalhesProdTop-grid-imgs-nav-scroll{
  transform: translateY(0);
  transition: 200ms ease-in-out;
}
.detalhesProdTop-grid-imgs-nav-item{
  height: 110px;
  display: flex;
  align-items:center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.detalhesProdTop-grid-imgs-nav-item:not(:last-child){
  margin-bottom: 10px;
}
#detalhesProdTop-grid-imgs-nav .tns-nav-active{
}
.detalhesProdTop-grid-imgs-main-img{
  width: 100%;
  cursor: pointer;
}
.containerFotoMaior{
  position: relative;
  overflow: hidden;
}
/* .vitrineSelo{
  z-index: 5;
} */

/* .vitrineSelo.center {
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
} */

@media (max-width: 1023px) {
  .detalhesProdTop-grid-imgs{
    padding-top: 30px;
  }
}

@media (max-width: 767px) {
  .detalhesProdTop-grid-imgs {
    position: relative;
    margin-bottom: 0px;
  }
  .containerFotoMaior {
    overflow: initial;
  }
  .controlsSliderMob button img{
    width: 26px;
    height: 26px;
  }
  .controlsSliderMob button{
    z-index: 10;
    top: 50%;
    position: absolute;
    width: 26px;
    height: 26px;
  }
  .controlsSliderMob button.left{
    left: 20px;
    transform: rotate(180deg);
  }
  .controlsSliderMob button.right{
    right: 20px;
  }
}


/* ===================================================== */
/* ================= Animações pop up ================== */
/* ===================================================== */
.popupFade-leave-to,
.popupFade-enter{
  opacity: 0;
}
.popupFade-leave-active,
.popupFade-enter-active{
  transition: 300ms;
}
.popupFade-enter-to{
  opacity: 1;
}
</style>
