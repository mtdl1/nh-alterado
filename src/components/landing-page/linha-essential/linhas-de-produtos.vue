<template>
    <div>
        <div class="container">
            <div class="title">
                <h2>Nossas linhas</h2>
            </div>
        </div>
        <SosReparacao />
        <LisoPerfeito />
        <PosQuimica />
        <CachosEOndas />
        <ForcaEBrilho />
        <Detox />
    </div>
</template>

<script>
    import CachosEOndas from './linhas/cachos-e-ondas/cachos-e-ondas.vue'
    import Detox from './linhas/detox/detox.vue'
    import ForcaEBrilho from './linhas/forca-e-brilho/forca-e-brilho.vue'
    import LisoPerfeito from './linhas/liso-perfeito/liso-perfeito.vue'
    import PosQuimica from './linhas/pos-quimica/pos-quimica.vue'
    import SosReparacao from './linhas/sos-reparacao/sos-reparacao.vue'

    export default {
        name: 'LinhasDeProdutos',

        components: {
            SosReparacao,
            LisoPerfeito,
            PosQuimica,
            CachosEOndas,
            ForcaEBrilho,
            Detox
        },
    }
</script>

<style scoped>
    .title {
        padding: 21px 0 25px;
    }
    h2 {
        font: normal normal 800 32px/35px Open Sans;
        letter-spacing: -0.32px;
        color: #333333;
        text-align: center;
    }

    @media(max-width: 768px) {
        h2 {
            font: normal normal 800 22px/35px Open Sans;
        }
    }
</style>