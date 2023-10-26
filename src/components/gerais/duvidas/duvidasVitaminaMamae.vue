<template>
<div class="main">
    <div class="TitleDuvidas text-center" v-if="$route.path !== '/'">
        <h3 class=" pt-4">Saiba tudo sobre o <br class="mob">New Hair</h3>
        <p class=" mb-4 mt-1"> Tire todas as suas dúvidas para começar o seu <br class="mob"> tratamento o quanto antes.</p>
    </div>
     <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="accordion" id="faq">
                    <div class="card mb-2" v-for="(item, i) in perguntas.col1" :key="i">
                        <div class="card-header" :id="'faqhead'+i">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" :data-target="'#faq'+i" aria-expanded="true" :aria-controls="'faq'+i" v-html="item.title"></h3>
                        </div>
                        <div :id="'faq'+i" class="collapse" :aria-labelledby="'faqhead'+i" :data-parent="'#faq'+i">
                            <div class="card-body text-left" v-html="item.text"></div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="col-md-6"  >
                <div class="accordion" id="faq">

                    <div class="card mb-2" v-for="(item, i) in perguntas.col2" :key="i">
                        <div class="card-header" :id="'faqhead2'+i">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" :data-target="'#faq2'+i" aria-expanded="true" :aria-controls="'faq2'+i" v-html="item.title"></a>
                        </div>
                        <div :id="'faq2'+i" class="collapse" :aria-labelledby="'faqhead2'+i" :data-parent="'#faq2'+i">
                            <div class="card-body text-left" v-html="item.text"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="col-sm-12  botao"  v-if="$route.name !== 'ja-sou-cliente' & $route.path !='/lista-vip-black-friday'">
                <a href="#" v-if="isHtmlUrl" class="facaSeuPedido my-4 ">COMPRE AGORA</a>
                <a href="#produtos" v-else class="facaSeuPedido my-4 ">COMPRE AGORA</a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        components: {  },
        name: "DuvidasGummy",
      
        data(){
            return {
                perguntas: {
                    col1: [
                        {
                            title: 'O que mudou da versão anterior para a versão atual de New Hair?',
                            text: `Agora, New Hair possui formato de comprimidos e versão com ácido hialurônico, para tratar ao mesmo tempo, cabelos, unhas e também, pele. As dosagens da fórmula e ativos continuam os mesmos: 12 vitaminas e 5 minerais, apenas acrescentamos uma nova versão com 10mg de ácido hialurônico.`,
                        },
                        {
                            title: 'Todos os comprimidos de New Hair possuem ácido hialurônico?',
                            text: `Não, existem duas versões dos comprimidos de New Hair, com ácido hialurônico e sem ácido hialurônico.`,
                        },
                        {
                            title: 'Como devo usar New Hair?',
                            text: `A dose diária a ser tomada é de um comprimido ao dia. Como durante o período da manhã a absorção dos nutrientes é facilitada e os resultados otimizados, sugerimos que tome New Hair após sua primeira refeição`,
                        },
                        {
                            title:'New Hair engorda?',
                            text:`Não, os comprimidos têm componentes 100% naturais e de rápida absorção, sem nenhum tipo de lipídio ou agente que cause efeitos colaterais no corpo.`,
                        }, 
                        {
                            title:'New Hair possui contraindicação?',
                            text:`Não tem contraindicação, e pode ser consumida por gestantes e lactantes. Porém, caso tenha algum tipo de alergia, indicamos que verifique os componentes da fórmula antes de fazer o uso.`,
                        },
                       
                       
                       
                    ],
                    col2: [
                        {
                            title:'Sou gestante ou lactante, posso tomar esse novo comprimido de New Hair?',
                            text:`Sim, a versão SEM ÁCIDO HIALURÔNICO do comprimido de New Hair é liberada para gestantes e lactantes, inclusive oferece inúmeros benefícios para a saúde dos cabelos e unhas que sofrem com as variações hormonais desses dois períodos.`,
                        },
                         {
                            title:'Estimula o crescimento em outras áreas do corpo?',
                            text:`A formulação do New Hair, assim como de outros complexos vitamínicos, não atua em níveis hormonais, apenas em regiões onde já existem folículos capilares. Então pode ficar tranquila! O New Hair não estimula o crescimento de pelos em outras partes do corpo e nem interfere em procedimentos estéticos como depilação a laser.`,
                        },
                         {
                            title:'New Hair pode ser consumido em qualquer idade?',
                            text:`Orientamos que menores de 18 (dezoito) consumam o produto somente sob orientação de nutricionista ou médico.`,
                        },
                         {
                            title:'Qual é o prazo de entrega?',
                            text:`Os produtos New Hair são despachados em média 24h úteis após aprovação do pagamento, mas, dependemos da agilidade da empresa Loggi para que as entregas cheguem até o seu endereço.
                            Abaixo os prazos médios:
                            Região Sudeste - de 1 a 8 dias úteis
                            Região Sul - de 1 a 9 dias úteis
                            Região Centro-Oeste - de 1 a 10 dias úteis
                            Região Nordeste - de 2 a 14 dias úteis
                            Região Norte - de 3 a 15 dias úteis.`,
                        },
                        {
                            title:'Como rastrear meu pedido?',
                            text:`Para acompanhar o status do pedido, acesse o site https://rastreio.newhair.com.br, insira o seu código de rastreio no campo e clique em "Acompanhar pedido". Após esse procedimento, é possível verificar em tempo real todas as informações da sua encomenda.`,
                        },
                    ],
                

                },
                url: window.location.href //
            };

        },

