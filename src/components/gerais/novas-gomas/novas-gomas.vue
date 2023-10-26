<template>
    <div class="row position-relative">
        <div class="col">
            <div class="tab-content" id="v-pills-tabContent">
                <GomaUvaVerde />
                <MorangoFresh />
                <GomaLaranja />
            </div>
        </div>   
        <div class="col-5  position-absolute menu-gomas" v-if="$route.path !== '/new-hair-gummy-vitamina-em-goma-para-cabelo'">
            <NovasGomasMenu />
        </div>
        <div class="col-5 mt-4 position-absolute menu-gomas" v-else>
            <NovasGomasMenu />
        </div>
    </div>
</template>

<script>
    import GomaLaranja from './laranja/goma-laranja.vue'
    import MorangoFresh from './morango-fresh/goma-morango-fresh.vue'
    import NovasGomasMenu from './novas-gomas-menu.vue'
    import GomaUvaVerde from "./uva-verde/goma-uva-verde.vue"

    export default {
        name: 'NovasGomas',

        components: { 
            NovasGomasMenu,
            GomaUvaVerde,
            MorangoFresh,
            GomaLaranja
        },

    }
</script>

<style scoped>

:root {
    --animate-duration: 10s!important;
    --animate-delay: 10s!important;
    --animate-repeat: 1;
}
    .container-fluid {
        background: #FFF !important;
    }
    .menu-gomas {
        top: 457px;
        left: 16vw !important;
    }

    @media(max-width: 1400px) {
    .menu-gomas{
        left: 64.5vw!important;
    }
    }
    @media(max-width: 768px) {
        .menu-gomas {
            width: 100% !important;
            max-width: 100% !important;
            top: 575px;
            left: 0 !important;
            margin: 0 auto !important;
            bottom: unset;
        }
    }
    @media(max-width: 391px) {
        .menu-gomas {
            top: 600px;
        }
    }
    @media(max-width: 360px) {
        .menu-gomas {
            top: 580px;
        }
    }
</style>