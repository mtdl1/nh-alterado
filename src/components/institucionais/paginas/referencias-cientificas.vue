<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1"> Referências Científicas </h1>
      <p class="vitabe-t2"> Conheça algumas referências.</p>

    </div>
    <div class="duvidasContainer">
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
  </section>
</template>

<script>
export default {
  data() {
    return {
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
      title: ' Referências Científicas',
      itens: [
        {
         pergunta: "1º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/27095961" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/27095961</a>`,
        },
        {
         pergunta: "2º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/21914489" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/21914489</a>`,
        },
        {
          pergunta: "3º Referência Científica ",
          resposta: `<a href="http://www.sbai.org.br/revistas/Vol331/ART%201-10%20-%20Micronutrientes%20e%20sistema%20imunol%C3%B3gico.pdf" target="_blanck">http://www.sbai.org.br/revistas/Vol331/ART%201-10%20-%20Micronutrientes%20e%20sistema%20imunol%C3%B3gico.pdf</a>`,
        },
        {
          pergunta: "4º Referência Científica ",
          resposta: `<a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380979/" target="_blanck">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380979/
          </a>`,
        },
        {
          pergunta: "5º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/19727438" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/19727438</a>`,
        },
        {
           pergunta: "6º Referência Científica ",
          resposta: `<a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929555/ " target="_blanck"> https://www.ncbi.nlm.nih.gov/pmc/ </a>`,
        },
        {
         pergunta: "7º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/19172026" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/19172026</a>`,
        },
        {
         pergunta: "8º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/24575202" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/24575202
          </a>`,
        },

      ],
    };
  },

  methods: {
      requestData() {
        this.response.data.estrutura.seo.title = 'Referências Científicas | NEW HAIR'
        this.response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/pagina/referencias-cientificas'
        this.response.data.estrutura.seo.description = 'Conheça algumas referências científicas sobre a eficácia da fórmula'
        
        this.$aplicaSEO(this.response.data.estrutura)

        //VARIÁVEIS PÚBLICAS
        this.changeDadosPageAtual(this.response.data)
        return
      }
    },

  created() {
    this.$emit('changeTitle', this.title)
    document.querySelector("title").innerText = this.title;
    this.requestData()
  },
};
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
@media (max-width: 767px) {
  .institucional-t1 {
    font-size: 14px;
  }
  .duvidasContainer-topo {
    margin: 0;
  }
}
</style>
