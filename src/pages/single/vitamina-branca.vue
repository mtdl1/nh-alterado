<template>
  <div>
    <!-- enviar dados do produto por props -->
    <ProdutoSingle :dadosGeraisProduto="dadosGeraisProduto"/>
  </div>
</template>

<script>
import ProdutoSingle from '../../layouts/single/produto-single.vue'
export default {
  name: 'VitaminaBranca',
  data() {
    return {
      dadosGeraisProduto: null,
    }
  },
  components: {
    ProdutoSingle,
  },
  created() {
    this.dadosGeraisProduto = this.$store.state.listaProdutos.produtos[0].massageador
    // console.log(this.dadosGeraisProduto)
  },
}
</script>