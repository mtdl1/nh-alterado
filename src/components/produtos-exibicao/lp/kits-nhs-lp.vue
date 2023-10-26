<template>
  <div id="produtos">
    <Titulos :titulo="'Escolha o kit sérum que vai descomplicar o seu Skincare'" :subtitulo="'Um, dois ou três? Não importa! Aproveite os melhores preços e cuide-se já'" class="py-5"/>
    <div class="container pb-5 d-flex justify-content-between flex-wrap" id="produtos">
      <ProdutoLP
        :nomeProduto="nomeProduto"
        :subtituloProduto="subtituloProduto"
        :imgProduto="imgProduto"
        :precoDe="precoDe"
        :precoPor="precoPor"
        :quantidadeProduto="quantidadeProduto"
        :idProduto="idProduto"
        bgTitle = pink
        :alt="alt"
        :title="title"
        :urlLista="urlLista"
      />
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
  </div>
</template>

<script>
import ProdutoLP from '../../produtos/produtoLP.vue';
import Titulos from '../titulos.vue';
export default {
  components: {
    ProdutoLP,
    Titulos
  },
  name: "KitsNhSLp",
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

    this.nomeProduto = this.listaProdutos[0].serum[0].nomeProdutoLp;
    this.imgProduto = this.listaProdutos[0].serum[0].img;
    this.precoDe = this.listaProdutos[0].serum[0].precoDe;
    this.precoPor = this.listaProdutos[0].serum[0].precoPor;
    this.subtituloProduto = this.listaProdutos[0].serum[0].subtituloProduto;
    this.quantidadeProduto = this.listaProdutos[0].serum[0].quantidadeProduto;
    this.idProduto = this.listaProdutos[0].serum[0].idProduto;
    this.alt = this.listaProdutos[0].serum[0].alt;
    this.title = this.listaProdutos[0].serum[0].title;
    this.urlLista = this.listaProdutos[0].serum[0].urlLista;
    
    this.nomeProduto2 = this.listaProdutos[0].serum[1].nomeProdutoLp;
    this.imgProduto2 = this.listaProdutos[0].serum[1].img;
    this.precoDe2 = this.listaProdutos[0].serum[1].precoDe;
    this.precoPor2 = this.listaProdutos[0].serum[1].precoPor;
    this.subtituloProduto2 = this.listaProdutos[0].serum[1].subtituloProduto;
    this.quantidadeProduto2 = this.listaProdutos[0].serum[1].quantidadeProduto;
    this.idProduto2 = this.listaProdutos[0].serum[1].idProduto;
    this.alt2 = this.listaProdutos[0].serum[1].alt;
    this.title2 = this.listaProdutos[0].serum[1].title;
    this.urlLista2 = this.listaProdutos[0].serum[1].urlLista;
    
    this.nomeProduto3 = this.listaProdutos[0].serum[2].nomeProdutoLp;
    this.imgProduto3 = this.listaProdutos[0].serum[2].img;
    this.precoDe3 = this.listaProdutos[0].serum[2].precoDe;
    this.precoPor3 = this.listaProdutos[0].serum[2].precoPor;
    this.subtituloProduto3 = this.listaProdutos[0].serum[2].subtituloProduto;
    this.quantidadeProduto3 = this.listaProdutos[0].serum[2].quantidadeProduto;
    this.idProduto3 = this.listaProdutos[0].serum[2].idProduto;
    this.alt3 = this.listaProdutos[0].serum[2].alt;
    this.title3 = this.listaProdutos[0].serum[2].title;
    this.urlLista3 = this.listaProdutos[0].serum[2].urlLista;
  },
};
</script>


<style scoped>
/* responsivo */
@media (max-width: 768px) {
  .pb-5 {
    padding-bottom: 10px !important;
  }
}
</style>