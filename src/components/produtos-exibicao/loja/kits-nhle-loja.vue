<template>
  <div id="produtos">
    <Titulos :titulo="`Kits de tratamento capilar New Hair linha Home Care Essential`" :subtitulo="`Fórmulas com ativos especiais para a sua liberdade de ter os cabelos como quiser`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap">

      <BannerLateral :bg="'bgLinhaEssential'" :titulo="'LINHA ESSENTIAL'" :subtitulo="''" :destaque="''" :texto="'Shampoos, condicionadores, máscaras e muito mais para deixar seu cabelo saudável e impressionante.'" :img="'new-hair-linha-essential-banner-lateral.png'" :imgMob="'mob/new-hair-vitamin-banner-lateral.png'" />

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
        :urlLista="urlLista3"
        />
    </div>
  </div>
</template>

<script>
import BannerLateral from '../../gerais/banner-lateral-kits/banner-lateral.vue';
import ProdutoLoja from '../../produtos/produtoLoja.vue';
import Titulos from '../titulos.vue';
export default {
  name: "KitsNhLeLoja",
  components: { ProdutoLoja, BannerLateral, Titulos },

  data() {
    return {
      listaProdutos: [],
      nomeProduto: "",
      imgProduto: "",
      imgProdutoMob: "",
      precoDe: "",
      precoPor: "",
      subtituloProduto: "",
      quantidadeProduto: "",
      idProduto: "",
      urlImgLp: "",
    };
  },
  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos;

    this.nomeProduto = this.listaProdutos[0].linhaessential[0].nomeProduto;
    this.imgProduto = this.listaProdutos[0].linhaessential[0].img;
    this.imgProdutoMob = this.listaProdutos[0].linhaessential[0].imgMob;
    this.precoDe = this.listaProdutos[0].linhaessential[0].precoDe;
    this.precoPor = this.listaProdutos[0].linhaessential[0].precoPor;
    this.subtituloProduto = this.listaProdutos[0].linhaessential[0].subtituloProduto;
    this.quantidadeProduto = this.listaProdutos[0].linhaessential[0].quantidadeProduto;
    this.idProduto = this.listaProdutos[0].linhaessential[0].idProduto;
    this.urlImgLp = this.listaProdutos[0].linhaessential[0].urlImgLp;
    this.urlLista = this.listaProdutos[0].linhaessential[0].urlLista;

    this.nomeProduto2 = this.listaProdutos[0].linhaessential[1].nomeProduto;
    this.imgProduto2 = this.listaProdutos[0].linhaessential[1].img;
    this.imgProdutoMob2 = this.listaProdutos[0].linhaessential[1].imgMob;
    this.precoDe2 = this.listaProdutos[0].linhaessential[1].precoDe;
    this.precoPor2 = this.listaProdutos[0].linhaessential[1].precoPor;
    this.subtituloProduto2 = this.listaProdutos[0].linhaessential[1].subtituloProduto;
    this.quantidadeProduto2 = this.listaProdutos[0].linhaessential[1].quantidadeProduto;
    this.idProduto2 = this.listaProdutos[0].linhaessential[1].idProduto;
    this.urlImgLp2 = this.listaProdutos[0].linhaessential[1].urlImgLp;
    this.urlLista2 = this.listaProdutos[0].linhaessential[1].urlLista;

    this.nomeProduto3 = this.listaProdutos[0].linhaessential[2].nomeProduto;
    this.imgProduto3 = this.listaProdutos[0].linhaessential[2].img;
    this.imgProdutoMob3 = this.listaProdutos[0].linhaessential[2].imgMob;
    this.precoDe3 = this.listaProdutos[0].linhaessential[2].precoDe;
    this.precoPor3 = this.listaProdutos[0].linhaessential[2].precoPor;
    this.subtituloProduto3 = this.listaProdutos[0].linhaessential[2].subtituloProduto;
    this.quantidadeProduto3 = this.listaProdutos[0].linhaessential[2].quantidadeProduto;
    this.idProduto3 = this.listaProdutos[0].linhaessential[2].idProduto;
    this.urlImgLp3 = this.listaProdutos[0].serum[2].urlImgLp;
    this.urlLista3 = this.listaProdutos[0].linhaessential[2].urlLista;
  },

};
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