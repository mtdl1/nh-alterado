<template>
  <div id="produtos">
    <Titulos :titulo="`Kits imperdíveis de vitaminas <br class='mob'> para cabelo e barba`" :subtitulo="`O Blend de vitaminas para cabelo e barba <br class='mob'> mais vendido do Brasil!`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap">
      <BannerLateral
        :bg="'vitaminmasc'"
        :titulo="'vitaminas'"
        :subtitulo="''"
        :destaque="'barba, cabelos e pele'"
        :texto="'Aproveite ofertas incríveis das vitaminas mais amadas do Brasil'"
        :img="'new-hair-vitamin-masculino-banner-lateral.png'"
        :alteraespacos = true
        :alt="'Banner New Hair Vitamin Masculino, vitamina para barba, cabelos e pele rico em ácido hialurônico'"
        :title="'Banner New Hair Vitamin Masculino'"
      />
      <ProdutoLoja
        :nomeProduto="nomeProduto"
        :imgProduto="imgProduto"
        :imgProdutoMob="imgProdutoMob"
        :precoDe="precoDe"
        :precoPor="precoPor"
        :quantidadeProduto="quantidadeProduto"
        :idProduto="idProduto"
        :urlImgLp="urlImgLp"
        :urlBotaoSingle="urlBotaoSingle"
        :alt="alt"
        :title="title"
        :urlLista="urlLista"
        coresMasculino="true"
      />
      <ProdutoLoja
        :nomeProduto="nomeProduto2"
        :imgProduto="imgProduto2"
        :imgProdutoMob="imgProdutoMob2"
        :precoDe="precoDe2"
        :precoPor="precoPor2"
        :quantidadeProduto="quantidadeProduto2"
        :idProduto="idProduto2"
        :destaquevendido = true
        :coresMascuilino = true
        :urlImgLp="urlImgLp2"
        :urlBotaoSingle="urlBotaoSingle2"
        :alt="alt2"
        :title="title2"
        :urlLista="urlLista2"
        coresMasculino="true"
      />
      <ProdutoLoja
        :nomeProduto="nomeProduto3"
        :imgProduto="imgProduto3"
        :imgProdutoMob="imgProdutoMob3"
        :precoDe="precoDe3"
        :precoPor="precoPor3"
        :quantidadeProduto="quantidadeProduto3"
        :idProduto="idProduto3"
        :urlImgLp="urlImgLp3"
        :urlBotaoSingle="urlBotaoSingle3"
        :alt="alt3"
        :title="title3"
        :urlLista="urlLista3"
        coresMasculino="true"
      />
      </div>
  </div>
  </template>

<script>
import BannerLateral from '../../gerais/banner-lateral-kits/banner-lateral.vue'
import ProdutoLoja from '../../produtos/produtoLoja.vue'
import Titulos from '../titulos.vue'
export default{
  components: { ProdutoLoja, Titulos, BannerLateral },
  name: "KitsNHMLoja",

  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos

    this.nomeProduto = this.listaProdutos[0].newhairvitaminmasculino[0].nomeProduto
    this.imgProduto = this.listaProdutos[0].newhairvitaminmasculino[0].img
    this.imgProdutoMob = this.listaProdutos[0].newhairvitaminmasculino[0].imgMob
    this.precoDe = this.listaProdutos[0].newhairvitaminmasculino[0].precoDe
    this.precoPor = this.listaProdutos[0].newhairvitaminmasculino[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].newhairvitaminmasculino[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].newhairvitaminmasculino[0].idProduto
    this.urlImgLp = this.listaProdutos[0].newhairvitaminmasculino[0].urlImgLp
    this.urlBotaoSingle = this.listaProdutos[0].newhairvitaminmasculino[0].urlBotaoSingle
    this.alt = this.listaProdutos[0].newhairvitaminmasculino[0].alt
    this.title = this.listaProdutos[0].newhairvitaminmasculino[0].title
    this.urlLista = this.listaProdutos[0].newhairvitaminmasculino[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].nomeProduto
    this.imgProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].img
    this.imgProdutoMob2 = this.listaProdutos[0].newhairvitaminmasculino[1].imgMob
    this.precoDe2 = this.listaProdutos[0].newhairvitaminmasculino[1].precoDe
    this.precoPor2 = this.listaProdutos[0].newhairvitaminmasculino[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].idProduto
    this.urlImgLp2 = this.listaProdutos[0].newhairvitaminmasculino[1].urlImgLp
    this.urlBotaoSingle2 = this.listaProdutos[0].newhairvitaminmasculino[1].urlBotaoSingle
    this.alt2 = this.listaProdutos[0].newhairvitaminmasculino[0].alt
    this.title2 = this.listaProdutos[0].newhairvitaminmasculino[0].title
    this.urlLista2 = this.listaProdutos[0].newhairvitaminmasculino[1].urlLista
    
    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].nomeProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].img
    this.imgProdutoMob3 = this.listaProdutos[0].newhairvitaminmasculino[2].imgMob
    this.precoDe3 = this.listaProdutos[0].newhairvitaminmasculino[2].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminmasculino[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].idProduto
    this.urlImgLp3 = this.listaProdutos[0].newhairvitaminmasculino[2].urlImgLp
    this.urlBotaoSingle3 = this.listaProdutos[0].newhairvitaminmasculino[2].urlBotaoSingle
    this.alt3 = this.listaProdutos[0].newhairvitaminmasculino[0].alt
    this.title3 = this.listaProdutos[0].newhairvitaminmasculino[0].title
    this.urlLista3 = this.listaProdutos[0].newhairvitaminmasculino[2].urlLista

  },
}
</script>

<style scoped>
/* #produtos {
  background-color: #f5f5f5;
} */

@media (max-width: 767px) {
  .py-5 {
    padding-bottom: 20px !important;
  }
}
</style>