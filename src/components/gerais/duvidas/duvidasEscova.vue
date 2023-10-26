<template>
     <div class="container">
        <div class="titleSection text-center">
                <h3 class="pt-4">Saiba tudo sobre o New Hair</h3>
                <p class="titulo mt-3">Tire todas as suas dúvidas para começar o seu tratamento o quanto antes. </p>
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

            <!-- comentario para deploy -->

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
</template>

<script>
    export default {
        name: "DuvidasEscova",
      
        data(){
            return {
                perguntas: {
                    col1: [
                        {
                            title: 'O que é a escova alisadora 5 em 1 New Hair?',
                            text: `A nossa escova alisadora New Hair é o que há de mais moderno para você ter cabelos lisos desde a raiz de forma simples e prática com maciez e brilho em poucos minutos, sem danificar os fios!`,
                        },
                        {
                            title: 'Quais são os benefícios da escova alisadora 5 em 1 New Hair?',
                            text: `Modela - placas de cerâmica iônica que não achatam os fios Seca - cabelos secos e finalizados como no salão em minutos Hidrata - graças à tecnologia das placas de cerâmica que sela as cutículas Antifrizz - elimina o frizz desde a raiz na primeira “passada”`,
                        },
                        {
                            title:'A escova alisadora 5 em 1 New Hair é bivolt?',
                            text:`Sim, você pode levar para as suas viagens sem preocupação se ela irá queimar!`,
                        },
                        {
                            title:'Do que são feitos os dentes da a escova alisadora 5 em 1 New Hair?',
                            text:`As placas de cerâmica turmalina ionizada deslizam próximas à raiz, se ajustando perfeitamente em cada parte da mecha, evitando assim marcar os cabelos e impedindo que o couro cabeludo se queime.`,
                        },
                    ],
                    col2: [
                        {
                            title:'A escova alisadora 5 em 1 New Hair pode ser usada em todos os tipos de cabelos?',
                            text:`Sim! E por isso, ela possui cinco ajustes de temperatura: 200°C - adequado para cabelos resistentes (grossos ou crespos) 185°C - adequado para cabelos ondulados e levemente cacheados 170°C - adequado para cabelos escuros ou com tintura 155°C - adequado para cabelos descoloridos, com química ou fragilizados 140°C - adequado para cabelos danificados, finos ou fragilizados`,
                        },
                        {
                            title:'Como devo usar a escova alisadora 5 em 1 New Hair?',
                            text:`Desembarace os cabelos e separe em mechas; Segure cada mecha firmemente pelas pontas; Encaixe a escova na mecha e deslize rapidamente pelos fios SEM parar; Modele as pontas do cabelo como desejar. ATENÇÃO: Recomendamos o uso de protetor térmico nos fios antes de iniciar o procedimento.`,
                        },
                        {
                            title:'Qual é o prazo de envio da escova alisadora New Hair?',
                            text:`Os produtos New Hair são despachados em média de 24h úteis após aprovação do pagamento, mas, para que a entrega ocorra da melhor forma, o processo depende da informação correta dos dados pessoais e endereço no pedido, bem como, prazo de separação, preparo e coleta, não considerando finais de semana e feriados. <br> Segue prazo médio para entrega: <br> Região Sudeste - de 1 a 8 dias úteis <br> Região Sul - de 1 a 9 dias úteis <br> Região Centro-Oeste - de 1 a 10 dias úteis <br> Região Nordeste - de 2 a 14 dias úteis <br> Região Norte - de 3 a 15 dias úteis`,
                        },
                        {
                            title:'Como rastrear meu pedido?',
                            text:`Para acompanhar o status do pedido, acesse o site https://rastreio.newhair.com.br, insira o seu código de rastreio no campo e clique em "Acompanhar pedido". Após esse procedimento, é possível verificar em tempo real todas as informações da sua encomenda.`,
                        },
                    ],
                }
            };

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
    
    }


 

</style>