<template>
  <div class="bg-alt py-5 desk">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <TabelaNutricionalNewHair :selecao="dataTable" />
        </div>
        
        <div class="col-md-4">
          <img v-if="imagem == 'morango'" src="@/assets/img/novas-gomas/informacional/New-Hair-Gummy-Pote-Frontal-Morango-Fresh-Desktop.png" alt="">
          <img v-if="imagem == 'laranja'" src="@/assets/img/novas-gomas/informacional/New-Hair-Gummy-Pote-Frontal-Laranja-Desktop.png" alt="">
          <img v-if="imagem == 'uva'" src="@/assets/img/novas-gomas/informacional/New-Hair-Gummy-Pote-Frontal-Uva-Verde-Desktop.png" alt="">
        </div>

        <div class="col-md-4">
          <p><strong>INGREDIENTES:</strong> 
            <span v-if="imagem == 'uva'">Hialuronato de sódio, bisglicinato de selênio (Selênio), acetato de racealfatocoferol (Vit. E), bisglicinato de zinco (Zinco), ácido pantotênico (Vit. B5), cloridrato de piridoxina (Vit. B6), riboflavina (Vit. B2), acetato de retinol (Vit. A), ácido fólico (Vit. B9), biotina (Vit. H), colecalciferol (Vit. D3), cianocobalamina (Vit. B12), picolinato de cromo (cromo), conservante sorbato de potássio, edulcorante glicosídeos de esteviol, veículo xarope de maltitol, veículo xarope de sorbitol, água purificada, gelatina, acidulante ácido cítrico, aroma idêntico ao natural de uva verde, corante azul brilhante.</span>
            <span v-if="imagem == 'morango'">
              ácido ascórbico (vitamina C), acetato alfa tocoferol (vitamina E), pantotenato de cálcio (ácido pantotênico), cloridrato de piridoxina (vitamina B6), palmitato de retinol (vitamina A), d-biotina (biotina), ergocalciferol (vitamina D), cianocobalamina (vitamina B12), hialuronato de sódio ácido hialurônico, concentrados de cenoura e groselha negra, edulcorantes naturais xarope de maltitol e maltitol, estabilizante pectina, acidulante ácido cítrico, regulador de acidez citrato de sódio, glaceante cera carnaúba, aromas naturais de morango e menta.
            </span>
            <span v-if="imagem == 'laranja'">
              ácido ascórbico (vitamina C), acetato alfa tocoferol (vitamina E), pantotenato de cálcio (ácido pantotênico), cloridrato de piridoxina (vitamina B6), palmitato de retinol (vitamina A), d-biotina (biotina), ergocalciferol (vitamina D), cianocobalamina (vitamina B12), hialuronato de sódio ácido hialurônico, concentrados de maçã, cártamo e limão, edulcorantes naturais xarope de maltitol e maltitol, estabilizante pectina, acidulante ácido cítrico, regulador de acidez citrato de sódio, glaceante cera de carnaúba, aroma natural de laranja.
            </span>
          </p>
          <p><strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM AÇÚCAR. NÃO CONTÉM LACTOSE.</strong></p>
          <p><strong>ALÉRGICOS: PODE CONTER TRAÇOS DE DERIVADOS DO LEITE, DA SOJA E DO OVO.</strong></p>
          <p><strong>PARECE AÇÚCAR, MAS NÃO É!</strong></p>
          <p>Para que as gominhas mais amadas e potentes do país cheguem para você em condições de consumo adequadas, fizemos uma adaptação na fórmula para que elas não se "unam" durante o transporte e armazenamento, por isso, essa camada que se parece com "açúcar", na verdade é maltitol, um ativo já presente na fórmula e que garante esse efeito "soltinho", não precisa se preocupar, a fórmula continua sem açúcar!</p>
        </div>
        
      </div>
      <BotaoSingle class="btn-cta" v-if="isHtmlUrl"/>
      <BotaoCompreAgora class="btn-cta" v-else/> 
    </div>
  </div>
</template>

<script>
import TabelaNutricionalNewHair from '../informacoes-nutricionais/tabela-nutricional-new-hair.vue';
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
import BotaoSingle from '../botoes/botao-single.vue';

export default {
  components: { TabelaNutricionalNewHair, BotaoCompreAgora, BotaoSingle },
  name: "InformacoesNutricionaisGummy",

  props: ['imagem'],

  data() {
    return {
      dataTable: [
                    {
                        col1: 'Valor energético (kcal)',
                        col2: '6',
                        col3: '0',
                    },
                    {
                        col1: 'Carboidratos totais (g)',
                        col2: '2,7',
                        col3: '1',
                    },
                    {
                        col1: 'Açúcares totais (g)',
                        col2: '0',
                        col3: '-',
                    },
                    {
                        col1: 'Açúcares adicionados (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Poliois totais (g)',
                        col2: '2,3',
                        col3: '-',
                    },
                    {
                        col1: 'Proteínas (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras totais (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras saturadas (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras trans (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Fibra alimentar (g)',
                        col2: '0,2',
                        col3: '1',
                    },
                    {
                        col1: 'Sódio (mg)',
                        col2: '7',
                        col3: '0',
                    },
                    {
                        col1: 'Ácido hialurônico (mg)',
                        col2: '10',
                        col3: '-',
                    },
                    {
                        col1: 'Biotina (µg)',
                        col2: '45',
                        col3: '150',
                    },
                    {
                        col1: 'Vitamina A (µg)',
                        col2: '800',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina B5 (mg)',
                        col2: '5',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina B6 (mg)',
                        col2: '1,3',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina BI 2 (mg)',
                        col2: '2,4',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina C (mg)',
                        col2: '45',
                        col3: '45',
                    },
                    {
                        col1: 'Vitamina D (µg)',
                        col2: '15',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina E (mg)',
                        col2: '15',
                        col3: '100',
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
  background-color: #FFF;
}

h2{
  text-align: center;
  font: normal normal 800 48px/13px Open Sans;
  letter-spacing: -1.92px;
  color: #EA5C9C;
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

.btn-cta{
  margin-top: -26px!important;
  z-index: 9!important;
  position: relative;
}

.col-md-4 {
    z-index: 1!important;
}

/* responsivo */
@media (max-width: 767px) {
  h2{
    font: normal normal 800 32px/13px Open Sans;
    letter-spacing: -1.28px;
}
}
</style>