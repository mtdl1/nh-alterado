<template>
    <div>
      <MenuNH />
      <MenuMob />
      <ProdutoVitaminFeminino />
      <ComparativoFormula />
      <BeneficiosNewHair />
      <ResultadosNewHair />
      <AtivosFormula />
      <InformacoesNutricionais />
      <ComparacaoConcorrente />
      <BannerDesafio />
      <OpinioesProdutoTrustvox :dataProd="prodInfo" />
      <DuvidasNewHairVitamin/>
      <MomentoNewHair class="mb-3"/>
    </div>
  </template>

<script>
    import { mapMutations } from 'vuex'
    import AtivosFormula from '../../gerais/ativos-formula/ativos-formula.vue'
    import BannerDesafio from '../../gerais/bannerDesafio.vue'
    import BeneficiosNewHair from '../../gerais/beneficios-new-hair/beneficios-new-hair.vue'
    import ComparacaoConcorrente from '../../gerais/comparacao-concorrente/comparacao-concorrente.vue'
    import ComparativoFormula from '../../gerais/comparativo-formula/comparativo-formula.vue'
    import InformacoesNutricionais from '../../gerais/informacoes-nutricionais/informacoes-nutricionais.vue'
    import MenuMob from '../../gerais/menuMob.vue'
    import MenuNH from '../../gerais/menuNH.vue'
    import MomentoNewHair from '../../gerais/momento-new-hair/momento-new-hair.vue'
    import ResultadosNewHair from '../../gerais/resultados/resultados-new-hair.vue'
    import ProdutoVitaminFeminino from './produto-vitamin-feminino-7-potes.vue'
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import DuvidasNewHairVitamin from '../../gerais/duvidas/duvidasNewHairVitamin.vue'

    export default {
        name: 'SingleNewHairFeminino',
        components: {
            ProdutoVitaminFeminino,
            MenuNH,
            MenuMob,
            ComparativoFormula,
            BeneficiosNewHair,
            ResultadosNewHair,
            AtivosFormula,
            InformacoesNutricionais,
            ComparacaoConcorrente,
            BannerDesafio,
            MomentoNewHair,
            OpinioesProdutoTrustvox,
            DuvidasNewHairVitamin
        },

        data(){
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