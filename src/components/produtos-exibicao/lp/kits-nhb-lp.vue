<template>
  <div class="container mt-5 d-flex justify-content-between flex-wrap" id="produtos">
    <ProdutoLP 
      :nomeProduto="nomeProduto2"
      :subtituloProduto="subtituloProduto2"
      :imgProduto="imgProduto2"
      :precoDe="precoDe2"
      :precoPor="precoPor2" 
      :quantidadeProduto="quantidadeProduto2"
      :idProduto="idProduto2"
      bgTitle = pink
      :alt="alt2"
      :title="title2"
      :tarja = true
      :urlLista="urlLista"
    />
    <ProdutoLP 
      :nomeProduto="nomeProduto"
      :subtituloProduto="subtituloProduto"
      :imgProduto="imgProduto"
      :precoDe="precoDe"
      :precoPor="precoPor" 
      :quantidadeProduto="quantidadeProduto"
      :idProduto="idProduto"
      :alt="alt"
      :title="title"
      :urlLista="urlLista2"
    />
    <ProdutoLP 
      :nomeProduto="nomeProduto3"
      :subtituloProduto="subtituloProduto3"
      :imgProduto="imgProduto3"
      :precoDe="precoDe3"
      :precoPor="precoPor3" 
      :quantidadeProduto="quantidadeProduto3"
      :idProduto="idProduto3"
      :alt="alt3"
      :title="title3"
      :urlLista="urlLista3"
    />
  </div>
</template>

<script>
import ProdutoLP from '../../produtos/produtoLP.vue';
export default {
  components: { ProdutoLP },
  name: "KitsNhBLp",
  data() {
    return {
      listaProdutos: [],
      nomeProduto: "",
      imgProduto: "",
      precoDe: "",
      precoPor: "",
      subtituloProduto: "",
      quantidadeProduto: "",
      idProduto: "",
    };
  },
  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos;

    this.nomeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].nomeProdutoLp
    this.subtituloProduto = this.listaProdutos[0].newhairvitaminbiotina[0].subtituloProduto
    this.imgProduto = this.listaProdutos[0].newhairvitaminbiotina[0].img
    this.precoDe = this.listaProdutos[0].newhairvitaminbiotina[0].precoDe
    this.precoPor = this.listaProdutos[0].newhairvitaminbiotina[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].newhairvitaminbiotina[0].idProduto
    this.alt = this.listaProdutos[0].newhairvitaminbiotina[0].alt
    this.title = this.listaProdutos[0].newhairvitaminbiotina[0].title
    this.urlLista = this.listaProdutos[0].newhairvitaminbiotina[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].nomeProdutoLp
    this.subtituloProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].subtituloProduto
    this.imgProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].img
    this.precoDe2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoDe
    this.precoPor2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].idProduto
    this.alt2 = this.listaProdutos[0].newhairvitaminbiotina[0].alt
    this.title2 = this.listaProdutos[0].newhairvitaminbiotina[0].title
    this.urlLista2 = this.listaProdutos[0].newhairvitaminbiotina[1].urlLista
    
    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].nomeProdutoLp
    this.subtituloProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].subtituloProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].img
    this.precoDe3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].idProduto
    this.alt3 = this.listaProdutos[0].newhairvitaminbiotina[0].alt
    this.title3 = this.listaProdutos[0].newhairvitaminbiotina[0].title
    this.urlLista3 = this.listaProdutos[0].newhairvitaminbiotina[2].urlLista
  },
};
</script>