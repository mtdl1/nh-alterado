<template>
    <div class="container-fluid bg py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>Fórmulas com ativos especiais para a sua liberdade de ter os cabelos como quiser.</h1>
                    <p class="py-4">A nossa experiência como a número um em crescimento capilar, nos fez reunir os melhores ingredientes do mercado em fórmulas inovadoras e poderosas para deixar os seus fios:</p>
                    <div class="d-flex flex-wrap align-items-center itens">
                        <div class="d-flex align-items-center item" v-for="(item, index) in itens" :key="index">
                            <img src="@/assets/img/linha-essential/formula/check.png" alt="" class="mr-2 img-fluid">
                            <p>{{ item }}</p>
                        </div>
                    </div>
                    <p class="py-4">Independentemente do tipo, comprimento ou cor. A nossa missão é fazer você se sentir segura e livre para ter os cabelos como bem entender!</p>
                    <img src="@/assets/img/linha-essential/formula/Detox-kit-essencial.jpg" alt="" class="img-fluid mob mob-img">
                    <div class="row">
                        <div class="col-3 col-md-3 text-center">
                            <img src="@/assets/img/linha-essential/formula/1.png" alt="" class="img-fluid">
                            <p class="item-content">Sem teste <br class="desk"> em animais</p>
                        </div>
                        <div class="col-3 col-md-3 text-center">
                            <img src="@/assets/img/linha-essential/formula/2.png" alt="" class="img-fluid">
                            <p class="item-content">Livre de <br> parabeno</p>
                        </div>
                        <div class="col-3 col-md-3 text-center">
                            <img src="@/assets/img/linha-essential/formula/3.png" alt="" class="img-fluid">
                            <p class="item-content">Não <br> contém sal</p>
                        </div>
                        <div class="col-3 col-md-3 text-center">
                            <img src="@/assets/img/linha-essential/formula/4.png" alt="" class="img-fluid">
                            <p class="item-content">Embalagens <br> recicláveis</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 desk">
                    <img src="@/assets/img/linha-essential/formula/Detox-kit-essencial.jpg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormulaEssential',

        data() {
            return {
                itens: {
                    1: 'Mais macios;',
                    2: 'Sem Frizz;',
                    3: 'Sedosos;',
                    4: 'Brilho radiante;',
                    5: 'Maleáveis;',
                    6: 'Hidratados;',
                    7: 'Acabamento Perfeito;',
                }
            }
        }
    }
</script>

<style scoped>
    .bg {
        background-color: #FF4289;
    }

    h1 {
        text-align: left;
        font: normal normal bold 35px/35px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    p {
        text-align: left;
        font: normal normal normal 20px/28px Open Sans;
        letter-spacing: -0.4px;
        color: #FFFFFF;
    }

    .item {
        width: 50%;
        padding: 7px 0;
    }

    .item p {
        font: normal normal normal 20px/25px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    .item-content {
        text-align: center;
        font: normal normal normal 16px/20px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        padding-top: 10px;
    }

    @media(max-width: 768px) {
        .container-fluid {
            padding-top: 29px !important;
            padding-bottom: 35px !important;
        }

        h3 {
            font: normal normal bold 20px/30px Open Sans;
        }

        p {
            font: normal normal normal 15px/25px Open Sans;
            letter-spacing: -0.3px;
            padding-top: 15px !important;
            padding-bottom: 15px !important;
        }

        .item {
            padding: 4px 0;
        }

        .item p {
            font: normal normal normal 14px/20px Open Sans;
            letter-spacing: 0px;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }

        .item img {
            width: 19px;
        }

        .item-content {
            font: normal normal normal 10px/13px Open Sans;
            letter-spacing: 0px;
            padding-top: 10px !important;
        }

        .col-3.col-md-3 {
            padding-left: 5px !important;
            padding-right: 5px !important;
        }

        .col-3.col-md-3 img {
            width: 61px;
            margin: 0 auto;
        }

        .mob-img {
            margin-bottom: 21px;
        }
    }
</style>
