<template>
  <div class="container">
    <div class="titulos">
      <Titulos :titulo="`Vitaminas para cabelo e unha <br class='mob'> em kits incríveis`" :subtitulo="`Cabelos sem queda, brilhantes, fortes e com <br class='mob'> muito mais crescimento`" class="py-5"/>
    </div>
    <div class="comparacao mt-4">
      <div class="img-comparaco mob">
        <img src="@/assets/img/produtos/nh-escova-alisadora/comparacao/fundo-comparacao-mobile.png" alt="" loading="lazy">
      </div>
      <div class="nova">
        <h3 class="mb-2">ESCOVA 5 EM 1 <br class="mob"> NEW HAIR</h3>

        <p>5 funções em um produto <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>25 placas de cerâmica <br class="desk"> ionizada <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>5 temperaturas para cada <br class="desk"> tipo de fio <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>Não queima o couro <br class="desk"> cabeludo <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>Ação modeladora anti-frizz <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>4 passos para resultado de <br class="desk"> salão em minutos <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>

      </div>
      <div class="antiga">
        <h3 class="mb-2">CHAPA <br class="mob"> ALISADORA</h3>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Uma função apenas</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> 2 chapas de cerâmica ionizada</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Uma temperatura para todos os <br class="desk"> tipos de fio</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Queima o couro cabeludo</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Apenas alisa e causa frizz </p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Triplo do tempo apenas para alisar os fios </p>
      </div>
    </div>
  </div>
</template>

<script>
import Titulos from "../../../produtos-exibicao/titulos.vue"

export default {
  components: { Titulos },
  name: 'ComparativoFormula',
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

<!-- Adiciona o atributo scoped para limitar o CSS a este componente apenas -->
<style scoped>
.titulos h1{
  text-align: center;
  font: normal normal bold 32px/32px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos h1 span{
  color: #EA5C9C;
  font-weight: 700!important;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.comparacao{
  background-image: url(../../../../assets/img/produtos/nh-escova-alisadora/comparacao/fundo-comparacao-desktop.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 350px;
}

.antiga, .nova {
  width: 30%;
}

.antiga h3{
  font: normal normal 800 24px/24px Open Sans;
  letter-spacing: -0.96px;
  color: #555555;
  text-align: left;
}

.comparacao p{
  font: normal normal normal 18px/18px Open Sans;
  letter-spacing: -0.72px;
  color: #333333;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.antiga p{
  text-align: left;
  justify-content: start;
}

p img{
  width: 16px;
}

p strong{
  display: contents;
}

.antiga img{
  filter: grayscale(100%);
  margin-right: 10px;
}

.nova{
  padding-left: 35px;
}

.nova h3{
  text-align: left;
  font: normal normal 800 24px/24px Open Sans;
  letter-spacing: -0.96px;
  color: #EA5C9C;
  text-align: right;
}

.nova p{
  text-align: right;
  justify-content: end;
}

.nova p span{
  font: normal normal 800 12px/13px Open Sans;
  letter-spacing: -0.48px;
  color: #222222;
  background-color: yellow;
  margin-right: 5px;
  padding: 3px;
  border-radius: 5px;
}

.novos-ing{
  margin-left: -20px;
}

.nova img{
  margin-left: 10px;
}

/* estilizar para celular */
@media screen and (max-width: 767px) {

  .py-5{
    padding-top: 1rem!important;
    padding-bottom: 0!important;
  }

  .titulos h2{
    font: normal normal bold 24px/24px Open Sans;
  }

  .titulos h1{
    font-size: 28px;
  }

  .titulos p {
    padding: 5px 0!important;
    font: normal normal normal 16px/18px Open Sans;
  }

  .img-comparaco.mob {
    padding-bottom: 2rem;
  }

  .comparacao {
    min-height: unset;
    background-image: unset;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .antiga {
      width: 40%;
  }

  .nova {
      width: 45%;
      padding-left: 0;
  }

  .nova h3, .antiga h3{
    font: normal normal 800 16px/18px Open Sans;
  }

  .nova p, .antiga p{
    font: normal normal normal 13px/13px Open Sans;
  }

}
</style>