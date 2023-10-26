<template>
  <div class="bg-alt">
    <div class="container">
      <Titulos :titulo="`A forma rápida e descomplicada de fazer o skincare`" :subtitulo="`O tratamento com os ativos mais potentes para a sua pele aonde você estiver`" color="white" class="py-5"/>
      <div class="row">
        <div class="col-md-8 content">
          <p>O Sérum Facial 10 em 1 New Hair possui fórmula potente para tratar a sua pele de forma poderosa e simples, proporcionando resultados duradouros e benefícios incríveis.</p>
          <div class="cards row mt-3 justify-content-between">
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Ação antioxidante contra radicais livres.png" alt="">
              <p>Antioxidantes que atuam contra os radicais livres</p>
            </div>
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Estimula a produção de colágeno.png" alt="">
              <p>Ação estimulante da produção de colágeno</p>
            </div>
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Ação anti-inflamatória e cicatrizante.png" alt="">
              <p>Anti-inflamatório e cicatrizante</p>
            </div>
            <div class="col-md-3 mobmargin">
              <img src="@/assets/img/serum/beneficios/icones/Previne o envelhecimento precoce e linhas finas.png" alt="">
              <p>Prevenção de rugas e linhas finas de expressão</p>
            </div>

            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/PROMOVE HIDRATAÇAO.png" alt="">
              <p>Hidratação profunda e intensa</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/Previne o envelhecimento precoce e linhas finas-2.png" alt="">
              <p>Reduz a pigmentação e suaviza manchas</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/PELE MAIS JOVEN.png" alt="">
              <p>Promove maciez e juventude para a pele</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/ACNES.png" alt="">
              <p>Diminui o incômodo causado pelas espinhas</p>
            </div>
            
            <div class="col-md-3 mt-3 clean">
            </div>

          </div>
          <p class="mt-3">A combinação de ativos naturais Algas Marinhas, Extratos de Uva, Plantcol, Superox C (Vitamina C), Pantenol, Ácido Hialurônico, Niacinamida, Resveratrol, Revinage e Vitamina E, garantem um skincare descomplicado e rápido para não sair da sua bolsa.</p>
        </div>
        <div class="col-md-4 img-produto">
          <img src="@/assets/img/serum/beneficios/SERUM.png" alt="">
        </div>
      </div>
      <BotaoCompreAgora class="btnCompra pb-5"/>
    </div>
  </div>
</template>

<script>
import Titulos from '../../../produtos-exibicao/titulos.vue';
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue';
export default {
  name: "BeneficiosSerumSingle",
  components: {
    Titulos,
    BotaoCompreAgora
  },
};
</script>

<style scoped>
.bg-alt {
  background-color: #ff4289;
}

.content p{
  font: normal normal normal 20px/26px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.cards .col-md-3 {
    max-width: 23%!important;
    background-color: #FFF;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 25px;
}

.cards p{
  font: normal normal bold 14px/16px Open Sans;
  letter-spacing: 0px;
  color: #222222;
}

.col-md-3.clean{
  background-color: unset;
}

/* responsivo */
@media (max-width: 991px) {

  .py-5{
    padding-top: 30px!important;
    padding-bottom: 30px!important;
  }
  .content p{
    font-size: 14px;
    line-height: 18px;
  }
  
  .cards{
    justify-content: space-around!important;
  }

  .cards .col-md-3 {
    max-width: 30%!important;
    padding-bottom: 10px;
  }

  .cards p{
    font-size: 12px;
  }

  .mobmargin{
    margin-top: 20px;
  }

  .img-produto{
    display: none;
  }

  .btnCompra{
    padding-bottom: 20px!important;
  }
}

</style>