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
    </div>
</template>

<script>
    export default {
        name: 'DuvidasLinhaEssential2',

        data() {
            return {
                perguntas: {
                    col1:[
                        {
                            title:'Os produtos são liberados pela ANVISA?',
                            text:`Sim, todos os produtos da linha New Hair Essential Home Care são liberados pela ANVISA.`,
                        },
                        {
                            title:'Os produtos são veganos?',
                            text:`Não, apesar de não realizarmos testes em animais, nossos produtos não são veganos.`,
                        },
                        {
                            title:'Os produtos possuem parabenos?',
                            text:`Não, os produtos da linha linha New Hair Essential Home Care não possuem parabenos.`,
                        },
                        {
                            title:'Os produtos possuem sal?',
                            text:`Não, os produtos da linha New Hair Essential Home Care não possuem sal em sua formulação, limpando os fios sem agredir.`,
                        },
                        {
                            title:'Os produtos possuem corantes?',
                            text:`Não, os produtos da linha New Hair Essential Home Care não possuem corantes em sua formulação.`,
                        },
                        {
                            title:'Qual é a ordem correta de aplicar os produtos?',
                            text:`Lave os cabelos duas vezes com o shampoo aplicando somente na raiz, enxague abundantemente, retire o excesso de umidade, aplique a máscara conforme as instruções do rótulo, deixe agir, enxágue, novamente retire a umidade em excesso, aplique o condicionador conforme as instruções da embalagem, enxágue e finalize com o sérum reparador ou ativador de cachos.`,
                        },
                        {
                            title:'Posso substituir a máscara pelo condicionador?',
                            text:`Não, o correto é utilizar os dois produtos, sendo que a máscara deve ser aplicada logo após a segunda lavagem do shampoo, após retirar o excesso de umidade, e o condicionador, após a máscara. A finalidade dos produtos é diferente.`,
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
                            text:`Para acompanhar o status do pedido, acesse o site https://www.loggi.com/rastreador/, insira o seu código de rastreio no campo e clique em "Acompanhar pedido".Após esse procedimento, é possível verificar em tempo real todas as informações da sua encomenda.`,
                        },
                    ],
                    col2: [
                        {
                            title:'Posso aplicar o sérum reparador com os cabelos secos?',
                            text:`Sim, o sérum deve ser aplicado nos cabelos secos sempre que houver necessidade.`,
                        },
                        {
                            title:'Posso aplicar o shampoo apenas uma vez?',
                            text:`O ideal é lavar duas vezes, já que a primeira lavagem remove o excesso de resíduos, produtos e gorduras acumuladas. A segunda, abre as cutículas para que os produtos de hidratação e nutrição possam agir.`,
                        },
                        {
                            title:'O uso do ativador de cachos descarta o uso do condicionador?',
                            text:`Não, o ativador de cachos deve ser utilizado após a finalização da lavagem, com os cabelos úmidos, antes de pentear.`,
                        },
                        {
                            title:'Como usar o spray pré-escova?',
                            text:`Após terminar de lavar os cabelos, retire o excesso de umidade dos fios com uma toalha sem esfregar, agite bem o frasco antes de usar e aplique o spray pré-escova nos fios em quantidade suficiente para facilitar o pentear. Penteie, espalhando o produto por todo o comprimento, em seguida seque/escove como de costume. P spray pré-escova pode ser utilizado em todas as vezes que secar ou pranchar os cabelos.`,
                        },
                        {
                            title:'Posso usar os produtos de linhas diferentes em uma mesma lavagem?',
                            text:`Pode, porém, o uso da linha completa indicada para o seu tipo de fio garante resultados mais satisfatórios.`,
                        },
                        {
                            title:'Crianças, gestantes e lactantes podem usar?',
                            text:`Sim, nossos produtos não possuem restrições de uso.`,
                        },
                        {
                            title:'A temperatura da água interfere no resultado final?',
                            text:`Sim, sempre prefira a água fria ou morna para lavar os cabelos, já que a temperatura mais quente abre as cutículas, fazendo com que as cutículas fiquem abertas e os fios ressequem e percam o brilho.`,
                        },
                        {
                            title:'A embalagem é reciclável?',
                            text:`Sim, as embalagens da linha New Hair Essential Home Care são recicláveis.`,
                        },
                    ]
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




        // mounted() {
        //     // const elements = document.querySelectorAll('.element');
        //     // elements.forEach(element => {
        //     //     let question = element.querySelector('.question');
        //     //     let icon = element.querySelector('.question button i');
        //     //     var answer = element.lastElementChild;
        //     //     var answers = document.querySelectorAll('.element .answer');
        //     //     question.addEventListener('click', () => {
        //     //         answers.forEach(ans => {
        //     //             let ansIcon = ans.parentElement.querySelector('button i');
        //     //             if (answer !== ans) {
        //     //                 ans.classList.add('hideText');
        //     //                 ansIcon.className = 'fa fa-caret-right';
        //     //             }
        //     //         });
        //     //         answer.classList.toggle('hideText');
        //     //         icon.className === 'fa fa-caret-right' ? icon.className = 'fa fa-caret-down' :
        //     //             icon.className = 'fa fa-caret-right';
        //     //     });
        //     // });
        // }
    
</script>
<style lang="scss" scoped>

    .TitleDuvidas h2 {
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
    }

    .TitleDuvidas h2 span {
        color: #ff4289;
    }

    .TitleDuvidas p {
        text-align: center;
        font: normal normal normal 14px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #666666;
        padding-top: 0px;
        margin-bottom: 20px;
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
        padding-left: 10px !important;
        padding-top: 10px ;
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
        font: normal normal bold 24px/24px Open Sans;
        letter-spacing: -0.24px;
        color: #FFFFFF;
        border-radius: 4px;
        transition: 300ms ease-in-out;
    }

    @keyframes animation {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @media(max-width: 768px) {
        .TitleDuvidas h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .TitleDuvidas p {
            font: normal normal normal 14px/14px Open Sans;
        }

        .desk {
            display: none;
        }
        .element{
            margin: 10px 15px!important;
        }
    }

</style>np