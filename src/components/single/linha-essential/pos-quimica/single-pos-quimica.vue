<template>
    <div>
        <MenuNH />
        <MenuMob />

        <ProdutoSinglePosQuimica 
        selecionado="KITCOMPLETO"
        idDaLista="136" 
        v-if="$route.path == '/kit-pos-quimica-shampoo-condicionador-mascara-new-hair-home-care-essential.html' "
        />

        <ProdutoSinglePosQuimica 
        selecionado="KITBASICO"
        idDaLista="137" 
        v-if="$route.path == '/kit-pos-quimica-shampoo-condicionador-new-hair-home-care-essential.html' "
        />

        <ProdutoSinglePosQuimica 
        selecionado="KITMASCARA"
        idDaLista="140" 
        v-if="$route.path == '/mascara-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html' "
        />

        <ProdutoSinglePosQuimica 
        selecionado="KITSHAMPOO"
        idDaLista="138" 
        v-if="$route.path == '/shampoo-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html' "
        />

        <ProdutoSinglePosQuimica 
        selecionado="KITCONDICIONADOR"
        idDaLista="139" 
        v-if="$route.path == '/condicionador-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html' "
        />

        <ParaQualTipo nomeLinha="SGPosQuimica"/>
        <KitsSortidos class="mb-5"/>
        <PorqueUsarPosQuimica />
        <ComposicaoPosQuimica />
        <ComoUsarPosQuimica />
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
    import ComoUsarPosQuimica from './components/como-usar-pos-quimica.vue'
    import ComposicaoPosQuimica from './components/composicao-pos-quimica.vue'
    import PorqueUsarPosQuimica from './components/porque-usar-pos-quimica.vue'
    import ProdutoSinglePosQuimica from './components/produto-single-pos-quimica.vue'
    import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SinglePosQuimica",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSinglePosQuimica,
            PorqueUsarPosQuimica,
            ComposicaoPosQuimica,
            ComoUsarPosQuimica,
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