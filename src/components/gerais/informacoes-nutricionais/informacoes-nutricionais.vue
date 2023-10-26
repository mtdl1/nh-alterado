<template>
  <div :class="['bg-alt pb-5', {bgAltHibrida: bgAlt == 'produtosHibrida'}]">
    <div class="img-comprimido"><img src="@/assets/img/home-feminino/informacoes-nutricionais/Comprimidos-New-Hair.png" alt="" loading="lazy"></div>
    <div class="container">
      <div class="titulos">
        <h2 class="mb-5">1 Comprimido ao dia</h2>
      </div>
      <div class="row">
        <div class="col-md-5">
          <TabelaNutricionalNewHair :selecao="dataTable" />
        </div>
        <div class="col-11 mx-auto col-md-7 ">
          <img src="@/assets/img/home-feminino/informacoes-nutricionais/New-Hair-Acido-Hialuronico-Potes-Tabela-Nutricional.png" alt="" class="desk">
          <p><strong>INGREDIENTES:</strong>Hialuronato de sódio obtido pela fermentação de streptococcus zoopidemicus (fonte de ácido hialurônico), ácido ascórbico (vitamina C), fumarato ferroso (ferro), acetato de dl-alfatocoferila (vitamina E), nicotinamida (vitamina B3), óxido de zinco (zinco), acetato de retinol (vitamina A), d-pantotenato de cálcio (vitamina B5), cianocobalamina (vitamina B12), colecalciferol (vitamina D3), sulfato de cobre anidro (cobre), cloridrato de piridoxina (vitamina B6), tiamina mononitrato (vitamina B1), d-biotina (vitamina B7), riboflavina (vitamina B2), selenito de sódio (selênio), ácido fólico (vitamina B9), picolinato de cromo (cromo), agente de massa celulose microcristalina, lubrificante estearato de magnésio e antiumectante dióxido de silício.</p> 
          
          <p><strong>REVESTIMENTO:</strong> Estabilizante hidroxipropimetilcelulose, espessante polietilenoglicole corante inorgânico dióxido de titânio. </p>
          
          <p><strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM LACTOSE.</strong></p>

        </div>
      </div>
      <BotaoSingle class="btnCompre" v-if="isHtmlUrl"/>
      <BotaoCompreAgora class="btnCompre" v-else />
    </div>
  </div>
</template>

<script>
import TabelaNutricionalNewHair from './tabela-nutricional-new-hair.vue';
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
import BotaoSingle from '../botoes/botao-single.vue';

export default {
  components: { TabelaNutricionalNewHair, BotaoCompreAgora, BotaoSingle },
  name: "InformacoesNutricionais",
  props: {
    bgAlt: {
      type: String,
      default: ''
    }
  },
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
                    {
                        col1: `<strong>Ácido Hialurônico</strong>`,	
                        col2: '10 mg',
                        col3: '**',
                    },
                ],
              url: window.location.href
    };
  },  
   computed: {
    isHtmlUrl() {
      return this.url.endsWith('.html');
    }
  }
};
</script>

<style scoped>
img{
  max-width: 100%;
}

.bg-alt {
  background-color: #FDEEF5;
}

.bg-alt.bgAltHibrida {
  background-color: #FFF;
}

.bg-alt.bgAltHibrida .img-comprimido{
  background-color: #FFF;
}

h2{
  text-align: center;
  font: normal normal 800 48px/13px Open Sans;
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
    margin-top: 25px;
    background-color: #fdeef5;
    text-align: center;
    margin-bottom: 20px;

}

.img-comprimido img {margin-top: -36px;}

/* responsivo */
@media (max-width: 767px) {
  h2{
    font: normal normal 800 32px/13px Open Sans;
    letter-spacing: -1.28px;
}


}
</style>