<template>
  <div class="container py-5">
    <div class="titulos">
      <h2>Conheça os ativos poderosos da fórmula 10 em 1</h2>
      <p class="mt-4">Para cada queixa, uma solução rápida e eficiente</p>
    </div>
    <!-- <div class="ativos-serum-total mt-5"> -->
    <div :class="['ativos-serum-total mt-5 pb-3 hide-height position-relative', {'show-height': !hideHeight}]">
      <div class="ativo">
        <h3>Ácido Hialurônico</h3>
        <p>Auxilia na manutenção da sustentação e da hidratação da pele, evita a flacidez, rugas e linhas de expressão, preenche e mantém a pele hidratada e jovem.</p>
      </div>
      <div class="ativo">
        <h3>Nano Resveratrol:</h3>
        <p>Com ação antioxidante, promove melhoria na aparência de rugas e linhas fina de expressão da pele, conferindo elasticidade e firmeza nas camadas da derme, além de amenizar a vermelhidão e amenizar a pigmentação de manchas.</p>
      </div>

      <div class="ativo">
        <h3>D-Pantenol</h3>
        <p>Retém umidade, promovendo a intensa hidratação da pele, além de auxiliar na prevenção do surgimento de sinais do envelhecimento precoce, ajuda na renovação e cicatrização da pele.</p>
      </div>
      <div class="ativo">
        <h3>Nano Retinol</h3>
        <p>A vitamina A ou Revinage, é um ativo de origem vegetal que controla a oleosidade, tem ação antioxidante, ilumina, promove firmeza e efeito calmante na pele. Ameniza de forma visível rugas e linhas de expressão, além de melhorar a elasticidade, proteger e hidratar a pele.</p>
      </div>
      
      <div class="ativo">
        <h3>Extrato De Algas Marinhas</h3>
        <p>Participa do processo de formação do colágeno, tem ação antioxidante, hidrata e cicatriza, mantendo a pele mais firme e protegida dos danos causados por fatores externos, como luz azul, poluição e raios UV.</p>
      </div>
      
      <div class="ativo">
        <h3>Niacinamida</h3>
        <p>Atua no aumento do número de ceramidas na pele, possui ação anti-inflamatória e hidratante, ameniza sensibilidade e a pigmentação, uniformiza o tamanho dos poros, reduz a vermelhidão e atua no combate aos radicais livres</p>
      </div>
      
      <div class="ativo">
        <h3>Extrato De Uva</h3>
        <p>Faz parte do processo de produção natural do colágeno, melhora a da aparência dos poros, uniformiza a pele, promove a restauração da vitamina C combater os sinais do tempo, proporciona leve esfoliação, além de hidratar e rejuvenescer a pele.</p>
      </div>
      <div class="ativo">
        <h3>Plantcol</h3>
        <p>É um Colágeno Vegetal que forma um filme biológico com o objetivo de proteger a pele da desidratação, além de estimular o crescimento celular, promover elasticidade, vitalidade e efeito tensor.</p>
      </div>
      
      <div class="ativo">
        <h3>Superox C</h3>
        <p>Tipo de vitamina C que estimula a síntese de colágeno e ácido hialurônico, ameniza a aparência das rugas, deixa a pele mais firme e iluminada, reequilibra as defesas das células com ação antioxidantes para manter a pele rejuvenescida e bela.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina E</h3>
        <p>Auxilia na prevenção do envelhecimento da pele e no surgimento das linhas de expressão, auxilia no processo de cicatrização, confere firmeza e hidratação, além de proteger dos raios UV, do frio e calor, mantendo a pele sempre saudáve.</p>
      </div>

      <div class="total-btn position-absolute">
        <div class="btn-hide" @click="hideHeight = !hideHeight"> {{ hideHeight ? 'Ver Mais' : 'Ver Menos' }} </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AtivosSerumSingle",

  data() {
    return {
      hideHeight: true
    }
  },

  components: {
  },
}
</script>
<style scoped>
.titulos h2{
  text-align: center;
  font: normal normal bold 32px/18px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.ativos-serum-total {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
}

.ativo {
    width: 45%;
    margin-bottom: 35px;
}

.ativo h3 {
    text-align: left;
    font: normal normal bold 24px/24px Open Sans;
    letter-spacing: -0.96px;
    color: #333333;
    border-left: 8px solid #ff4289;
    padding-left: 8px;
}

.ativo p {
    text-align: left;
    font: normal normal normal 18px/18px Open Sans;
    letter-spacing: 0px;
    color: #333333;
    margin-top: 15px;
}

.hide-height {
  height: 480px;
  overflow: hidden;
}

.show-height {
  height: auto !important;
  overflow: hidden;
}

.btn-hide {
  text-align: center;
  font: normal normal bold 18px/22px Open Sans;
  letter-spacing: 0px;
  color: #ff4289;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 auto;
  border: 2px solid #ff4289;
  border-radius: 10px;
  background-color: white;
  width: 12%;
  text-transform: uppercase;
}

.btn-hide:hover {
  text-decoration: underline;
}

.total-btn {
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgb(255 255 255 / 85%), rgb(255 255 255), rgb(255 255 255));
  padding-top: 45px;
  margin-top: -60px;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
}

.show-height .total-btn {
  margin-top: 0!important;
  padding-top: 0;
}

@media (max-width: 768px) {
    .ativo {
        width: 100%;
    }

    .titulos h2 {
    text-align: center;
    font: normal normal bold 24px/28px Open Sans;
    letter-spacing: -0.96px;
  }

  .titulos p {
    font: normal normal normal 16px/18px Open Sans;
    letter-spacing: 0px;
  }

  .ativo h3 {
    font: normal normal bold 18px/24px Open Sans;
    letter-spacing: -0.72px;
  }

  .ativo p {
    font: normal normal normal 16px/18px Open Sans;
    letter-spacing: 0px;
  }

  .btn-hide{
    width: 40%;
    margin-top: 10px;
  }
}
</style>