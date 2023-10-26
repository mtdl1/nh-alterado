<template>
<div class="main">
  <div class="container">
    <Titulos 
    :titulo="'Você também pode gostar'" />
    <Titulos class="mt-2" 
    :subtitulo="'Aproveite condições imperdíveis'"/>
    <div class="produtos-relacionados mt-5 pb-3 d-flex justify-content-between flex-wrap">
      <ProdutoRelacionado
        :nomeProduto="nomeProduto"
        :imgProduto="imgProduto"
        :precoDe="precoDe"
        :precoPor="precoPor"
        :quantidadeProduto="quantidadeProduto"
        :idProduto="idProduto"
        :possuiVariacao="possuiVariacao"
        :variacoes="variacoes"
        :alt="alt"
        :title="title"
        :urlLista="urlLista"
      />

      <ProdutoRelacionado
        :nomeProduto="nomeProduto2"
        :imgProduto="imgProduto2"
        :precoDe="precoDe2"
        :precoPor="precoPor2"
        :quantidadeProduto="quantidadeProduto2"
        :idProduto="idProduto2"
        :alt="alt2"
        :title="title2"
        :urlLista="urlLista2"
      />

      <ProdutoRelacionado
        :nomeProduto="nomeProduto3"
        :imgProduto="imgProduto3"
        :precoDe="precoDe3"
        :precoPor="precoPor3"
        :quantidadeProduto="quantidadeProduto3"
        :idProduto="idProduto3"
        :possuiVariacao="possuiVariacao3"
        :variacoes="variacoes3"
        :alt="alt3"
        :title="title3"
        :urlLista="urlLista3"
      />
    </div>
  </div>
</div>
</template>

<script>
import ProdutoRelacionado from '../../produtos/produtoRelacionado.vue'
import Titulos from '../titulos.vue'
export default {
  components: {
    ProdutoRelacionado,
    Titulos
  },
  name: "KitsRelacionados",

  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos

  
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
    this.urlLista = this.listaProdutos[0].gummy[1].variacoes[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].serum[0].nomeProdutoLp;
    this.imgProduto2 = this.listaProdutos[0].serum[0].img;
    this.precoDe2 = this.listaProdutos[0].serum[0].precoDe;
    this.precoPor2 = this.listaProdutos[0].serum[0].precoPor;
    this.subtituloProduto2 = this.listaProdutos[0].serum[0].subtituloProduto;
    this.quantidadeProduto2 = this.listaProdutos[0].serum[0].quantidadeProduto;
    this.idProduto2 = this.listaProdutos[0].serum[0].idProduto;
    this.alt2 = this.listaProdutos[0].serum[0].alt;
    this.title2 = this.listaProdutos[0].serum[0].title;
    this.urlLista2 = this.listaProdutos[0].serum[0].urlLista;

    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[0].nomeProdutoLp
    this.subtituloProduto3 = this.listaProdutos[0].newhairvitaminbiotina[0].subtituloProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminbiotina[0].img
    this.precoDe3 = this.listaProdutos[0].newhairvitaminbiotina[0].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminbiotina[0].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[0].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminbiotina[0].idProduto
    this.alt3 = this.listaProdutos[0].newhairvitaminbiotina[0].alt
    this.title3 = this.listaProdutos[0].newhairvitaminbiotina[0].title
    this.urlLista3 = this.listaProdutos[0].newhairvitaminbiotina[0].urlLista
  },
}
</script>

<style scoped>
.main {
  background: #f5f5f5;
}

.titulos {
  text-align: center;
}

.titulos h2{
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -1.28px;
  color: #222222;
  font-weight: 700!important;
}

.titulos p{
  font: normal normal normal 20px/22px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.produtos-relacionados {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.produtos-relacionados {
  width: 100%;
  margin-bottom: 20px;
}

.container {
  padding-top: 22px;
}


/* responsivo */
@media (max-width: 440px) {

  .main {
    background: #FFFFFF;
  }

  .py-2 {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .mt-5 {
    margin-top: 20px!important;
  }

  .container {
  padding-top: 2px;
}

}

</style>