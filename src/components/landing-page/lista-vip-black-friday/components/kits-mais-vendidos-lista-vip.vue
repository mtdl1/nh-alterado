<template>
    <section class="container-fluid bg-dark">
        <div class="container">
            <h1 class="text-white text-center py-5">BLACK FRIDAY 2022 É NA<br class="mob"> NEW HAIR: OFERTAS EXCLUSIVAS, DESCONTOS IMPERDÍVEIS E FRETE GRÁTIS PARA A MELHOR VITAMINA DE CABELOS DO BRASIL!</h1>
            <h2 class="text-white text-center py-5">Confira os kits mais vendidos:</h2>
            <div class="row justify-content-between flex-wrap pb-5">
                <div class="col-md-4 text-center">
                  <a href="https://www.newhair.com.br/new-hair-caps-feminino-tratamento-90-dias-brinde.html">
                  <img src="@/assets/img/lp-lista-vip-black-friday/produtos/new-hair-kit-3-potes-caps.png" alt="">
                  <div class="title-card text-center">
                    <p><strong>3 POTES:</strong> Tenha cabelos sem queda e <br> com crescimento saudável</p>
                  </div>
                  </a>
                </div>
                <div class="col-md-4 text-center">
                  <img src="@/assets/img/lp-lista-vip-black-friday/produtos/new-hair-kit-8-potes-caps.png" alt="">
                  <div class="title-card text-center">
                    <p><strong>6 POTES:</strong> Suplemento capilar mais potente do Brasil</p>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <a href="https://www.newhair.com.br/8-potes-new-hair-caps-feminino-brinde-escova-alisadora.html">
                  <img src="@/assets/img/lp-lista-vip-black-friday/produtos/new-hair-kit-12-potes-caps.png" alt="">
                  <div class="title-card text-center">
                    <p><strong>12 POTES:</strong> Cabelos sem queda, hidratados, lisos e saudáveis</p>
                  </div>
                  </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'KitsMaisVendidosListaVip',

    // data() {
    //     return {
    //         variavel: 'valor',
    //     }
    // },

    // methods: {
    //     funcao() {
    //         this.variavel = true
    //     }
    // },
}
</script>

<style lang="scss" scoped>

.bg-dark {
    background: #000 !important;
}

h2 {
    font: normal normal 600 20px/25px Open Sans !important;
    letter-spacing: 0px;
    padding: 0 0 48px 0 !important;
}

h1 {
    font: normal normal 600 28px/40px Open Sans;
    letter-spacing: 0px;
    padding: 48px 0 0 0 !important;
}

.title-card {
    width: 95%;
    position: absolute;
    bottom: 0;
    background-color: #FF4289;
    margin-right: 5px;
    padding: 10px;
    border-radius: 0 0 10px 10px;
    text-align: left;
}

.title-card p{
  font: normal normal 600 17px/20px Open Sans;
  letter-spacing: 0px;
  color: #ffffff;
}

.title-card p strong{
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  
  .pb-5{
    padding-bottom: 0!important;
  }

 h1 {
    font: normal normal bold 20px/28px Open Sans;
    padding: 20px 0 0 0 !important;
 }
  
  h2{
    font: normal normal bold 18px/28px Open Sans;
    padding-top: 4px !important;
    padding-bottom: 20px !important;
  }
  
  .col-md-4.text-center {
    margin-bottom: 20px;
  }

  .col-md-4.text-center img {
    max-width: 100%;
  }

  .title-card {
    max-width: 91.5%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center !important;
  }

  .title-card p{
    font: normal normal 600 16px/20px Open Sans;
    letter-spacing: 0px;
    color: #ffff;
  }
}

@media screen and (max-width: 400px) {
  .title-card {
    width: 91%;
  }
}

@media screen and (max-width: 360px) {
  .title-card {
    width: 90%;
  }
}

</style>