<template>
  <div class="bg-alt py-5">
    <div class="container alt-mobile">
      <div class="titulos mb-5">
        <h2>A vitamina para cabelo, pele e unhas com minerais <br class="desk"> e ácido hialurônico mais vendida do país</h2>
      </div>

      <div class="beneficios-total">
        <div class="texto-beneficio">
          <div class="card-texto mb-5">
            <h3>REDUÇÃO DA CALVÍCIE</h3>
            <p>Para o suplemento capilar New Hair, o lugar dos cabelos é na cabeça. Investimos em pesquisa para reduzir a queda capilar em até 96%, garantindo que os fios sigam o ciclo de renovação natural, sem perda em excesso por falta de nutrientes.</p>
          </div>
          <div class="card-texto alt-mob-card">
            <h3>BARBA MAIS VOLUMOSA</h3>
            <p>A fórmula potente da vitamina para cabelo New Hair comprimidos age de dentro para fora, nutrindo e fortalecendo os fios, acelerando o crescimento e volume em até 6x, resultando em cabelos e barba mais fortes, longos e menos quebradiços.</p>
          </div>
        </div>
        <div class="img-beneficio desk">
          <img src="@/assets/img/newhair-masculino/beneficios/New-Hair-Acido-Hialuronico-Pote-Beneficios- Desktop.png" alt="">
        </div>
        <div class="texto-beneficio">
          <div class="card-texto mb-5">
            <h3>PELE HIDRATADA E JOVEM</h3>
            <p>O poder do ácido hialurônico chegou para completar a fórmula da vitamina capilar mais potente do mercado, atuando na hidratação e renovação da pele de dentro para fora, auxiliando na redução das linhas de expressão, rugas e promovendo hidratação profunda.</p>
          </div>
          <div class="card-texto">
            <h3>IMUNIDADE EM ALTA</h3>
            <p>Um organismo com todos os nutrientes em dia garante o crescimento dos cabelos saudáveis, evita a queda dos fios, mantém a pele jovem e impede o ataque de vírus e bactérias oportunistas. Com New Hair comprimidos para cabelo, isso é possível.</p>
          </div>
        </div>
      </div>

      <div class="cards-beneficios-total d-flex justify-content-between mt-4">
        <div class="cards-beneficios">
          <img class="desk" src="@/assets/img/newhair-masculino/beneficios/Ativos-Poderosos-Masculino.svg" alt="">
          <img class="mob" src="@/assets/img/newhair-masculino/beneficios/Ativos-Poderosos-mob.svg" alt="">
          <p class="beneficios">17 Ativos + <br> <span>Ácido <br class="mob"> Hialurônico</span></p>
        </div>
        <div class="cards-beneficios">
          <img class="desk" src="@/assets/img/newhair-masculino/beneficios/Cabelos-Mais-Saudaveis-Masculino.svg" alt="">
          <img class="mob" src="@/assets/img/newhair-masculino/beneficios/Cabelos-Mais-Saudaveis-Masculino-mob.svg" alt="">
          <p class="beneficios">Cabelos <br class="desk"> mais saudáveis</p>
        </div>
        <div class="cards-beneficios">
          <img class="desk" src="@/assets/img/newhair-masculino/beneficios/Pele-Hidratada-e-Jovem-Masculino.svg" alt="">
          <img class="mob" src="@/assets/img/newhair-masculino/beneficios/Pele-Hidratada-e-Jovem-mob.svg" alt="">
          <p class="beneficios">Pele hidratada <br> e jovem</p>
        </div>
        <div class="cards-beneficios">
          <img class="desk" src="@/assets/img/newhair-masculino/beneficios/Barba-Mais-Volumosa-Masculino.svg" alt="">
          <img class="mob" src="@/assets/img/newhair-masculino/beneficios/Barba-Mais-Volumosa-Masculino-mob.svg" alt="">
          <p class="beneficios">Barba mais <br> volumosa</p>
        </div>
        <div class="cards-beneficios">
          <img class="desk" src="@/assets/img/newhair-masculino/beneficios/Produto-100-Porcento-Natural.svg" alt="">
          <img class="mob" src="@/assets/img/newhair-masculino/beneficios/Produto-100-Porcento-Natural-mob.svg" alt="">
          <p class="beneficios">Produto 100% <br> Natural</p>
        </div>
      </div>

      <BotaoCompreAgora class="btnCompre pb-5"  v-if="$route.path == '/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina'"/>
      <BotaoSingle class="btnCompre pb-5" v-else/>

    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue'
import BotaoSingle from '../../../gerais/botoes/botao-single.vue'

export default {
  components: {BotaoCompreAgora, BotaoSingle  },
  name: 'BeneficiosNewHair',
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
  background-color: #13509F;
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
  font: normal normal 700 24px/20px Open Sans;
  letter-spacing: -0.96px;
  color: #FFF;
  margin-bottom: 15px;
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
    margin: 0 auto;
}

.cards-beneficios .beneficios{
  font: normal normal 700 18px/20px Open Sans;
  letter-spacing: -0.18px;
  color: #222222;
}

.cards-beneficios .beneficios span{
  color: #13509F;
}

@media (max-width: 768px) {

  .titulos.mb-5 {
    margin-bottom: 0!important;
  }

  .texto-beneficio {
    width: 100%;
  }

  .cards-beneficios-total {
    flex-wrap: wrap;
    justify-content: center!important;
    margin-top: 0!important;
  }

  .cards-beneficios {
    width: 30%;
    background-color: unset;
    box-shadow: unset;
  }

  .cards-beneficios .beneficios {
    color: #FFF;
  }

  .cards-beneficios img {
    width: 40px;
  }

  .cards-beneficios .beneficios {
    text-align: center;
    font: normal normal bold 12px/14px Open Sans;
    letter-spacing: -0.48px;
  }

  .alt-mobile{
    display: flex;
    flex-wrap: wrap;
  }

  .titulos {
    order: 1;
  }

  .cards-beneficios-total {
    order: 2;
  }

  .beneficios-total {
    order: 3;
  }

  .btnCompre {
    order: 4;
    margin: 0 auto;
  }

  .titulos h2 {
    font: normal normal 800 24px/28px Open Sans;
    letter-spacing: -0.96px;
  }

  .card-texto {
    background-color: #FFF;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px!important;
  }

  .texto-beneficio h3 {
      font: normal normal 800 18px/20px Open Sans;
      letter-spacing: -0.72px;
      color: #13509F;
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

}

</style>