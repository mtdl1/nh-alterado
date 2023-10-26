<template>
  <div>
    <!-- <MenuNH />
    <MenuMob /> -->
    <BannerNHVitaminAcido />
    <Credibilidade cor="home" />
    <ComparativoFormula />
    <BeneficiosNewHair />
    <ResultadosNewHair />
    <AtivosFormula />
    <InformacoesNutricionais />
    <ComparacaoConcorrente />
    <KitsNhLp />
    <!-- <KitsRelacionados /> -->
    <BannerDesafio />
    <CompraSegura />
    <DuvidasNewHairVitamin/>
    <MomentoNewHair class="pb-5"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AtivosFormula from '../components/gerais/ativos-formula/ativos-formula.vue'
import BannerDesafio from '../components/gerais/bannerDesafio.vue'
import BannerNHVitaminAcido from '../components/gerais/bannerNHVitaminAcido.vue'
import BeneficiosNewHair from '../components/gerais/beneficios-new-hair/beneficios-new-hair.vue'
import ComparacaoConcorrente from '../components/gerais/comparacao-concorrente/comparacao-concorrente.vue'
import ComparativoFormula from '../components/gerais/comparativo-formula/comparativo-formula.vue'
import CompraSegura from '../components/gerais/compraSegura.vue'
import Credibilidade from '../components/gerais/credibilidade.vue'
import DuvidasNewHairVitamin from '../components/gerais/duvidas/duvidasNewHairVitamin.vue'
import InformacoesNutricionais from '../components/gerais/informacoes-nutricionais/informacoes-nutricionais.vue'
// import MenuMob from '../components/gerais/menuMob.vue'
// import MenuNH from '../components/gerais/menuNH.vue'
import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue'
import ResultadosNewHair from '../components/gerais/resultados/resultados-new-hair.vue'
import KitsNhLp from '../components/produtos-exibicao/lp/kits-nh-lp.vue'
// import KitsRelacionados from '../components/produtos-exibicao/relacionados/kits-relacionados.vue'
export default {
  name: "LpNewHairVitamin",
  components: {
    // MenuNH,
    // MenuMob,
    Credibilidade,
    ComparativoFormula,
    BeneficiosNewHair,
    ResultadosNewHair,
    AtivosFormula,
    ComparacaoConcorrente,
    KitsNhLp,
    // KitsRelacionados,
    BannerDesafio,
    CompraSegura,
    MomentoNewHair,
    InformacoesNutricionais,
    BannerNHVitaminAcido,
    DuvidasNewHairVitamin
  },

  data() {
    return {
      //
    }
  },

  methods: {
    ...mapMutations(['changeDadosPageAtual']),
  },

  created() {
    //RESPONSE FIXO DE ADVERTORIAL
    var response = {
      data: {
        estrutura: {
          apps: {
            pixelFacebook: {
              cliente: {},
              dados: {},
              eventId: '',
              fbc: '',
              fbp: '',
            }
          },
          nivel: "home",
          seo: {
            title: null,
            description: null,
            canonical: null,
            indexar: true
          }
        }
      }
    }
    //CARREGA AS VARIÁVEIS PÚBLICAS
    response.data.estrutura.seo.title = 'Vitamina para cabelo com ácido hialurônico mais vendida do país | NEW HAIR'
    response.data.estrutura.seo.description = 'New Hair Vitamin, a vitamina para cabelo, pele e unha em comprimidos com ácido hialurônico. Crescimento de cabelo até 6x mais acelerado'
    response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/vitamina-para-cabelo-e-unha-em-comprimido'
    this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
    this.$aplicaSEO(response.data.estrutura)
    this.changeDadosPageAtual(response.data)
  },
  metaInfo: {
           meta:[
            { name: 'robots', content: 'index,follow'},
            { property: 'og:title', content: 'Vitamina para cabelo com ácido hialurônico mais vendida do país | NEW HAIR'},
            { property: 'og:description', content: 'New Hair Vitamin, a vitamina para cabelo, pele e unha em comprimidos com ácido hialurônico. Crescimento de cabelo até 6x mais acelerado'},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/vitamina-para-cabelo-e-unha-em-comprimido'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Acido-Hialuronico-Pote-Beneficios.b9a007c2.png'},
            { property: 'og:image:alt', content: 'Um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair'},
            { property: 'twitter:title', content: 'Vitamina para cabelo com ácido hialurônico mais vendida do país | NEW HAIR' },
            { property: 'twitter:description', content: 'New Hair Vitamin, a vitamina para cabelo, pele e unha em comprimidos com ácido hialurônico. Crescimento de cabelo até 6x mais acelerado' },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Acido-Hialuronico-Pote-Beneficios.b9a007c2.png'},
            { property: 'twitter:image:alt:', content: 'Um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair'},
           ]
        },
}

</script>