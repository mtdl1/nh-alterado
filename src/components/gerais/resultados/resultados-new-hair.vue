<template>
  <div class="bg-alt">
    <div class="container py-5">
      <div class="titulos">
        <h2>Resultados reais que só New Hair Vitamin proporciona</h2>
        <p class="mt-2" >Cabelos e unhas sempre fortes e saudáveis</p>
      </div>

      <SwiperResultados />

      <div class="texto-complementar mt-3">
      <p v-if="$route.path == '/vitamina-para-gestante-e-lactantes' || $route.path =='/vitamina-para-cabelo-gestante-e-lactantes.html' || $route.path == '/new-hair-vitamina-capilar-com-biotina-3-potes.html' || $route.path == '/new-hair-vitamina-capilar-com-biotina-7-potes.html'">Os comprimidos de New Hair transformam a saúde dos seus cabelos e unhas durante <br class="desk"> o período da gestação e lactação, graças à potente fórmula que reúne vitaminas e minerais.</p>
      <p v-else>Os comprimidos de New Hair transformam a saúde dos seus cabelos, pele e unhas para <br class="desk"> sempre graças à potente fórmula que reúne vitaminas, minerais e ácido hialurônico.</p>
    </div>

      <BotaoSingle  v-if="isHtmlUrl"/>
      <BotaoCompreAgora  class="pt-0" v-else />
    </div>
  </div>
</template>
<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
import BotaoSingle from '../botoes/botao-single.vue';
import SwiperResultados from './swiper-resultados.vue';
export default {
  components: { BotaoCompreAgora, SwiperResultados, BotaoSingle },
  name: 'ResultadosNewHair',

  data(){
    return {
      url: window.location.href
    }
  },
  computed: {
    isHtmlUrl() {
      return this.url.endsWith('.html');
    }
  }
};
</script>

<style scoped>
.bg-alt{
  background-color: #f5f5f5;
}

.titulos h1{
  text-align: center;
  font: normal normal bold 34px/20px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos h2, .titulo{
  text-align: center;
  font: normal normal bold 32px/34px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/24px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.texto-complementar p{
  text-align: center;
  font: normal normal normal 18px/20px Open Sans;
  letter-spacing: -0.18px;
  color: #222222;
}

.blocoEstudos {

  height: 172px;
  background-color: #fff;
  /* margin-left: 8px;
  margin-right: 8px; */
  border-radius: 5px;

}


 .porcentagem{
  font: normal normal bold 55px/57px Open Sans;
  margin-top: 55px;
  color: #FF4289;
}

  .blocotexto {
  font: normal normal normal 18px/22px Open Sans;
}

@media (max-width: 767px) {
  
  .titulos  h1 {
    text-align: center;
    font: normal normal bold 26px/26px Open Sans;
    letter-spacing: -0.96px;
  }
  .titulos h2, .titulo {
    text-align: center;
    font: normal normal bold 24px/24px Open Sans;
    letter-spacing: -0.96px;
  }

  .titulos p {
    font: normal normal normal 16px/18px Open Sans;
    letter-spacing: 0px;
  }

  .porcentagem {
  font: normal normal bold 48px/52px Open Sans;
  
}

.blocotexto {
   font: normal normal normal 14px/17px Open Sans;
 
}

.texto-complementar p {
    text-align: center;
    font: normal normal normal 15px/18px Open Sans;
    letter-spacing: 0px;
    color: #222222;
 }

.blocoEstudos {

 height: 160px;
 width: 160px;
 background-color: #fff;
 border-radius: 5px;
 position: relative;
 right: 12%;
 margin-left: 5px;
 margin-right: 5px;
}


}
</style>