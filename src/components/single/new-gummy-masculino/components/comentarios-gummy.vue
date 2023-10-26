<template>
    <div class="container-fluid fundo">
        <section class="container py-4">
            <div class="titleSection text-center pb-4">
                <h2>Quem prova New Hair, aprova!</h2>
                <p>É impossível ignorar a felicidade e a satisfação <br class="mob"> de quem confia em New Hair, o blend de vitaminas e minerais Nº 1 do Brasil!.</p>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-5 d-flex contentBox">
                    <div class="col-sm-12 authorBox">
                        <div class="row justify-content-evenly">
                            <div class="col-2 text-center mr-3">
                                <img src="@/assets/img/yeda.png" alt="">
                            </div>
                            <div class="col-4">
                                <div class="author">
                                    <p>Yeda Andrade</p>
                                    <span>@yedanascentes</span> <br>
                                    <span>Comprador verificado</span>
                                </div>
                            </div>
                            <div class="col-3">
                                <img src="@/assets/img/star_com.png" alt="">
                            </div>
                            <div class="col-1">
                                <!-- <a href="https://www.instagram.com/yedanascentes/"><img src="@/assets/img/insta_com.png" alt=""></a> -->
                            </div>
                            <p class="comentBox"> É muito bom, estou tomando e meus cabelos pararam de cair! Está <br class="desk"> com muito brilho e super recomendo!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex contentBox">
                    <div class="col-sm-12 authorBox">
                        <div class="row justify-content-evenly">
                            <div class="col-2 text-center mr-3">
                                <img src="@/assets/img/isa.png" alt="">
                            </div>
                            <div class="col-4">
                                <div class="author">
                                    <p>Isabelle Oliveira</p>
                                    <span>@isabelleoliveira05</span> <br>
                                    <span>Comprador verificado</span>
                                </div>
                            </div>
                            <div class="col-3 ml-4">
                                <img src="@/assets/img/star_com.png" alt="">
                            </div>
                            <div class="col-1">
                                <!-- <a href="https://www.instagram.com/isabelleoliveira05"><img src="@/assets/img/insta_com.png" alt=""></a> -->
                            </div>
                            <p class="comentBox"> Gente, sem igual! Estou tomando por indicação de uma amiga, eu já estava praticamente careca, faz 2 meses que comecei a tomar, é incrível como já nasceu cabelos. </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex contentBox">
                    <div class="col-sm-12 authorBox">
                        <div class="row justify-content-evenly">
                            <div class="col-2 text-center mr-3">
                                <img src="@/assets/img/user.png" alt="">
                            </div>
                            <div class="col-4">
                                <div class="author">
                                    <p>Paty Ribeiro</p>
                                    <span>@patricia.candida.986</span> <br>
                                    <span>Comprador verificado</span>
                                </div>
                            </div>
                            <div class="col-3">
                                <img src="@/assets/img/star_com.png" alt="">
                            </div>
                            <div class="col-1">
                                <!-- <a href="https://www.instagram.com/patricia.candida.986/"><img src="@/assets/img/insta_com.png" alt=""></a> -->
                            </div>
                            <p class="comentBox"> O meu chegou certinho, comecei a tomar tem uma mês, já estou vendo o resultado e é bem satisfatório 🙏 </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex contentBox">
                    <div class="col-sm-12 authorBox">
                        <div class="row justify-content-evenly">
                            <div class="col-2 text-center mr-3">
                                <img src="@/assets/img/paty.png" alt="">
                            </div>
                            <div class="col-4">
                                <div class="author">
                                    <p>Letícia</p>
                                    <span>@leticiaosmarin</span> <br>
                                    <span>Comprador verificado</span>
                                </div>
                            </div>
                            <div class="col-3">
                                <img src="@/assets/img/star_com.png" alt="">
                            </div>
                            <div class="col-1">
                                <!-- <a href="https://www.instagram.com/leticiaosmarin"><img src="@/assets/img/insta_com.png" alt=""></a> -->
                            </div>
                            <p class="comentBox"> Eu estou amando, parou de cair e começou a crescer muito, estou entrando no terceiro mês e já quero mais!! </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "ComentariosGummy",
};
</script>

<style lang="scss" scoped>
    .col-md-5 {
        max-width: 48%!important;
        flex: 46%;
    }
    .titleSection p {
        text-align: center;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: 0px;
        color: #fff;
        padding-top: 20px;
        width: 50%;
        margin:0 auto;
        text-transform: lowercase;
    }

    .titleSection h2 {
        font: normal normal 800 32px/22px Open Sans;
        line-height: 23px;
        letter-spacing: -.5px;
        text-align: center;
        padding-bottom: 5px;
        color: #fff;
        text-transform: lowercase;
    }

    .fundo{
        background-color: #234380;
    }

    .comentarios {
        padding: 30px 0px;

        .quemComprou {
            padding-left: 28px;

            h3 {
                color: #404040;
                font-family: 'Poppins', sans-serif;
                font-weight: 900;
                font-size: 30px;
                margin-top: 30px
            }

            p {
                color: #666666;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                font-size: 19px;
                line-height: 21px;
                margin-top: 20px;
            }
        }

        .colComents {
            .col-sm-12 {
                background-color: #f1f1f1;
            }
        }
    }

    .contentBox {
        margin: 20px;
        padding: 15px 0px;
        background: #F2F2F2 0% 0% no-repeat padding-box;
        // box-shadow: 8px 13px 16px #00000029;
        border-radius: 4px;
        // padding: 20px;
    }

    .author {
        font-family: 'Roboto', sans-serif;

        p:first-child {
            color: #404040;
            font-weight: bold;
            font-size: 15px;
        }

        span:nth-of-type(1) {
            color: #666666;
            font-weight: 300;
            font-size: 14px;
        }

        span:nth-of-type(2) {
            font-size: 13px;
            color: #5acc8a;

        }
    }

    .authorBox {
        padding: 0 30px;
        font-family: 'Roboto', sans-serif;

        .col-2 {
            padding-left: 0;
        }

        .col-4 {
            position: relative;
            left: -9%;
        }

        .col-3 {
            position: relative;
            left: -20%;
        }

        .col-1 img {
            max-width: 28px !important;
            height: 28px !important;
        }

        .comentBox {
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            font-weight: 300;
            color: #666666;
            line-height: 16px;
            margin-top: 10px;
            // padding-left: 20px;
        }
    }

    @media screen and (max-width:800px) {
        .authorBox {
            padding: 0 30px;
            .col-4 {
                width: 40%;
                left: -7%;
                padding: 0;

                .author {
                    p {
                        font-size: 12px;
                    }
                }

            }

            .col-3 {
                left: -15%;
            }

            .col-1 {
                position: relative;
                left: -5%;
            }

            .col-2 {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .author {
            span:last-child {
                font-size: 11px;
            }

        }

        .comentarios .quemComprou {
            padding-left: 12px;
        }

        .titleSection {
            padding-bottom: 20px !important;
        }

        .titleSection h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .titleSection p {
            font: normal normal normal 14px/14px Open Sans;
        }

        .titleSection p {
        width: 90%;
    }
    .col-md-5 {
        max-width: 100%!important;
        flex: 100%;
    }
    }
</style>