<template>
    <div class="container">
        <h2 class="desk"> Sobre o Kit Completo Liso Perfeito:</h2>
        <h2 class="mob">Sobre a linha <br> Liso Perfeito:</h2>
        <div class="row justify-content-center pb-2">
            <div class="col-md-9 pb-2 text">
              <div class="descricao">
                    <p class="">O liso dos sonhos é a sua meta capilar? Experimente a linha Liso Perfeito! A fórmula é composta por ativos umectantes, como óleo de Argan, Arginina e Pantenol, que equilibram o pH, hidrata profundamente e controla o frizz.</p>
                    <br>
                    <p class="">Além de ser uma linha ótima para crescimento capilar acelerado, o shampoo não agride os fios durante a lavagem, mantendo a textura, maciez, brilho, leveza e prolongando o efeito liso por mais tempo. O fluido capilar deixa os fios macios e brilhantes com uso de secadores ou chapinhas, potencializando seu efeito instantâneo sem a necessidade de produtos químicos.
                    </p>
                    <br class="mob">
              </div>  
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="accordion" id="faq">
                    <div class="card" v-for="(item, i) in composicao" :key="i">
                        <div class="card-header" :id="'faqhead' + i">
                            <a href="#" :class="['btn btn-header-link', {collapsed: i != 0}]" data-toggle="collapse" :data-target="'#faq'+i"
                            aria-expanded="true" :aria-controls="'faq' + i">{{ item.title }}</a>
                        </div>

                        <div :id="'faq' + i" :class="['collapse', {show: i == 0}]" :aria-labelledby="'faqhead' + i">
                            <div class="card-body">
                                <p class="title-composicao">Composição</p>
                                {{ item.content }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComposicaoLisoPerfeito",

        data() {
            return {
                composicao: [
                    {
                        title: "Shampoo 300 ML",
                        content: "Aqua, Sodium Laureth Sulfate, Cocamide DEA, Glycerin, Cocamidopropyl Betaine, Hydroxypropyl Methylcellulose, Glycol Distearate, Polyquaternium-7, Argania Spinosa Kernel Oil, Parfum, Panthenol, Arginine, Disodium EDTA, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Condicionador 250 ML",
                        content: "Aqua, Cetearyl Alcohol, Cetrimonium Chloride, Polyquaternium-7, Glycerin, Argania Spinosa Kernel Oil, Elaeis Oleifera Kernel Oil, Macadamia Ternifolia Nut Oil, Dimethicone, Ciclopentasiloxane, Hydrolyzed Keratin, Parfum, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Máscara 250g",
                        content: "Aqua, Behentrimonium Methosulfate (and) Cetearyl Alcohol, Cetyl Alcohol, Cetrimonium Chloride, Mineral Oil, Argania Spinosa Kernel Oil, Poliquaternium – 7, Dimethicone, Cyclopentasiloxane, Hydrolyzed Keratin, Panthenol, Arginine, Parfum, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Spray Pré escova",
                        content: "Amodimethicone, Aqua, Arginine, Citric Acid, Creatine, Polyquaternium-7,  Dipropylene Glycol, Disodium EDTA, Cetrimonium Chloride, Glycerin, Glycine, Hydroxyethyl Cetearamidopropyldimonium Chloride, Isocetyl Alcohol, Methylisothiazolinone, Panthenol, Parfum, Phenoxyethanol, Polysilicone-29, Proline, Propylene Glycol, Serine,Threonine, Linalool."
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        padding: 40px 0 35px;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        padding-bottom: 25px;
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
        color: #fff;
        display: block;
        text-align: left;
        background: #FF73AC;
        color: #fff;
        padding: 17px 20px;
        text-align: left;
        font: normal normal bold 25px/30px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    #faq .card .card-header .btn-header-link:after {
        content: "\f106";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        float: right;
    }

    #faq .card .card-header .btn-header-link.collapsed {
        background: #FF73AC;
        color: #fff;
    }

    #faq .card .card-header .btn-header-link.collapsed:after {
        content: "\f107";
    }

    #faq .card .collapsing {
        background: #F2F2F2;
        line-height: 30px;
    }

    #faq .card .collapse {
        border: 0;
    }

    #faq .card .collapse.show {
        background: #F2F2F2;
        line-height: 30px;
        color: #222;
    }

    .card-body {
        font: normal normal normal 18px/30px Open Sans;
        letter-spacing: 0px;
        color: #707070;
    }

    .title-composicao {
        font: normal normal bold 25px/30px Open Sans;
        letter-spacing: 0px;
        color: #FF73AC;
        border-bottom: 1px solid #707070;
        padding-bottom: 5px;
        margin-bottom: 12px;
    }

    @media(max-width: 768px) {
        
        .container {
            padding: 15px 0;
        }

        h2 {
            font: normal normal bold 25px/35px Open Sans;
        }

         p {
            font: normal normal normal 15px/22px Open Sans !important;
            color: #666666 !important;
        }

        .text{
             padding: 0 17px;
        }

        .accordion, .descricao {
            padding: 0 17px;
        }


        #faq .card .card-header .btn-header-link {
            font: normal normal bold 16px/20px Open Sans;
            padding: 12px 15px;
        }

        .title-composicao {
            font: normal normal bold 14px/17px Open Sans;
        }

        .card-body {
            font: normal normal normal 13px/20px Open Sans;
            letter-spacing: -0.26px;
        }
    }
</style>