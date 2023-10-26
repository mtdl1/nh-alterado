<template>
    <section class="compraSegura pt-5">
        <div class="container pb-3">
            <div class="head_text" style="text-align:center;">
                <h2>Aqui a sua compra é<br class="mob"> 100% segura</h2>
                <p class="subtitulo my-1">Não se preocupe, comprar em nosso site é seguro <br class="mob"> e totalmente confiável</p>
            </div>
            <div class="row justify-content-between seguranca-de-compra" >
                <div class="col-md-5 ml-0" style="background-color:#eff6e9; border:1px solid #afd493; padding: 12px 0;">
                    <div class="row" style="align-items: center; justify-content:center;">
                        <div class="col-2">
                            <img src="@/assets/img/icones-seguros/icon-dados-pessoais.png" alt="" loading="lazy">
                        </div>
                        <div class="col-8">
                            <h6>Dados Pessoais</h6>
                            <p>São totalmente sigilosos e não são <br> compartilhados.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mr-0" style="background-color:#eff6e9; border:1px solid #afd493; padding: 12px 0;">
                    <div class="row" style="align-items: center; justify-content:center;">
                        <div class="col-2">
                            <img src="@/assets/img/icones-seguros/icon-site-confiavel.png" alt="" loading="lazy">
                        </div>
                        <div class="col-8">
                            <h6>Site Confiável</h6>
                            <p>Monitorado todo o tempo por empresas de segurança digital.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between seguranca-de-compra" >
                <div class="col-md-5 ml-0" style="background-color:#eff6e9; border:1px solid #afd493; padding: 12px 0;">
                    <div class="row" style="align-items: center; justify-content:center;">
                        <div class="col-2">
                            <img src="@/assets/img/icones-seguros/icon-dados-financeiros.png" alt="" loading="lazy">
                        </div>
                        <div class="col-8">
                            <h6>Dados Financeiros</h6>
                            <p>Gravados em ambiente 100% seguro.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mr-0" style="background-color:#eff6e9; border:1px solid #afd493; padding: 12px 0;">
                    <div class="row" style="align-items: center; justify-content:center;">
                        <div class="col-2">
                            <img src="@/assets/img/icones-seguros/icon-entrega-garantida.png" alt="" loading="lazy">
                        </div>
                        <div class="col-8">
                            <h6>Entrega Garantida</h6>
                            <p>Logistica eficaz com entregas feitas no prazo combinado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .col-md-5 {
        max-width: 47.5%!important;
        flex: 47.5%;
    }
    .seguranca-de-compra{
        padding-left: 15px;
        padding-right: 15px;
    }
    .head_text h2 {
        text-align: center;
        font: normal normal bold 32px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
        opacity: 1;
        font-weight: 700!important;
        text-transform: lowercase;
    }

    .subtitulo {
        text-align: center;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        text-transform: lowercase;
    }

    .compraSegura {
        // padding-top: 40px;

        h6 {
            font-weight: bold;
        }
    }

    .compraSegura h6 {
        margin: 10px 0px 5px 0px;
        color: var(--cor-subtitulos);
        font-size: 20px;
        font-weight: 900;
        text-transform: lowercase;
    }

    .compraSegura p {
        color: #777777;
        font-size: 14px;
        text-transform: lowercase;
    }

    .compraSegura .col-8 {
        margin-left: 30px;
    }

    .compraSegura .col-md-5 {
        margin: 25px 25px;
    }

    @media screen and (max-width: 800px) {
        .compraSegura .col-md-5 {
            margin: 12px 25px;
        }

        .compraSegura .col-8 p {
            font-size: 12px !important;
        }

        .compraSegura .col-8 {
            margin-left: 40px;
        }
    }

    @media screen and (max-width: 768px) {
        .col-md-5.ml-0{
            margin-left: 15px!important;
            margin-right: 15px!important;
        }
        .col-md-5.mr-0{
            margin-left: 15px!important;
            margin-right: 15px!important;
        }
        .compraSegura {
            img {
                max-width: 89px !important;
            }

            .col-md-5 {
                .row {
                    max-width: 100%;
                    margin: 0 auto;
                    overflow: hidden;
                }
            }
        }

        .head_text h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .head_text p {
            font: normal normal normal 14px/14px Open Sans;
        }

        .desk {
            display: none;
        }
        .col-md-5 {
            max-width: 100%!important;
            flex: 100%;
        }

        .pt-5 {
            padding-top: 20px!important;
        }
    }
</style>