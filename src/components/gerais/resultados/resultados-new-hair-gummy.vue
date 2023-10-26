<template>
  <div class="bg-alt">
    <div class="container py-5">
      <div class="titulos">
        <h2 >Resultados reais que só New Hair Gummy proporciona</h2>
        <p v-if="$route.path != '/new-hair-gummies-vitamina-em-goma-para-cabelos-e-unhas-feminino-tratamento-90-dias-brinde.html'"  class="mt-3">Cabelos e unhas sempre fortes e saudáveis</p>
        <p v-else class="mt-2">Basta uma goma ao dia para desfrutar dos benefícios</p>
      </div>

      <SwiperResultados />

      <div class="texto-complementar mt-2">
     
      <p v-if="$route.path == '/new-hair-gummies-vitamina-em-goma-para-cabelos-e-unhas-feminino-tratamento-90-dias-brinde.html'">A vitamina de goma para o cabelo também transforma a saúde da pele e unhas, graças à <br>potente fórmula que reúne vitaminas, minerais e ácido hialurônico. São diversos benefícios ao<br> consumir apenas uma gominha por dia.</p>
      <p v-else><strong>A vitamina em goma para o cabelo</strong> também transforma a saúde da pele e unhas, graças à<br class="desk"> potente fórmula que reúne vitaminas e ácido hialurônico. São diversos benefícios<br class="desk"> ao consumir apenas uma gominha por dia.</p>
    
    </div>
    <div class="text-center mt-3 mb-5" >
     <h2 class="pt-3  titulo" v-if="$route.path=='/new-hair-gummies-vitamina-em-goma-para-cabelos-e-unhas-feminino-tratamento-90-dias-brinde.html'">
       Estudos científicos sobre a gominha de cabelo
      </h2>
    </div>

      <div class="container" v-if="$route.path!=='/new-hair-gummy-vitamina-em-goma-para-cabelo'" >
        <div class="row">
          <div class="col-md-3 col-6 mb-4">
            <div class="blocoEstudos text-center">
              <span class="porcentagem"><p class="pt-1"> 
                97%</p>
              </span>
              <p class="blocotexto">
                sentiram melhoras<br> significativas na<br> hidratação da pele.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="blocoEstudos text-center">
              <span class="porcentagem"><p class="pt-">
                100%
              </p>
              </span>
              <p class="blocotexto">
                apontaram mudanças<br> positivas na textura <br class="mob">e na aparência geral da pele.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="blocoEstudos text-center">
              <span class="porcentagem"><p class="pt-1">
                91%
              </p>
              </span>
              <p class="blocotexto">perceberam <br>diminuição no <br>aspecto das rugas</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="blocoEstudos text-center ">
              <span class=" porcentagem"><p class="pt-1">
                94% 
              </p>
              </span>
                <p class="blocotexto">afirmaram notar a<br> pele com mais<br> elasticidade e firmeza</p>
            </div>
          </div>
        </div>
      </div>
      <BotaoSingle  v-if="isHtmlUrl"/>
      <BotaoCompreAgora v-else />
    </div>
  </div>
</template>
<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
import BotaoSingle from '../botoes/botao-single.vue';
import SwiperResultados from './swiper-resultados.vue';
export default {
  components: { BotaoCompreAgora, SwiperResultados, BotaoSingle },
  name: 'ResultadosNewHairGummy',

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