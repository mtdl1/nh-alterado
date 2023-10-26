<template>
  <div>
    <div id="produtos">
      <Titulosheading1 class="pt-5" :h1="`os melhores kits <br class='mob'> de vitaminas para <br class='mob'>cabelos e unhas `" :h3="`unhas e cabelos mais fortes crescendo <br class='mob'> como nunca!`"/>
      <div class="container mt-5 d-flex justify-content-between flex-wrap">
        <ProdutoLoja
          :nomeProduto="nomeProduto"
          :imgProduto="imgProduto"
          :imgProdutoMob="imgProdutoMob"
          :precoDe="precoDe"
          :precoPor="precoPor"
          :quantidadeProduto="quantidadeProduto"
          :idProduto="idProduto"
          :destaqueoferta = true
          :urlImgLp="urlImgLp"
          :urlBotaoSingle="urlBotaoSingle"
          :alt="alt"
          :title="title"
          :urlLista="urlLista"
        />
        <ProdutoLoja
          :nomeProduto="nomeProduto2"
          :imgProduto="imgProduto2"
          :imgProdutoMob="imgProdutoMob2"
          :precoDe="precoDe2"
          :precoPor="precoPor2"
          :quantidadeProduto="quantidadeProduto2"
          :idProduto="idProduto2"
          :destaqueoferta = true
          :urlImgLp="urlImgLp2"
          :urlBotaoSingle="urlBotaoSingle2"
          :alt="alt2"
          :title="title2"
          :urlLista="urlLista2"
        />
        <ProdutoLoja
          :nomeProduto="nomeProduto3"
          :imgProduto="imgProduto3"
          :imgProdutoMob="imgProdutoMob3"
          :precoDe="precoDe3"
          :precoPor="precoPor3"
          :quantidadeProduto="quantidadeProduto3"
          :idProduto="idProduto3"
          :destaqueoferta = true
          :urlImgLp="urlImgLp3"
          :urlBotaoSingle="urlBotaoSingle3"
          :alt="alt3"
          :title="title3"
          :urlLista="urlLista3"
          coresMasculino="true"
        />
        <ProdutoLoja
          :nomeProduto="nomeProduto4"
          :imgProduto="imgProduto4"
          :imgProdutoMob="imgProdutoMob4"
          :precoDe="precoDe4"
          :precoPor="precoPor4"
          :quantidadeProduto="quantidadeProduto4"
          :idProduto="idProduto4"
          :possuiVariacao="possuiVariacao4"
          :variacoes="variacoes4"
          :destaqueoferta = true
          :urlImgLp="urlImgLp4"
          :urlBotaoSingle="urlBotaoSingle4"
          :alt="alt4"
          :title="title4"
          :urlLista="urlLista4"
        />
        </div>
    </div>
  </div>
</template>

