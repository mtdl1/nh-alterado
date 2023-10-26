<template>
  <div class="container">
    <Titulos :titulo="`Tecnologia em favor dos seus fios`" :subtitulo="`Design, segurança e potência para cabelos impecáveis`" class="py-5"/>
      <div class="row">
        <div class="col-md-3">
          <div class="icon-tec text-center">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/temperatura segura.png" alt="" loading="lazy" class="desk">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/mob/temperatura segura.png" alt="" loading="lazy" class="mob">
          </div>
          <div class="text-tec">
            <p>Temperatura segura, aquece em 40 segundos de forma potente</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-tec text-center">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/evitando danos.png" alt="" loading="lazy" class="desk">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/mob/evitando danos.png" alt="" loading="lazy" class="mob">
          </div>
          <div class="text-tec">
            <p>5 níveis de temperatura para cada tipo de fio, evitando danos</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-tec text-center">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/desing seguro, permite.png" alt="" loading="lazy" class="desk">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/mob/desing seguro, permite.png" alt="" loading="lazy" class="mob">
          </div>
          <div class="text-tec">
            <p>Design seguro, permite que você alcance a raiz dos fios sem queimaduras</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-tec text-center">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/placas de ceramica.png" alt="" loading="lazy" class="desk">
            <img src="@/assets/img/produtos/nh-escova-alisadora/tecnologias/mob/placas de ceramica.png" alt="" loading="lazy" class="mob">
          </div>
          <div class="text-tec">
            <p>Placas de cerâmica, conferem movimento sem achatar as cutículas</p>
          </div>
        </div>
      </div>
      <BotaoCompreAgora class="mt-5 mb-5"/>
  </div>
</template>

<script>
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue'
import Titulos from "../../../produtos-exibicao/titulos.vue"

export default{
  name: 'TecnologiaFavor',
  components: {
    Titulos,
    BotaoCompreAgora
  },
  data() {
    return {
      // Variáveis
    }
  },
  methods: {
    // Métodos
  },
  mounted() {
    // Funções que serão executadas assim que o componente for montado
  }
}
</script>

<style scoped>
.text-tec p{
  font: normal normal normal 20px/26px Open Sans;
  letter-spacing: 0px;
  color: #707070;
  margin-top: 20px;
  text-align: center;
}
/* responsivo */
@media (max-width: 768px) {
  .py-5{
    padding-top: 2rem !important;
    padding-bottom: 30px !important;
  }
  .row{
    justify-content: space-around;
  }
  .col-md-3{
    max-width: 45%;
    margin-bottom: 30px;
  }
  img.mob{
    margin: 0 auto;
  }
  .text-tec p{
    font: normal normal normal 16px/20px Open Sans;
    letter-spacing: 0px;
  }
}
</style>