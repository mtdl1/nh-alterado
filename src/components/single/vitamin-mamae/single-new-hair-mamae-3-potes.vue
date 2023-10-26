<template>
    <div>
        <MenuNH />
        <MenuMob />
        <ProdutoVitaminMamae />
        <FormulaPotenteMamae />
        <BeneficiosNhMamae />
        <ResultadosNewHair />
        <ParaQuemVitaminaMamae />
        <InformacoesNutricionaisMamae />
        <BannerDesafio />
        <OpinioesProdutoTrustvox :dataProd="prodInfo" />
        <DuvidasVitaminaMamae/>
        <MomentoNewHair class="mb-3"/>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import BannerDesafio from '../../gerais/bannerDesafio.vue'
    import DuvidasVitaminaMamae from '../../gerais/duvidas/duvidasVitaminaMamae.vue'
    import MenuMob from '../../gerais/menuMob.vue'
    import MenuNH from '../../gerais/menuNH.vue'
    import MomentoNewHair from '../../gerais/momento-new-hair/momento-new-hair.vue'
    import ResultadosNewHair from '../../gerais/resultados/resultados-new-hair.vue'
    import BeneficiosNhMamae from '../../gerais/vitamina-mamaes/beneficios-nh-mamae.vue'
    import FormulaPotenteMamae from '../../gerais/vitamina-mamaes/formula-potente-mamae.vue'
    import InformacoesNutricionaisMamae from '../../gerais/vitamina-mamaes/informacoes-nutricionais-mamae.vue'
    import ParaQuemVitaminaMamae from '../../gerais/vitamina-mamaes/para-quem-vitamina-mamae.vue'
    import ProdutoVitaminMamae from './produto-vitamin-mamae-3-potes.vue'
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'

    export default {
        name: 'SingleNewHairMamae',
        components: {
            MenuNH,
            MenuMob,
            ResultadosNewHair,
            BannerDesafio,
            MomentoNewHair,
            ProdutoVitaminMamae,
            FormulaPotenteMamae,
            BeneficiosNhMamae,
            ParaQuemVitaminaMamae,
            InformacoesNutricionaisMamae,
            DuvidasVitaminaMamae,
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
            genPath(path, onlyQuery) {
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