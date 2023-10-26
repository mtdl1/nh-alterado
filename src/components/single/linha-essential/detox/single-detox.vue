<template>
    <div>
        <MenuNH />
        <MenuMob />

        <ProdutoSingleDetox 
        selecionado="KITCOMPLETO"
        idDaLista="152" 
        v-if="$route.path == '/kit-super-detox-shampoo-condicionador-serum-reparador-new-hair-home-care-essential.html' "
        />

        <ProdutoSingleDetox 
        selecionado="KITBASICO"
        idDaLista="153" 
        v-if="$route.path == '/kit-super-detox-shampoo-condicionador-new-hair-home-care-essential.html' "
        />

        <ProdutoSingleDetox 
        selecionado="KITSERUMREPARADOR"
        idDaLista="156" 
        v-if="$route.path == '/serum-super-detox-cabelos-oleosos-new-hair-home-care-essential.html' "
        />

        <ProdutoSingleDetox 
        selecionado="KITSHAMPOO"
        idDaLista="154" 
        v-if="$route.path == '/shampoo-super-detox-cabelos-oleosos-new-hair-home-care-essential.html' "
        />

        <ProdutoSingleDetox 
        selecionado="KITCONDICIONADOR"
        idDaLista="155" 
        v-if="$route.path == '/condicionador-super-detox-cabelos-oleosos-new-hair-home-care-essential.html' "
        />
<!-- 
        <ProdutoSingleDetox 
        selecionado="KITSERUMREPARADOR"
        idDaLista="156" 
        v-if="$route.path == '/new-hair-home-care-essential-detox.html' "
        /> -->

        <ParaQualTipo nomeLinha="SGSuperDetox"/>
        <KitsSortidos class="mb-5"/>
        <PorqueUsarDetox />
        <ComposicaoDetox />
        <ComoUsarDetox />
        <ConhecaNossasLinhas />
        <!-- <OpinioesProdutoTrustvox class="mb-3" :dataProd="prodInfo" /> -->
        <CompraSegura />
        <DuvidasLinhaEssential />
        <MomentoNewHair />
        <Newsletter />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import CompraSegura from '../../../gerais/compraSegura.vue'
    import MenuMob from '../../../gerais/menuMob.vue'
    import MenuNH from '../../../gerais/menuNH.vue'
    import MomentoNewHair from '../../../gerais/momento-new-hair/momento-new-hair.vue'
    import Newsletter from '../../../gerais/newsletter/newsletter.vue'
    import DuvidasLinhaEssential from '../../../landing-page/linha-essential/duvidas-linha-essential.vue'
    import ConhecaNossasLinhas from '../liso-perfeito/components/conheca-nossas-linhas.vue'
    import ParaQualTipo from '../sos-reparacao/components/para-qual-tipo.vue'
    import ComoUsarDetox from './components/como-usar-detox.vue'
    import ComposicaoDetox from './components/composicao-detox.vue'
    import PorqueUsarDetox from './components/porque-usar-detox.vue'
    import ProdutoSingleDetox from './components/produto-single-detox.vue'
    // import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SingleDetox",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSingleDetox,
            PorqueUsarDetox,
            ComposicaoDetox,
            ComoUsarDetox,
            CompraSegura,
            ConhecaNossasLinhas,
            DuvidasLinhaEssential,
            MomentoNewHair,
            Newsletter,
            ParaQualTipo,
            // OpinioesProdutoTrustvox,
            KitsSortidos
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