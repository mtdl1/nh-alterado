<template>
  <div class="product" v-if="product.id" :class="{[`status-${product.status}`]: true}">
    <div class="produto">
        <div class="top">
            <router-link class="top-img" :to="{...product.rota}">
                <div class="sliderContainer" @mouseenter="thumbPreview(1)" @mouseleave="thumbPreview(0)">
                    <template v-if="product.midias.imagens.length > 0 && $screen.width >= 1024">
                        <div :ref="'sliderProd-'+product.id">
                            <img :alt="product.nome" v-for="img in product.midias.imagens" :key="img.id" :src="img[$tipoImg.prod].medium" @click.ctrl.exact="openNewtab(product.url)" @click.middle.exact="openNewtab(product.url)">
                        </div>
                    </template>
                    <img v-if="product.midias.imagens.length > 0 && $screen.width < 1024" :src="product.midias.imagens[0][$tipoImg.prod].medium" :alt="product.nome" @click.ctrl.exact="openNewtab(product.url)" @click.middle.exact="openNewtab(product.url)">
                    <img v-if="product.midias.imagens.length == 0"  :alt="product.nome" :src="require(`@/${$imgDefaultM}`)" @click.ctrl.exact="openNewtab(product.url)" @click.middle.exact="openNewtab(product.url)">
                </div>
            </router-link>
            <router-link class="top-nome" :to="{...product.rota}">
                <h4>{{ product.nome }}</h4>
            </router-link>
        </div>
        <div class="bottom">
          <div class="prices">
              <span class="bottom-precoPor">
                  {{ $formatPrice(product.precos.por) }}
              </span>
          </div>

          <div class="input-qtd" v-if="dataProd.tipo == 'aberta'">
            <div class="input-qtd-flex">
              <div class="left">
                <input v-model="product.quantidade" />
              </div>
              <div class="right">
                <div class="controles">
                  <button class="plus" @click="product.quantidade++, requestCarrinho()">
                    <!-- <img src="@/assets/img/detalhe/atributos/next.svg" alt="Ícone adicionar"> -->
                  </button>
                  <button class="minus" @click="product.quantidade--, requestCarrinho()" :disabled="product.quantidade < 1">
                    <!-- <img src="@/assets/img/detalhe/atributos/prev.svg" alt="Ícone subtrair"> -->
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="detalhesProdInfoRight-right-grayBox-containerAttr-container"  v-if="product.atributos.simples && Object.keys(product.atributos.simples.valores).length > 0">
            <span class="detalhesProdInfoRight-right-grayBox-containerAttr-t1">{{ product.atributos.simples.nome }}</span>
            <select class="detalhesProdInfoRight-right-grayBox-containerAttr-container-select" name="" ref="attrSimples">
              <option class="hide" value="">Escolha</option>
              <template v-if="dataProd.selecaoAtributo">
                <option @click="trocaAtributo(item)" :disabled="item.estoque == 0" :selected="item.selecionado" :value="JSON.stringify(item)" v-for="item in product.atributos.simples.valores" :key="item.id">{{ item.label }}</option>
              </template>
              <template v-if="dataProd.selecaoAtributo == false">
                <option @click="trocaAtributo(item)" :disabled="!item.selecionado" :selected="item.selecionado" :value="JSON.stringify(item)" v-for="item in product.atributos.simples.valores" :key="item.id">{{ item.label }}</option>
              </template>
            </select>
          </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        product: Object,
        dataProd : Object,
        permissaoAtributosLista: {
          type: Boolean,
        }
    },
    created(){
      if(!this.permissaoAtributosLista) {
        this.emitProdutosPreSelecionados();
      }
    },
    mounted() {
      this.verificaAttrSimplesPreSelecionado();
    },
    data() {
      return {
        slider: null,
        attrSimples: false,
        produtos: this.dataProd.produtos,
        precoPor: "",
      }
    },
    methods: {
      thumbPreview(index) {
        if(!this.slider) {
          return
        }
        this.slider.goTo(index)
      },
      requestCarrinho(){
        const dadosProduto = this.getDadosProduto();

        const dadosLista = {
          idListaCompra: this.dataProd.id,
          produtos: dadosProduto,
          carrinho: true,
        }
        return new Promise(resolve => {
          this.$requestSend('post', `/v2/front/list/shop`, dadosLista, (success, response) => {
            if (success) {
              resolve(response.data);
              this.dataProd.precos = response.data.precos;
            }
          });
        })

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
      verificaAttrSimplesPreSelecionado() {
        const produtos = this.produtos.filter( produto => {
          if(produto.atributos.simples) {
            produto.atributos.simples.valores.forEach(valor => {
              if(valor.selecionado) {
                produto.precos.por = valor.precos.por;
              }
            })
          }
          return produtos;
        })


      },
      async trocaAtributo(dados){
        const produto = this.produtos.filter( produto => {

        if (produto.id === parseInt(dados.carrinho.itens[0].idProduto)) {
            produto.atributos.simples.valores.forEach(valor => {
                if(valor.idAtributoValor === dados.idAtributoValor)  {
                  valor.selecionado = true;
                  produto.precos.por = valor.precos.por;
                } else {
                  valor.selecionado = false;
                }
            })

          return produto;
        }

      })
      const dadosCarrinhoLista = await this.requestCarrinho();

      const id_produto = produto[0].id;

      this.emiteMudancaAtributoSimples(produto, id_produto, produto[0].atributos.simples.valores, dadosCarrinhoLista)

      },
      emiteMudancaAtributoSimples(produto, id_produto, valores, dadosCarrinhoLista) {
        this.$emit("mudaAtributoSimples", produto, id_produto, valores, dadosCarrinhoLista);
      },
      produtosAttrSimplesPreSelecionado() {
        const produtosPreSelecionado = {
            produtos: [],
            indexProduto: [],
            valores: [],
        };
        this.produtos.forEach((produto,indexProduto) => {
          if (produto.atributos.simples) {
            produto.atributos.simples.valores.forEach((valor) => {
                if (valor.selecionado) {
                    produtosPreSelecionado.produtos.push(produto);
                    produtosPreSelecionado.indexProduto.push(indexProduto);
                    produtosPreSelecionado.valores.push(valor);
                    produto.precos.por = valor.precos.por;
                }
            })
          }

        })
        return produtosPreSelecionado;
      },

      emitProdutosPreSelecionados() {
        const produtosPreSelecionado = this.produtosAttrSimplesPreSelecionado();
        if (produtosPreSelecionado.produtos) {
          this.$emit("removeAttrNaoSelecionado", produtosPreSelecionado)
        }
      }
    }
}
</script>

