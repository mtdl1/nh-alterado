<template>
  <div id="produtos">
    <Titulos :titulo="`Kits com vitaminas para cabelo <br class='mob'> aprovada para gestantes`" :subtitulo="`Cabelos e unhas saudáveis nos períodos <br class='mob'> de gestação e lactação.`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap">
      <BannerLateral
        :bg="'biotina'"
        :titulo="'vitaminas'"
        :subtitulo="'cabelos e unhas das mamães'"
        :destaque="'Rico em Biotina + 16 ativos'"
        :texto="'Suplemento alimentar ideal para manter os cabelos e unhas saudáveis no período de gestação e lactação.'"
        :img="'new-hair-vitamin-biotina-banner-lateral.png'"
        :alt="'Banner mostrando três potes do produto New Hair Vitamin Rico em biotina com rótulo na cor rosa'"
        :title="'Banner New Hair Vitamin Rico em Biotina'"
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
        :urlImgLp="urlImgLp2"
        :urlBotaoSingle="urlBotaoSingle2"
        :alt="alt2"
        :title="title2"
        :tarja= true
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
        :urlImgLp="urlImgLp3"
        :urlBotaoSingle="urlBotaoSingle3"
        :alt="alt3"
        :title="title3"
        :urlLista="urlLista3"
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
  name: "KitsNHBLoja",

  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos

    this.nomeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].nomeProduto
    this.imgProduto = this.listaProdutos[0].newhairvitaminbiotina[0].img
    this.imgProdutoMob = this.listaProdutos[0].newhairvitaminbiotina[0].imgMob
    this.precoDe = this.listaProdutos[0].newhairvitaminbiotina[0].precoDe
    this.precoPor = this.listaProdutos[0].newhairvitaminbiotina[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].newhairvitaminbiotina[0].idProduto
    this.urlImgLp = this.listaProdutos[0].newhairvitaminbiotina[0].urlImgLp
    this.urlBotaoSingle = this.listaProdutos[0].newhairvitaminbiotina[0].urlBotaoSingle
    this.alt = this.listaProdutos[0].newhairvitaminbiotina[0].alt
    this.title = this.listaProdutos[0].newhairvitaminbiotina[0].title
    this.urlLista = this.listaProdutos[0].newhairvitaminbiotina[0].urlLista

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
    
    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].nomeProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].img
    this.imgProdutoMob3 = this.listaProdutos[0].newhairvitaminbiotina[2].imgMob
    this.precoDe3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].idProduto
    this.urlImgLp3 = this.listaProdutos[0].newhairvitaminbiotina[2].urlImgLp
    this.urlBotaoSingle3 = this.listaProdutos[0].newhairvitaminbiotina[2].urlBotaoSingle
    this.alt3 = this.listaProdutos[0].newhairvitaminbiotina[2].alt
    this.title3 = this.listaProdutos[0].newhairvitaminbiotina[2].title
    this.urlLista3 = this.listaProdutos[0].newhairvitaminbiotina[2].urlLista

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