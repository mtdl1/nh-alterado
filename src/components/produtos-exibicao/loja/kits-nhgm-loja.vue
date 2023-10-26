<template>
  <div id="produtos">
    <Titulos :titulo="`Vitaminas em goma para <br class='mob'> cabelo e barba`" :subtitulo="`O Blend de vitaminas para cabelos e barba <br class='mob'> fortes e volumosos!`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap pb-5">
      <BannerLateral
        :bg="'bgGummyMasc'"
        :titulo="'GUMMY'"
        :subtitulo="''"
        :destaque="'+ Ácido Hialurônico'"
        :texto="'Goma mais vitaminados do Brasil com Ácido Hialurônico e zero açúcar!'"
        :img="'new-hair-gummy-masculino-banner-lateral.png'"
        :alteraespacos = true
        :alt="'Banner New Hair Gummy Masculino, vitamina para barba, cabelos e pele. Rico em ácido hialurônico'"
        :title="'Banner New Hair Gummy Masculino'"
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

    this.nomeProduto = this.listaProdutos[0].newhairgummymasculino[0].nomeProduto
    this.imgProduto = this.listaProdutos[0].newhairgummymasculino[0].img
    this.imgProdutoMob = this.listaProdutos[0].newhairgummymasculino[0].imgMob
    this.precoDe = this.listaProdutos[0].newhairgummymasculino[0].precoDe
    this.precoPor = this.listaProdutos[0].newhairgummymasculino[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].newhairgummymasculino[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].newhairgummymasculino[0].idProduto
    this.urlImgLp = this.listaProdutos[0].newhairgummymasculino[0].urlImgLp
    this.urlBotaoSingle = this.listaProdutos[0].newhairgummymasculino[0].urlBotaoSingle
    this.alt = this.listaProdutos[0].newhairgummymasculino[0].alt
    this.title = this.listaProdutos[0].newhairgummymasculino[0].title
    this.urlLista = this.listaProdutos[0].newhairgummymasculino[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].newhairgummymasculino[1].nomeProduto
    this.imgProduto2 = this.listaProdutos[0].newhairgummymasculino[1].img
    this.imgProdutoMob2 = this.listaProdutos[0].newhairgummymasculino[1].imgMob
    this.precoDe2 = this.listaProdutos[0].newhairgummymasculino[1].precoDe
    this.precoPor2 = this.listaProdutos[0].newhairgummymasculino[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].newhairgummymasculino[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].newhairgummymasculino[1].idProduto
    this.urlImgLp2 = this.listaProdutos[0].newhairgummymasculino[1].urlImgLp
    this.urlBotaoSingle2 = this.listaProdutos[0].newhairgummymasculino[1].urlBotaoSingle
    this.alt2 = this.listaProdutos[0].newhairgummymasculino[1].alt
    this.title2 = this.listaProdutos[0].newhairgummymasculino[1].title
    this.urlLista2 = this.listaProdutos[0].newhairgummymasculino[1].urlLista
    
    this.nomeProduto3 = this.listaProdutos[0].newhairgummymasculino[2].nomeProduto
    this.imgProduto3 = this.listaProdutos[0].newhairgummymasculino[2].img
    this.imgProdutoMob3 = this.listaProdutos[0].newhairgummymasculino[2].imgMob
    this.precoDe3 = this.listaProdutos[0].newhairgummymasculino[2].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairgummymasculino[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairgummymasculino[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairgummymasculino[2].idProduto
    this.urlImgLp3 = this.listaProdutos[0].newhairgummymasculino[2].urlImgLp
    this.urlBotaoSingle3 = this.listaProdutos[0].newhairgummymasculino[2].urlBotaoSingle
    this.alt3 = this.listaProdutos[0].newhairgummymasculino[2].alt
    this.title3 = this.listaProdutos[0].newhairgummymasculino[2].title
    this.urlLista3 = this.listaProdutos[0].newhairgummymasculino[2].urlLista
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