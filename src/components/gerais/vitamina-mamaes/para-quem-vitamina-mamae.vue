<template>
  <div class="container py-5">
    <div class="titulos text-center mb-5">
      <h2>Porque New Hair Vitamin é recomendado <br class="desk"/>durante a gestação e lactação:</h2>
    </div>

    <div class="row flex-wrap justify-content-between align-items-center">
      <div class="card-esquerda">
        <img src="@/assets/img/vitamina-mamae/para-quem/IMAGEM-GESTANTE.png" alt="" loading="lazy">
        <p class="mt-4 py-4"  v-if="$route.path == '/new-hair-vitamina-capilar-com-biotina-3-potes.html'">As oscilações hormonais do período gestacional podem causar o enfraquecimento e quebra dos fios de cabelo. Portanto, a vitamina para lactante para queda de cabelo é a melhor opção para manter os índices de vitaminas e minerais em equilíbrio, mas sem oferecer riscos ao bebê e à saúde da mulher. 
        Os ativos são 100% naturais e oferecem vitaminas e minerais essenciais aos cabelos e unhas, que também podem ficar quebradiças e opacas.</p>
        <p class="mt-4" v-else>As oscilações hormonais do período gestacional podem causar o enfraquecimento e quebra dos fios de cabelo. Portanto, o suplemento para grávidas New Hair Vitamin é a melhor opção para manter os índices de vitaminas e minerais em equilíbrio sem oferecer riscos ao bebê e à sua saúde, já que os ativos da fórmula são 100% naturais e oferecem vitaminas e minerais essenciais aos cabelos e unhas, que também podem ficar quebradiças e opacas.</p>
      </div>
      
      <div class="card-direita">
        <img src="@/assets/img/vitamina-mamae/para-quem/IMAGEM-LACTANTE.png" alt="" loading="lazy">
        <p class="mt-4" v-if="$route.path == '/new-hair-vitamina-capilar-com-biotina-3-potes.html'" >
        Após o nascimento do bebê, os níveis hormonais caem, e, além da amamentação, a busca pelo corpo anterior à gestação pode levar à perda de nutrientes importantes para o organismo, causando anemia e deficiências de vitaminas e minerais importantes. Isso resulta em cabelos e unhas opacos e quebradiços e, também, na queda intensa dos fios.
        A vitamina para queda de cabelo para lactante proporciona os nutrientes que os seus fios e unhas precisam para restaurarem o viço e a vitalidade.</p>
        <p class="mt-4" v-else>Após o nascimento do bebê, os níveis hormonais caem, e além da amamentação, a busca pelo corpo anterior à gestação, pode levar à perda de nutrientes importantes para o organismo, causando anemia e deficiências de vitaminas e minerais importantes, resultando em cabelos e unhas opacos e quebradiços, além da queda intensa dos fios. A vitamina para lactantes New Hair Vitamin proporciona os nutrientes que os seus fios e unhas precisam para restaurarem o viço e a vitalidade.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ParaQuemVitaminaMamae",
};
</script>

<style scoped>
.titulos h2{
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -1.28px;
  color: #333333;
  font-weight: 700!important;
}

.card-direita, .card-esquerda{
  padding: 0;
}

.card-esquerda{
  width: 49%;
  box-shadow: 5px 5px 10px #0000001A;
  border-radius: 8px;
}

.card-esquerda img{
  width: 100%;
}

.card-direita{
  width: 49%;
  box-shadow: 5px 5px 10px #0000001A;
  border-radius: 8px;
}

.card-direita img{
  width: 100%;
}

p{
  font: normal normal normal 16px/22px Open Sans;
  letter-spacing: 0px;
  color: #555555;
  padding: 0 30px 30px;
}

@media (max-width: 768px) {
  .card-esquerda{
    width: 100%;
  }

  .card-direita{
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
  }

  .titulos h2{
    font-size: 24px;
    line-height: 26px;
  }
}
</style>