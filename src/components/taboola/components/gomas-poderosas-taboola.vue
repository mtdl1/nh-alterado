<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>A <span>Vitamina Capilar</span> mais <span>poderosa</span> do Brasil</h2>
                <p>Nutrientes essenciais para o crescimento <br class="mob"> saudável dos cabelos <br class="desk"> e unhas com <br class="mob"> apenas <strong>1 cápsula</strong> ao dia!</p>
            </div>
        </div>
        <div class="row text-center pt-4 beneficiosCapsulas">
            <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 157.png" alt="">
            </div>
            <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 165.png" alt="">
            </div>
            <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 173.png" alt="">
            </div>
            <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 183.png" alt="">
            </div>
            <!-- Mobile -->
            <div class="col-3 mob px-0 pt-2">
                <img src="@/assets/img/blend-vitaminas/mob/RÁPIDA ABSORÇÃO.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-3 mob px-0 pt-2">
                <img src="@/assets/img/blend-vitaminas/mob/NÃO ENGORDA.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-3 mob px-0 pt-2">
                <img src="@/assets/img/blend-vitaminas/mob/ZERO SÓDIO.jpg" alt="" class="img-fluid">
            </div>
            <div class="col-3 mob px-0 pt-2">
                <img src="@/assets/img/blend-vitaminas/mob/ZERO GLUTEN.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GomasPoderosasTaboola',
    }
</script>

<style scoped>
    h2 {
        font: normal normal 800 50px/53px Open Sans;
        letter-spacing: -2.5px;
        color: #333333;
        text-align: center;
        padding-top: 54px;
        padding-bottom: 5px;
    }

    h2 span {
        color: #EB3A94;
    }

    p {
        text-align: center;
        font: normal normal normal 26px/28px Open Sans;
        letter-spacing: -1.3px;
        color: #333333;
        padding-bottom: 30px;
    }

    p strong {
        font: normal normal bold 26px/28px Open Sans;
    }

    .vitaminasCapsulas {
        max-width: 800px;
        margin: 0 auto;
    }

    @media(max-width: 768px) {
        .beneficiosCapsulas {
            padding-top: 0 !important;
            background-color: #f5f5f5;
        }
        h2 {
            font: normal normal 800 28px/28px Open Sans;
            padding-top: 35px;
        }

        p {
            font: normal normal normal 16px/18px Open Sans;
        }

        p strong {
            font: normal normal bold 16px/18px Open Sans;
        }
        .col-3.text-center img {
            height: 60px;
        }
        h3 {
            font: normal normal bold 11px/13px Open Sans;
            color: #333333;
            text-align: center;
        }
    }
</style>