<style lang="css" scoped>
.sliderContainer {
  position: relative;
  display: flex;
  align-items: center;
}
.sliderContainer > div {
  display: flex;
  align-items: center;
}
.sliderContainer-button {
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 10;
  top: 50%;
  opacity: 0;
  transition: 100ms;
}
.sliderContainer-button.left {
  left: 5px;
  transform: rotate(180deg);
}
.sliderContainer-button.right {
  right: 5px;
}
.produto {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #f3f3f3;
  border-radius: 4px;
}
.produto .top {
  text-align: center;
  flex: 0 1 auto;
  position: relative;
}
.produto .top > a {
  display: block;
}
.produto .top-img {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 5px;
}
.produto img {
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
.produto .top-nome h4 {
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1.142;
  padding: 5px 0 0;
  text-align: left;
  margin: 0;
  text-align: center;
  overflow: hidden;
  color: #263238;
  margin-bottom: 10px;
}
.produto .bottom {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 0;
  text-align: left;
  min-height: 75px;
}
.produto .bottom .prices {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.produto .bottom-precoDe {
  font-size: 12px;
  text-decoration: line-through;
  color: #cbcbcb;
  line-height: 1.09;
  padding: 0 3px;
  width: 100%;
}
.produto .bottom-precoPor {
  font-size: 16px;
  color: #000000;
  line-height: 1;
  font-weight: bold;
  width: 100%;
  margin: 0;
  padding: 0 3px;
  text-align: center;
}
.produto .bottom-condicao {
  font-size: 14px;
  line-height: 1;
  text-align: center;
}
.produto .bottom-bt {
  width: 100%;
  background-color: #37918f;
  border-radius: 30px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms ease-in-out;
  color: #fff;
  margin-top: 25px;
  height: 40px;
}
.produto .bottom-bt svg {
  fill: #b6b6b6;
  margin-left: 20px;
}
.produto:hover .sliderContainer-button {
  opacity: 0.38;
}
.produto:hover .sliderContainer-button:hover {
  opacity: 1;
}
.status-indisponivel .boxAvliacaoStars,
.status-sobConsulta .boxAvliacaoStars {
  margin-bottom: auto;
}

.controles button + button {
  margin-top: 4px;
}
.controles button[disabled="disabled"] {
  opacity: 0.6;
}
.controles button {
  width: 24px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background: #E4E4E4;
  border-radius: 4px;
}
@media (min-width: 1024px) {
  .produto .bottom-bt:hover {
    background-color: #7bd8d5;
    border-color: #7bd8d5;
    color: #fff;
  }
  .produto .bottom-bt:hover svg {
    fill: #fff;
  }
}
/* ================================== MOBILE ================================== */
@media (max-width: 1023px) {
  .produto {
    padding: 3px 3px 10px;
    width: 100%;
  }
  .produto .top-nome h4 {
    font-size: 10px;
    padding: 4px 0 0;
    text-align: center;
    margin-bottom: 0px;
  }
  .produto .bottom {
    padding-top: 7px;
    min-height: 80px;
    margin-top: 25px;
  }
  .produto .bottom-precoDe {
    font-size: 10px;
    text-align: center;
    padding: 0;
  }
  .produto .bottom-precoPor {
    font-size: 13px;
    text-align: center;
    padding: 0;
  }
  .produto .bottom-condicao {
    text-align: center;
    font-size: 9px;
    margin-top: 1px;
    padding: 0;
  }
  .produto .bottom-bt {
    font-size: 13px;
  }
  .produto .bottom-bt svg {
    margin-left: 10px;
    max-width: 25px;
  }
  .produto .bottom-bt.aviseMe {
    min-height: 35px;
  }
  .produto .sliderContainer {
    min-height: 157px;
  }
}



.detalhesProdInfoRight-right-grayBox-containerAttr{
  margin-bottom: 20px;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-t1{
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
  line-height: 1.2;
  color: #263238;
}

.detalhesProdInfoRight-right-grayBox-containerAttr-container{
  padding-right: 26px;
}

.detalhesProdInfoRight-right-grayBox-containerAttr-container-button:not(:last-child){
  margin-right: 10px;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-button:empty{
  margin-right: 0px!important;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-button label{
  height: 25px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #B0BEC5;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  margin: 0;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-button input{
  display: none;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-button input:checked ~ label{
  background-color: #214861;
  border-color: #A5AAAC;
  color: #fff;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-select{
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #A5AAAC;
  font-size: 12px;
  flex: 0 1 auto;
  width: unset;
  min-width: 52px;
  height: 44px;
  margin: 0;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-select option:disabled{
  background-color: #eaeaea;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-container-select.alert{
  border-color: red;
  box-shadow: 2px 2px 8px rgba(255, 0, 0, 0.3);
}
.detalhesProdInfoRight-right-grayBox-containerAttr-alinha{
  display: flex;
  flex-wrap: wrap;
}
.detalhesProdInfoRight-right-grayBox-containerAttr-alinha > *{
  flex-basis: 50%;
}


.input-qtd {
  margin-bottom: 10px;
}
.input-qtd-flex{
  display: flex;
}
.input-qtd-label{
  font-size: 12px;
  color: #263238;
  display: block;
  margin-bottom: 6px;
}
.input-qtd .right .controles{
  display: flex;
  flex-direction: column;
}
.input-qtd input {
  width: 52px;
  height: 44px;
  text-align: center;
  border: 1px solid #A5AAAC;
  border-radius:4px;
}
.controles button + button {
  margin-top: 1.5px;
}
.controles button[disabled="disabled"] {
  opacity: 0.6;
}
.controles button {
  width: 24px;
  height: 21.5px;
  display: left;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background: #F3F3F3;
  border-radius: 4px;
}
</style>
