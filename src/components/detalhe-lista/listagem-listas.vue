<template lang="html">
  <div class="containerProdsListagem">
    <div class="vitrineDefault-container-item" v-for="prod in listagemData" :key="prod.id">
       <template v-if="prod.selos.length > 0">
        <div class="vitrineSelo" :class="[selo.posicao.x, selo.posicao.y]" v-for="selo in prod.selos" :key="selo.id">
          <img :src="selo.imagem" :alt="selo.nome" v-if="selo.imagem !== ''">
          <span v-if="selo.imagem === ''" :style="{color: selo.cores.texto, backgroundColor: selo.cores.selo}">
            {{ selo.label }}
          </span>
        </div>
      </template>
      <div class="vitrineDefault-container-item-top">
        <router-link class="vitrineDefault-container-item-top-img" :to="{...prod.rota}">
          <img :src="prod.midias.imagens.length > 0 ? prod.midias.imagens[0].arquivos.medium : require(`@/${$imgDefaultM}`)"
          :alt="prod.midias.imagens > 0 ? prod.midias.imagens[0].label : ''" >
        </router-link>
        <router-link class="vitrineDefault-container-item-top-nome" :to="{...prod.rota}">
          <h4>
            {{ prod.nome }}
          </h4>
        </router-link>
      </div>
      <div class="vitrineDefault-container-item-bottom">
        <template>
          <span class="vitrineDefault-container-item-bottom-precoPor">
            {{ $formatPrice(prod.precos.por) }}
          </span>
          <span class="vitrineDefault-container-item-bottom-condicao" v-html="$stringParcelamentoProds(prod.precos.parcelamento, true, prod.precos.vista)"></span>
          <router-link :to="{...prod.rota}" class="vitrineDefault-container-item-bottom-bt">
            <span >
              Ver detalhes
            </span>
          </router-link>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listagemData: Array
  },
  mounted(){
    window._trustvox_shelf_rate = [];
    window._trustvox_shelf_rate.push(['_storeId', '109000']);
    this.$getScriptExterno('//rate.trustvox.com.br/widget.js');
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
.avaliacaoTrust{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.containerProdsListagem{
  display: grid;
  grid-template-columns: repeat(4, 24.75%);
  justify-content: space-between;
}
.vitrineDefault{
  margin-bottom: 50px;
}
.vitrineDefault-container{
  display: flex;
}
.vitrineDefault-container-item{
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  max-width: 225px;
}
.vitrineDefault-container-item-top{
  text-align: center;
  flex: 0 1 auto;
  position: relative;
}
.vitrineDefault-container-item-top > a{
  display: block;
}
.vitrineDefault-container-item-top-img{
  position: relative;
  cursor: pointer;
}
.vitrineDefault-container-item-top-nome h4{
  font-size: 13px;
  line-height: 1.38;
  padding: 10px 0 0;
  color: #202020;
  margin-bottom: 5px;
  text-align: left;
}
.vitrineDefault-container-item-bottom{
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.vitrineDefault-container-item-bottom-precoDe{
  font-size: 11px;
  text-decoration: line-through;
  color: #B0BEC5;
  margin-bottom: 5px;
  line-height: 1.09;
}
.vitrineDefault-container-item-bottom-precoPor{
  font-size: 24px;
  font-weight: bold;
  color: #1B75BC;
  line-height: 1.33;

}
.vitrineDefault-container-item-bottom-precoMsg{
  font-size: 12px;
  line-height: 1.166;
  padding-bottom: 7px;
  display: block;
  border-bottom: 1px solid #DDE8EE;
  max-width: 180px;
  margin-bottom: 10px;
}
.vitrineDefault-container-item-bottom-condicao{
  font-size: 12px;
  margin-bottom: 20px;
  line-height: 1.166;
}
.vitrineDefault-container-item-bottom-bt{
  height: 40px;
  width: 100%;
  background-color: #1DF7A0;
  border-radius: 3px;
  font-size: 15px;
  color: #1F487E;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 200ms ease-in-out;
  flex: 0 0 auto;
}
.vitrineDefault-container-item-bottom-bt span{
  min-height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vitrineAlerta{
  display: flex;
  font-size: 14px;
  color: #D22E2E;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  .vitrineDefault-container-item-bottom-bt:hover{
    background-color: #0DBA87;
    color: #fff;
  }
  .vitrineDefault-container-item:hover .vitrineDefault-container-item-bottom-bt{
    opacity: 1;
  }
  .vitrineDefault-container-item:hover{
    border-color: #D9D9D9;
  }
}

/* ================================== MOBILE ================================== */
@media (max-width: 767px) {
  .containerProdsListagem{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-template-columns: repeat(2, 50%);
  }
  .containerProdsListagem > .vitrineDefault-container-item{
    flex-basis: auto;
    width: 50%;
    margin: 0;
  }
  .vitrineDefault-container-item-bottom-bt.aviseMe{
    min-height: 35px;
  }
  .vitrineDefault-container-item{
    border-bottom: 1px solid #D9D9D9;
    border-top: none;
    border-radius: 0px;
    margin-bottom: 0px;
    max-width: unset;
  }
  .vitrineDefault-container-item:nth-child(2n-1){
    border-right: 1px solid #D9D9D9;
  }
  .vitrineDefault-container-item:nth-last-child(1),
  .vitrineDefault-container-item:nth-last-child(2){
    border-bottom: none;
  }
  .vitrineDefault-container-item:nth-child(2){
    border-bottom: 1px solid #D9D9D9;
  }
  .vitrineDefault-container-item-filtrosContainer{
    width: 100%;
    max-width: 100px;
    flex-wrap: wrap;
  }
  .vitrineDefault-container-item-filtros{
    width: 100%;
    max-width: 40px;
    margin-bottom: 10px;
  }
  .vitrineDefault-container-item-filtros:nth-child(3),
  .vitrineDefault-container-item-filtros:nth-child(4){
    margin-bottom: 0px;
  }
}
@media (max-width: 1023px) {
  .vitrineDefault-container-item .vitrineDefault-container-item-bottom-bt{
    display: none;
  }
}

/*  FILTROS */
.vitrineDefault-container-item-filtrosContainer{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5px 0px;
}
.vitrineDefault-container-item-filtros{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.vitrineDefault-container-item-filtros > div{
  width: 30px;
  height: 18px;
  flex: 0 0 auto;
  margin-bottom: 3px;
}
.vitrineDefault-container-item-filtros  span{
  font-size: 10px;
  color: #727D84;
}
.vitrineDefault-container-item-filtros:nth-child(1)  span{
  width: 100%;
  max-width: 35px;
}

</style>

<style>
  .vitrineDefault .tns-horizontal.tns-subpixel > .tns-item{
    display: inline-flex;
  }
  .vitrineDefault .tns-nav{
    bottom: -20px;
  }
  .vitrineDefault .tns-inner{
    padding: 0 60px;
  }
</style>
