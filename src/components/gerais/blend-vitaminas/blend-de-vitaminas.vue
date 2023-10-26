<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <h2>O Blend de <span>vitaminas</span> e <span>minerais</span> para fios e unhas mais <br class="mob"> vendido do Brasil</h2>
                    </div>
                    <div class="desk">
                        <div class="row text-center pt-5">
                            <div class="col-md-3 border-right"><strong>FIOS CRESCENDO ATÉ 6X MAIS RÁPIDO</strong></div>
                            <div class="col-md-3 border-right"><strong>UNHAS FORTALECIDAS</strong></div>
                            <div class="col-md-3 border-right"><strong>REDUÇÃO <br> DA QUEDA</strong></div>
                            <div class="col-md-3 border-0"><strong>FORTALECE A IMUNIDADE</strong></div>
                        </div>
                    </div>
                    <div class="row text-center pt-4">
                        <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 157.png" alt=""></div>
                        <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 165.png" alt=""></div>
                        <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 173.png" alt=""></div>
                        <div class="col-md-3 desk"><img class="img-fluid" src="@/assets/img/blend-vitaminas/Group 183.png" alt=""></div>
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
                    <div class="row mt-5" v-show="$route.name == 'lp-lista-vip-black-friday'">
                        <div class="col-md-6 antes-depos-img">
                            <img src="@/assets/img/lp-lista-vip-black-friday/antes-depois/new-hair-antes-blend-vitaminas.png" alt="">
                            <p>SEM NEW HAIR</p>
                        </div>
                        <div class="col-md-6 antes-depos-img">
                            <img src="@/assets/img/lp-lista-vip-black-friday/antes-depois/new-hair-depois-blend-vitaminas.png" alt="">
                            <p>COM NEW HAIR</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 desk">
                    <img class="img-fluid" src="@/assets/img/blend-vitaminas/pote-blend-de-vitaminas.png" alt="">
                    <p class="txt-destaque-blend" v-show="$route.name == 'lp-lista-vip-black-friday'"><span>N°1</span> <br> No assunto Saúde Capilar</p>
                </div>
            </div>
            <div class="mob">
                <div class="row mt-4">
                    <div class="col-6">
                        <img class="img-fluid position-relative img-caps-mob" src="@/assets/img/blend-vitaminas/pote-blend-de-vitaminas.png" alt="">
                    </div>
                    <div class="col-6">
                        <div class="numero-um"> NUMERO 1 NO ASSUNTO SAÚDE CAPILARrrr </div>
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
</template>

<script>
    export default {
        name: 'BlendDeVitaminas'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    .container-fluid {
        background: #F5F5F5 0% 0% no-repeat padding-box;
    }
    h2 {
        text-align: left;
        font: normal normal 800 50px Open Sans;
        letter-spacing: 0px;
        line-height: 53px;
        color: #333333;
    }

    h2 span {
        color: #FF4289;
    }

    strong {
        font: normal normal 800 15px/15px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        text-transform: uppercase;
    }

    .col-md-3.border-right {
        border-right: 2px solid #333 !important;
    }

    .antes-depos-img{
        position: relative;
    }

    .antes-depos-img img{
        max-width: 100%;
    }

    .antes-depos-img p{
        font: normal normal bold 35px/44px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        background: #FF4289;
        text-align: center;
        border-radius: 0 0 10px 10px;   
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 15px;
        padding: 10px 0;
    }

    .txt-destaque-blend{
        background-color: white;
        width:65%;
        text-align: center;
        margin: 25px 0 0 15px;
        font: normal normal 800 26px/26px Open Sans;
        letter-spacing: 0px;
        color: #FF4289;
        padding: 10px 10px 15px 10px;
        border-radius: 8px;
    }

    .txt-destaque-blend span{
        font: normal normal 800 80px/1 Open Sans;
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
            width: 225px;
            height: 53px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ED3D80 0% 0% no-repeat padding-box;
            border: 2px solid #ED3D80;
            border-radius: 4px;
            font: normal normal 800 15px/15px Open Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            margin-left: -75px;
            margin-top: 10px;
            padding-left: 40px;
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
        }

        .itens-caps .item:last-child {
            border-bottom: none;
        }
        .antes-depos-img{
            margin-bottom: 20px;
            width: 50%;
        }

        .antes-depos-img p{
            font-size: 11px;
            padding: 0;
            bottom: -30px;
        }
    }

    @media(max-width: 380px) {
        .img-caps-mob {
            width: 130px !important;
        }
    }
</style>