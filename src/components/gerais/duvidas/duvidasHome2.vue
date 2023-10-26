<template>
     <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="accordion" id="faq">
                    <div class="card mb-2" v-for="(item, i) in perguntas.col1" :key="i">
                        <div class="card-header" :id="'faqhead'+i">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" :data-target="'#faq'+i" aria-expanded="true" :aria-controls="'faq'+i" v-html="item.title"></a>
                        </div>
                        <div :id="'faq'+i" class="collapse" :aria-labelledby="'faqhead'+i" :data-parent="'#faq'+i">
                            <div class="card-body text-left" v-html="item.text"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
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
        <component :is="'script'" type="application/ld+json">
         
        </component>
    </div>
</template>

<script>
    export default {
        name: 'DuvidasHome',
      
        data(){
            return {
                perguntas: {
                    col1: [
                        {
                            title: 'Como devo usar New Hair?',
                            text: `A dose diária a ser tomada é de uma cápsula ao dia. Como durante o período da manhã a absorção dos nutrientes é facilitada e os resultados otimizados, sugerimos que tome New Hair após sua primeira refeição`,
                        },
                        {
                            title:'New Hair engorda?',
                            text:`Não, as cápsulas têm componentes 100% naturais e de rápida absorção, sem nenhum tipo de lipídio ou agente que cause efeitos colaterais no corpo.`,
                        }, 
                        {
                            title:'New Hair possui contraindicação?',
                            text:`Não tem contraindicação. Porém, caso tenha algum tipo de alergia, indicamos que verifique os componentes da fórmula antes de fazer o uso.`,
                        },
                        {
                            title:'Estimula o crescimento em outras áreas do corpo?',
                            text:`A formulação do New Hair, assim como de outros complexos vitamínicos, não atua em níveis hormonais, apenas em regiões onde já existem folículos capilares. Então pode ficar tranquila! O New Hair não estimula o crescimento de pelos em outras partes do corpo e nem interfere em procedimentos estéticos como depilação a laser.`,
                        },
                        {
                            title:'Grávidas ou lactantes podem utilizar?',
                            text:`Embora o New Hair Caps e Gummy seja um complexo vitamínico 100% natural, orientamos que gestantes, lactantes e menores de 18 (dezoito) anos devem consumir o produto somente sob orientação de nutricionista ou médico.`,
                        },
                        {
                            title:'New Hair pode ser consumido em qualquer idade?',
                            text:`Orientamos que menores de 18 (dezoito) consumam o produto somente sob orientação de nutricionista ou médico.`,
                        },
                        {
                            title:'Como rastrear meu pedido?',
                            text:`Para acompanhar o status do pedido, acesse o site https://www.loggi.com/rastreador/, insira o seu código de rastreio no campo e clique em "Acompanhar pedido". Após esse procedimento, é possível verificar em tempo real todas as informações da sua encomenda.`,
                        },
                    ],
                    col2: [
                        {
                            title:'O que é New Hair Gummy?',
                            text:`Os benefícios que você já conhece da New Hair, mas agora de uma maneira mais divertida e saborosa de consumir. Nossa goma na versão morango é zero açúcar, zero glúten e zero lactose. Apenas 1 (uma) goma ao dia para você sentir a transformação dos seus fios de dentro para fora.`,
                        },
                        {
                            title:'Quantas gomas ingerir?',
                            text:`A recomendação é de apenas 1 (uma) goma ao dia`,
                        },
                        {
                            title:'O resultado da cápsula e da goma é o mesmo?',
                            text:`Sim! Tanto a goma quanto a cápsula possuem as mesmas vitaminas e minerais, responsáveis em reduzir a queda, estimular o crescimento dos folículos e fortalecer as unhas.`,
                        },
                        {
                            title:'New Hair Gummy engorda?',
                            text:`Não engorda, pois não contém açúcar e possui baixo valor energético (apenas 8 kcal por goma).`,
                        },
                        {
                            title:'New Hair Gummy pode ser consumido por diabéticos?',
                            text:`Sim, pois não contém açúcar e são adoçadas com polióis e stévia. Portanto, podem ser consumidas por diabéticos com total segurança.`,
                        },
                        {
                            title:'New Hair Gummy causa alergia?',
                            text:`New Hair Gummy não contém nenhum dos 18 principais alimentos alergênicos considerados de relevância para a Saúde Pública, de acordo com a Resolução nº 26, de 02/05/2015 Anvisa.`,
                        },
                    ],
                }
            }

        },
          created() {

    const dataCol1 = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [],
    };

    const dataCol2 = {
      mainEntity: [],
    };

    this.perguntas.col1.forEach((pergunta) => {
      dataCol1.mainEntity.push({
        "@type": "Question",
        name: pergunta.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: pergunta.text,
        },
      });
    });

    this.perguntas.col2.forEach((pergunta) => {
      dataCol2.mainEntity.push({
        "@type": "Question",
        name: pergunta.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: pergunta.text,
        },
      });
    });


    const scriptCol1 = document.createElement("script");
    const scriptCol2 = document.createElement("script");
    scriptCol1.type = "application/ld+json";
    scriptCol2.type = "application/ld+json";
    scriptCol1.innerHTML = JSON.stringify(dataCol1);
    scriptCol2.innerHTML = JSON.stringify(dataCol2);
    document.getElementsByTagName("head")[0].appendChild(scriptCol1);
    document.getElementsByTagName("head")[0].appendChild(scriptCol2);
  },
};

    
</script>
<style lang="scss" scoped>

.titleSection h1 {
        text-align: center;
        font: normal normal 32px/38px Open Sans, sans-serif;
        padding-top: 28px;
        margin-top: 0px;
        letter-spacing: 0px;
        color: #333333;
    }

.titulo {
        text-align: center;
        font: normal normal 15px/16px Open Sans;
        padding-top: 0px;
        padding-bottom: 32px;
        letter-spacing: 0px;
        color: #777777;
}

.card {
        border: none;
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
    }

    .card .collapse {
        border: 0;
    }

    .card .collapse.show {
        line-height: 30px;
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
        width: 230px;
        height: 65px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #12AC53 0% 0% no-repeat padding-box;
        font: normal normal bold 18px/18px Open Sans;
        letter-spacing: -0.24px;
        color: #FFFFFF !important;
        border-radius: 4px;
        transition: 300ms ease-in-out;
    }

    @media (max-width: 768px) {
        .card .card-header .btn-header-link {
            height: 60px;
            font: normal normal normal 17px Open Sans;
            margin-bottom: 2px;
        }

     .titleSection h1 {
            font: normal normal bold 23px/26px Open Sans;
            padding-bottom: 5px;
        }
    .titulo {
         font: normal normal 14px/14px Open Sans;
    }
    
    }


 

</style>