<template>
    <div>
        <MenuNH />
        <MenuMob />

        <ProdutoSingleForcaBrilho
        selecionado="KITCOMPLETO"
        idDaLista="147" 
        v-if="$route.path == '/kit-forca-e-brilho-shampoo-condicionador-serum-reparador-mascara-new-hair-home-care-essential.html' " />

        <ProdutoSingleForcaBrilho
        selecionado="KITBASICO"
        idDaLista="148" 
        v-if="$route.path == '/kit-forca-e-brilho-shampoo-condicionador-new-hair-home-care-essential.html' " />

        <ProdutoSingleForcaBrilho
        selecionado="KITMASCARA"
        idDaLista="151" 
        v-if="$route.path == '/mascara-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html' " />

        <ProdutoSingleForcaBrilho
        selecionado="KITSERUM"
        idDaLista="162" 
        v-if="$route.path == '/serum-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html' " />

        <ProdutoSingleForcaBrilho
        selecionado="KITSHAMPOO"
        idDaLista="149" 
        v-if="$route.path == '/shampoo-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html' " />

        <ProdutoSingleForcaBrilho
        selecionado="KITCONDICIONADOR"
        idDaLista="150" 
        v-if="$route.path == '/condicionador-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html' " />


        <ParaQualTipo nomeLinha="SGForcaBrilho"/>
        <KitsSortidos class="mb-5"/>
        <PorqueUsarForcaBrilho />
        <ComposicaoForcaBrilho />
        <ComoUsarForcaBrilho />
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
    import ParaQualTipo from '../sos-reparacao/components/para-qual-tipo.vue'
    import ComoUsarForcaBrilho from './components/como-usar-forca-brilho.vue'
    import ComposicaoForcaBrilho from './components/composicao-forca-brilho.vue'
    import PorqueUsarForcaBrilho from './components/porque-usar-forca-brilho.vue'
    import ProdutoSingleForcaBrilho from './components/produto-single-forca-brilho.vue'
    import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SingleForcaBrilho",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSingleForcaBrilho,
            PorqueUsarForcaBrilho,
            ComposicaoForcaBrilho,
            ComoUsarForcaBrilho,
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