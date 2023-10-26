<template>
    <div>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <h2>O Blend de vitaminas e minerais para fios e barba mais vendido do Brasil</h2>
                        </div>
                        <div class="desk">
                            <div class="row text-center pt-5 pb-5 ">
                                <div class="col-md-3 border-right pl-0 "><strong>APENAS UMA <br> GOMA AO DIA</strong></div>
                                <div class="col-md-3 border-right"><strong>DIMINUI A <br> QUEDA CAPILAR</strong></div>
                                <div class="col-md-3 border-right"><strong>CRESCIMENTO ACELERADO</strong></div>
                                <div class="col-md-3 border-0"><strong>PARA CABELOS E BARBA</strong></div>
                            </div>
                        </div>
                        <div class="row txt-infos-goma pr-4 m-0 desk ">
                            <p>Potente, poderoso e eficaz. Os três melhores adjetivos para definir o suplemento vitamínico mais consumido e amado do país. Com 12 vitaminas e 5 minerais essenciais, as cápsulas de New Hair vão transformar a saúde dos seus cabelos, barba e unhas para sempre! Conte com o poder das vitaminas A, B1, B2, B3, B5, B6 B7, B9, B12, C, com o reforço do Cromo, Picolinato, Selênio e Zinco.</p>
                        </div>
                    </div>
                    <div class="col-md-4 desk text-center">
                        <img class="img-fluid" src="@/assets/img/newhair-masculino/informacional-gummy/New-Hair-Gummy-Pote-Masculino-Desktop.png" alt="">
                        <img class="img selo position-absolute" src="@/assets/img/newhair-masculino/informacional-gummy/NEWHAIR-LIBERADO-PELA-ANVISA.png" alt="">
                    </div>
                </div>
                <div class="mob">
                    <div class="row text-center pt-4">
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
                    <div class="row mt-4">
                        <div class="col-6">
                            <img class="img-fluid position-relative img-caps-mob" src="@/assets/img/blend-vitaminas/pote-blend-de-vitaminas-masculino.png" alt="">
                        </div>
                        <div class="col-6">
                            <div class="numero-um"> NUMERO 1 NO ASSUNTO SAÚDE CAPILAR </div>
                            <div class="itens-caps">
                                <div class="item">FIOS CRESCENDO <br> ATÉ 6X MAIS RÁPIDO</div>
                                <div class="item">UNHAS <br> FORTALECIDAS</div>
                                <div class="item">REDUÇÃO DA <br> QUEDA</div>
                                <div class="item">FORTALECE A <br> IMUNIDADE</div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
        <GummyMascQualidades class="qualidades-total" />
    </div>
</template>

<script>
import GummyMascQualidades from './gummy-masc-qualidades.vue'
    export default {
    components: { GummyMascQualidades },
        name: 'GummyInformacionalMasc'
    }
</script>

<style scoped>
    .container-fluid {
        background: #FFF 0% 0% no-repeat padding-box;
    }
    h2 {
        font: normal normal bold 32px/36px Open Sans;
        letter-spacing: -1.28px;
        color: #333333;
    }

    h2 span {
        color: #234380;
    }

    strong {
        font: normal normal 800 17px/18px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        text-transform: uppercase;
    }

    .txt-infos-goma {
        color: #333333;
    }

    .txt-infos-goma p{
        margin-left: -10px!important;
        font: normal normal normal 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #333333;
    }

    .border-right {
        border-right: 2px solid #333!important;
    }

    .qualidades-total {
        margin-top: -232px;
    }

    .img.selo {
        left: -20px;
        top: 50px;
    }

    @media(max-width: 768px) {
        .container-fluid.py-5 {
            padding-top: 30px !important;
            padding-bottom: 20px !important;
        }
        h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
        }
        .img-caps-mob {
            width: 145px !important;
            z-index: 2;
        }

        .numero-um {
            height: 53px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #333333 0% 0% no-repeat padding-box;
            border: 2px solid #333333;
            border-radius: 4px;
            font: normal normal 800 15px/15px Open Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            margin-left: -75px;
            margin-top: 10px;
            padding-left: 60px;
            position: relative;
            z-index: 1;
        }

        .itens-caps {
            margin-left: -30px;
            margin-top: 20px;
        }

        .itens-caps .item {
            width: 70%;
            font: normal normal 800 11px/11px Open Sans;
            letter-spacing: 0px;
            color: #333333;
            text-transform: uppercase;
            border-bottom: 1px solid #333333;
            padding-bottom: 10px;
            margin-bottom: 10px;
            margin-left: 20px;
            padding-right: 0;
        }

        .itens-caps .item:last-child {
            border-bottom: none;
        }
    }

     @media(max-width: 380px) {
        .img-caps-mob {
            width: 130px !important;
        }
    }
</style>