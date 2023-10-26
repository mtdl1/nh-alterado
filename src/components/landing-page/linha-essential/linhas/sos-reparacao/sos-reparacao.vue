<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="img-linha position-relative">
                    <img class="img-fluid desk" src="@/assets/img/linha-essential/linhas/sos-reparacao/linha-s.o.s-reparacao.png" alt="">
                    <img class="img-fluid mob mx-auto" src="@/assets/img/linha-essential/linhas/sos-reparacao/mob/linha-s.o.s-reparacao.png" alt="">
                    <div class="position-absolute descricao-linha">
                        <h3>SOS REPARAÇÃO</h3>
                        <p>Fios regenerados, purificados das agressões externas com hidratação, restauração e nutrição intensas.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-9 pl-0">
                <Carousel class="produtos" :items="3" :nav="false" :loop="false" :dots="false" :center="false" :autoplay="false" :margin="10" :stagePadding="0" :responsive="{0:{items: 1, stagePadding: '80', }, 768:{items:3} }" >
                    <template slot="prev"><span class="prev"><img src="@/assets/img/linha-essential/linhas/next.png" alt="" style="transform: rotate(180deg)"></span></template>
                    <KitCompletoSosReparacao />
                    <KitBasicoSosReparacao/>
                    <SosReparacaoMascara />
                    <SosReparacaoCondicionador />
                    <SosReparacaoShampoo />
                    <template slot="next"><span class="next"><img src="@/assets/img/linha-essential/linhas/next.png" alt=""></span></template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from 'vue-owl-carousel'
    import KitBasicoSosReparacao from './produtos/kit-basico-sos-reparacao.vue'
    import KitCompletoSosReparacao from './produtos/kit-completo-sos-reparacao.vue'
    import SosReparacaoCondicionador from './produtos/sos-reparacao-condicionador.vue'
    import SosReparacaoMascara from './produtos/sos-reparacao-mascara.vue'
    import SosReparacaoShampoo from './produtos/sos-reparacao-shampoo.vue'

    export default {
        name: 'SosReparacao',

        data() {
            return {
                screenWidth: window.innerWidth
            }
        },

        components:{
            Carousel,
            KitCompletoSosReparacao,
            KitBasicoSosReparacao,
            SosReparacaoMascara,
            SosReparacaoCondicionador,
            SosReparacaoShampoo
        },

        mounted() {
            if(this.screenWidth > 768) {
                document.getElementsByClassName('owl-stage')[0].style.paddingLeft = '0px'
            }
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