<template>
    <div>
        <MenuNH />
        <MenuMob />
        <ProdutoSerumFacial />
        <BeneficiosSerumSingle />
        <PassosUsoSerumSingle />
        <AtivosSerumSingle />
        <OpinioesProdutoTrustvox :dataProd="prodInfo"/>
        <CompraSegura />
        <DuvidasSerum />
        <MomentoNewHair class="mb-5"/>
    </div>
</template>

<script>
    import Facebook from '@/Facebook.js'
    import { mapMutations } from 'vuex'
    import MenuMob from '../../gerais/menuMob.vue'
    import MenuNH from '../../gerais/menuNH.vue'
    import DuvidasSerum from '../../gerais/duvidas/duvidasSerum.vue'
    import BeneficiosSerumSingle from './components/beneficios-serum-single.vue'
    import AtivosSerumSingle from './components/ativos-serum-single.vue'
    import PassosUsoSerumSingle from './components/passos-uso-serum-single.vue'
    import ProdutoSerumFacial from './components/produto-serum-facial-3-frascos.vue'
    import CompraSegura from '../../gerais/compraSegura.vue'
    import MomentoNewHair from '../../gerais/momento-new-hair/momento-new-hair.vue'
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'

    export default {
        name: 'SingleNewHairFeminino',
        components: {
            MenuNH,
            MenuMob,
            DuvidasSerum,
            BeneficiosSerumSingle,
            AtivosSerumSingle,
            // FaixaAtivosSingle,
            PassosUsoSerumSingle,
            // PorcentagemResultadosSingle,
            ProdutoSerumFacial,
            CompraSegura,
            MomentoNewHair,
            OpinioesProdutoTrustvox
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
            let obFacebookPixel = new Facebook(this.$store.state.pixelFB)
            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    this.prodInfo = response.data.conteudo
                    this.$aplicaSEO(response.data.estrutura)
                    this.loading.geral = false
                    this.changeDadosPageAtual(response.data)
                    obFacebookPixel.apply('ViewContent', response.data)
                }
            })
        },

    }
</script>