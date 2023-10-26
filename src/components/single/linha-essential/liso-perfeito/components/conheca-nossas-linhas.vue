<template>
    <div class="container">
        <h2>Conheça nossa linhas</h2>
        <div :class="['row flex-wrap hide-height', {'show-height': !hideHeight}]">
            <div class="col-md-4" v-if="showLiso">
                <KitCompletoLisoPerfeito />
            </div>
            <div class="col-md-4" v-if="showCachos">
                <KitCompletoCachosOndas />
            </div>
            <div class="col-md-4" v-if="showDetox">
                <KitCompletoDetox />
            </div>
            <div class="col-md-4" v-if="showForca">
                <KitCompletoForcaBrilho />
            </div>
            <div class="col-md-4" v-if="showSos">
                <KitCompletoSosReparacao />
            </div>
            <div class="col-md-4" v-if="showPos">
                <KitCompletoPosQuimica />
            </div>
        </div>
        <div class="btn-hide" @click="hideHeight = !hideHeight"> {{ hideHeight ? 'Ver Mais' : 'Ver Menos' }} </div>
    </div>
</template>

<script>
    import KitCompletoCachosOndas from '../../../../landing-page/linha-essential/linhas/cachos-e-ondas/produtos/kit-completo-cachos-ondas.vue'
    import KitCompletoDetox from '../../../../landing-page/linha-essential/linhas/detox/produtos/kit-completo-detox.vue'
    import KitCompletoForcaBrilho from '../../../../landing-page/linha-essential/linhas/forca-e-brilho/produtos/kit-completo-forca-brilho.vue'
    import KitCompletoLisoPerfeito from '../../../../landing-page/linha-essential/linhas/liso-perfeito/produtos/kit-completo-liso-perfeito.vue'
    import KitCompletoPosQuimica from '../../../../landing-page/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.vue'
    import KitCompletoSosReparacao from '../../../../landing-page/linha-essential/linhas/sos-reparacao/produtos/kit-completo-sos-reparacao.vue'

    export default {
        name: "ConhecaNossasLinhas",

        data() {
            return {
                showLiso: true,
                showCachos: true,
                showDetox: true,
                showForca: true,
                showSos: true,
                showPos: true,
                url: window.location.href,
                hideHeight: true,
            }
        },

        components: { 
            KitCompletoCachosOndas,
            KitCompletoDetox,
            KitCompletoForcaBrilho,
            KitCompletoSosReparacao,
            KitCompletoPosQuimica,
            KitCompletoLisoPerfeito 
        },

        mounted() {
            if (this.url.includes('liso-perfeito')) {
                this.showLiso = false
            } else if (this.url.includes('cachos-e-ondas')) {
                this.showCachos = false
            } else if (this.url.includes('detox')) {
                this.showDetox = false
            } else if (this.url.includes('forca-e-brilho')) {
                this.showForca = false
            } else if (this.url.includes('sos-reparacao')) {
                this.showSos = false
            } else if (this.url.includes('pos-quimica')) {
                this.showPos = false
            }
        }
    }
</script>

<style scoped>
    .container {
        padding: 30px 0;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        padding-bottom: 20px;
    }

    .col-md-4 {
        margin-bottom: 10px;
    }

    .btn-hide {
        text-align: center;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #FF4289;
        padding: 10px 0;
        cursor: pointer;
    }

    .btn-hide:hover {
        text-decoration: underline;
    }

    .hide-height {
        height: 610px;
        overflow: hidden;
    }

    .show-height {
        height: auto;
    }

    @media(max-width: 768px) {
        h2 {
            font: normal normal bold 25px/35px Open Sans;
        }

        .row {
            padding: 0 17px;
        }

        .hide-height {
            height: 1180px;
        }

        .show-height {
            height: auto !important;
        }
    }
</style>