<template>
    <section class="container-fluid">
        <div class="container">
          <h2 class="text-center py-5">CONHEÇA TODA <br class="mob"> NOSSA LINHA NEW HAIR</h2>
          <div class="row flex-wrap justify-content-between">
            <div class="col-md-6 pb-4">
              <a href="https://www.newhair.com.br/new-hair-vitamin-tratamento-30-dias.html">
              <img src="@/assets/img/lp-lista-vip-black-friday/banners/new-hair-caps-feminina.png" alt="">
              </a>
            </div>
            <div class="col-md-6 pb-4">
              <a href="https://www.newhair.com.br/new-hair-gummies-feminino-tratamento-90-dias-brinde.html">
              <img src="@/assets/img/lp-lista-vip-black-friday/banners/new-hair-gummy-feminina.png" alt="">
              </a>
            </div>
            <div class="col-md-6 pb-4">
              <a href="https://www.newhair.com.br/new-hair-home-care-essential-liso-perfeito.html">
              <img src="@/assets/img/lp-lista-vip-black-friday/banners/new-hair-linha-essential.png" alt="">
              </a>
            </div>
            <div class="col-md-6 pb-4">
              <a href="https://www.newhair.com.br/new-hair-gummy-uva-verde-vitamina-em-goma-para-cabelos.html">
              <img src="@/assets/img/lp-lista-vip-black-friday/banners/new-hair-gummy-masculino.png" alt="">
              </a>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'ConhecaNossaLinhaListaVip',

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

img{
  max-width: 100%;
}
h2 {
    font: normal normal bold 35px/44px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

h2 strong {
    font-weight: bold;
}
@media screen and (max-width: 600px) {
  h2{
    font: normal bold 24px/26px Open Sans;
  }

  .py-5{
    padding: 20px 0!important;
  }
    
}
</style>