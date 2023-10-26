<template lang="html">
  <div class="precos_alt" style="text-align:center">

    <p id="precoDe" style="color:#6b6b6b;font-size:30px;display:inline;margin:0px 20px">
      De: {{ $formatPrice(this.dataProd.precos.de) }}
    </p>
    <br>

    <p id="precoPor" style="font-weight:bold;color:#000;font-size:35px;display:inline;margin:0px 20px;">
      Por: {{ $formatPrice(this.dataProd.precos.por) }}
    </p>

    <img class="my-3" src="@/assets/img/img-ou.png" alt="" style="display:block;margin:0 auto;">

    <p id="precoParcelado" style="color:#000;font-size:20px;text-align:center;"></p>
    <input type="submit" class="btnSingleProduct" @click="adicionarCarrinho()" value="COMPRE AGORA">
  </div>
</template>

<script>

import Comunicacao from '@/comunicacao.js';

export default {
  components: {
  },
  props: {
    dataProd: Object
  },
  data() {
    return {
      alertaAttrAtivo: false,
      alertaQuantidade: false,
      active: false,
      cep: false,
      attrSimples: 0,
      attrSimplesSelecionado: false,
      dadosFrete: false,
      indisponivel: false,
      erroFrete: false,
      keepSelected: false,
      botoes: false,
      parcelasHeight: 0,
      parcelasOpen: false,
      precoPor: this.dataProd.precos.por,
      mesesGarantiaProduto: null,
      attrSimplesVal: '',
      qtd: 1,
      compraStatus: {
        msg: "",
        erro: false,
      },
      alertaAttr: false,
    }
  },
  watch: {
    qtd(newVal, oldVal) {
      if(newVal.toString().indexOf(/[a-zA-Z]*/g) != -1) {
        this.qtd = oldVal;
      }
      if (newVal <= 0 && newVal != '') {
        this.qtd = oldVal;
      }
      if(newVal === 0) {
        this.qtd = oldVal;
      }
      if (newVal != oldVal) {
        this.precoPor = this.dataProd.precos.por * this.qtd;
      }
    }
  },
  methods: {
    showSelo(selo) {
      return selo.nome.match(/garantia/gi)
    },
    soma(){
      this.qtd = this.qtd + 1;
    },
    subtracao(){
      this.qtd = this.qtd - 1
    },
    calcularFrete () {
      this.dadosFrete = 'pendente';

      if (this.$refs.freteIpt.value != '') {
        this.$requestSend('post', '/v2/front/shipment/product', {
          cep: this.cep.replace('-', ''),
          idProduto: this.dataProd.id,
          idAtributoValor: this.$refs.attrSimples && this.$refs.attrSimples.value != '' ? JSON.parse(this.$refs.attrSimples.value).idAtributoValor : 0,
          quantidade: 1
        }, (success, response) => {
          this.dadosFrete = success ? response.data : false;
          this.erroFrete  = !success;
        });
        return;
      }
      this.$refs.freteIpt.classList.add('error');
    },
    defineDesconto(taxa) {
      if (taxa < 0) {
        return '(<b>'+parseInt(Math.abs(taxa))+'% de desconto</b>)'
      }
      return '(<b>'+parseInt(taxa)+'% de juros</b>)'
    },
    verificaListaAberta(qtd) {
      if (this.dataProd.tipo == "aberta") {
        this.emitQuantidade(qtd);
      }
    },
    emitQuantidade(valor) {
      this.$emit("emitQuantidade", valor);
    },
    adicionarCarrinho(){
      this.compraStatus = this.statusAtributos();
      if(!this.compraStatus.erro) {
        this.verificaListaAberta(this.qtd)

        const dadosProduto = this.getDadosProduto();
        this.requestCarrinho(dadosProduto);
      }

    },
    statusAtributos() {
      const produtos = this.dataProd.produtos
      let statusProduto = false;
      let produtoErro;

      for (let item of produtos){
        if (item.atributos.simples) {
          let atributoSelecionado = false;

          item.atributos.simples.valores.forEach((atributo) => {
            if (atributo.selecionado) {
              atributoSelecionado = true;
            }
          });

          statusProduto = atributoSelecionado;

        } else {
          statusProduto = true;
        }

        if(statusProduto === false) {
          produtoErro = item;
          break;
        }
      }

      if (statusProduto === false) {
        this.$emit("atributoNaoSelecionado", produtoErro.id);
        this.alertaAttr = true;
          if (screen.width < 1023) {
            document.documentElement.scrollTop = 680;
          }

        return {
          erro: true,
        };
      } else {
        this.alertaAttr = false;
        return {
          erro: false,
        };
      }

    },
    getDadosProduto() {
      const produtosCarrinho = [];

      for (let produto of this.dataProd.produtos) {
        if (produto.atributos.simples) {
          produto.atributos.simples.valores.forEach(valor => {
          if (valor.selecionado) {
            produtosCarrinho.push({
            id: produto.id,
            idAtributoValor: valor.idAtributoValor,
            quantidade: produto.quantidade,
            preco: valor.precos.por
          });
          }


          });
        } else {
          produtosCarrinho.push({
            id: produto.id,
            idAtributoValor: 0,
            quantidade: produto.quantidade,
            preco: produto.precos.por
          });
        }
      }
      return produtosCarrinho;

    },
    getProdutoComAtributos() {
      const listProduto = this.dataProd.produtos;
      const listProdutosComAtributosSimples = [];

      for (let produto of listProduto) {
        if (Object.keys(produto.atributos).length) {
          listProdutosComAtributosSimples.push(produto);
        }
      }

      return listProdutosComAtributosSimples;
    },
    requestCarrinho(dadosProduto){
      const dadosLista = {
        idListaCompra: this.dataProd.id,
        produtos: dadosProduto,
        carrinho: true,
      }

      this.$requestSend('post', `/v2/front/list/shop`, dadosLista, (success, response) => {
        if (success) {
          this.requestAddCarrinho(response.data.carrinho);
        }
      });
    },
    requestAddCarrinho(carrinho) {

      //ADICIONA O PRODUTO AO CARRINHO
      this.$carrinho.add(carrinho.tipo, carrinho.itens, (success, response) => {
        //PRODUTO ADICIONADO COM SUCESSO
        if(success) return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });

        //PROBLEMAS AO ADICIONAR PRODUTO
        alert(
          "Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde."
        );
      });


    },

  },
  mounted() {
    let cookieCep  = document.cookie;
    let posicao = cookieCep.indexOf("cep");
    if (posicao > -1 ) {
      this.cep = cookieCep.slice(posicao, posicao + 13).replace('cep=', '');

      this.$requestSend('post', '/v2/front/shipment/product', {
        cep: this.cep.replace('-', ''),
        idProduto: this.dataProd.id,
        idAtributoValor: this.$refs.attrSimples && this.$refs.attrSimples.value != '' ? JSON.parse(this.$refs.attrSimples.value).idAtributoValor : 0,
        quantidade: 1
      }, (success, response) => {
        this.dadosFrete = success ? response.data : false;
        this.erroFrete  = !success;
      });
    }
    else {
      this.cep = '';
    }
  },
}
</script>

<style>
.detalhesProdInfoRight-precos-parcelamento span{
  text-transform: capitalize;
}
@media (max-width: 767px) {
  .precos_alt{
    width: 100%;
  }
}
</style>
