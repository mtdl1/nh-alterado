<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1"> Política de Reembolso </h1>
      <p class="vitabe-t2"> Conheça a nossa política de reembolso para devolução, cancelamentos, trocas, estornos. </p>

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
      title: 'Política de Reembolso',
      itens: [
        {
          pergunta: "Reembolso / Cancelamento / Estorno  ",
          resposta: `
          <p class="pb-2">"Art. 49. O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato
            de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços
            ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio."</p>

          <p class="pb-2">O reembolso será autorizado somente se o produto estiver sem uso, lacrado e sem qualquer tipo de violação
            ou alteração no frasco ou pote, com prazo máximo de 7 dias corridos após o recebimento da compra para fazer
            a solicitação.</p>

          <p class="pb-2">- O estorno/reembolso ocorrerá no prazo de até 10 dias.</p>

          <p class="pb-2">Boleto Bancário: O reembolso acontece dentro da plataforma de pagamento MERCADO PAGO, ficando disponível
            para resgate em conta bancária.</p>

          <p class="pb-2">Cartão de Crédito: o valor será estornado como crédito em sua fatura do cartão utilizado com o prazo de até
            três faturas para processamento, já que cada operadora trabalha com prazos e processos de estorno
            diferentes.</p>

          <p class="pb-2"><strong>Toda e qualquer solicitação referente ao pedido efetuado deve ser feita através do CHAT ONLINE em
              nosso SITE, através do botão verde localizado no canto direito ou identificado como INICIAR CHAT ONLINE
              WHATSAPP, selecionando a opção que melhor atender a sua necessidade.</strong></p>

          `,
        },
        {
          pergunta: "Defeito / Avaria  ",
          resposta:  `
          <p class="pb-2">"Art. 49. O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua
            assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de
            produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio."
          </p>

          <p class="pb-2"><strong>Toda e qualquer solicitação referente ao pedido efetuado deve ser feita através do
              CHAT ONLINE em nosso SITE, através do botão verde localizado no canto direito ou identificado como INICIAR
              CHAT ONLINE WHATSAPP, selecionando a opção que melhor atender a sua necessidade.</strong> </p>
          `,
        },

      ],
    };
  },

  methods: {
      requestData() {
        this.response.data.estrutura.seo.title = 'Política de Reembolso | NEW HAIR'
        this.response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/pagina/politica-de-reembolso'
        this.response.data.estrutura.seo.description = 'Conheça a nossa política de reembolso para devolução, cancelamentos, trocas, estornos'
        
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
.institucional-t1:hover {
  color: #ff4289;
  font-weight: bold;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
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
