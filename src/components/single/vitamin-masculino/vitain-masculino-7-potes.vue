<template>
    <div>
        <CabecalhoHomem />
        <CabecalhoHomemMob />
        <ProdutoVitaminMasculino />
        <ComparativoFormulaMasc />
        <BeneficiosNewHairMasc />
        <InformacoesNutricionaisMasc />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import CabecalhoHomemMob from '../../gerais/cabecalho-homem-mob.vue'
    import CabecalhoHomem from '../../gerais/cabecalho-homem.vue'
    import BeneficiosNewHairMasc from '../../newhair-masculino/components/beneficios-new-hair/beneficios-new-hair-masc.vue'
    import ComparativoFormulaMasc from '../../newhair-masculino/components/comparativo-formula/comparativo-formula-masc.vue'
    import InformacoesNutricionaisMasc from '../../newhair-masculino/components/informacoes-nutricionais/informacoes-nutricionais-masc.vue'
    import ProdutoVitaminMasculino from './produto-vitamin-masculino-7-potes.vue'

    export default {
        name: 'SingleNewHairMasculino7',
        components: { 
            CabecalhoHomem, 
            CabecalhoHomemMob, 
            ProdutoVitaminMasculino, 
            ComparativoFormulaMasc, 
            BeneficiosNewHairMasc, 
            InformacoesNutricionaisMasc 
        },

        data() {
            return {
                loading: {
                    geral: true
                },
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