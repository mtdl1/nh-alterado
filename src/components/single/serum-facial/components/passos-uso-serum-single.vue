<template>
  <div class="container">
    <Titulos :titulo="`Em 4 passos a sua pele fica incrível`" :subtitulo="`É descomplicado e simples manter a sua pele sempre jovem`" class="py-5"/>
    <div class="cards-passos row justify-content-between">
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 1.png" alt="">
          <p>Com sabonete neutro, lave a pele do rosto, seque com cuidado</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 2.png" alt="">
          <p>Passe uma camada fina do Sérum New Hair 10 em 1</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 3.png" alt="">
          <p>Faça uma massagem em todo a pele do rosto</p>
        </div>
        <div class="col-md-3">
          <img src="@/assets/img/serum/passos/passo 4.png" alt="">
          <p>Aguarde até que o produto seja absorvido por completo, pronto!</p>
        </div>
      </div>
      <BotaoCompreAgora />
  </div>
</template>

<script>
import Titulos from '../../../produtos-exibicao/titulos.vue';
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue';
export default {
  components: { Titulos, BotaoCompreAgora },
  name: "PassosUsoSerumSingle",
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