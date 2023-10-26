<template>
<main>
     <div class="container">
        <div class="titleSection text-center" v-if="$route.path !== '/'">
                <h3 class="pt-4">Saiba tudo sobre o New Hair</h3>
                <p class="titulo">Tire todas as suas dúvidas para começar o seu tratamento o quanto antes. </p>
        </div>
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
        <div class="col-sm-12 desk" v-if="$route.name !== 'ja-sou-cliente' & $route.path !='/lista-vip-black-friday'">
                <a href="#produtos" v-show="$route.name !=='/produtos'" class="facaSeuPedido my-4 desk ">COMPRE AGORA</a>
                <a href="#produtos" v-show="$route.name =='/produtos'" class="facaSeuPedido my-4 desk ">COMPRE AGORA</a>
        </div>
    </div>
</main>
</template>

<script>
    export default {
        name: 'DuvidasSerum',
      
        data(){
            return {
                perguntas: {
                    col1: [
                        {
                            title: 'O que é o Sérum 10 em 1 New Hair?',
                            text: `O Sérum Facial 10 em 1 New Hair tem a fórmula perfeita para tratar a sua pele de forma descomplicada e poderosa, proporcionando benefícios e resultados incríveis.`,
                        },
                        {
                            title: 'Quais são os ingredientes do sérum 10 em 1 New Hair?',
                            text: `A combinação de Superox C (Vitamina C), Ácido Hialurônico, Extratos de Uva e Algas Marinhas, Niacinamida, Resveratrol, Pantenol, Plantcol, Revinage e Vitamina E, garantem o skincare eficiente e prático para não sair da sua necessaire.`,
                        },
                        {
                            title: 'Os ingredientes do sérum facial 10 em 1 são naturais?',
                            text: `Sim, o Sérum 10 em 1 New Hair tem como diferencial a qualidade e procedência dos ingredientes, pois, pensamos na sua saúde em longo prazo.`,
                        },
                        {
                            title:'O Sérum 10 em 1 New Hair é vegano?',
                            text:`Sim, além de não realizar testes em animais, investigamos toda a cadeia produtiva dos nossos fornecedores para garantir produtos veganos e sem crueldade.`,
                        }, 
                        {
                            title:'O Sérum 10 em 1 tem alguma contraindicação ou efeito colateral?',
                            text:`O Sérum 10 em 1 New Hair possui ingredientes naturais selecionados que não causam nenhum efeito colateral ao seu organismo. Não há contraindicações no uso dos produtos. No entanto, caso possua alguma alergia ou dúvidas, procure um médico, antes de iniciar o tratamento. Grávidas e lactantes devem consultar o médico.`,
                        },
                        {
                            title:'Em quanto tempo verei os resultados na minha pele?',
                            text:`O Sérum 10 em 1 New Hair possui ativos que proporcionam resultados incríveis, porém, os mesmos podem variar de organismo para organismo, pois, cada pessoa tem um tipo de pele e fatores que podem interferir no tempo e ação dos ativos.`,
                        },
                        {
                            title:'Como devo usar o Sérum 10 em 1 New Hair?',
                            text:`Aplique no rosto limpo uma camada fina (sem excesso) massageando de dentro para fora até o completo desaparecimento do produto. Recomenda-se o uso de filtro solar adequado à sua pele, após a utilização do Sérum.`,
                        },
                    ],
                    col2: [
                        {
                            title:'Quais outros produtos não devo usar junto com o Sérum 10 em 1?',
                            text:`Não recomendamos combinar o Sérum 10 em 1 New Hair no mesmo dia e ao mesmo tempo que outros produtos ou cosméticos que contenham outros tipos de ácido, ou que promovem esfoliação química, além disso, não é indicado fazer esfoliação física ou utilizar esponjas e escovas. Caso esteja fazendo tratamento para a pele com o uso de medicamentos, recomendamos consultar o médico antes de utilizar os produtos.`,
                        },
                        {
                            title:'Posso usar o Sérum 10 em 1 enquanto faço uso de algum medicamento (por exemplo, Roacutan)?',
                            text:`Recomendamos conversar com o médico que receitou o medicamento, pois ele saberá orientar se a combinação de produtos é segura e como planejar sua rotina de cuidados.`,
                        },
                        {
                            title:'Quais são as regiões não indicadas e sensíveis para aplicação do sérum?',
                            text:`Não recomendamos a aplicação próximo aos cantos dos olhos, nariz, boca e pálpebras. Também não recomendamos a aplicação sobre a pele irritada ou lesionada.`,
                        },
                        {
                            title:'O Sérum 10 em 1 é eficaz em outras partes do corpo?',
                            text:`Não existe nenhum problema em usar o Sérum 10 em 1 New Hair em outras regiões do corpo, desde que não sejam aplicados em mucosas ou sobre a pele sensibilizada. Eles podem ajudar no clareamento de áreas hiperpigmentadas e também prevenir a obstrução dos poros. Se observado qualquer sinal de sensibilidade recomendamos suspender o uso. Os efeitos do Sérum 10 em 1 New Hair em áreas diferentes do corpo podem demorar mais a aparecer, pelo fato da pele do corpo ser mais resistente.`,
                        },
                         {
                            title:'New Hair pode ser consumido em qualquer idade?',
                            text:`Orientamos que menores de 18 (dezoito) consumam o produto somente sob orientação de nutricionista ou médico.`,
                        },
                        {
                            title:'Qual é o prazo de entrega?',
                            text:`O Sérum 10 em 1 New Hair é despachado em média, 24h úteis após aprovação do pagamento, mas dependemos da agilidade da empresa Loggi para que as entregas cheguem até o seu endereço. <br> Abaixo os prazos médios: <br> Região Sudeste - de 1 a 8 dias úteis <br> Região Sul - de 1 a 9 dias úteis <br> Região Centro-Oeste - de 1 a 10 dias úteis <br> Região Nordeste - de 2 a 14 dias úteis <br> Região Norte - de 3 a 15 dias úteis`,
                        },
                        {
                            title:'Como rastrear meu pedido do Sérum 10 em 1 New Hair?',
                            text:`Para acompanhar o status do pedido, acesse o link abaixo, insira o seu código de rastreio no campo e clique em "Acompanhar pedido". Após esse procedimento, é possível verificar em tempo real todas as informações da sua encomenda.`,
                        },
                    ],
                }
            }

        },
    created() {

        const perguntas = this.perguntas;
        const data = {};

        Object.keys(perguntas).forEach((col) => {
            data[col] = {
                mainEntity: [],
            }

            perguntas[col].forEach((pergunta) => {
                data[col].mainEntity.push({
                    "@type":"Question",
                    name: pergunta.title,
                    acceptedAnswer: {
                     "@type":"Answer",
                     text: pergunta.text,
                    },
                });
            });

            const script = document.createElemente("script");
            script.type = "application/ld+json";
            script.innerHTML = JSON.stringify(data[col]);
            document.getElementsByTagName("head")[0].appendChild(script);
        });
   
  },
};


</script>
<style lang="scss" scoped>

main {
    background: #f5f5f5;
}

.titleSection h3 {
        text-align: center;
        font: normal 900 32px/38px Open Sans, sans-serif;
        padding-top: 28px;
        margin-top: 0px;
        letter-spacing: 0px;
        color: #333333;
        font-weight: 700!important;
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
    }

    .card .collapse {
        border: 0;
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

    @media (max-width: 768px) {
        .card .card-header .btn-header-link {
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

    h3{
        font-size: 22px!important;
    }

    a{
        font-size: 14px!important;
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
    
    }


 

</style>