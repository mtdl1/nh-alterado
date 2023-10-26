<template lang="html">
  <section class="vitrineDefault">
    <div class="row p-4" style="max-width:100%;">
      <div class="col-sm-12 header">
        <h2>composição da lista</h2>
      </div>
      <div class="col-sm-12 vitrineDefault-mainBox">
        <div class="vitrineDefault-mainBox-container">
          <div class="containerControles" ref="containerExterno" v-show="showControls">
            <button class="prev">
              <img src="@/assets/img/geral/slider/prev.png" alt="Ícone next">
            </button>
            <button class="next">
              <img src="@/assets/img/geral/slider/next.png" alt="Ícone prev">
            </button>
          </div>
          <div class="vitrineDefault-container" ref="containerVitrine">
            <template v-for="prod in itensVitrine">
              <produto :product="prod" :dataProd="dataProd" :key="prod.id" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';
import produto from './lista-produtos/produto'


export default {
  components: {
    produto
  },
  props: {
    permissaoAtributosLista: Boolean,
    vitrineData: Array,
    dataProd: Object,
    idProdutoPai: Number
  },
  data() {
    return {
      itensVitrine: this.vitrineData,
      showControls: false
    }
  },
  methods: {
    openNewtab(link){
      window.open(link)
    },
  },
  mounted() {
    if (window.screen.width < 768) {
      this.showControls = true;
      tns({
        container: this.$refs.containerVitrine,
        controls: true,
        nav: false,
        items: 1,
        mouseDrag: true,
        slideBy: 'page',
        controlsContainer: this.$refs.containerExterno,
      })
    }
  }
}
</script>

<style lang="css" media="screen">
.tns-outer .tns-nav > button {
  border: none;
  width: 35px;
  height: 4px;
  border-radius: 4px;
  background: #E4E4E4;
}
.tns-outer .tns-nav > button.tns-nav-active,
.tns-outer .tns-nav > button:hover {
  background: #6BC2BF;
}
  .vitrineDefault {
  margin-top: 50px;
}
.vitrineDefault .header {
  text-align: center;
}
.vitrineDefault .header h2:not(.sub) {
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 25px;
  text-align: center;
}
.vitrineDefault .header p {
  font-size: 15px;
}
.vitrineDefault .footer a {
  color: #6BC2BF;
  text-decoration: underline;
  font-size: 12px;
}
.vitrineDefault .footer {
  text-align: center;
  margin-top: 25px;
}
.vitrineDefault .tns-inner {
    max-width: 930px;
    padding: 0 5px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .vitrineDefault .tns-outer {
    max-width: 93%;
  }
}
@media (max-width: 767px) {
  .vitrineDefault .tns-inner {
    max-width: 100%;
    padding: 0 5px;
  }
  .vitrineDefault .tns-item {
    transition: 200ms;
  }
  .vitrineDefault .tns-item:not(.tns-slide-active) {
    opacity: 0;
  }
  .vitrineDefault .tns-outer {
    max-width: 100%;
  }
  .vitrineDefault .vitrineDefault-mainBox-container .tns-nav{
    bottom: 0px;
  }
}
</style>

<style lang="css" scoped>
.vitrineDefault.grayVitrine {
  background-color: #f2f2f2;
  padding: 30px 0;
}
.vitrineDefault {
  margin-bottom: 40px;
}
.vitrineDefault-mainBox-container{
  width: 100%;
  position: relative;
}
.vitrineDefault-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.vitrineDefault-container > div {
  padding: 30px 15px 15px;
  display: flex !important;
  justify-content: center;
  flex: 0 0 auto;
}

.vitrineAlerta {
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #d22e2e;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.vitrineDefault-mainBox {
  position: relative;
}
.vitrineDefault-mainBox {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.containerControles button {
  position: absolute;
  z-index: 8;
  width: 30px;
  height: 30px;
  background: rgba(0,0,0,0.3);
  top: 50%;
  border: none;
}
.containerControles button:hover {
  background: #000;
}
.containerControles button img {
  filter: brightness(100);
  transform: scale(0.5);
}
.containerControles button.prev {
  left: -15px;
}
.containerControles button.next {
  right: -15px;
}

.rowVitrineLista{
  max-width: 1320px;
}
/* ================================== MOBILE ================================== */
@media (max-width: 1023px) {
  .vitrineDefault{
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .vitrineDefault .header h2{
    font-size: 26px;
  }
  .vitrineDefault-mainBox{
    display: block;
  }

}


</style>
