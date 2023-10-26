<template>
  <div class="bg-alt py-5">
    <div class="container alt-mobile">
      <div class="titulos mb-5">
        <h2>A vitamina capilar para mamães, <br class="desk"> lactantes e gestantes mais vendida do país</h2>
      </div>
      <div class="beneficios-total">
        <div class="texto-beneficio">
          <div class="card-texto mb-5">
            <h3>MENOS QUEDA<br> DURANTE A LACTAÇÃO</h3>
            <p>Para a vitamina capilar New Hair Vitamin, o lugar dos cabelos é na cabeça. Investimos em pesquisas para reduzir a queda capilar em até 96%, garantindo que os fios sigam o ciclo de renovação natural, sem perda em excesso por falta de nutrientes em lactantes e gestantes.</p>
          </div>
          <div class="card-texto alt-mob-card">
            <h3>FIOS MAIS FORTES<br> DURANTE GRAVIDEZ</h3>
            <p>A fórmula potente da vitamina para cabelo em comprimidos New Hair Vitamin age de dentro para fora, nutrindo e fortalecendo os fios da gestante, acelerando o crescimento em até 6x, resultando em cabelos mais fortes, longos e menos quebradiços, inclusive durante o período de amamentação.</p>
          </div>
        </div>
        <div class="img-beneficio desk">
          <img src="@/assets/img/vitamina-mamae/beneficios/New-Hair-Acido-Hialuronico-Pote-Beneficios.png" alt="" loading="lazy">
        </div>
        <div class="texto-beneficio">
          <div class="card-texto mb-5">
            <h3>UNHAS MAIS SAUDÁVEIS<br class="mob"/> DURANTE A GESTAÇÃO</h3>
            <p>Chega de unhas fracas, quebradiças e sem vida. Com New Hair Vitamin comprimido capilar, elas vão ficar mais fortes, longas e o período de gravidez e lactação deixará de ser estressante, já que as suas unhas estarão ainda mais fortes e saudáveis.</p>
          </div>
          <div class="card-texto">
            <h3>IMUNIDADE REFORÇADA<br> PARA A MAMÃE </h3>
            <p>Um organismo com todos os nutrientes em dia garante o crescimento dos cabelos saudáveis, evita a queda dos fios, mantém a pele jovem e impede o ataque de vírus e bactérias oportunistas durante a gravidez e amamentação. Com New Hair Vitamin comprimidos para cabelo, isso é possível.</p>
          </div>
        </div>
      </div>

      <div class="cards-beneficios-total d-flex justify-content-between mt-4">
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Para-Gravida-e-Lactantes.svg" alt="" loading="lazy" class="desktop">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/mob/Para-gravidas-e-lactantes.svg" alt="" loading="lazy" class="mob">
          <p class="beneficios">Para grávidas e <br> lactantes</p>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Ativos-Poderosos.svg" alt="" loading="lazy" class="desktop">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/mob/Ativos-Poderosos.svg" alt="" loading="lazy" class="mob">
          <p class="beneficios">17 Ativos <br> Poderosos</p>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Cabelos-Mais-Saudaveis.svg" alt="" loading="lazy" class="desktop">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/mob/Cabelos-Mais-Saudaveis.svg" alt="" loading="lazy" class="mob">
          <p class="beneficios">Cabelos <br> mais saudáveis</p>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Unhas-Fortalecidas.svg" alt="" loading="lazy" class="desktop">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/mob/Unhas-Fortalecidas.svg" alt="" loading="lazy" class="mob">
          <p class="beneficios">Unhas <br> fortalecidas</p>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Produto-100-Porcento-Natural.svg" alt="" loading="lazy" class="desktop">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/mob/Produto-100-Porcento-Natural.svg" alt="" loading="lazy" class="mob">
          <p class="beneficios">Produto 100% <br> Natural</p>
        </div>
      </div>

      <BotaoCompreAgora class="btnCompre" v-if="$route.path === '/vitamina-para-gestante-e-lactantes'"/>
      <BotaoSingle class="btnCompre " v-else/>

    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue'
import BotaoSingle from '../botoes/botao-single.vue'

export default {
  components: { BotaoCompreAgora, BotaoSingle },
  name: 'BeneficiosNhMamae',
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
.bg-alt{
  background-color: #EA5C9C;
}
.titulos h2{
  text-align: center;
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -1.28px;
  color: #FFF;
  font-weight: 700!important;
}

.beneficios-total {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.texto-beneficio {
    width: 30%;
}

.img-beneficio {
    width: 30%;
    text-align: center;
}

.texto-beneficio h3{
  text-align: center;
  font: normal normal 800 24px/28px Open Sans;
  letter-spacing: -0.96px;
  color: #FFF;
  margin-bottom: 15px;
  font-weight: 700!important;
}

.texto-beneficio p{
  text-align: center;
  font: normal normal normal 16px/20px Open Sans;
  letter-spacing: 0px;
  color: #FFF;
}

.cards-beneficios {
    background-color: #FFF;
    width: 18%;
    box-shadow: 5px 5px 10px #0000000D;
    border-radius: 10px;
    text-align: center;
    padding: 20px 0;
}

.cards-beneficios img {
    padding-bottom: 20px;
}

.cards-beneficios .beneficios{
  font: normal normal 800 18px/20px Open Sans;
  letter-spacing: -0.18px;
  color: #222222;
  font-weight: 700!important;
}

.cards-beneficios .beneficios span{
  color: #EA5C9C;
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .texto-beneficio {
    width: 100%;
  }

  .cards-beneficios-total {
    flex-wrap: wrap;
    justify-content: center!important;
  }

  .cards-beneficios {
    width: 30%;
    background-color: unset;
    box-shadow: unset;
  }

  .cards-beneficios img {
    width: 40px;
    margin: 0 auto;
  }

  .cards-beneficios .beneficios {
    text-align: center;
    font: normal normal bold 12px/14px Open Sans;
    letter-spacing: -0.48px;
    color: #FFF;
  }

  .alt-mobile{
    display: flex;
    flex-wrap: wrap;
  }

  .titulos {
    order: 1;
  }

  .titulos.mb-5{
    margin-bottom: 0!important;
  }

  .cards-beneficios-total {
    order: 2;
  }

  .beneficios-total {
    order: 3;
  }

  .btnCompre {
    order: 4;
    margin: 50px auto 0!important;
  }

  .titulos h2 {
    font: normal normal 800 24px/28px Open Sans;
    letter-spacing: -0.96px;
  }

  .card-texto {
    background-color: #FFF;
    padding: 10px;
    border-radius: 8px;
  }

  .texto-beneficio h3 {
      font: normal normal 800 18px/20px Open Sans;
      letter-spacing: -0.72px;
      color: #EA5C9C;
  }

  .texto-beneficio p {
      text-align: center;
      font: normal normal normal 14px/18px Open Sans;
      letter-spacing: 0px;
      color: #333;
  }

  .alt-mob-card{
    margin-bottom: 15px!important;
  }

  .card-texto.mb-5{
    margin-bottom: 15px!important;
  }
}

</style>