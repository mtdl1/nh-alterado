<template lang="html">
  <section>
    <h2 class="newhair-duvidas-t1">O QUE VOCÊ PRECISA SABER <br>SOBRE O NEW HAIR CAPS</h2>

    <div class="duvidasContainer" ref="containerDuvidas">
      <div class="" v-for="(coluna, n) in itens" :key="n">
        <div class="duvidasContainer-item" v-for="(item, i) in coluna" :key="i">
          <span class="newhair-duvidas-t2" @click="toggleItems(n, i)">
            {{ item.pergunta }}
            <span class="plus">+</span>
          </span>
          <div :ref="`faq${n}${i}`" class="duvidasContainer-item-text">
            <span v-html="item.resposta"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      itens: [
        [
          {
            pergunta: 'Como devo usar New Hair Caps?',
            resposta: 'A dose diária a ser tomada é de uma cápsula ao dia. Como durante o período da manhã a absorção dos nutrientes é facilitada e os resultados otimizados, sugerimos que tome New Hair Caps após sua primeira refeição.'
          },
          {
            pergunta: 'New Hair Caps engorda?',
            resposta: 'Não, as cápsulas têm componentes 100% naturais e de rápida absorção, sem nenhum tipo de lipídio ou agente que cause efeitos colaterais no corpo.'
          },
          {
            pergunta: 'New Hair Caps possui contraindicação?',
            resposta: 'Não tem contraindicação. Porém caso tenha algum tipo de alergia, indicamos que verifique os componentes da fórmula antes de fazer o uso.</a>'
          },
          {
            pergunta: 'Estimula o crescimento em outras áreas do corpo?',
            resposta: 'A formulação do New Hair Caps, assim como de outros complexos vitamínicos, não atua em níveis hormonais, apenas em regiões onde já existem folículos capilares. Então pode ficar tranquila! O New Hair Caps não estimula o crescimento de pelos em outras partes do corpo e nem interfere em procedimentos estéticos como depilação a laser.'
          },
          {
            pergunta: 'Grávidas ou lactante podem utilizar?',
            resposta: 'O New Hair Caps pode ser tomado mesmo amamentando, pois é um complexo vitamínico e mineral 100% natural e não possui contraindicações. Nosso produto possui componentes que irá auxiliar no fortalecimento dos fios e combater à queda causada nesse período de amamentação. No caso de gravidez, leve a fórmula o médico para melhor orientação.'
          },
          {
            pergunta: 'A partir de que idade é indicado?',
            resposta: 'Sugerimos que crianças menores de 12 anos, façam a utilização do produto, apenas sob orientação profissional.'
          },
        ],
        [
          {
            pergunta: 'New Hair Caps interfere no anticoncepcional?',
            resposta: 'Como nossos produtos são compostos apenas de nutrientes naturais, não há contraindicações e nem interações medicamentosas reconhecidas.'
          },
          {
            pergunta: 'Em quanto tempo sentirei os efeito das vitaminas?',
            resposta: 'Os resultados de New Hair Caps variam de pessoa para pessoa. Porém, desde a primeira semana de tratamento você perceberá uma redução significativa da queda de cabelo, além de fios mais fortes, saudáveis e brilhantes. Para melhores resultados quanto ao crescimento dos fios, indicamos um tratamento mínimo de 3 meses com New Hair Caps, além do uso contínuo para que seus cabelos se mantenham lindos e saudáveis.'
          },
          {
            pergunta: 'Pode ser usado com química?',
            resposta: 'Claro! Uma vez que New Hair Caps auxília seu cabelo a crescer mais forte e saudável, ele pode ser um super aliado contra os efeitos da química. Tomando New Hair Caps, você terá fios mais fortes e resistentes para aguentar a química sem sofrer grandes danos.'
          },
          {
            pergunta: 'New Hair Caps é liberado pela Anvisa?',
            resposta: 'O New Hair Caps é dispensado de registro da Anvisa por estar de acordo com a RDC 240/2018 na categoria 4300041-Suplemento Vitamínico ou Mineral.'
          },
          {
            pergunta: 'Qual o prazo de entrega?',
            resposta: 'Os pedidos são despachados no prazo de 24h úteis após a confirmação do pagamento e aprovação da compra. Os envios são feitos através da Loggi, empresa parceira New Hair Caps. O prazo é calculado no momento da compra e é contado após a postagem do pedido, que varia de acordo com o local de entrega.'
          },
          {
            pergunta: 'Quais as formas de pagamento?',
            resposta: 'Disponibilizamos as seguintes maneiras para você efetuar o pagamento do seu pedido:' + '<br><br> Cartão de Crédito: - Visa, Mastercard, Diners, Elo, Amex e Hipercard.' + '<br><br>Pagamento à Vista Boleto Bancário: O prazo de vencimento do boleto bancário é de 2 dias úteis contados a partir da data de emissão. Importante! Os itens comprados só são reservados até o vencimento do boleto.'
          }
        ]
      ]
    }
  },
  methods: {
    toggleItems(n, i) {
      const elAtivo = this.$refs.containerDuvidas.querySelector('.ativo');
      if (elAtivo && elAtivo != event.target) {
        elAtivo.classList.remove('ativo');
      }
      this.$slideToggle(this.$refs[`faq${n}${i}`][0]);
      event.target.classList.toggle('ativo');
    }
  }
}
</script>

<style lang="css" scoped>
.newhair-duvidas-t1{
  font-size: 36px;
  font-family: 'Oswald', sans-serif !important;
  font-weight: 500;
  text-align: center;
  color: #000;
  line-height: 38px;
  margin: 45px 0 30px;
}
.duvidasT1{
  display: block;
  margin-bottom: 20px;
}
.newhair-duvidas-t2{
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #828282;
  font-size: 15px;
  font-family: 'open sans', sans-serif;
}
.newhair-duvidas-t2:hover{
  color: #32457D;
}
.duvidasContainer{
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  max-width: 1135px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 43px;
}
.duvidasContainer > div{
  flex-basis: 50%;
}
.duvidasContainer-item{
  border-bottom: 1px solid#eaeaea;
  padding: 10px 0;
  margin: 0 15px;
}
.duvidasContainer-item-text{
  overflow: hidden;
  display: none;
}
.duvidasContainer-item-text span{
  font-size: 14px;
  font-family: 'open sans', sans-serif;
  padding-top: 10px;
  display: block;
  color: #828282;
  padding: 0 17px 17px 17px;
  transition: .7s ease;
}
.newhair-duvidas-t2 i{
  transition: 200ms;
}
.newhair-duvidas-t2.ativo i{
  transform: rotate(180deg);
}
.plus{
  color: #32457D;
  font-size: 2em;
  transition: .3s ease;
}
.newhair-duvidas-t2.ativo .plus{
  transform: rotate(45deg);
}
@media (max-width: 767px) {
  .duvidasContainer{
      grid-template-columns: auto;
  }
  .newhair-duvidas-t2{
    font-size: 14px;
  }

  .duvidasContainer{
    flex-direction: column;
  }
  .duvidasContainer > div{
    flex-basis: 100%;
  }
}
</style>

<style>
.duvidasContainer-item-text a{
  color: #005DFF;
  text-decoration: underline;
}
</style>
