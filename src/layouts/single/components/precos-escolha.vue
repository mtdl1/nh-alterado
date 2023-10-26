<template>
  <div>

    <div class="prices my-2">
      <div class="d-flex align-items-center justify-content-between">
        <p class="priceOld"> 
          de: <s> {{ precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s>  por:
        </p>
        <p class="discount"> 
          <strong> ECONOMIZE {{(precoDe - precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}} </strong>
        </p>
      </div>
      <p class="currentPrice">
        <strong>
          {{precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}
        </strong>
        <span>
          ou 8x de <strong>{{(precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}</strong>
        </span>
      </p>
    </div>

    <!-- fazer um input type radio com as opcoes que vem da variavel dadosGeraisProduto -->
    <div v-for="produto in dadosGeraisProduto" :key="produto.id" class="check-label d-flex align-items-center mb-2 position-relative" @click="opcaoSelecionada = produto.idProduto, urlProduto = produto.urlLista">
      <div class="circ-select">
        <input type="radio" :id="produto.id" name="grupoDeRadios" :value="produto.idProduto" v-model="opcaoSelecionada"/>
      </div>
      <label :for="produto.id" >
        <p class="nome-produto">{{ produto.nomeProduto }}</p>
        <p v-if="produto.tituloBrinde" class="contem-brinde">{{produto.tituloBrinde}}</p>
      </label>
      <div class="infos-destaques position-absolute" :class="{comMaisVendido: produto.exibirMaisVendido}">
        <div v-if="produto.exibirMaisVendido" class="destaque-vendido">Kit Mais Vendido</div>
        <div v-if="produto.exibirDesconto" class="desconto"> {{(Math.floor(100 - (produto.precoPor*100)/produto.precoDe))}}% OFF </div>  
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PrecoEscolha',
  props: {
    dadosGeraisProduto: {
      type: Array,
      default: null,
    },
    precoDe: {
      type: Number,
      default: 0,
    },
    precoPor: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      idProduto: null,
      opcaoSelecionada: null,
      urlProduto: null,
    }
  },
  watch: {
    opcaoSelecionada(novaOpcao) {
      this.opcaoSelecionada = novaOpcao;
      // console.log('O valor do input radio foi alterado para:', this.opcaoSelecionada);
    },
    urlProduto(novaUrl) {
      this.urlProduto = novaUrl;
      // console.log('O valor da urlProduto foi alterado para:', this.urlProduto);
      this.$emit("urlProduto", this.urlProduto);
    },
  },

  created() {
    // fazer com que o primeiro type radio seja selecionado por padrao
    this.opcaoSelecionada = this.dadosGeraisProduto[0].idProduto;
  }
}
</script>

<style scoped>
*{
  font-family: "Roboto Regular", sans-serif;
}
.priceOld {
  font-size: 16px;
  color: #343a40;
}
.priceOld s {
  font-size: 16px;
  color: #8f8f8f;
  padding-right: 5px;
}

.currentPrice{
  font-size: 40px;
  color: #343a40;
  font-weight: 900;
}

.currentPrice span{
  font-size: 16px;
  font-weight: normal;
}

.discount {
  background: #fff154;
  font-size: 15px;
  color: #343a40;
  font-weight: 900;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
}

.label-title {
  font: normal normal bold 20px/30px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}


.check-label {
  height: 65px;
  border: 1px solid #6c757d;
  border-radius: 8px !important;
  cursor: pointer;
  transition: 0.5s;
}

.check-label:hover {
  border: 1px solid #FF4289;
  transition: 0.5s;
}

.circ-select {
  border-radius: 50%;
  border: 1px solid #6c757d;
  display: flex;
  margin: 0 10px;
}


.selecionado {
  background-color: #FFF7FA;
  outline: 1px solid #FF4289;
  border: 0 !important;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ff428a00;
  margin: 0 !important;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* opacity: 1; */
}

input[type="radio"]:checked {
  background-color: #FF4289;
  border: 5px solid white !important;
}

.name-kit {
  font: normal normal bold 19px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

.green {
  background: #18a851;
  border-color: #18a851;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  transition: 0.5s;
}

.green:active,
.green:hover {
  opacity: 0.8;
  border-color: #18a851 !important;
  transition: 0.5s;
}

label{
  margin-bottom: 0;
}

label .nome-produto{
  margin-bottom: 0;
  font: normal normal 400 16px/20px Open Sans;
  letter-spacing: -0.50px;
  color: #343a40;
}

label .contem-brinde{
  margin-bottom: 0;
  font: normal normal 400 13px/20px Open Sans;
  letter-spacing: -0.50px;
  color: #343a40;
}

.infos-destaques{
  top:35%;
  right: 0;
}

.infos-destaques.comMaisVendido {
    top: 20%;
}

.destaque-vendido{
  background-color: #fff154;
  margin-bottom: 5px;
  color: #343a40;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: -0.72px;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
  text-transform: uppercase;
}

.desconto{
  background: #18A851;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  letter-spacing: 0;
  color: #fff;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
  width: fit-content;
  float: right;
}
</style>