<template>
    <div class="container">
        <h2 class="desk">Kit Completo Força e Brilho contém:</h2>
        <h2 class="mob">A linha <br>Força e Brilho contém:</h2>
          <div class="row justify-content-center pb-2">
            <div class="col-md-9 pb-2 text">
              <div class="descricao">
                    <p class="">Para deixar os fios brilhantes e com um movimento incrível, a linha une Óleo de Coco, Biotina e Aloe Vera (Babosa) ao pH balanceado para promover a limpeza sem ressecar e mantendo o equilíbrio no couro cabeludo.</p>
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
        name: "ComposicaoSosReparacao",

        data() {
            return {
                composicao: [
                    {
                        title: "Shampoo 300 ML",
                        content: "Aqua, Sodium Laureth Sulfate, Cocamide DEA, Glycerin, Cocamidopropyl Betaine, Hydroxypropyl Methylcellulose, Glycol Distearate, Polyquaternium-7, Aloe Barbadenis Leaf Extract, Dimethicone, Parfum, Biotin, Disodium EDTA, Cocos Nucifera Oil, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Condicionador 250 ML",
                        content: "Aqua, Cetearyl Alcohol, Cetrimonium Chloride, Polyquaternium-7, Glycerin, Aloe Barbadenis Leaf Extract, Cocos Nucifera Oil, Dimethicone, Ciclopentasiloxane, Biotin, Parfum, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Máscara 250g",
                        content: "Aqua, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetyl Alcohol, Cetrimonium Chloride, Mineral Oil, Aloe Barbadenis Leaf Extract, Glycerin, Cocos Nucifera Oil, Polyquaternium-7, Dimethicone, Cyclopentasiloxane, Biotin, Parfum, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Serúm reparador de pontas 30ml",
                        content: "Cyclomethicone, Dimethicone, Cyclopentasiloxane, Cocos Nucifera Oil, Biotin,"
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
        background: #35BCD1;
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
        background: #35BCD1;
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
        color: #35BCD1;
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