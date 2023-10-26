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
        <p>Ajuda a manter a sustentação e a hidratação da pele, evitando a flacidez, as linhas e sinais de expressão, preenchendo e mantendo a derme hidratada, viçosa e revitalizada.</p>
      </div>
      <div class="ativo">
        <h3>Nano Resveratrol:</h3>
        <p>Potente antioxidante, melhora a aparência de rugas e linhas finas, promove firmeza e elasticidade para a pele, combate a hiperpigmentação e reduz a vermelhidão.</p>
      </div>

      <div class="ativo">
        <h3>D-Pantenol</h3>
        <p>Devido à sua capacidade de reter umidade, promove a hidratação da pele, auxilia na prevenção dos sinais do envelhecimento precoce, cicatrização e renovação da pele.</p>
      </div>
      <div class="ativo">
        <h3>Nano Retinol</h3>
        <p>De origem vegetal, a vitamina A ou Revinage, controla a oleosidade, é um antioxidante poderoso, ilumina, dá firmeza e acalma a pele. Reduz visivelmente rugas e linhas de expressão, melhora a elasticidade, protege e hidrata a pele.</p>
      </div>
      
      <div class="ativo">
        <h3>Extrato De Algas Marinhas</h3>
        <p>Promove a formação do colágeno, possui ação antioxidante, hidratante e cicatrizante, resultando em uma pele mais firme e protegida dos efeitos causados por danos externos, como a radiação UV e poluição.</p>
      </div>
      
      <div class="ativo">
        <h3>Niacinamida</h3>
        <p>Aumenta a quantidade de ceramidas na pele, hidrata, possui ação anti-inflamatória, reduz a pigmentação e a sensibilidade, diminui os poros dilatados, a vermelhidão e combate os radicais livres.</p>
      </div>
      
      <div class="ativo">
        <h3>Extrato De Uva</h3>
        <p>Auxilia na produção natural de colágeno, promove a melhoria na aparência dos poros e uniformiza a pele, restaura a vitamina C para combater o envelhecimento, promove suave esfoliação, hidrata e rejuvenesce a pele.</p>
      </div>
      <div class="ativo">
        <h3>Plantcol</h3>
        <p>É um Colágeno Vegetal que forma um filme biológico com o objetivo de proteger a pele da desidratação, além de estimular o crescimento celular, promover elasticidade, vitalidade e efeito tensor.</p>
      </div>
      
      <div class="ativo">
        <h3>Superox C</h3>
        <p>Estimula a síntese de ácido hialurônico e pró-colágeno 1; melhora a aparência das rugas e promove maior firmeza e sustentação. ilumina e reequilibra as defesas celulares para reforçar a proteção contra os danos causados por radicais livres, para manter a juventude e a beleza da pele.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina E</h3>
        <p>Previne o envelhecimento precoce e surgimento de rugas, melhora a cicatrização e firmeza, hidrata, protege da radiação solar, do frio e calor excessivos, para manter a pele jovem e saudável.</p>
      </div>

      <div class="total-btn position-absolute">
        <div class="btn-hide" @click="hideHeight = !hideHeight"> {{ hideHeight ? 'Ver Mais' : 'Ver Menos' }} </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AtivosFormula",

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