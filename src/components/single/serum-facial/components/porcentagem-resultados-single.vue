<template>
  <div class="bg-alt pb-5">
    <div class="container">
      <Titulos :titulo="`Quem usa o sérum 10 em 1 <br class='mob'> confirma os resultados`" :subtitulo="`A fórmula fundamental para a sua pele <br class='mob'> com aprovação real`" class="py-5"/>
      <div class="cards-resultados row justify-content-between">
        <div class="col-md-3">
          <p class="numeros-resultado"><strong>92%</strong></p>
          <p>Perceberam expressiva diminuição de manchas.</p>
        </div>
        <div class="col-md-3">
          <p class="numeros-resultado"><strong>98%</strong></p>
          <p>Relataram que a pele ficou mais firme e lisa.</p>
        </div>
        <div class="col-md-3">
          <p class="numeros-resultado"><strong>97%</strong></p>
          <p>Apontaram mudanças positivas na textura e na aparência geral da pele.</p>
        </div>
        <div class="col-md-3">
          <p class="numeros-resultado"><strong>95%</strong></p>
          <p>Sentiram a pele mais hidratada e úmida.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulos from "../../../produtos-exibicao/titulos.vue"

export default {
  name: "PorcentagemResultadosSingle",
  components: {
    Titulos
  },
};
</script>

<style scoped>
.bg-alt {
  background-color: #FFF7FB;
}

.cards-resultados .col-md-3 {
  background: #FAFAFA 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000D;
  border-radius: 10px;
  padding: 30px 20px;
  max-width: 23%!important;
}

.numeros-resultado{
  text-align: center;
  padding-bottom: 10px;
}

.numeros-resultado strong{
  font: normal normal 700 60px/64px Open Sans;
  letter-spacing: -0.6px;
  color: #ff4289;
}

.cards-resultados p{
  font: normal normal normal 18px/22px Open Sans;
  letter-spacing: -0.18px;
  color: #222222;
  text-align: center;
}

/* responsivo */
@media (max-width: 991px) {
  .py-5{
    padding-top: 30px!important;
    padding-bottom: 30px!important;
  }
  .cards-resultados{
    justify-content: space-around!important;
  }

  .cards-resultados .col-md-3 {
    max-width: 45%!important;
    margin-bottom: 10px;
    padding: 25px 10px 15px;
  }

  .cards-resultados p{
    font: normal normal normal 14px/20px Open Sans;
    letter-spacing: -0.14px;
    color: #222222;
  }

  .numeros-resultado strong{
    font: normal normal 700 40px/20px Open Sans;
    letter-spacing: -0.4px;
    color: #ff4289;
  }
}

</style>