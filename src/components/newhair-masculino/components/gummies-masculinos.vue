<template>
<div>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row mob justify-content-center ">
                        <h2>Os ursinhos mais vitaminados do Brasil com minerais e Ácido Hialurônico!</h2>
                    </div>
                </div>
            </div>
            <div class="mob">
                <div class="row text-center py-3">
                    <!-- Mobile -->
                    <div class="col-3 mob px-0 pt-2">
                        <img src="@/assets/img/blend-vitaminas/mob/RÁPIDA ABSORÇÃO.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-3 mob px-0 pt-2">
                        <img src="@/assets/img/blend-vitaminas/mob/NÃO ENGORDA.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-3 mob px-0 pt-2">
                        <img src="@/assets/img/blend-vitaminas/mob/BARBA MAIS VOLUMOSA.png" alt="" class="img-fluid">
                    </div>
                    <div class="col-3 mob px-0 pt-2">
                        <img src="@/assets/img/blend-vitaminas/mob/ZERO GLUTEN.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row mt-4 align-items-center">
                    <div class="col-3 pr-0 text-center">
                        <img src="@/assets/img/newhair-masculino/ICONES ZERO.png" alt="" class="img-fluid">
                    </div>
                    <div class="col-6 position-relative">
                        <img class="img-fluid position-absolute img-selo-mob"
                            src="@/assets/img/newhair-masculino/icones/NEW-HAIR-LIBERADO-PELA-ANVISA.png" alt="">
                        <img class="img-pote-deslocado-mob"
                            src="@/assets/img/newhair-masculino/produtos/New-Hair-Gummy-Sabor-Uva-Verde-Masculino-Mobile.png" alt="">
                    </div>
                    <div class="col-3 px-0">
                        <div class="itens-goma">
                            <div class="item"><strong>APENAS UMA GOMINHA AO DIA</strong></div>
                            <div class="item"><strong>DIMINUI A QUEDA CAPILAR</strong></div>
                            <div class="item"><strong>CRESCIMENTO ACELERADO</strong></div>
                            <div class="item"><strong>PARA CABELOS E UNHAS</strong></div>
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
        name: 'GummiesMasculinos'
    }
</script>

<style scoped>
    .container-fluid {
        background: #F5F5F5 0% 0% no-repeat padding-box;
    }
    h2 {
        text-align: left;
        font: normal normal 800 45px/53px Open Sans;
        letter-spacing: -2.5px;
        color: #333333;
    }

    h2 span {
        color: #234380;
    }
    .img.selo {
        left: -50px;
        top: 30px;
    }

    strong {
        font: normal normal 800 16px/15px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        text-transform: uppercase;
    }

    .txt-infos-goma {
        text-align: left;
        font: normal normal 300 20px/29px Open Sans;
        letter-spacing: 0px;
        color: #333333;
    }

    .txt-infos-goma p{
        margin-left: -10px!important;
    }

    .border-right {
        border-right: 2px solid #333!important;
    }

    .goma-masculina{
        padding-right: 35px;
    }

    @media(max-width: 768px) {
        .py-5 {
            padding-top: 30px !important;
            padding-bottom: 40px !important;
        }

        h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
        }

        .img-selo-mob {
            right: -10px;
            top: -20px;
        }

        .itens-goma{
            margin-left: -45px;
            margin-top: 30px;
        }

        .itens-goma .item {
            font: normal normal 800 11px/11px Open Sans;
            letter-spacing: 0px;
            color: #333333;
            text-transform: uppercase;
            border-bottom: 1px solid #333;
            padding-bottom: 8px;
            padding-left: 10px;
            margin-bottom: 10px;
        }

        .itens-goma .item strong {
         font: normal normal 800 11px/11px Open Sans;
         display: block;
        }

        .itens-goma .item:last-child {
            border-bottom: none;
        }

        .mob p {
            font: normal normal normal 16px Open Sans;
            letter-spacing: -0.56px;
            color: #FFFFFF;
        }

        .mob h3 {
            font: normal normal 800 23px/20px Open Sans;
            letter-spacing: -0.81px;
            color: #FFFFFF;
        }

        .container-uva-light {
            background: transparent linear-gradient(119deg, #9DE348 0%, #62C900 100%) 0% 0% no-repeat padding-box !important;
        }

        .text {
            width: 112px;
            height: 40px;
            font: normal normal 600 14px/14px Open Sans;
            letter-spacing: -0.49px;
            color: #62C900;
        }

        .col-3.px-0.mt-5.text-center.mob {
            padding-bottom: 15px !important;
        }
        .col-3.pr-0.text-center{
            padding-left: 0;
        }

        .col-6.position-relative {
            padding-left: 0;
            padding-right: 30px;
        }

        .itens-goma .item {
            padding-left: 0!important;
        }

        .itens-goma {
            margin-top: 50px!important;
        }

        .mob.textos-forma {
            background-color: #234380;
        }

        .mob.textos-forma p {
            font: normal normal normal 16px/20px Open Sans;
            letter-spacing: -0.56px;
            color: #FFFFFF;
        }

        .mob.textos-forma h2 {
            font: normal normal 800 23px/20px Open Sans;
            letter-spacing: -0.81px;
            color: #FFFFFF;
            margin-top: 30px;
        }

        .itens-goma strong {
            margin-left: 20px;
            display: block;
        }

        itens-goma .item {
            z-index: 3;
        }

        img.img-fluid.img-pote-deslocado-mob {
            z-index: 9999999999;
        }

        .col-6.position-relative {
            z-index: 99;
        }

    }
</style>