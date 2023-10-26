<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1 text-center"> Perguntas Frequentes </h1>
      <!-- <p class="vitabe-t2"> Veja as principais dúvidas dos nossos clientes.</p> -->
    </div>
    <div class="duvidasContainer">
      <div class="row justify-content-center">
              <div class="col">
                  <div class="btns-duvidas d-flex justify-content-center flex-wrap">
                    <div :class="['item-duvida', {ativo: ativo == 1}]" @click="ativo = 1"><p class="titulo-box">New Hair Vitamin</p></div>
                    <div :class="['item-duvida', {ativo: ativo == 2}]" @click="ativo = 2"><p class="titulo-box">Linha essential</p></div>
                  </div>
              </div>
        </div>
        <div class="duvidasContainer-item" v-for=" (item, i) in itens " :key=" i ">
          <p class="institucional-t1" @click=" $slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo') ">
            {{ item.pergunta }}
            <i class="fa fa-caret-right"></i>
          </p>
          <div :ref=" `faq${i}` " class="duvidasContainer-item-text">
            <p v-html="item.resposta"></p>
          </div>
        </div>
    </div>
    <DuvidasHome2 class="mt-4" v-if="ativo == 1"/>
    <DuvidasLinhaEssential2 class="mt-4" v-if="ativo == 2"/>
    <Rodape/>
  </section>
</template>
<script>

  import DuvidasLinhaEssential2 from '../.././landing-page/linha-essential/duvidas-linha-essential2.vue'
  import DuvidasHome2 from './../../gerais/duvidas/duvidasHome2.vue'
  import rodape from './../../gerais/rodape.vue'

   export default {
    name: 'DuvidasFrequentes',
    data() {
      return {
        ativo: 1,
      response: {
          data: {
            estrutura: {
              seo: {
                title: null,
                canonical: null,
                description: null,
                indexar: true
              }
            }
          }
        },
      }
    },

     methods: {
      requestData() {
        this.response.data.estrutura.seo.title = 'Dúvidas frequentes | NEW HAIR'
        this.response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/pagina/duvidas-frequentes'
        this.response.data.estrutura.seo.description = 'Tire as duas dúvidas sobre a linha newhair vitamin e linha essential'
        
        this.$aplicaSEO(this.response.data.estrutura)

        //VARIÁVEIS PÚBLICAS
        this.changeDadosPageAtual(this.response.data)
        return
      }
    },

    created() {
      this.requestData()
    },


    components:{
      DuvidasLinhaEssential2,
      DuvidasHome2,
      rodape,
      
    }
   }
 
</script>

<style lang="css" scoped>
section {
  margin-bottom: 90px;
}
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.institucional-t1 {
  border-bottom: 1px solid #dbdbdb;
}
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item {
  padding: 10px 0 0;
  border-bottom: none;
}
.duvidasContainer-item-text {
  overflow: hidden;
  display: none;
}
.duvidasContainer-item-text p {
  font-size: 14px;
  display: block;
  color: #828282;
  text-align: justify;
  padding: 10px;
}
.institucional-t1 i {
  transition: 200ms;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}

.institucional-t1:hover {
  color: #ff4289;
  font-weight: bold;
}

.item-duvida {
   background: transparent;
   font: normal normal bold 15px/18px Open Sans;
   color: #ff4289;
   padding: 12px 20px;
   border-radius: 6px;
   cursor: pointer;
   border: 1px solid #ff4289;
   text-transform: uppercase;
   width: 31%;
   margin: 0px 12px 0px;
   text-align: center;
  }

  .ativo {
    background: #ff4289;
    color: #FFF;
  }

  .item-duvida:hover {
    opacity: .8;
    background: #ff4289;
    color: #FFF;
  }


@media (max-width: 767px) {

  h1 {
    font-size: 26px;
    padding-bottom: -20px;
  }
  .institucional-t1 {
    font-size: 14px;
  }
  .duvidasContainer-topo {
    margin: 0;
  }

  .item-duvida{
    width: 40%;
     padding: 8px 20px;
     text-align: center;
     margin: 0px 8px 0px;
  }

  .titulo-box {
    font: normal normal bold 14px/15px Open Sans;
  }
  
}
</style>
