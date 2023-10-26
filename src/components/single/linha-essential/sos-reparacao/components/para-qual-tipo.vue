<template>
  <div>
    <div class="container-fluid bg-gelo py-5 mt-5">
    <h2 class="mb-5">Para qual tipo de cabelo:</h2>
      <div class="container d-flex justify-content-between flex-wrap">
        <div :class="['card-tipos position-relative',{disabled: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica,sgLisoPerfeito: selecionadoLisoPerfeito, sgForcaBrilho: selecionadoForcaBrilho, sgSuperDetox: selecionadoSuperDetox}]">
          <i class="fas fa-check position-absolute desk"></i>
          <div class="img-total">
            <img v-if="selecionadoCachosOndas" src="@/assets/img/single/linha-essential/icones/disabled/liso.svg" alt="">
            <img v-else src="@/assets/img/single/linha-essential/sos-reparacao/icones/liso.svg" alt="">
          </div>
          <div class="conteudo-total">
            <h3>Liso <i class="fas fa-check mob"></i></h3>
            <p>Fios mais finos ou grossos sem nenhum tipo de ondulação. Os cabelos lisos podem ser volumosos ou mais ralos.</p>
          </div>
        </div>
        <div :class="['card-tipos position-relative',{disabled: selecionadoLisoPerfeito, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgForcaBrilho: selecionadoForcaBrilho, sgSuperDetox: selecionadoSuperDetox }]">
          <i class="fas fa-check position-absolute desk"></i>
          <div class="img-total">
            <img v-if="selecionadoLisoPerfeito" src="@/assets/img/single/linha-essential/icones/disabled/ondulado.svg" alt="">
            <img v-else src="@/assets/img/single/linha-essential/sos-reparacao/icones/ondulado.svg" alt="">
          </div>
          <div class="conteudo-total">
            <h3>Ondulado <i class="fas fa-check mob"></i></h3>
            <p>Fios mais volumosos ou não, com diferentes tipos de ondulações nas pontas, porém, com a raiz lisa. Assim são os cabelos ondulados.</p>
          </div>
        </div>
        <div :class="['card-tipos position-relative',{disabled: selecionadoLisoPerfeito, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgForcaBrilho: selecionadoForcaBrilho, sgSuperDetox: selecionadoSuperDetox}]">
          <i class="fas fa-check position-absolute desk"></i>
          <div class="img-total">
            <img v-if="selecionadoLisoPerfeito" src="@/assets/img/single/linha-essential/icones/disabled/cacheado.svg" alt="">
            <img v-else src="@/assets/img/single/linha-essential/sos-reparacao/icones/cacheado.svg" alt="">
          </div>
          <div class="conteudo-total">
            <h3>Cacheado <i class="fas fa-check mob"></i></h3>
            <p>Volumosos, os cabelos cacheados possuem diferentes formatos e variações de cachos, abertos e fechados.</p>
          </div>
        </div>
        <div :class="['card-tipos position-relative',{disabled: selecionadoLisoPerfeito, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgForcaBrilho: selecionadoForcaBrilho, sgSuperDetox: selecionadoSuperDetox}]">
          <i class="fas fa-check position-absolute desk"></i>
          <div class="img-total">
            <img v-if="selecionadoLisoPerfeito" src="@/assets/img/single/linha-essential/icones/disabled/crespo.svg" alt="">
            <img v-else src="@/assets/img/single/linha-essential/sos-reparacao/icones/crespo.svg" alt="">
          </div>
          <div class="conteudo-total">
            <h3>Crespo <i class="fas fa-check mob"></i></h3>
            <p>Texturizados desde a raiz, os fios crespos variam de cachos mais volumosos a mechas mais ressecadas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParaQualTipo',
  props: {
      nomeLinha: String
    },
    data() {
      return {
        selecionadoSOSReparacao: false,
        selecionadoCachosOndas: false,
        selecionadoLisoPerfeito: false,
        selecionadoPosQuimica: false,
        selecionadoForcaBrilho: false,
        selecionadoSuperDetox: false,
      }
    },
    mounted() {
      if (this.nomeLinha == 'SGSReparacao') {
        this.selecionadoSOSReparacao = true
      }
      if (this.nomeLinha == 'SGCachosOndas') {
        this.selecionadoCachosOndas = true
      }
      if (this.nomeLinha == 'SGPosQuimica') {
        this.selecionadoPosQuimica = true
      }
      if (this.nomeLinha == 'SGLisoPerfeito') {
        this.selecionadoLisoPerfeito = true
      }
      if (this.nomeLinha == 'SGForcaBrilho') {
        this.selecionadoForcaBrilho = true
      }
      if (this.nomeLinha == 'SGSuperDetox') {
        this.selecionadoSuperDetox = true
      }
    }
}
</script>

<style scoped>

img{
  fill: rgb(255, 3, 3)!important;
}

h2 {
    text-align: center;
    font: normal normal bold 32px/40px Open Sans;
    letter-spacing: -0.4px;
    color: #333333;
}

.bg-gelo {
  background-color: #f5f5f5;
}

.card-tipos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 15px  ;
  background-color: #FF6978;
  width: 23%;
  border-radius: 10px;
}

.sgCachosOndas {
  background-color: #74519e;
}

.sgPosQuimica {
  background-color: #999999;
}

.sgLisoPerfeito {
  background-color: #ff73ac;
}

.sgForcaBrilho {
  background-color: #35BCD1;
}

.sgSuperDetox {
  background-color: #9FBD3E;
}

.card-tipos h3{
  font: normal normal bold 25px/40px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-align: center;
}

.card-tipos p{
  text-align: center;
  font: normal normal normal 14px/18px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

i.fas.fa-check.position-absolute {
    top: 20px;
    left: 20px;
    color: white;
}

.disabled{
  background-color: white;
}

.disabled i{
  display: none!important;
}

.disabled h3, .disabled p{
  color: #666;
}

@media screen and (max-width: 991px) {
  h2 {
      font: normal normal bold 25px/35px Open Sans;
  }
  .card-tipos {
    width: 98%;
    margin-bottom: 20px;
  }
  .card-tipos:last-child{
    margin-bottom: 0;
  }
  .conteudo-total {
    width: 80%;
  }

  .card-tipos {
      display: flex;
      flex-direction: unset!important;
  }

  .img-total {
      width: 20%;
  }

  .card-tipos p {
      text-align: left!important;
  }
  h3 {
    display: flex;
    align-items: center;
    font: normal normal bold 20px/20px Open Sans;
  }
  h3 i {
      font-size: 12px;
      margin-left: 10px;
  }
  .card-tipos p{
    font: normal normal normal 12px/16px Open Sans;
  }
}
</style>