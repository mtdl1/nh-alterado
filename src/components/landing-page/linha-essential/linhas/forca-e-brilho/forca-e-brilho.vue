<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="img-linha position-relative">
                    <img class="img-fluid desk" src="@/assets/img/linha-essential/linhas/forca-brilho/forca-e-brilho.png" alt="">
                    <img class="img-fluid mob mx-auto" src="@/assets/img/linha-essential/linhas/forca-brilho/mob/forca-e-brilho.jpg" alt="">
                    <div class="position-absolute descricao-linha">
                        <h3>FORÇA E BRILHO</h3>
                        <p>Cabelos mais fortes, resistentes e brilhantes, com balanço natural, brilho intenso e maciez.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-9 pl-0">
                <Carousel class="produtos" :items="3" :nav="false" :loop="false" :dots="false" :center="false" :autoplay="false" :margin="10" :stagePadding="0" :responsive="{0:{items: 1, stagePadding: '80'}, 768:{items:3} }" >
                    <template slot="prev"><span class="prev"><img src="@/assets/img/linha-essential/linhas/next.png" alt="" style="transform: rotate(180deg)"></span></template>
                    <KitCompletoForcaBrilho />
                    <KitBasicoForcaBrilho />
                    <ForcaBrilhoShampoo />
                    <ForcaBrilhoCondicionador />
                    <ForcaBrilhoMascara />
                    <ForcaBrilhoSerumReparador />
                    <template slot="next"><span class="next"><img src="@/assets/img/linha-essential/linhas/next.png" alt=""></span></template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from 'vue-owl-carousel'
    import KitBasicoForcaBrilho from './produtos/kit-basico-forca-brilho.vue'
    import KitCompletoForcaBrilho from './produtos/kit-completo-forca-brilho.vue'
    import ForcaBrilhoCondicionador from './produtos/forca-brilho-condicionador.vue'
    import ForcaBrilhoShampoo from './produtos/forca-brilho-shampoo.vue'
    import ForcaBrilhoMascara from './produtos/forca-brilho-mascara.vue'
    import ForcaBrilhoSerumReparador from './produtos/forca-brilho-serum-reparador.vue'

    export default {
        name: 'ForcaEBrilho',

        components:{
            Carousel,
            KitCompletoForcaBrilho,
            KitBasicoForcaBrilho,
            ForcaBrilhoCondicionador,
            ForcaBrilhoShampoo,
            ForcaBrilhoMascara,
                ForcaBrilhoSerumReparador
        },

        mounted() {
            document.getElementsByClassName('owl-stage')[4].style.paddingLeft = '0px'
        }
    }
</script>

<style scoped>
    .container {
        margin-bottom: 35px;
    }

    .descricao-linha {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0, 0, 0, 0.1); */
        color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3 {
        text-align: center;
        font: normal normal 800 40px/42px Open Sans;
        padding-bottom: 8px;
        letter-spacing: -0.86px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    p {
        text-align: center;
        font: normal normal normal 16px/20px Open Sans;
        letter-spacing: -0.16px;
        color: #FFFFFF;
    }

    span.next,
    span.prev {
        position: absolute;
        display: flex;
        top: 40%;
        width: 40px;
        height: 40px;
        padding: 18px;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
        z-index: 999;
    }

    .produtos {
        position: relative;
    }

    span.next {
        right: 0;
    }

    span.prev {
        left: 0;
    }

    @media(max-width: 768px) {
        .produtos {
            margin-top: 20px;
        }

        h3 {
            font: normal normal 800 45px/40px Open Sans;
        }

        p {
            font: normal normal normal 14px/16px Open Sans;
            letter-spacing: -0.14px;
            padding-top: 5px;
        }

        .col-md-9.pl-0 {
            padding-left: 15px !important;
            padding-right: 0;
        }

        .container {
            margin-bottom: 15px !important;
        }

        span.next, span.prev {
            padding: 5px;
            top: 18%;
        }

        span.next {
            right: 10px;
        }
    }
</style>