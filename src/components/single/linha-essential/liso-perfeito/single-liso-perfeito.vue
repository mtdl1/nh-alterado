<template>
    <div>
        <MenuNH />
        <MenuMob />
        
        <ProdutoSingleLisoPerfeito
        selecionado="KITCOMPLETO"
        idDaLista="130" 
        v-if="$route.path == '/kit-liso-perfeito-shampoo-condicionador-spray-mascara-new-hair-home-care-essential.html' "/>

        <ProdutoSingleLisoPerfeito
        selecionado="KITBASICO"
        idDaLista="131" 
        v-if="$route.path == '/kit-liso-perfeito-shampoo-condicionador-new-hair-home-care-essential.html' "/>

        <ProdutoSingleLisoPerfeito
        selecionado="KITSPRAY"
        idDaLista="132" 
        v-if="$route.path == '/spray-pre-escova-liso-perfeito-new-hair-home-care-essential.html' "/>

        <ProdutoSingleLisoPerfeito
        selecionado="KITMASCARA"
        idDaLista="135" 
        v-if="$route.path == '/mascara-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html' "/>

        <ProdutoSingleLisoPerfeito
        selecionado="KITSHAMPOO"
        idDaLista="133" 
        v-if="$route.path == '/shampoo-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html' "/>

        <ProdutoSingleLisoPerfeito
        selecionado="KITCONDICIONADOR"
        idDaLista="134" 
        v-if="$route.path == '/condicionador-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html' "/>

        <ParaQualTipo nomeLinha="SGLisoPerfeito" />
        <KitsSortidos class="mb-5"/>
        <PorqueUsarLisoPerfeito />
        <ComposicaoLisoPerfeito />
        <ComoUsarLisoPerfeito />
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
    import ParaQualTipo from '../sos-reparacao/components/para-qual-tipo.vue'
    import ComoUsarLisoPerfeito from './components/como-usar-liso-perfeito.vue'
    import ComposicaoLisoPerfeito from './components/composicao-liso-perfeito.vue'
    import ConhecaNossasLinhas from './components/conheca-nossas-linhas.vue'
    import PorqueUsarLisoPerfeito from './components/porque-usar-liso-perfeito.vue'
    import ProdutoSingleLisoPerfeito from './components/produto-single-liso-perfeito.vue'
    import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SingleLisoPerfeito",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSingleLisoPerfeito,
            PorqueUsarLisoPerfeito,
            ComposicaoLisoPerfeito,
            ComoUsarLisoPerfeito,
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