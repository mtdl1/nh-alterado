<template>
  <div class="container my-5 produto-single">
    <Breadcrumb :nome="nomeProduto"/>
    <div class="row">
      <Galeria :galeriaImagens="galeriaImagens" />
      <div class="col-md-5">
        <Descricao :nome="nomeProduto" :beneficios="beneficios"/>
        <PrecoesEscolha :dadosGeraisProduto="dadosGeraisProduto" :precoDe="precoDe" :precoPor="precoPor" @urlProduto="alteraRequisicao" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './components/breadcrumb.vue'
import Descricao from './components/descricao.vue'
import Galeria from './components/galeria.vue'
import PrecoesEscolha from './components/precos-escolha.vue'
export default{
  name: 'ProdutoSingle',
  data() {
    return {
      dadosProdutoAPI: null,
      nomeProduto: '',
      beneficios: '',
      opcoes: 'OPCAO1',
      galeriaImagens: [],
      imagemPrincipal: null,
      precoDe: 0,
      precoPor: 0,
    }
  },
  props: {
    dadosGeraisProduto: {
      type: Array,
      default: null,
    },
  },
  components: {
    Breadcrumb,
    Galeria,
    Descricao,
    PrecoesEscolha,
  },
  methods: {
    genPath(path, onlyQuery) {
      if (onlyQuery) {
        path = path.replace(/\/.*(\?.*)/g, '$1')
        return path
      }
      path = path.replace('?', '&')
      return path
    },
    // exibe a variavel urlProduto que vem do componente PrecoesEscolha
    alteraRequisicao(urlProduto) {
      // fazer a requisição com a urlProduto
      this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(urlProduto)}&offset=0&limit=1`, {}, (success, response) => {
        if (success) {
          //RECUPERA DADOS DO PRODUTO
          this.dadosProdutoAPI = JSON.parse(response.request.response)
          // this.nomeProduto = this.dadosProdutoAPI.conteudo.nome
          this.galeriaImagens = this.dadosProdutoAPI.conteudo.midias.imagensFull
          this.precoDe = this.dadosProdutoAPI.conteudo.precos.de
          this.precoPor = this.dadosProdutoAPI.conteudo.precos.por
        }
      });
    },
  },
  created(){
    this.beneficios = this.dadosGeraisProduto[0].beneficios
    this.urlProduto = this.dadosGeraisProduto[0].urlLista
    this.nomeProduto = this.dadosGeraisProduto[0].tituloProduto

    // rodar a requisicao da API aqui também com o path que a página já foi carregado
    this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
      if (success) {
        //RECUPERA DADOS DO PRODUTO
        this.dadosProdutoAPI = JSON.parse(response.request.response)
        // this.nomeProduto = this.dadosProdutoAPI.conteudo.nome
        this.galeriaImagens = this.dadosProdutoAPI.conteudo.midias.imagensFull
        this.precoDe = this.dadosProdutoAPI.conteudo.precos.de
        this.precoPor = this.dadosProdutoAPI.conteudo.precos.por
      }
    });
  }
}
</script>