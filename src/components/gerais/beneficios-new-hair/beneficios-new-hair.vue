<template>
  <div class="bg-alt py-5">
    <div class="container alt-mobile">
      <div class="titulos mb-5">
        <h2 class="text-center ml-4">A vitamina para cabelo, pele<br class="mob"> e unhas com minerais <br> e ácido hialurônico<br class="mob">  mais vendida do país</h2>
      </div>

      <div class="beneficios-total">
        <div class="texto-beneficio">
          <div class="card-texto mb-5">
            <h3>CRESCIMENTO ACELERADO</h3>
            <p>A fórmula potente da vitamina para cabelo New Hair comprimidos age de dentro para fora, nutrindo e fortalecendo os fios, acelerando o seu crescimento em até 6x, resultando em cabelos mais fortes, longos e menos quebradiços.</p>
          </div>
          <div class="card-texto alt-mob-card">
            <h3>REDUÇÃO DA QUEDA</h3>
            <p>Para o suplemento capilar New Hair, o lugar dos cabelos é na cabeça. Investimos em pesquisa para reduzir a queda capilar em até 96%, garantindo que os fios sigam o ciclo de renovação natural, sem perda de fios em excesso por falta de nutrientes.</p>
          </div>
        </div>
        <div class="img-beneficio desk">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/New-Hair-Acido-Hialuronico-Pote-Beneficios.png" alt="" loading="lazy">
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
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Ativos-Poderosos.svg" alt="" loading="lazy">
          <h4>17 Ativos <br class="mob"> <span>+ Ácido <br class="mob"> Hialurônico</span></h4>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Cabelos-Mais-Saudaveis.svg" alt="" loading="lazy">
          <h4>Cabelos <br> mais saudáveis</h4>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Pele-Hidratada-e-Jovem.svg" alt="" loading="lazy">
          <h4>Pele hidratada <br> e jovem</h4>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Unhas-Fortalecidas.svg" alt="" loading="lazy">
          <h4>Unhas <br> fortalecidas</h4>
        </div>
        <div class="cards-beneficios">
          <img src="@/assets/img/home-feminino/beneficios-new-hair/Produto-100-Porcento-Natural.svg" alt="" loading="lazy">
          <h4>Produto 100% <br> Natural</h4>
        </div>
      </div>

      <BotaoSingle class="btnCompre mt-3" v-if="isHtmlUrl" />
      <BotaoCompreAgora class="btnCompre pt-3" v-else />

    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue'
import BotaoSingle from '../botoes/botao-single.vue'
export default {
  components: { BotaoCompreAgora, BotaoSingle },
  name: 'BeneficiosNewHair',
  data() {
    return {
     url: window.location.href
    }
  },
  methods: {
    // Métodos
  },
  mounted() {
    // Funções que serão executadas assim que o componente for montado
  },
  computed: {
    isHtmlUrl() {
      return this.url.endsWith('.html');
    }
  }
}
</script>

<!-- Adiciona o atributo scoped para limitar o CSS a este componente apenas -->
<style scoped>
.bg-alt{
  background-color: #FDEEF5;
}
.titulos h2{
  text-align: center;
  font: normal normal bold 30px/34px Open Sans;
  letter-spacing: -1.28px;
  color: #333333;
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
  font: normal normal 800 24px/20px Open Sans;
  letter-spacing: -0.96px;
  color: #EA5C9C;
  margin-bottom: 15px;
}

.texto-beneficio p{
  text-align: center;
  font: normal normal normal 16px/20px Open Sans;
  letter-spacing: 0px;
  color: #000000;
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

.cards-beneficios h4{
  font: normal normal 800 18px/20px Open Sans;
  letter-spacing: -0.18px;
  color: #222222;
}

.cards-beneficios h4 span{
  color: #EA5C9C;
}



@media (max-width: 768px) {
  .texto-beneficio {
    width: 100%;
    margin-bottom: -20px;
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
  }

  .cards-beneficios h4 {
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
    margin: 48px auto 0!important; 
  }

  .titulos{
    margin-bottom: 0!important;
  }

  .titulos h2{
    font-size: 26px;
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

  .card-texto.mb-5 {
    margin-bottom: 1.5rem!important;
  }

  .texto-beneficio h3 {
      font: normal normal 800 18px/20px Open Sans;
      letter-spacing: -0.72px;
  }

  .texto-beneficio p {
      text-align: center;
      font: normal normal normal 14px/18px Open Sans;
      letter-spacing: 0px;
  }

  .alt-mob-card{
    margin-bottom: 3rem!important;
  }

}

</style>