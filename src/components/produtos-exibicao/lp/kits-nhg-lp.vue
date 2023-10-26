<template>
  <div class="container mt-5 d-flex justify-content-between flex-wrap" id="produtos">
    <ProdutoLP 
      :nomeProduto="nomeProduto2"
      :subtituloProduto="subtituloProduto2"
      :imgProduto="imgProduto2"
      :precoDe="precoDe2"
      :precoPor="precoPor2" 
      :quantidadeProduto="quantidadeProduto2"
      :possuiVariacao="possuiVariacao2"
      :variacoes="variacoes2"
      bgTitle = pink
      :alt="alt"
      :title="title"
      :tarja= true
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
      :possuiVariacao="possuiVariacao"
      :variacoes="variacoes"
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
      :possuiVariacao="possuiVariacao3"
      :variacoes="variacoes3"
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
  name: "KitsNhGLp",
  data() {
    return {
      listaProdutos: [],

      nomeProduto: "",
      imgProduto: "",
      precoDe: 0,
      precoPor: 0,
      subtituloProduto: "",
      quantidadeProduto: 0,
      idProduto: 94,
      variacoes: [],
      possuiVariacao: null,

      nomeProduto2: "",
      imgProduto2: "",
      precoDe2: 0,
      precoPor2: 0,
      subtituloProduto2: "",
      quantidadeProduto2: 0,
      variacoes2: [],
      possuiVariacao2: null,

      nomeProduto3: "",
      imgProduto3: "",
      precoDe3: 0,
      precoPor3: 0,
      subtituloProduto3: "",
      quantidadeProduto3: 0,
      variacoes3: [],
      possuiVariacao3: null,

    };
  },
  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos;

    this.nomeProduto = this.listaProdutos[0].gummy[0].nomeProdutoLp
    this.subtituloProduto = this.listaProdutos[0].gummy[0].subtituloProduto
    this.imgProduto = this.listaProdutos[0].gummy[0].img
    this.precoDe = this.listaProdutos[0].gummy[0].precoDe
    this.precoPor = this.listaProdutos[0].gummy[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].gummy[0].quantidadeProduto
    this.possuiVariacao = this.listaProdutos[0].gummy[0].possuiVariacao
    this.variacoes = this.listaProdutos[0].gummy[0].variacoes
    this.alt = this.listaProdutos[0].gummy[1].variacoes[0].alt
    this.title = this.listaProdutos[0].gummy[1].variacoes[0].title
    this.urlLista = this.listaProdutos[0].gummy[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].gummy[1].nomeProdutoLp
    this.subtituloProduto2 = this.listaProdutos[0].gummy[1].subtituloProduto
    this.imgProduto2 = this.listaProdutos[0].gummy[1].img
    this.precoDe2 = this.listaProdutos[0].gummy[1].precoDe
    this.precoPor2 = this.listaProdutos[0].gummy[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].gummy[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].gummy[1].idProduto
    this.possuiVariacao2 = this.listaProdutos[0].gummy[1].possuiVariacao
    this.variacoes2 = this.listaProdutos[0].gummy[1].variacoes
    this.alt2 = this.listaProdutos[0].gummy[0].variacoes[0].alt
    this.title2 = this.listaProdutos[0].gummy[0].variacoes[0].title
    this.urlLista2 = this.listaProdutos[0].gummy[1].urlLista

    this.nomeProduto3 = this.listaProdutos[0].gummy[2].nomeProdutoLp
    this.subtituloProduto3 = this.listaProdutos[0].gummy[2].subtituloProduto
    this.imgProduto3 = this.listaProdutos[0].gummy[2].img
    this.precoDe3 = this.listaProdutos[0].gummy[2].precoDe
    this.precoPor3 = this.listaProdutos[0].gummy[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].gummy[2].quantidadeProduto
    this.possuiVariacao3 = this.listaProdutos[0].gummy[2].possuiVariacao
    this.variacoes3 = this.listaProdutos[0].gummy[2].variacoes
    this.alt3 = this.listaProdutos[0].gummy[2].variacoes[0].alt
    this.title3 = this.listaProdutos[0].gummy[2].variacoes[0].title
    this.urlLista3 = this.listaProdutos[0].gummy[2].urlLista
  },
};
</script>