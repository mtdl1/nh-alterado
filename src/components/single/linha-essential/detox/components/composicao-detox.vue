<template>
    <div class="container">
        <h2 class="desk">Kit Completo Super Detox contém:</h2>
        <h2 class="mob">A linha <br>Super Detox contém:</h2>
         <div class="row justify-content-center pb-2">
            <div class="col-md-9 pb-2 text">
              <div class="descricao">
                    <p class="">Formulado para devolver a vida aos cabelos, a linha Detox combina os extratos de Gengibre, Café, Melaleuca (Tea Tree) e Menta, que promovem a limpeza do couro cabeludo de forma saudável, desobstruindo os folículos e removendo a oleosidade.</p>
                    <br>
                    <p class="">Para deixar os fios leves e macios, o condicionador controla a oleosidade com extratos especiais, mantendo a hidratação, maciez e brilho sem pesar.
                    </p>
                    <br>
                    <p class="">O Sérum Reparador de Pontas combina com a linha Super Detox, contendo um Blend de Silicones Especiais para reparar e proteger as pontas e os fios, formando uma barreira protetora que impede a saída da umidade e da hidratação das cutículas, deixando os fios brilhantes e sem aspecto pesado.
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
        name: "ComposicaoSosReparacao",

        data() {
            return {
                composicao: [
                    {
                        title: "Shampoo 300 ML",
                        content: "Aqua, Sodium Lauryl Sulfate, Cocamide DEA, Hydroxypropyl Methylcellulose, Melaleuca alternifolia (TEA TREE) Leaf Oil, Zingiber Officinale Extract, Xylityl Phosphate (and) Xylitol (and) Water, Rosmarinus Officinalis Leaf Extract/ Labiatae, Aloe Barbadenis Leaf Extract, Coffea Arabica Seed Extract, Cocamidopropyl Betaine, Propylene Glycol, Menthol, Phenoxyethanol, Parfum, Disodium EDTA, Citric Acid."
                    },
                    {
                        title: "Condicionador 250 ML",
                        content: "Aqua, Cetearyl Alcohol, Cetrimonium Chloride, Polyquaternium-7, Aloe Barbadenis Leaf Extract, Melaleuca alternifolia (TEA TREE) Leaf Oil, Zingiber Officinale Extract, Coffea Arabica Seed Extract, Mentha Arvensis Leaf Oil, Glycerin, Ciclopentasiloxane, Parfum, Citric Acid, Methylchloroisothiazolinone (and) Methylisothiazolinone."
                    },
                    {
                        title: "Sérum 30 ML",
                        content: "Cyclopentasiloxane, Cyclomethicone, Dimethicone, Parfum, Aloe Barbadenis Leaf Extract, Melaleuca alternifolia (TEA TREE) Leaf Oil, Hexyl Cinnamal."
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
        background: #9FBD3E;
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
        background: #9FBD3E;
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
        color: #9FBD3E;
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