<template>
  <div class="container">
    <Titulos :titulo="`Apenas 4 passos para <br class='mob'> resultados incríveis`" :subtitulo="`É simples e rápido deixar a sua pele maravilhosa`" class="py-5"/>
    <div class="cards-passos row justify-content-between">
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 1.png" alt="" loading="lazy">
          <p>Lave bem o rosto com sabonete neutro, seque delicadamente.</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 2.png" alt="" loading="lazy">
          <p>Aplique uma fina camada do Sérum 10 em 1 New Hair</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 3.png" alt="" loading="lazy">
          <p>Massageie suavemente por todo o rosto</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 4.png" alt="" loading="lazy">
          <p>Aguarde a completa absorção e pronto!</p>
        </div>
      </div>
      <BotaoCompreAgora />
  </div>
</template>

<script>
import Titulos from '../../produtos-exibicao/titulos.vue';
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
export default {
  components: { Titulos, BotaoCompreAgora },
  name: "PassosUsoSerum",
};
</script>

<style scoped>
.cards-passos .col-md-3 {
  padding: 30px 20px;
  max-width: 23%!important;
}

.cards-passos .col-md-3 p{
  text-align: center;
  font: normal normal normal 20px/24px Open Sans;
  letter-spacing: 0px;
  color: #2D2D2D;
}

/* responsivo */

@media (max-width: 991px) {
  .py-5{
    padding-top: 30px!important;
    padding-bottom: 30px!important;
  }

  .cards-passos{
    justify-content: center!important;
  }
  .cards-passos .col-md-3 {
    max-width: 44%!important;
    padding-top: 0px!important;
  }

  .cards-passos .col-md-3 p{
    font: normal normal normal 14px/18px Open Sans;
  }
}
</style>