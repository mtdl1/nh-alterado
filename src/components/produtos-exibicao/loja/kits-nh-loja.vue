<template>
  <div id="produtos">
    <Titulos :titulo="`Vitaminas para cabelo e unha <br class='mob'> em kits incríveis`" :subtitulo="`Cabelos sem queda, brilhantes, fortes e com <br class='mob'> muito mais crescimento`" class="py-5"/>
    <div class="container d-flex justify-content-between flex-wrap">

      <BannerLateral :bg="'bgVitamin'" :titulo="'vitaminas'" :subtitulo="'cabelos, peles e unhas'" :destaque="'Rico em Ácido Hialurônico'" :texto="'A vitamina mais completa e amada do Brasil está de cara nova. Aproveite ofertas imperdíveis!'" :img="'new-hair-vitamin-banner-lateral.png'" :imgMob="'mob/new-hair-vitamin-banner-lateral.png'" :alt="'Banner mostrando três potes do produto New Hair Vitamin Rico em ácido hialurônico com rótulo na cor branca'" 
      :title="'Banner New Hair Vitamin Rico Em Ácido Hialurônico'" />

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
import BannerLateral from '../../gerais/banner-lateral-kits/banner-lateral.vue';
import ProdutoLoja from '../../produtos/produtoLoja.vue';
import Titulos from '../titulos.vue';
export default {
  name: "KitsNhLoja",
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
      urlLista: "",
    };
  },
  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos;

    this.nomeProduto = this.listaProdutos[0].newhairvitamin[0].nomeProduto;
    this.imgProduto = this.listaProdutos[0].newhairvitamin[0].img;
    this.imgProdutoMob = this.listaProdutos[0].newhairvitamin[0].imgMob;
    this.precoDe = this.listaProdutos[0].newhairvitamin[0].precoDe;
    this.precoPor = this.listaProdutos[0].newhairvitamin[0].precoPor;
    this.subtituloProduto = this.listaProdutos[0].newhairvitamin[0].subtituloProduto;
    this.quantidadeProduto = this.listaProdutos[0].newhairvitamin[0].quantidadeProduto;
    this.idProduto = this.listaProdutos[0].newhairvitamin[0].idProduto;
    this.urlImgLp = this.listaProdutos[0].newhairvitamin[0].urlImgLp;
    this.urlBotaoSingle = this.listaProdutos[0].newhairvitamin[0].urlBotaoSingle;
    this.alt = this.listaProdutos[0].newhairvitamin[0].alt
    this.title = this.listaProdutos[0].newhairvitamin[0].title
    this.urlLista = this.listaProdutos[0].newhairvitamin[0].urlLista;

    this.nomeProduto2 = this.listaProdutos[0].newhairvitamin[1].nomeProduto;
    this.imgProduto2 = this.listaProdutos[0].newhairvitamin[1].img;
    this.imgProdutoMob2 = this.listaProdutos[0].newhairvitamin[1].imgMob;
    this.precoDe2 = this.listaProdutos[0].newhairvitamin[1].precoDe;
    this.precoPor2 = this.listaProdutos[0].newhairvitamin[1].precoPor;
    this.subtituloProduto2 = this.listaProdutos[0].newhairvitamin[1].subtituloProduto;
    this.quantidadeProduto2 = this.listaProdutos[0].newhairvitamin[1].quantidadeProduto;
    this.idProduto2 = this.listaProdutos[0].newhairvitamin[1].idProduto;
    this.urlImgLp2 = this.listaProdutos[0].newhairvitamin[1].urlImgLp;
    this.urlBotaoSingle2 = this.listaProdutos[0].newhairvitamin[1].urlBotaoSingle;
    this.alt2 = this.listaProdutos[0].newhairvitamin[1].alt;
    this.title2 = this.listaProdutos[0].newhairvitamin[1].title;
    this.urlLista2 = this.listaProdutos[0].newhairvitamin[1].urlLista;

    this.nomeProduto3 = this.listaProdutos[0].newhairvitamin[2].nomeProduto;
    this.imgProduto3 = this.listaProdutos[0].newhairvitamin[2].img;
    this.imgProdutoMob3 = this.listaProdutos[0].newhairvitamin[2].imgMob;
    this.precoDe3 = this.listaProdutos[0].newhairvitamin[2].precoDe;
    this.precoPor3 = this.listaProdutos[0].newhairvitamin[2].precoPor;
    this.subtituloProduto3 = this.listaProdutos[0].newhairvitamin[2].subtituloProduto;
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitamin[2].quantidadeProduto;
    this.idProduto3 = this.listaProdutos[0].newhairvitamin[2].idProduto;
    this.urlImgLp3 = this.listaProdutos[0].newhairvitamin[2].urlImgLp;
    this.urlBotaoSingle3 = this.listaProdutos[0].newhairvitamin[2].urlBotaoSingle;
    this.alt3 = this.listaProdutos[0].newhairvitamin[2].alt;
    this.title3 = this.listaProdutos[0].newhairvitamin[2].title;
    this.urlLista3 = this.listaProdutos[0].newhairvitamin[2].urlLista;
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