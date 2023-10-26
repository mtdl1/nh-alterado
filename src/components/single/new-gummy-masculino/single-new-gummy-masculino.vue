<template>
    <div>
        <CabecalhoHomem />
        <CabecalhoHomemMob />
        <ProdutoGummyKits />
        <TabelaNutricionalGomaMasc />
        <GummyTodosDias />
        <VitrineProdutosMasc />
        <!-- <ComentariosGummy /> -->
        <OpinioesProdutoTrustvox :dataProd="prodInfo" />
        <DuvidasNewHairMasculino/>
        <CompraSegura />
        <BotaoFlutuanteSingle />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import CabecalhoHomem from '../../gerais/cabecalho-homem.vue';
    import CabecalhoHomemMob from '../../gerais/cabecalho-homem-mob.vue';
    import GummyTodosDias from '../new-gummy-masculino/components/gummy-todos-dias.vue';
    import TabelaNutricionalGomaMasc from './components/tabela-nutricional-goma-masc.vue';
    import ProdutoGummyKits from '../new-gummy-masculino/components/produto-gummy-kits.vue';
    // import ComentariosGummy from '../new-gummy-masculino/components/comentarios-gummy.vue';
    import CompraSegura from '../../gerais/compraSegura.vue';
    import BotaoFlutuanteSingle from '../new-gummy-masculino/components/botao-flutuante-single.vue';
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import VitrineProdutosMasc from '../../produtos-exibicao/lp/vitrine-produtos-masc.vue';
    import DuvidasNewHairMasculino from '../../gerais/duvidas/duvidasNewHairMasculino.vue';

    export default {
        components: {
            CabecalhoHomem,
            CabecalhoHomemMob,
            ProdutoGummyKits,
            TabelaNutricionalGomaMasc,
            GummyTodosDias,
            // ComentariosGummy,
            CompraSegura,
            BotaoFlutuanteSingle,
            OpinioesProdutoTrustvox,
            VitrineProdutosMasc,
            DuvidasNewHairMasculino
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