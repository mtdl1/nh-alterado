<template>
    <div class="bg-alt">
        <div class="container py-4">
            <div class="row justify-content-center align-items-center">
                <div class="col-6 col-md-3">
                    <div class="row align-items-center">
                        <div class="col-4 col-md-4 text-center pr-0">
                            <div :class="['img-selo parcelamento', {home: cor == 'home', masculino: cor == 'masculino'}]" alt="Imagem de parcelamento em até 8x sem juros" title="Parcelamento em até 8x sem juros"></div>
                        </div>
                        <div class="col-8 col-md-8 pl-0">
                            <p>PARCELAMENTO EM <br> <strong>ATÉ 8X SEM JUROS</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row align-items-center">
                        <div class="col-4 col-md-4 text-center pr-0">
                            <!-- <img src="@/assets/img/credibilidade/ICONE-PIX.png" alt="" class="img-fluid"> -->
                            <div :class="['img-selo pagamento', {home: cor == 'home', masculino: cor == 'masculino'}]" alt="Imagem de pagamento no PIX com +10% de desconto" title="Pagamento no PIX com +10% de desconto"></div>
                        </div>
                        <div class="col-8 col-md-8 pl-0">
                            <p>PAGAMENTO NO PIX <br> <strong>+ 10% DE DESCONTO</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row align-items-center">
                        <div class="col-4 col-md-4 text-center pr-0">
                            <!-- <img src="@/assets/img/credibilidade/ICONE-ENVIO.png" alt="" class="img-fluid"> -->
                            <div :class="['img-selo envio', {home: cor == 'home', masculino: cor == 'masculino'}]" alt="Imagem de envio em até 24h para São Paulo" title="Envio em até 24h para São Paulo"></div>
                        </div>
                        <div class="col-8 col-md-8 pl-0">
                            <p><strong>ENVIO EM ATÉ 24H</strong> <br> PARA SÃO PAULO</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="row align-items-center">
                        <div class="col-4 col-md-4 text-center pr-0">
                            <!-- <img src="@/assets/img/credibilidade/ICONE-FRETE.png" alt="" class="img-fluid"> -->
                            <div :class="['img-selo frete', {home: cor == 'home', masculino: cor == 'masculino'}]" alt="Imagem de frete grátis para todo Brasil" title="Frete grátis para todo Brasil"></div>
                        </div>
                        <div class="col-8 col-md-8 pl-0">
                            <p><strong>FRETE GRÁTIS</strong> <br> PARA TODO BRASIL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "credibilidade",
        props: ['cor']
    }
</script>

<style scoped>
.bg-alt{
    background-color: #f5f5f5;
}
    p {
        font: normal normal normal 14px/18px Open Sans;
        letter-spacing: -0.56px;
        color: #000000;
        text-transform: lowercase;
    }

    p strong {
        font: normal normal bold 14px/18px Open Sans;
        letter-spacing: -0.56px;
        color: #000000;
        text-transform: lowercase;
    }

    .img-selo {
        width: 58px;
        height: 58px;
    }

    .home {
        background-color: #ff4289;
    }

    .masculino {
        background-color: #234380;
    }

    .parcelamento {
        mask: url("../../assets/img/credibilidade/ICONE-8x.svg") no-repeat center / contain;
        -webkit-mask: url("../../assets/img/credibilidade/ICONE-8x.svg") no-repeat center / contain;
    }

    .pagamento {
        mask: url("../../assets/img/credibilidade/ICONE-PIX.svg") no-repeat center / contain;
        -webkit-mask: url("../../assets/img/credibilidade/ICONE-PIX.svg") no-repeat center / contain;
    }

    .envio {
        mask: url("../../assets/img/credibilidade/ICONE-ENVIO.svg") no-repeat center / contain;
        -webkit-mask: url("../../assets/img/credibilidade/ICONE-ENVIO.svg") no-repeat center / contain;
    }

    .frete {
        mask: url("../../assets/img/credibilidade/ICONE-FRETE.svg") no-repeat center / contain;
        -webkit-mask: url("../../assets/img/credibilidade/ICONE-FRETE.svg") no-repeat center / contain;
    }

    @media(max-width: 768px) {
        .container {
            padding: 17px 15px;
        }

        p {
            font: normal normal normal 11px/14px Open Sans;
            letter-spacing: -0.48px;
        }

        p strong {
            font: normal normal 700 11px/14px Open Sans;
            letter-spacing: -0.48px;
        }

        .col-6:not(:nth-last-child(-n+2)) {
            margin-bottom: 14px;
        }

        .col-4 {
            padding-right: 8px !important; 
        }

        .img-selo {
            width: 40px;
            height: 40px;
        }
    }
</style>