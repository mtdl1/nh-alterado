<template>
    <div>
        <MenuMob />
        <MenuNH />
        <ProdutoGummyKits  class="mb-4"/>
        <NovasGomas/>
        <!-- <TabelaNutricionalGomas /> -->
        <GummyTodosDias />
        <ResultadosNewHairGummy/>
        <EsquadraoNewHair class="pb-4"/>
        <OpinioesProdutoTrustvox :dataProd="prodInfo" />
        <DuvidasGummy/>
        <CompraSegura />
        <BotaoFlutuanteSingle />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import MenuMob from '../../../components/gerais/menuMob.vue';
    import MenuNH from '../../../components/gerais/menuNH.vue';
    import GummyTodosDias from './components/gummy-todos-dias.vue';
    // import TabelaNutricionalGomas from './components/tabela-nutricional.vue';
    import ProdutoGummyKits from './components/produto-gummy-kits.vue';
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import CompraSegura from '../../gerais/compraSegura.vue';
    import BotaoFlutuanteSingle from './components/botao-flutuante-single.vue';
    import EsquadraoNewHair from './components/esquadrao-new-hair.vue';
    import NovasGomas from '../../gerais/novas-gomas/novas-gomas.vue';
    import ResultadosNewHairGummy from '../../gerais/resultados/resultados-new-hair-gummy.vue';
    import DuvidasGummy from '../../gerais/duvidas/duvidasGummy.vue';
   

    export default {
        components: {
            MenuNH,
            MenuMob,
            ProdutoGummyKits,
            // TabelaNutricionalGomas,
            GummyTodosDias,
            OpinioesProdutoTrustvox,
            CompraSegura,
            BotaoFlutuanteSingle,
            EsquadraoNewHair,
            NovasGomas,
            ResultadosNewHairGummy,
            DuvidasGummy,
       
        },

        data() {
            return {
                loading: {
                    geral: true
                },
                prodInfo: []
            }
        },

        methods: {
            ...mapMutations(['changeDadosPageAtual']),
            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path;
                }
                path = path.replace('?', '&')
                return path
            },
        },

        created() {
            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    this.prodInfo = response.data.conteudo
                    this.$aplicaSEO(response.data.estrutura)
                    this.loading.geral = false
                    this.changeDadosPageAtual(response.data)
                    this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                    this.$fbViewContent({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                }
            })
        },
    }
</script>