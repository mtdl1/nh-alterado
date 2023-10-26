<template>
  <div class="bg-alt mt-5 py-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 desk">
          <img src="@/assets/img/serum/faixa-ativos/imagem landipage serum.jpg" alt="" loading="lazy" class="rounded">
        </div>
        <div class="col-md-6">
          <Titulos :titulo="`Seleção de ativos poderosos <br class='mob'> para uma pele perfeita`" :subtitulo="`Descomplicamos o skincare em casa <br class='mob'> com apenas 4 passos`" :align="'left'" class="py-2"/>
          <p>Reunimos os melhores ativos para simplificar os cuidados com a pele de maneira rápida e prática, para te acompanhar na necessaire em qualquer lugar, sem sujeira e dezenas de frascos.</p>
        </div>
        <div class="col-md-6 mob">
          <img src="@/assets/img/serum/faixa-ativos/imagem landipage serum.jpg" alt="" loading="lazy" class="rounded mt-3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulos from '../../produtos-exibicao/titulos.vue';
export default {
  name: "FaixaAtivos",
  components: {
    Titulos
  },
};
</script>

<style scoped>
.bg-alt{
  background: #F5F5F5;
}
img{
  max-width: 100%;
}

p{
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #191919;
}

/* responsivo */
@media (max-width: 991px) {
  p{
    font: normal normal normal 14px/16px Open Sans;
    letter-spacing: 0px;
    color: #222222;
  }
}
</style>