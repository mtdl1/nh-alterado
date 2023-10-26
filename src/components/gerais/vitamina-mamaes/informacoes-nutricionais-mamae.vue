<template>
  <div class="bg-alt pb-5">
    <div class="img-comprimido"><img src="@/assets/img/home-feminino/informacoes-nutricionais/Comprimidos-New-Hair.png" alt="" loading="lazy"></div>
    <div class="container">
      <div class="titulos">
        <h2 class="mb-5">Basta um comprimido de New Hair Vitamin ao dia</h2>
      </div>
      <div class="row">
        <div class="col-md-5">
          <TabelaNutricionalNewHair :selecao="dataTable" />
        </div>
        <div class="col-md-7">
          <img src="@/assets/img/vitamina-mamae/informacoes-nutricionais/New-Hair-Acido-Hialuronico-Potes-Tabela-Nutricional.png" alt="" loading="lazy" class="desk">
          <p><strong>INGREDIENTES:</strong> Ácido ascórbico (vitamina C), fumarato ferroso (ferro), acetato de dl-alfatocoferila (vitamina E), nicotinamida (vitamina B3), óxido de zinco (zinco), acetato de retinol (vitamina A), d-pantotenato de cálcio (vitamina B5), cianocobalamina (vitamina B12), colecalciferol (vitamina D3), sulfato de cobre anidro (cobre), cloridrato de piridoxina (vitamina B6), tiamina mononitrato (vitamina B1), d-biotina (vitamina B7), riboflavina (vitamina B2), selenito de sódio (selênio), ácido fólico (vitamina B9), picolinato de cromo (cromo), agente de massa celulose microcristalina, lubrificante estearato de magnésio e antiumectante dióxido de silício.</p>
          
          <p><strong>REVESTIMENTO:</strong> Estabilizante hidroxipropimetilcelulose, espessante polietilenoglicole corante inorgânico dióxido de titânio. </p>

          <p><strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE.</strong></p>

        </div>
      </div>
    <BotaoCompreAgora v-if="$route.path === '/vitamina-para-gestante-e-lactantes'"/>
    <BotaoSingle v-else/>
    </div>
  </div>
</template>

<script>
import TabelaNutricionalNewHair from '../informacoes-nutricionais/tabela-nutricional-new-hair.vue';
import BotaoSingle from '../botoes/botao-single.vue';
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';

export default {
  components: { TabelaNutricionalNewHair, BotaoSingle, BotaoCompreAgora, },
  name: "InformacoesNutricionais",
  data() {
    return {
      dataTable: [{
                        col1: 'Vitamina A',
                        col2: '600 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B1',
                        col2: '1,2 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B2',
                        col2: '1,3 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B3',
                        col2: '16 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B5',
                        col2: '5 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B6',
                        col2: '1,3 mg',
                        col3: '100%',
                    },
                    {
                        col1: '<strong>Vitamina B7 (Biotina)</strong>',
                        col2: '30 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B9',
                        col2: '240 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B12',
                        col2: '2,4 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina C',
                        col2: '45 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina D',
                        col2: '5 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina E',
                        col2: '10 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Cobre',
                        col2: '900 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Cromo',
                        col2: '35 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Ferro',
                        col2: '14 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Selênio',
                        col2: '34 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Zinco',
                        col2: '7 mg',
                        col3: '100%',
                    },
                ],
    };
  },  
};
</script>

<style scoped>

img{
  max-width: 100%;
}

.bg-alt {
  background-color: #FDEEF5;
}

h2{
  text-align: center;
  font: normal normal 800 32px/32px Open Sans;
  letter-spacing: -1.92px;
  color: #EA5C9C;
  font-weight: 700!important;
}

p{
  text-align: left;
  font: normal normal normal 14px/18px Open Sans;
  letter-spacing: -0.14px;
  margin-bottom: 20px;
}

p strong{
  font: normal normal 800 14px/18px Open Sans;
  letter-spacing: -0.14px;
}

.img-comprimido {
    margin-top: 0px;
    background-color: #fdeef5;
    text-align: center;
    margin-bottom: 20px;
}

.img-comprimido img {margin-top: -36px;}

/* responsivo */
@media (max-width: 767px) {
  h2{
    font: normal normal 800 24px/24px Open Sans;
    letter-spacing: -1.28px;
}
}
</style>