<template>
  <div id="produtos">
    <Titulos :titulo="`Kits completos de vitaminas em <br class='mob'> goma para cabelo`" :subtitulo="`A vitamina capilar em goma mais <br class='mob'> amada do Brasil!`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap">
      <BannerLateral
        :bg="'gummy'"
        :titulo="'GUMMY'"
        :subtitulo="''"
        :destaque="'+ Ácido Hialurônico'"
        :texto="'Ursinhos mais vitaminados do Brasil com Ácido Hialurônico e zero açúcar!'"
        :img="'new-hair-gummy-banner-lateral.png'"
        :alteraespacos = true
        :alt="'Banner mostrando três potes do produto New Hair Gummy Rico em ácido hialurônico'" 
        :title="'Banner New Hair Gummy Rico Em Ácido Hialurônico'" 
      />
      <ProdutoLoja
        :nomeProduto="nomeProduto"
        :imgProduto="imgProduto"
        :imgProdutoMob="imgProdutoMob"
        :precoDe="precoDe"
        :precoPor="precoPor"
        :quantidadeProduto="quantidadeProduto"
        :idProduto="idProduto"
        :possuiVariacao="possuiVariacao"
        :variacoes="variacoes"
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
        :possuiVariacao="possuiVariacao2"
        :variacoes="variacoes2"
        :destaquevendido = true
        :urlImgLp="urlImgLp2"
        :urlBotaoSingle="urlBotaoSingle2"
        :alt="alt2"
        :title="title2"
        :tarja = true
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
        :possuiVariacao="possuiVariacao3"
        :variacoes="variacoes3"
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
  name: "KitsNHGLoja",

    created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos

    this.nomeProduto = this.listaProdutos[0].gummy[0].nomeProduto
    this.subtituloProduto = this.listaProdutos[0].gummy[0].subtituloProduto
    this.imgProduto = this.listaProdutos[0].gummy[0].img
    this.imgProdutoMob = this.listaProdutos[0].gummy[0].imgMob
    this.precoDe = this.listaProdutos[0].gummy[0].precoDe
    this.precoPor = this.listaProdutos[0].gummy[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].gummy[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].gummy[0].idProduto
    this.possuiVariacao = this.listaProdutos[0].gummy[0].possuiVariacao
    this.variacoes = this.listaProdutos[0].gummy[0].variacoes
    this.urlImgLp = this.listaProdutos[0].gummy[0].urlImgLp
    this.urlBotaoSingle = this.listaProdutos[0].gummy[0].urlBotaoSingle
    this.alt = this.listaProdutos[0].gummy[0].variacoes[0].alt
    this.title = this.listaProdutos[0].gummy[0].variacoes[0].title
    this.urlLista = this.listaProdutos[0].gummy[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].gummy[1].nomeProduto
    this.subtituloProduto2 = this.listaProdutos[0].gummy[1].subtituloProduto
    this.imgProduto2 = this.listaProdutos[0].gummy[1].img
    this.imgProdutoMob2 = this.listaProdutos[0].gummy[1].imgMob
    this.precoDe2 = this.listaProdutos[0].gummy[1].precoDe
    this.precoPor2 = this.listaProdutos[0].gummy[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].gummy[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].gummy[1].idProduto
    this.possuiVariacao2 = this.listaProdutos[0].gummy[1].possuiVariacao
    this.variacoes2 = this.listaProdutos[0].gummy[1].variacoes
    this.urlImgLp2 = this.listaProdutos[0].gummy[1].urlImgLp
    this.urlBotaoSingle2 = this.listaProdutos[0].gummy[1].urlBotaoSingle
    this.alt2 = this.listaProdutos[0].gummy[1].variacoes[0].alt
    this.title2 = this.listaProdutos[0].gummy[1].variacoes[0].title
    this.urlLista2 = this.listaProdutos[0].gummy[1].urlLista

    this.nomeProduto3 = this.listaProdutos[0].gummy[2].nomeProduto
    this.subtituloProduto3 = this.listaProdutos[0].gummy[2].subtituloProduto
    this.imgProduto3 = this.listaProdutos[0].gummy[2].img
    this.imgProdutoMob3 = this.listaProdutos[0].gummy[2].imgMob
    this.precoDe3 = this.listaProdutos[0].gummy[2].precoDe
    this.precoPor3 = this.listaProdutos[0].gummy[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].gummy[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].gummy[2].idProduto
    this.possuiVariacao3 = this.listaProdutos[0].gummy[2].possuiVariacao
    this.variacoes3 = this.listaProdutos[0].gummy[2].variacoes
    this.urlImgLp3 = this.listaProdutos[0].gummy[2].urlImgLp
    this.urlBotaoSingle3 = this.listaProdutos[0].gummy[2].urlBotaoSingle
    this.alt3 = this.listaProdutos[0].gummy[2].variacoes[0].alt
    this.title3 = this.listaProdutos[0].gummy[2].variacoes[1].title
    this.urlLista3 = this.listaProdutos[0].gummy[2].urlLista
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