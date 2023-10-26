<template>
    <div>
        <MenuNH />
        <MenuMob />

        <ProdutoSingleCachosOndas
        selecionado="KITCOMPLETO"
        idDaLista="141" 
        v-if="$route.path == '/kit-cachos-e-ondas-shampoo-condicionador-creme-ativador-serum-reparador-new-hair-home-care-essential.html' "
         />

        <ProdutoSingleCachosOndas
        selecionado="KITBASICO"
        idDaLista="142" 
        v-if="$route.path == '/kit-cachos-e-ondas-shampoo-condicionador-new-hair-home-care-essential.html' "
         />

        <ProdutoSingleCachosOndas
        selecionado="KITCONDICIONADOR"
        idDaLista="144" 
        v-if="$route.path == '/condicionador-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html' "
         />

        <ProdutoSingleCachosOndas
        selecionado="KITSHAMPOO"
        idDaLista="143" 
        v-if="$route.path == '/shampoo-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html' "
         />

        <ProdutoSingleCachosOndas
        selecionado="KITATIVADOR"
        idDaLista="146" 
        v-if="$route.path == '/creme-ativador-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html' "
         />

        <ProdutoSingleCachosOndas
        selecionado="KITSERUM"
        idDaLista="145" 
        v-if="$route.path == '/serum-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html' "
         />

        <ParaQualTipo nomeLinha="SGCachosOndas" />
        <KitsSortidos class="mb-5"/>
        <PorqueUsarCachosOndas />
        <ComposicaoCachosOndas />
        <ComoUsarCachosOndas />
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
    import ComoUsarCachosOndas from './components/como-usar-cachos-ondas.vue'
    import ComposicaoCachosOndas from './components/composicao-cachos-ondas.vue'
    import PorqueUsarCachosOndas from './components/porque-usar-cachos-ondas.vue'
    import ProdutoSingleCachosOndas from './components/produto-single-cachos-ondas.vue'
    import OpinioesProdutoTrustvox from '../../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import KitsSortidos from '../../../produtos-exibicao/loja/kits-sortidos.vue'

    export default {
        name: "SingleCachosOndas",

        components: { 
            MenuNH,
            MenuMob,
            ProdutoSingleCachosOndas,
            PorqueUsarCachosOndas,
            ComposicaoCachosOndas,
            ComoUsarCachosOndas,
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