<script>
import ProdutoLoja from '../../produtos/produtoLoja.vue'
import Titulosheading1 from '../titulosheading1.vue';
export default{
  components: {
      ProdutoLoja,
      Titulosheading1
    },
    name: "KitsSortidos",

    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    },

  created() {
    this.$_loadingTimeInterval = null
    
    this.listaProdutos = this.$store.state.listaProdutos.produtos

    this.listaProdutos = this.$store.state.listaProdutos.produtos;
    this.nomeProduto = this.listaProdutos[0].newhairvitamin[1].nomeProduto;
    this.imgProduto = this.listaProdutos[0].newhairvitamin[1].img;
    this.imgProdutoMob = this.listaProdutos[0].newhairvitamin[1].imgMob;
    this.precoDe = this.listaProdutos[0].newhairvitamin[1].precoDe;
    this.precoPor = this.listaProdutos[0].newhairvitamin[1].precoPor;
    this.subtituloProduto = this.listaProdutos[0].newhairvitamin[1].subtituloProduto;
    this.quantidadeProduto = this.listaProdutos[0].newhairvitamin[1].quantidadeProduto;
    this.idProduto = this.listaProdutos[0].newhairvitamin[1].idProduto;
    this.urlImgLp = this.listaProdutos[0].newhairvitamin[1].urlImgLp;
    this.urlBotaoSingle = this.listaProdutos[0].newhairvitamin[1].urlBotaoSingle;
    this.alt = this.listaProdutos[0].newhairvitamin[1].alt;
    this.title = this.listaProdutos[0].newhairvitamin[1].title;
    this.urlLista = this.listaProdutos[0].newhairvitamin[1].urlLista;

    this.nomeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].nomeProduto
    this.imgProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].img
    this.imgProdutoMob2 = this.listaProdutos[0].newhairvitaminbiotina[1].imgMob
    this.precoDe2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoDe
    this.precoPor2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].idProduto
    this.urlImgLp2 = this.listaProdutos[0].newhairvitaminbiotina[1].urlImgLp
    this.urlBotaoSingle2 = this.listaProdutos[0].newhairvitaminbiotina[1].urlBotaoSingle
    this.alt2 = this.listaProdutos[0].newhairvitaminbiotina[1].alt
    this.title2 = this.listaProdutos[0].newhairvitaminbiotina[1].title
    this.urlLista2 = this.listaProdutos[0].newhairvitaminbiotina[1].urlLista
    
    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[1].nomeProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminmasculino[1].img
    this.imgProdutoMob3 = this.listaProdutos[0].newhairvitaminmasculino[1].imgMob
    this.precoDe3 = this.listaProdutos[0].newhairvitaminmasculino[1].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminmasculino[1].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[1].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminmasculino[1].idProduto
    this.urlImgLp3 = this.listaProdutos[0].newhairvitaminmasculino[1].urlImgLp
    this.urlBotaoSingle3 = this.listaProdutos[0].newhairvitaminmasculino[1].urlBotaoSingle
    this.alt3 = this.listaProdutos[0].newhairvitaminmasculino[1].alt
    this.title3 = this.listaProdutos[0].newhairvitaminmasculino[1].title
    this.urlLista3 = this.listaProdutos[0].newhairvitaminmasculino[1].urlLista

    this.nomeProduto4 = this.listaProdutos[0].gummy[1].nomeProduto
    this.subtituloProduto4 = this.listaProdutos[0].gummy[1].subtituloProduto
    this.imgProduto4 = this.listaProdutos[0].gummy[1].img
    this.imgProdutoMob4 = this.listaProdutos[0].gummy[1].imgMob
    this.precoDe4 = this.listaProdutos[0].gummy[1].precoDe
    this.precoPor4 = this.listaProdutos[0].gummy[1].precoPor
    this.quantidadeProduto4 = this.listaProdutos[0].gummy[1].quantidadeProduto
    this.idProduto4 = this.listaProdutos[0].gummy[1].idProduto
    this.possuiVariacao4 = this.listaProdutos[0].gummy[1].possuiVariacao
    this.variacoes4 = this.listaProdutos[0].gummy[1].variacoes
    this.urlImgLp4 = this.listaProdutos[0].gummy[1].urlImgLp
    this.urlBotaoSingle4 = this.listaProdutos[0].gummy[1].urlBotaoSingle
    this.alt4 = this.listaProdutos[0].gummy[1].variacoes[0].alt
    this.title4 = this.listaProdutos[0].gummy[1].variacoes[0].title
    this.urlLista4 = this.listaProdutos[0].gummy[1].urlLista
  },
}
</script>

<style scoped>
h1{
  text-align: center;
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -1.28px;
  color: #222222;
  font-weight: 700!important;
}

/* responsivo */

@media (max-width: 768px) {
  h1{
    font-size: 24px;
  }
  .pt-5 {
    padding-top: 20px !important;
  }

  .mt-5{
    margin-top: 0 !important;
  }
}
</style>