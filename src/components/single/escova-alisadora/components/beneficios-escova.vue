<template>
  <div class="bg-alt pb-5">
    <div class="container">
      <Titulos :titulo="`Uma escova, cinco benefícios para os seus fios!`" :subtitulo="`Resultado de salão em poucos minutos, onde você estiver.`" :color="'white'" class="py-5"/>
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="beneficios">
            <div class="beneficio mt-2">
              <p><strong>ALISA</strong></p>
              <p>Pente que alcança os fios desde a raiz, <br class="mob"> alisando com perfeição</p>
            </div>
            <div class="beneficio">
              <p><strong>MODELA</strong></p>
              <p>Placas de cerâmica ionizada que <br class="mob"> não achatam os fios</p>
            </div>
            <div class="beneficio">
              <p><strong>SECA</strong></p>
              <p>Cabelos secos e finalizados como no salão <br class="mob"> em minutos</p>
            </div>
            <div class="beneficio">
              <p><strong>ANTIFRIZZ</strong></p>
              <p>Elimina o frizz desde a raiz <br class="mob"> na primeira “passada”</p>
            </div>
            <div class="beneficio">
              <p><strong>HIDRATA</strong></p>
              <p>Graças à tecnologia das placas de cerâmica <br class="mob"> que sela as cutículas</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <video width="580" autoplay muted loop>
            <source src="@/assets/img/produtos/nh-escova-alisadora/videos/ESCOVA ALISADORA VIDEO 1.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <BotaoCompreAgora class="mt-4" />
    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue'
import Titulos from '../../../produtos-exibicao/titulos.vue'
export default{
  components: { Titulos, BotaoCompreAgora },
  name: 'BeneficiosEscova',
}
</script>

<style scoped>
.bg-alt{
  background-color: #ff4289;
}

.beneficio{
  background-color: #FFF;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.beneficio p{
  font: normal normal normal 16px/20px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}

.beneficio p strong{
  font: normal normal 700 24px/26px Open Sans;
  letter-spacing: -0.96px;
  color: #ff4289;
}

.col-md-6 video{
  border-radius: 20px;
}

/* responsivo */
@media (max-width: 991px) {
  video{
    max-width: 100%;
  }
  .beneficio{
    text-align: center;
  }
  .py-5{
    padding-top: 2rem !important;
    padding-bottom: 1rem !important;
  }

  .beneficio p strong{
    font: normal normal 800 18px/20px Open Sans;
    letter-spacing: -0.72px;
  }

  .beneficio p{
    font: normal normal normal 14px/16px Open Sans;
    letter-spacing: 0px;
    color: #222222;
  }

}
</style>