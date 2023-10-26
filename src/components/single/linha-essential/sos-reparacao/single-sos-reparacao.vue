<template>
    <div>
        <MenuNH />
        <MenuMob />
        <ProdutoSingleSosReparacao
        selecionado="KITCOMPLETO" idDaLista="129"
        v-if="$route.path == '/kit-sos-reparacao-shampoo-condicionador-mascara-new-hair-home-care-essential.html' "/>  
        <ProdutoSingleSosReparacao
        selecionado="KITBASICO" idDaLista="128"
        v-if="$route.path == '/kit-sos-reparacao-shampoo-condicionador-new-hair-home-care-essential.html' "/>  
        <ProdutoSingleSosReparacao
        selecionado="KITMASCARA" idDaLista="127"
        v-if="$route.path == '/mascara-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html' " />
        <ProdutoSingleSosReparacao
        selecionado="KITSHAMPOO" idDaLista="125"
        v-if="$route.path == '/shampoo-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html' " />
        <ProdutoSingleSosReparacao
        selecionado="KITCONDICIONADOR" idDaLista="126"
        v-if="$route.path == '/condicionador-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html' " />

        <ParaQualTipo nomeLinha="SGSReparacao" />
        <KitsSortidos class="mb-5"/>
        <PorqueUsarSosReparacao />
        <ComposicaoSosReparacao />
        <ComoUsarSosReparacao />
        <ConhecaNossasLinhas />
        <OpinioesProdutoTrustvox class="mb-3" :dataProd="prodInfo" />
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
    import ComoUsarSosReparacao from './components/como-usar-sos-reparacao.vue'
    import ComposicaoSosReparacao from './components/composicao-sos-reparacao.vue'
    import ParaQualTipo from './components/para-qual-tipo.vue'
    import PorqueUsarSosReparacao from './components/porque-usar-sos-reparacao.vue'
    import ProdutoSingleSosReparacao from './components/produto-single-sos-reparacao.vue'
    import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SingleSosReparacao",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSingleSosReparacao,
            PorqueUsarSosReparacao,
            ComposicaoSosReparacao,
            ComoUsarSosReparacao,
            CompraSegura,
            ConhecaNossasLinhas,
            DuvidasLinhaEssential,
            MomentoNewHair,
            Newsletter,
            ParaQualTipo,
            OpinioesProdutoTrustvox,
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