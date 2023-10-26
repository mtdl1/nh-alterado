<template>
  <div class="container py-5">
    <div class="titulos">
      <h1>A vitamina para cabelo  mais vendida do país <br class="desk"> está ainda mais potente</h1>
      <p class="py-4">Veja o que mudou na fórmula de New Hair suplemento capilar</p>
    </div>
    <div class="comparacao mt-4">
      <div class="img-comparaco mob">
        <img src="@/assets/img/newhair-masculino/comparativo-formula/Comparativo-Pote-Antigo-Pote-Novo-Mobile.png" alt="">
      </div>
      <div class="antiga">
        <h3 class="mb-2">FÓRMULA <br> ANTIGA</h3>
        <p>Formato de <br> cápsulas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
        <p>Para cabelos e unhas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
        <p>12 vitaminas <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
        <p>5 minerais <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
        <p>Imunidade reforçada <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
        <p>100% natural <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""></p>
      </div>
      <div class="nova">
        <h3 class="mb-2">FÓRMULA <br> MAIS POTENTE:</h3>

        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> Formato de <br> <strong>comprimidos</strong></p>
        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> <strong>Ácido Hialurônico</strong></p>
        <p class="novos-ing"> <span>N</span> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> Para barba, cabelos <br> <strong>e pele</strong></p>

        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> 12 vitaminas</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> 5 minerais</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> Imunidade reforçada</p>
        <p> <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt=""> 100% natural</p>
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
.titulos h1, h2{
  text-align: center;
  font: normal normal bold 32px/32px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos h1 span{
  color: #13509F;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.comparacao{
  background-image: url(../../../../assets/img/newhair-masculino/comparativo-formula/Comparativo-Pote-Antigo-Pote-Novo-Masculino-Desktop.png);
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
  color: #13509F;
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

  .titulos h1{
    font: normal normal bold 28px/32px Open Sans;
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