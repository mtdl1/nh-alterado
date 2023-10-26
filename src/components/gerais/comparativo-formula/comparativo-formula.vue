<template>
  <div class="container py-5">
    <div class="titulos">
      <h1>A vitamina para cabelo <br class="mob"> mais vendida <br class="desk"> do país <br class="mob">está ainda mais potente</h1>
      <p class="py-3">Veja o que mudou na fórmula de New Hair suplemento capilar</p>
    </div>
    <div class="comparacao mt-4">
      <div class="img-comparaco mob">
        <img src="@/assets/img/home-feminino/comparacao-formula/comparacao-new-hair-nova-formula-com-antiga-mobile.jpg" alt="" loading="lazy">
      </div>
      <div class="antiga">
        <h3 class="mb-2">FÓRMULA <br> ANTIGA</h3>
        <p>Formato de <br> cápsulas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>Para cabelos e unhas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>12 vitaminas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>5 minerais <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>Imunidade reforçada <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        <p>100% natural <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
      </div>
      <div class="nova">
        <h3 class="mb-2">FÓRMULA <br> MAIS POTENTE:</h3>

        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Formato de <br> <strong>comprimidos</strong></p>
        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <strong>Ácido Hialurônico</strong></p>
        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Para cabelos, <strong>PELE</strong> <br> e unhas</p>

        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> 12 vitaminas</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> 5 minerais</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> Imunidade reforçada</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> 100% natural</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  font: normal normal bold 36px/36px Open Sans;
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
  background-image: url(../../../assets/img/home-feminino/comparacao-formula/Comparativo-Pote-Antigo-Pote-Novo-10.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 350px;
}

.antiga, .nova {
  width: 20%;
}

.antiga h3{
  font: normal normal 800 24px/24px Open Sans;
  letter-spacing: -0.96px;
  color: #555555;
  text-align: right;
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
  text-align: right;
  justify-content: end;
}

p img{
  width: 16px;
}

p strong{
  display: contents;
}

.antiga img{
  filter: grayscale(100%);
  margin-left: 10px;
}

.nova{
  padding-left: 35px;
}

.nova h3{
  text-align: left;
  font: normal normal 800 24px/24px Open Sans;
  letter-spacing: -0.96px;
  color: #EA5C9C;
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
  margin-right: 10px;
}

.nova p{
  text-align: left;
  justify-content: start;
}

/* estilizar para celular */
@media screen and (max-width: 767px) {

  .titulos h2{
    font: normal normal bold 24px/24px Open Sans;
  }

  .titulos h1{
   font: normal normal bold 24px/28px Open Sans;
   }

  .titulos p {
    padding: 5px 0!important;
    font: normal normal normal 16px/18px Open Sans;
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