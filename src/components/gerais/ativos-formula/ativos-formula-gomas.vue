<template>
<div class="main">

  <div class="container py-5">
    <div class="titulos">
      <h2>Conheça os poderosos ativos da fórmula New Hair Gummy</h2>
      <p class="mt-4"> De A a Z, goma capilar com benefícios incríveis para cabelo, pele e unhas </p>
    </div>
    <!-- <div class="ativos-formula-total mt-5"> -->
    <div :class="['ativos-formula-total mt-5 hide-height position-relative', {'show-height': !hideHeight}]">
      <div class="ativo">
        <h3>Ácido Hialurônico</h3>
        <p>Por ocupar os espaços entre as células da pele, auxilia na manutenção da hidratação, elasticidade e firmeza, prevenindo o aparecimento de rugas e linha de expressão.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina A</h3>
        <p>Por possuir propriedades antioxidantes, a vitamina A ajuda os cabelos a crescerem mais rápido e mais fortes.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina B5</h3>
        <p>Atua na prevenção da queda e na perda da coloração natural dos fios, além de agir na saúde do couro cabeludo.</p>
      </div>
      
      <div class="ativo">
        <h3>Vitamina B6</h3>
        <p>Atua na síntese de queratina, auxiliando no escurecimento e manutenção da cor dos novos fios.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina B7 (Biotina)</h3>
        <p>Auxilia na produção da queratina, fortalecendo e reconstruindo a estrutura dos fios e unhas, evitando a queda e fortalecendo ambos.</p>
      </div>

      <div class="ativo">
        <h3>Vitamina B12</h3>
        <p>Potencializa o crescimento mais saudável e forte, evitando a quebra e a queda, devido à oxigenação do couro cabeludo.</p>
      </div>
      
      <div class="ativo">
        <h3>Vitamina C</h3>
        <p>Potencializa a produção do colágeno e proteínas que auxiliam na manutenção da beleza dos cabelos e das unhas.</p>
      </div>
      <div class="ativo">
        <h3>Vitamina D</h3>
        <p>Fundamental no desenvolvimento do folículo capilar, principalmente na fase de crescimento, para manter os cabelos mais grossos e “cheios”.</p>
      </div>
      
      <div class="ativo">
        <h3>Vitamina E</h3>
        <p>Com efeito antioxidante, evita o envelhecimento dos fios e estimula a circulação sanguínea do couro cabeludo e fortalecimento das unhas.</p>
      </div>

      <div class="total-btn position-absolute">
        <div class="btn-hide" @click="hideHeight = !hideHeight"> {{ hideHeight ? 'Ver Mais' : 'Ver Menos' }} </div>
      </div>
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
.main {
  background-color: #FFF;
}
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

.ativos-formula-total {
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
    border-left: 8px solid #ED3D80;
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
  background-image: linear-gradient(to bottom, #FFF);
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