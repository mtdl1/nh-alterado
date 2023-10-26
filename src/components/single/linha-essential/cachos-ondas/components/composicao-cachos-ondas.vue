<template>
    <div class="container">
        <h2 class="desk">Kit Completo Cachos e Ondas contém:</h2>
        <h2 class="mob">A linha <br>Cachos e Ondas contém:</h2>
         <div class="row justify-content-center pb-2">
            <div class="col-md-9 pb-2 text">
              <div class="descricao">
                    <p class="">Cachos poderosos, fabulosos e deslumbrantes! A linha foi desenvolvida para limpar o couro cabeludo, mas sem agredir os cabelos cacheados, ondulados ou crespos. A fórmula contém extrato de Aloe Vera, promovendo o fortalecimento e hidratação para deixar os cachos livres, leves e soltos.</p>
                    <br>
                    <p class="">Devido à ação do extrato de Aloe Vera, Colágeno e Óleo de Macadâmia, o condicionador devolve os nutrientes perdidos pelas fibras capilares e selando as cutículas, impedindo agressões externas, perda de umidade e surgimento de frizz.
                    </p>
                    <br>
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
                        content: "Aqua, Sodium Laureth Sulfate, Cocamide DEA, Glycerin, Cocamidopropyl Betaine, Hydroxypropyl Methylcellulose, Glycol Distearate, Polyquaternium-7, Aloe Barbadenis Leaf Extract, Dimethicone, Parfum, Disodium EDTA, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Condicionador 250 ML",
                        content: "Aqua, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetrimonium Chloride, Polyquaternium-7, Dimethicone, Cyclopentasiloxane, Macadamia Ternifolia Nut Oil, Aloe Barbadenis Leaf Extract, Panthenol, Hydrolyzed Collagen, Hydrolyzed Keratin, Phenoxyethanol (and) Caprylyl Glycol, Parfum, Citric Acid."
                    },
                    {
                        title: "Ativador de cachos 300ml",
                        content: "Aqua, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetrimonium Chloride, Polyquaternium-7, Macadamia Ternifolia Nut Oil, Dimethicone, Cyclopentasiloxane, Aloe Barbadenis Leaf Extract, Panthenol, Hydrolyzed Collagen, Hydrolyzed Keratin, Phenoxyethanol (and) Caprylyl Glycol, VP/DMAPA Acrylates Copolymer, Parfum, Citric Acid."
                    },
                    {
                        title: "Sérum reparador de pontas 30ml",
                        content: "Cyclomethicone, Dimethicone, Cyclopentasiloxane, Argania Spinosa Kernel Oil, Macadamia Ternifolia Nut Oil, Parfum, Hexyl Cinnamal."
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
        background: #74519E;
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
        background: #74519E;
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
        color: #74519E;
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