<template>
  <div class="bg-alt">
    <div class="container">
       <TitulosHeading1 :h1="`O skincare completo, rápido e descomplicado`" :h3="`Leve com você o tratamento com os <br class='mob'> melhores ativos para a sua pele`" color="white" class="py-5"/>
      <div class="row">
        <div class="col-md-8 content">
          <p>O Sérum Facial 10 em 1 New Hair tem a fórmula perfeita para tratar a sua pele de forma descomplicada e poderosa, proporcionando benefícios e resultados incríveis.</p>
          <div class="cards row mt-3 justify-content-between">
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Ação antioxidante contra radicais livres.png" alt="" loading="lazy">
              <p>Ação antioxidante contra radicais livres</p>
            </div>
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Estimula a produção de colágeno.png" alt="" loading="lazy">
              <p>Estimula a produção de colágeno</p>
            </div>
            <div class="col-md-3">
              <img src="@/assets/img/serum/beneficios/icones/Ação anti-inflamatória e cicatrizante.png" alt="" loading="lazy">
              <p>Ação anti-inflamatória e cicatrizante</p>
            </div>
            <div class="col-md-3 mobmargin">
              <img src="@/assets/img/serum/beneficios/icones/Previne o envelhecimento precoce e linhas finas.png" alt="" loading="lazy">
              <p>Previne o envelhecimento precoce e linhas finas</p>
            </div>


            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/PROMOVE HIDRATAÇAO.png" alt="" loading="lazy">
              <p>Promove hidratação profunda</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/Previne o envelhecimento precoce e linhas finas-2.png" alt="" loading="lazy">
              <p>Suaviza e despigmenta manchas</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/PELE MAIS JOVEN.png" alt="" loading="lazy">
              <p>Pele mais jovem e macia</p>
            </div>
            <div class="col-md-3 mt-3">
              <img src="@/assets/img/serum/beneficios/icones/ACNES.png" alt="" loading="lazy">
              <p>Ameniza e alivia o incômodo da acne</p>
            </div>
            
            <div class="col-md-3 mt-3 clean">
            </div>

          </div>
          <p class="mt-3">A combinação de Superox C (Vitamina C), Ácido Hialurônico, Extratos de Uva e Algas Marinhas, Niacinamida, Resveratrol, Pantenol, Plantcol, Revinage e Vitamina E, garantem o skincare eficiente e fácil para não sair da sua necessaire.</p>
        </div>
        <div class="col-md-4 video">
          <video autoplay muted loop>
            <source src="@/assets/img/serum/beneficios/modelo_ serum_video.mp4"
              type="video/mp4">
          </video>
        </div>
      </div>
      <BotaoCompreAgora class="btnCompra pb-5"/>
    </div>
  </div>
</template>

<script>
import TitulosHeading1 from '../../produtos-exibicao/titulosheading1.vue';
import BotaoCompreAgora from '../botoes/botao-compre-agora.vue';
export default {
  components: {
    TitulosHeading1,
    BotaoCompreAgora
  },
  name: "BeneficiosSerum",
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

.video video{
  border-radius: 20px;
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

  video{
    margin-top: 20px;
  }
}

</style>