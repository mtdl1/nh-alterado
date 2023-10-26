<template>
  <div class="bg-alt pb-5">
    <div class="container">
      <Titulos :titulo="`É simples usar a escova alisadora new hair`" :subtitulo="`4 passos você deixa os seus cabelos incríveis cards do passo a passo com breve descrição`" class="py-5"/>
      <div class="row">
        <div class="col-md-6">
          <div class="video">
            <video width="580" height="500" autoplay muted loop>
              <source src="@/assets/img/produtos/nh-escova-alisadora/videos/ESCOVA ALISADORA VIDEO 2.mp4"
                type="video/mp4">
            </video>
          </div>
        </div>
        <div class="col-md-6 d-flex flex-wrap justify-content-between">
          <div class="card-passo mb-4">
            <h4>Passo 1</h4>
            <div class="img-card-passo text-center py-3"><img src="@/assets/img/produtos/nh-escova-alisadora/passos/Grupo 694.png" alt=""></div>
            <p>Desembarace os cabelos e separe em mechas;</p>
          </div>
          <div class="card-passo mb-4">
            <h4>Passo 2</h4>
            <div class="img-card-passo text-center py-3"><img src="@/assets/img/produtos/nh-escova-alisadora/passos/segure cada mecha.png" alt=""></div>
            <p>Segure cada mecha firmemente pelas pontas;</p>
          </div>
          <div class="card-passo">
            <h4>Passo 3</h4>
            <div class="img-card-passo text-center py-3"><img src="@/assets/img/produtos/nh-escova-alisadora/passos/Grupo 740.png" alt=""></div>
            <p>Encaixe a escova na mecha e deslize rapidamente pelos fios SEM parar</p>
          </div>
          <div class="card-passo">
            <h4>Passo 4</h4>
            <div class="img-card-passo text-center py-3"><img src="@/assets/img/produtos/nh-escova-alisadora/passos/Grupo 742.png" alt=""></div>
            <p>Modele as pontas dos cabelos como desejar.</p>
          </div>
        </div>
      </div>
      <div class="row mt-5 atencao">
        <p><strong>ATENÇÃO:</strong> Recomendamos o uso de protetor térmico nos fios antes de iniciar o procedimento.</p>
      </div>
      <BotaoCompreAgora class="mt-4"/>
    </div>
  </div>
</template>

<script>
import BotaoCompreAgora from '../../../gerais/botoes/botao-compre-agora.vue'
import Titulos from '../../../produtos-exibicao/titulos.vue'
export default{
  name: 'PassosUsoEscova',
  components: {
    Titulos,
    BotaoCompreAgora
  },
}
</script>,

<style scoped>
.bg-alt{
  background-color: #FFF2FC;
}

video{
  border-radius: 20px;
}

.card-passo {
    width: 45%;
    border-radius: 20px;
    background-color: #FFF;
}

.card-passo h4 {
    background-color: #ff4289;
    color: #FFF;
    border-radius: 10px 10px 0 0;
    padding: 10px 20px;
    font: normal normal bold 25px/20px Open Sans;
    letter-spacing: 0px;
}

.card-passo p {
  font: normal normal normal 18px/22px Open Sans;
  letter-spacing: 0px;
  color: #707070;
  padding: 0 15px 15px 15px;
  text-align: center;
}

.atencao p{
  font: normal normal normal 20px/27px Open Sans;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;
}

.atencao p strong{
  font: normal normal bold 20px/27px Open Sans;
  letter-spacing: 0px;
  color: #FF4289;
}

/* responsivo */
@media (max-width: 767px) {
  .video{
    text-align: center;
  }
  video{
    max-width: 100%;
    margin: 0 auto;
    height: unset;
    margin-bottom: 30px;
  }
}
</style>