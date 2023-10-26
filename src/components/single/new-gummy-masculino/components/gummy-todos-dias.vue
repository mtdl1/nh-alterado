<template>
  <div class="full" >
    <div class="texto-dividido container">
      <div class="row align-items-center">
        <div class="texto pb-3">
          <h2 class="pb-4 text-center" >Porquê tomar New Hair Gummy todos os dias?</h2>
          <p>Potentes, poderosas e eficazes. Os três melhores adjetivos para definir o as gominhas mais consumidas e amadas do país. Com <br> 9 vitaminas, 3 minerais essenciais e ácido hialurônico, as gomas de New Hair vão transformar a saúde dos seus cabelos, pele e <br> unhas para sempre! Conte com o poder das vitaminas A, B2, B5, B6, B7, B9, B12, D3, E, com o reforço do Cromo, Selênio e Zinco.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GummyTodosDias",
};
</script>

<style scoped>
.full {
    background-color: #234380;
}

.texto-dividido {
    display: flex;
    align-items: center;
    padding: 80px 28px;
}

.texto-dividido h2 {
    font: normal normal bold 32px/40px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    font-weight: bold!important;
}

.texto-dividido p {
    font: normal normal normal 18px/24px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.img-todos-dias{
  margin-left: -80px;
}

@media (max-width: 600px) {
  .texto-dividido {
    padding-right: 15px !important;
    padding-left: 15px !important;
    flex-wrap: wrap;
  }

  
  .texto.pb-3 {
    padding: 0 15px!important;
  }

  .texto-dividido p {
    padding-right: 0 !important;
    padding: 20px 0 25px;
  }
  .imagem.mob {
    margin: 0 auto;
  }

  .texto-dividido h2 {
    line-height: 34px!important;
    padding-bottom: 0!important;
}
}
</style>