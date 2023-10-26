<template>
  <div class="container mt-5">
    <div class="titulos">
      <h2>Você também pode gostar</h2>
      <p>Aproveite condições imperdíveis</p>
    </div>
    <div class="produtos-relacionados mt-5 d-flex justify-content-between flex-wrap">
      <ProdutoRelacionado
        :nomeProduto="nomeProduto"
        :imgProduto="imgProduto"
        :precoDe="precoDe"
        :precoPor="precoPor"
        :quantidadeProduto="quantidadeProduto"
        :idProduto="idProduto"
        :urlLista="urlLista"
      />

      <ProdutoRelacionado
        :nomeProduto="nomeProduto2"
        :imgProduto="imgProduto2"
        :precoDe="precoDe2"
        :precoPor="precoPor2"
        :quantidadeProduto="quantidadeProduto2"
        :idProduto="idProduto2"
        :urlLista="urlLista2"
      />

      <ProdutoRelacionado
        :nomeProduto="nomeProduto3"
        :imgProduto="imgProduto3"
        :precoDe="precoDe3"
        :precoPor="precoPor3"
        :quantidadeProduto="quantidadeProduto3"
        :idProduto="idProduto3"
        :urlLista="urlLista3"
      />
    </div>
  </div>
</template>

<script>
import ProdutoRelacionado from '../../produtos/produtoRelacionado.vue'
export default {
  components: { ProdutoRelacionado },
  name: "KitsRelacionadosNhBiotina",

  created() {
    this.listaProdutos = this.$store.state.listaProdutos.produtos

    this.nomeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].nomeProduto
    this.imgProduto = this.listaProdutos[0].newhairvitaminbiotina[0].img
    this.precoDe = this.listaProdutos[0].newhairvitaminbiotina[0].precoDe
    this.precoPor = this.listaProdutos[0].newhairvitaminbiotina[0].precoPor
    this.quantidadeProduto = this.listaProdutos[0].newhairvitaminbiotina[0].quantidadeProduto
    this.idProduto = this.listaProdutos[0].newhairvitaminbiotina[0].idProduto
    this.urlLista = this.listaProdutos[0].newhairvitaminbiotina[0].urlLista

    this.nomeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].nomeProduto
    this.imgProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].img
    this.precoDe2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoDe
    this.precoPor2 = this.listaProdutos[0].newhairvitaminbiotina[1].precoPor
    this.quantidadeProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].quantidadeProduto
    this.idProduto2 = this.listaProdutos[0].newhairvitaminbiotina[1].idProduto
    this.urlLista2 = this.listaProdutos[0].newhairvitaminbiotina[1].urlLista
    
    this.nomeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].nomeProduto
    this.imgProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].img
    this.precoDe3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoDe
    this.precoPor3 = this.listaProdutos[0].newhairvitaminbiotina[2].precoPor
    this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].quantidadeProduto
    this.idProduto3 = this.listaProdutos[0].newhairvitaminbiotina[2].idProduto
    this.urlLista3 = this.listaProdutos[0].newhairvitaminbiotina[2].urlLista
  },
}
</script>

<style scoped>
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



</style>