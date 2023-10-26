<template>
    <div class="bg-alt">
        <div class="container">
            <div class="py-4">
                <h2 >Por que usar vitamina <br class="mob"> capilar New Hair Gummy?</h2>
                <p v-if="$route.path == '/new-hair-gummies-vitamina-em-goma-para-cabelos-e-unhas-feminino-tratamento-90-dias-brinde.html'" class="pb-4 text-center beneficio">Conheça melhor os 5 benefícios da gominha<br>capilar New Hair Vitamin para os seus<br>cabelos, unhas e pele
                </p>
                <p v-else class="pb-4 text-center beneficio">Por que usar a vitamina capilar em <br class="mob"> gomas New Hair
                </p>
            </div>
            <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="accordion" id="faq">
                            <div class="card" v-for="(item, i) in composicao" :key="i">
                                <div class="card-header" :id="'faqhead' + i">
                                    <a href="#" :class="['btn btn-header-link', {collapsed: i != 0}]" data-toggle="collapse" :data-target="'#faq'+i"
                                    aria-expanded="true" :aria-controls="'faq' + i">{{ item.title }}</a>
                                </div>
                                <div :id="'faq' + i" :class="['collapse', {show: i == 0}]" :aria-labelledby="'faqhead' + i">
                                    <div  class="card-body">
                                        {{ item.content }}
                                    </div>
                                </div>
                            </div>
                        </div>
                            <BotaoSingle  class="py-4"  v-if="isHtmlUrl"/>
                            <botaoCompreAgora  class="py-4" v-else/>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import botaoCompreAgora from '../botoes/botao-compre-agora.vue'
import BotaoSingle from '../botoes/botao-single.vue'

    export default {
  components: { 
    botaoCompreAgora,
    BotaoSingle 
    },
        name: "MotivosNewHair",

        data() {
            return {
                composicao: [
                    {
                        title: "Ácido Hialurônico",
                        content: "O ácido hialurônico é uma substância produzida naturalmente pelo organismo, com alto poder de absorver água para garantir a maciez da pele e para os cabelos. Por ocupar os espaços entre as células da pele, auxilia na manutenção da hidratação, elasticidade e firmeza, prevenindo o aparecimento de rugas e linhas de expressão. No entanto, o processo de envelhecimento reduz a produção natural desse composto. O ácido hialurônico também proporciona diversos benefícios para os cabelos. Ele consegue reter água, ajudando a hidratar os fios, deixando-os mais macios, brilhantes e saudáveis. Além disso, o ácido hialurônico pode ajudar a fortalecer os fios, reduzir a quebra e melhorar a elasticidade."
                    },
                    {
                        title: "Unhas saudáveis ",
                        content: "As unhas são uma parte importante do nosso corpo, não só pela função de proteger as pontas dos dedos, mas também por sua estética. Afinal, quem não gosta de pintar as unhas com um belo esmalte? Manter as unhas saudáveis e bonitas é uma preocupação para muitas pessoas, e existem diversas formas de cuidá-las para garantir a saúde e a beleza — e uma delas é com a vitamina em goma! "
                    },
                    {
                        title: "Fórmula sem açúcar",
                        content: "O consumo excessivo de açúcar causa diversos danos à saúde e aumento no risco de desenvolver doenças. Por isso, quanto menos açúcar na alimentação, maiores são as chances de afastar essas patologias. Pensando na importância de cuidar da saúde de quem consome a vitamina capilar em goma, a New Hair Gummy não utiliza açúcar na composição — mas sem deixar o gostinho maravilhoso de lado. As gominhas são adoçadas com polióis e stevias, podendo ser consumidas por diabéticos, com total segurança, caso haja a liberação do médico. "
                    },
                     {
                        title: "Reduz a queda capilar",
                        content: "É comum perder de 100 a 150 fios por dia. No entanto, ao notar uma quantidade maior ao passar a mão ou a escova nos cabelos, é necessário investigar a causa. Estresse, alterações hormonais e falta de nutrientes estão entre as principais fatores que desencadeiam esse problema que preocupa homens e mulheres. Mas, graças à fórmula inovadora da goma para crescimento capilar, você pode ter os cabelos dos sonhos. O blend de vitaminas reduz a queda capilar em até 96% e, também, acelera em até seis vezes o crescimento capilar. "
                    },
                     {
                        title: "Pele Hidratada",
                        content: "As baixas temperaturas, o uso de substâncias abrasivas e a má alimentação estão entre os fatores que deixam a pele com aquele aspecto ressecado, com pouco brilho natural e com aparência áspera. Quem sofre com esse problema também pode consumir a vitamina capilar em goma New Hair Gummy, afinal, os compostos ajudam a manter a hidratação da pele. O cuidado adequado ajuda a manter a pele suave, flexível e com aparência jovem. A pele hidratada também é menos propensa a rugas e linhas finas, evitando o excesso de oleosidade. "
                    },
                ],

                url: window.location.href
            } 
        },
         computed: {
        isHtmlUrl() {
        return this.url.endsWith('.html');
        },
    }
}
</script>

<style scoped>
.bg-alt{
    background-color: #FAFAFA;
}

    h2 {
        text-align: center;
        font: normal normal 700 32px/43px Open Sans !important;
        color: #333333;
        margin-bottom: 10px;
    }

    p {
        font: normal normal normal 18px/24px Open Sans;
        letter-spacing: 0px;
        color: #333333;
    }

    #faq .card {
        margin-bottom: 10px;
        border: 0;
    }

    #faq .card .card-header {
        border: 0;
        -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
                box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
        border-radius: 2px;
        padding: 0;
    }

    #faq .card .card-header .btn-header-link {
        display: block;
        text-align: left;
        background: #FFF;
        color: #333333;
        padding: 17px 20px;
        text-align: left;
        font: normal normal bold 25px/30px Open Sans;
        letter-spacing: 0px;
    }

    #faq .card .card-header .btn-header-link:after {
        content: "\f106";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        float: right;
    }

    #faq .card .card-header .btn-header-link.collapsed {
        background: #FFF;
        color: #333333;
    }

    #faq .card .card-header .btn-header-link.collapsed:after {
        content: "\f107";
    }

    #faq .card .collapsing {
        background: #Fafafa;
        line-height: 30px;
    }

    #faq .card .collapse {
        border: 0;
    }

    #faq .card .collapse.show {
        background: #Fafafa;
        line-height: 30px;
        color: #222;
    }

    .card-body {
        font: normal normal normal 18px/30px Open Sans;
        letter-spacing: 0px;
        color: #707070;
        background-color: #FFF;
    }


    @media(max-width: 768px) {
        .container {
            padding: 15px 0;
        }

        h2 {
            font: normal normal 700 25px/27px Open Sans !important;
        }

        p {
            font: normal normal normal 15px/22px Open Sans !important;
            color: #666666 !important;
        }

        .accordion, .descricao {
            padding: 0 17px;
        }

        #faq .card .card-header .btn-header-link {
            font: normal normal bold 16px/20px Open Sans;
            padding: 12px 15px;
        }

      

        .card-body {
            font: normal normal normal 13px/20px Open Sans;
            letter-spacing: -0.26px;
        }
    }
</style>