created() {
    
    const perguntas = this.perguntas;
    const data = {};

  Object.keys(perguntas).forEach((col) => {
    data[col] = {
      mainEntity: [],
    };

    perguntas[col].forEach((pergunta) => {
      data[col].mainEntity.push({
        "@type": "Question",
        name: pergunta.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: pergunta.text,
        },
      });
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data[col]);
    document.getElementsByTagName("head")[0].appendChild(script);
  });
},

   computed: {
    isHtmlUrl() {
      return this.url.endsWith('.html');
    }
  }

        
        
}
</script>

<style lang="scss" scoped>

.main{
    background-color: #f5f5f5;
}

.TitleDuvidas h3 {
    font: normal normal bold 32px/43px Open Sans;
    letter-spacing: -0.8px;
    color: #333333;
}

.TitleDuvidas p {
text-align: center;
font: normal normal normal 20px/24px Open Sans;
letter-spacing: -0.38px;
color: #666666;
padding-top: 0px;
margin-bottom: 20px;
}

.card {
        border: none;
        background: #f5f5f5;
    }

    .card .card-header {
        height: 60px;
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        border: 1px solid #777777;
        margin-bottom: 10px;
        border-radius: 50px;
        background: #f5f5f5;
    }

    .card .card-header .btn-header-link {
        width: 100%;
        font: normal normal normal 17px Open Sans;
        text-align: left;
        color: #333;
        padding: 5px 35px 5px 20px;
        position: relative;
        
    }

    .accordion .card:not(:first-of-type) .card-header:first-child {
        border-radius: 50px;
    }

    .card .card-header .btn-header-link:after {
        content: "\f106";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .card .card-header .btn-header-link.collapsed:after {
        content: "\f107";
    }

    .card .collapsing {
        line-height: 30px;
        background: #f5f5f5;
    }

    .card .collapse {
        border: 0;
        background: #f5f5f5;
    }

    .card .collapse.show {
        line-height: 30px;
        background: #f5f5f5;
    }

    .card-body, 
    p {
        color: #333;
        font: normal normal normal 17px/22px Open Sans ;
        padding-left: 10px;
        padding-top: 10px;
    }

    .btn:focus {
        box-shadow: none;
    }

  .facaSeuPedido {
    background-color: #18A851;
    text-align: center;
    font: normal normal 800 26px/30px Open Sans;
    letter-spacing: -1.04px;
    color: #FFFFFF;
    padding: 14px 62px;
    border-radius: 8px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    }

    .botao {
        padding-bottom: 30px;
    }

    @media (max-width: 768px) {
        
    .card .card-header .btn-header-link {
        font: normal normal normal 14px Open Sans;
        margin-bottom: 2px;
    }
    
  .TitleDuvidas h3 {
            font: normal normal 700 22px/26px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

    .TitleDuvidas p {
        font: normal normal normal 14px/18px Open Sans;
    }
    
    .facaSeuPedido  {
    background-color: #18A851;
    text-align: center;
    font: normal normal 800 20px/32px Open Sans !important;
    letter-spacing: -1.04px;
    color: #FFFFFF;
    padding: 14px 62px;
    border-radius: 8px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    text-transform: uppercase;
    margin: auto;
    width: 100%;
    }
    

    a {
        font-size: 14px!important;
    }

    
    }


 

</style>

