<template>
    <div>
        <BannerHomeTaboola />
        <GomasPoderosasTaboola />
        <NutrientesTaboola />
        <h1 class="mt-5">Vitaminas para cabelo e unha em kits incríveis</h1>
        <Titulos :subtitulo="'Cabelos sem queda, brilhantes, fortes e com muito mais crescimento'" class="mt-1 mb-1" />
        <VitrineProdutos />
        <CompraSegura />
        <duvidas-home/>
    </div>
</template>

<script>
    import { mapMutations } from "vuex"
    import CompraSegura from '../gerais/compraSegura.vue'
    import DuvidasHome from '../gerais/duvidas/duvidasHome.vue'
    import BannerHomeTaboola from './components/banner-home-taboola.vue'
    import GomasPoderosasTaboola from './components/gomas-poderosas-taboola.vue'
    import NutrientesTaboola from './components/nutrientes-taboola.vue'
    import VitrineProdutos from '../produtos-exibicao/lp/vitrine-produtos.vue'
    import Titulos from '../produtos-exibicao/titulos.vue'

    export default {
        name: 'HomeTaboola',

        components: { 
            BannerHomeTaboola,
            Titulos,
            VitrineProdutos,
            CompraSegura,
            DuvidasHome,
            GomasPoderosasTaboola,
            NutrientesTaboola,
        },                

        data() {
            return {
                loading: {
                    geral: true,
                    banner: true,
                },
            };
        },

        methods: {
        ...mapMutations(['changeDadosPageAtual']),
        },

        created() {
            this.$requestSend("get", "/v2/front/url/home", {}, (success, response) => {
                if (success) {
                    this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                    this.loading.geral = false;
                    this.$aplicaSEO(response.data.estrutura);
                    //comunicacao.$emit("paginaCarregada", response.data);
                    this.changeDadosPageAtual(response.data);
                }
            });
        },
    }
</script>

<style scoped>
    h1{
        text-align: center;
        font: normal normal bold 32px/36px Open Sans;
        letter-spacing: -1.28px;
        color: #222222;
    }
</style>