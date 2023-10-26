<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1">Termos e Condições</h1>
      <p class="duvidasT1">Conheça os nossos termos e condições.</p>
    </div>
    <div class="duvidasContainer">
      <div class="duvidasContainer-item" v-for="(item, i) in itens" :key="i">
        <p class="institucional-t1" @click="$slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo')">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref="`faq${i}`" class="duvidasContainer-item-text">
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
                description: null
              }
            }
          }
        },
      title: 'Termos e Condições',
      itens: [
        {
          pergunta: "Desafio New Hair 90 Dias ",
          resposta: `
          <p>
            Conforme anunciado, ao comprar o tratamento de 90 do New Hair você automaticamente passa a participar do Desafio 90 Dias. Sendo  assim, caso não tenha nenhum dos resultados prometidos e visíveis nós devolveremos o seu dinheiro.
          </p>
          <br>
          <p>
            Benefícios do New Hair Caps: Acelera em até 6x, crescimento de até 4cm ao mês, diminui em 96% a queda, fortalece as unhas, estimula a produção de colágeno, melhora o sistema imunológico, reduz o frizz, aumenta o volume e o brilho.
          </p>
          <br>
          <p>
            É indispensável o anexo das fotos mensais do cabelo sendo datadas mês a mês enviadas para as nossas redes sociais (@newhaircaps) ou Chat Online com o titulo "Desafio 90 Dias".
          </p>
          <br>
          <p>
            Obs: Foto com o cabelo todo para trás e o ângulo da foto de costas. O cabelo deve estar nas mesmas condições em todas as fotos.
          </p>
          <br>
          <p>
            Vale lembrar que, o Desafio 90 Dias é válido apenas para clientes que comprarem 3 potes do New Hair em um único pedido, não estendendo para compras de menos.
          </p>
          <br>
          <p>
            Ao fim do tratamento de 90 dias e dentro do mesmo período a contar da data de recebimento da compra.
          </p>
          <br>
          <p>
            Para tal você deverá entrar em contato com nosso serviço de devoluções nas redes sociais (@newhaircaps) ou Chat Online com o assunto DEVOLUÇÃO DESAFIO 90 DIAS com número de pedido, nome completo e CPF, solicitando o procedimento de devolução do dinheiro.
          </p>
          <br>
          <p>
            <b class="important" style="color: #000;font-weight: bold;">IMPORTANTE:</b> Para realização de devolução é obrigatório o envio dos 03 potes vazios do produto adquirido em perfeito estado.
          </p>
          <br>
          <p>
            O valor do frete referente a compra e devolução será pago pelo cliente. Não há devolução de valores de fretes pagos.
          </p>
          <br>
          <p>
            RESTITUIÇÃO DO VALOR PAGO É necessário que o CPF do titular da conta seja o mesmo que consta no pedido (CPF do cliente).
          </p>
          <br>
          <p>
            O reembolso será realizado através da plataforma de pagamento e de mesma forma escolhida no ato da compra, sendo boleto ou cartão de crédito.
          </p>
          <br>
          <p>
            A restituição dos valores será processada somente após o recebimento e análise do(s) produto(s) no Centro de Distribuição da New Hair.
          </p>
          `,
        },
      ],
    };
  },
 
   methods: {
      requestData() {
        this.response.data.estrutura.seo.title = 'Termos e Condições | NEW HAIR'
        this.response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/pagina/termos'
        this.response.data.estrutura.seo.description = 'Conheça os termos e condições do desafio new hair 90 dias'
        
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
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.institucional-t1 {
  margin-bottom: 10px;
}
.institucional-t1:hover {
  color: #ff4289;
  font-weight: bold;
}
.institucional-t1:hover i,
.institucional-t1 i {
  transition: 200ms;
  color: #828282;
}
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item {
  padding: 0;
  margin-bottom: 90px;
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
  padding: 10px 20px;
}
.duvidasContainer-item-text b.important {
  color: #000;
  font-weight: bold;
}
.institucional-t1 i {
  transition: 200ms;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}
@media (max-width: 767px) {
  .institucional-t1 {
    font-size: 14px;
  }
}
</style>
