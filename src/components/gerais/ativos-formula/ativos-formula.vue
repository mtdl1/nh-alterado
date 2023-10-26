<template>
  <div class="container-fluid" id="readMore">
    <div class="container">
      <div class="titulos mt-3">
        <h2>Conheça os poderosos ativos da fórmula New Hair</h2>
        <p class="my-2">De A a Z, benefícios incríveis <br class="mob"> para pele e unhas também</p>
      </div>
      <!-- <div class="ativos-formula-total mt-5"> -->
        <div class="row">
                  <div class="col item-container">
                      <div class="items d-flex justify-content-between flex-wrap" :style="{ height: `${height}` }"> 
                          <div class="item" v-for="item, i in items" :key="i">
                              <div class="item-title" v-html="item.title" />
                              <p class="text" v-html="item.text" />
                          </div>
                      </div>
                      <div class="shadow-divisor" v-if="height != 'auto'" />
                      <button class="read-more" @click="height = height != 'auto' ? 'auto' : '300px'; scrollToId('readMore')">
                          {{ height != 'auto' ? 'Ver Mais' : 'Ver Menos'}}
                      </button>
                  </div>
              </div>
      <botao-compre-agora/>
    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue'
export default {
  name: "AtivosFormula",

  data() {
   return {
            height: '360px',
            items: [
                {
                    title: 'Rico em Ácido Hialurônico',
                    text: 'Por ocupar os espaços entre as células da pele, auxilia na manutenção da hidratação, elasticidade e firmeza, prevenindo o aparecimento de rugas e linha de expressão.'
                },
                {
                    title: 'Vitamina A',
                    text: 'Por possuir propriedades antioxidantes, a vitamina A ajuda os cabelos a crescerem mais rápido e mais fortes.'
                },
                {
                    title: 'Vitamina B1',
                    text: 'Auxilia no controle do estresse, uma das causas da queda capilar, portanto, ajuda a prevenir e corrigir o problema.'
                },
                {
                    title: 'Vitamina B2',
                    text: 'Importante para o crescimento saudável dos fios, atua na cicatrização, prevenção do enfraquecimento e no combate à queda dos cabelos.'
                },
                {
                    title: 'Vitamina B3',
                    text: 'Atua no aumento da circulação do couro cabeludo, contribuindo com a manutenção da saúde e a força dos fios.'
                },
                {
                    title: 'Vitamina B5',
                    text: 'Atua na prevenção da queda e na perda da coloração natural dos fios, além de agir na saúde do couro cabeludo.'
                },
                {
                    title: 'Vitamina B6',
                    text: 'Atua na síntese de queratina, auxiliando no escurecimento e manutenção da cor dos novos fios.'
                },
                {
                    title: 'Vitamina B7 (Biotina)',
                    text: 'Auxilia na produção da queratina, fortalecendo e reconstruindo a estrutura dos fios e unhas, evitando a queda e fortalecendo ambos.'
                },
                {
                    title: 'Vitamina B9 (Ácido Fólico)',
                    text: 'Responsável pela formação de hemoglobina, proteínas e produção de novas células, estimulando o crescimento capilar.'
                },
                {
                    title: 'Vitamina B12',
                    text: 'Potencializa o crescimento mais saudável e forte, evitando a quebra e a queda, devido à oxigenação do couro cabeludo.'
                },
                {
                    title: 'Vitamina C',
                    text: 'Potencializa a produção do colágeno e proteínas que auxiliam na manutenção da beleza dos cabelos e das unhas.'
                },
                {
                    title: 'Vitamina D',
                    text: 'Fundamental no desenvolvimento do folículo capilar, principalmente na fase de crescimento, para manter os cabelos mais grossos e “cheios”.'
                },
                {
                    title: 'Vitamina E',
                    text: 'Com efeito antioxidante, evita o envelhecimento dos fios e estimula a circulação sanguínea do couro cabeludo e fortalecimento das unhas.'
                },
                {
                    title: 'Cobre',
                    text: 'Importante antioxidante, contribui com a formação de melatonina, impedindo que os fios e a pele sofram com a perda de pigmentação e o envelhecimento precoce.'
                },
                {
                    title: 'Cromo',
                    text: 'Presente em componentes essenciais dos fios, como a queratina, contribuindo para a saúde capilar.'
                },
                {
                    title: 'Ferro',
                    text: 'Aliado no combate à queda de cabelos pois auxilia na oxigenação dos folículos capilares, contribuindo para a resistência dos fios.'
                },
                {
                    title: 'Selênio',
                    text: 'Atua no crescimento e fortalecimento dos fios, além de ser antioxidante, evitando o envelhecimento das células do couro cabeludo.'
                },
                {
                    title: 'Zinco',
                    text: 'Age na metabolização das vitaminas e proteínas essenciais no crescimento dos fios e unhas.'
                },
               
            ]
        }

        
  },

  methods: {
        scrollToId(id) {
            const element = document.getElementById(id)
            element.scrollIntoView({ behavior: 'smooth' })
        }
    },
    created() {
        window.innerWidth < 768 ? this.height = '450px' : this.height = '300px'
    },

 

  components: {
    BotaoCompreAgora
  },
}
</script>
<style scoped>


.titulos h2{
  text-align: center;
  font: normal normal bold 32px/32px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}
   .container-fluid {
      
        padding: 10px 0 46px;
    }

    .shadow-divisor {
        width: 100%;
        height: 180px;
        background: transparent linear-gradient(182deg, #F5F5F500 0%, #FFFF 100%) 0% 0% no-repeat padding-box;
        position: absolute;
        bottom: 50px;
        left: 0;
    }

    .items {
        margin-top: 41px;
        overflow: hidden;
    }

    .item {
        width: 48%;
        margin-bottom: 25px;
    }

    .item-title {
        font: normal normal bold 24px/20px Open Sans;
        letter-spacing: -0.24px;
        color: #333333;
        padding-bottom: 10px;
    }

    .item-title::before {
        content: '';
        display: inline-flex;
        width: 12px;
        height: 20px;
        background: #ed3d80;
        margin-right: 10px;
    }

    .text {
        font: normal normal normal 18px/22px Open Sans;
        letter-spacing: -0.14px;
        color: #333333;
    }

    .read-more {
        width: 144px;
        height: 36px;
        border: 1px solid #ed3d80;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto 0;
        text-align: center;
        font: normal normal bold 20px/30px Open Sans;
        letter-spacing: -1px;
        color: #ed3d80;
        transition: all 0.3s ease-in-out;
        background: transparent;
    }

    .read-more:hover {
       text-decoration-line: underline;
        
    }

    .read-more:focus {
        outline: none;
    }

    @media (max-width: 768px) {

      
      .titulos h2{
        text-align: center;
        font: normal normal bold 24px/28px Open Sans;
        letter-spacing: -0.64px;
        color: #333333;
        font-weight: 700!important;
      }

      .titulos p{
      text-align: center;
      font: normal normal normal 16px/20px Open Sans;
      letter-spacing: -0.4px;
      color: #333333;}

        .item {
            width: 100%;
        }

        .item-container {
            margin-top: -20px;
        }

        .item-title {
            font: normal normal bold 20px/20px Open Sans;
            letter-spacing: -0.2px;
        }

        .text {
            font: normal normal normal 12px/16px Open Sans;
            letter-spacing: -0.12px;
        }

        .shadow-divisor {
        width: 100%;
        height: 140px;
        background: transparent linear-gradient(182deg, #F5F5F500 0%, #FFFF 100%) 0% 0% no-repeat padding-box;
        position: absolute;
        bottom: 40px;
        left: 0;
    }
    }
</style>