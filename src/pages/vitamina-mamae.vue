<template>
  <div>
    <!-- <MenuNH />
    <MenuMob /> -->
    <BannerNHVitaminBiotina />
    <Credibilidade cor="home" />
    <FormulaPotenteMamae />
    <BeneficiosNhMamae />
    <ResultadosNewHair />
    <ParaQuemVitaminaMamae />
    <InformacoesNutricionaisMamae />
    <AtivosFormulaMamae />
    <Titulos :titulo="'Encontre o seu kit de vitamina para lactante e gestante New Hair'" :subtitulo="'O melhor custo-benefício está aqui, escolha:'" class="mt-5 mb-3"/>
    <KitsNhbLp />
    <!-- <KitsRelacionados /> -->
    <BannerDesafio />
    <CompraSegura />
    <duvidas-vitamina-mamae/>
    <MomentoNewHair />
    <Newsletter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BannerDesafio from '../components/gerais/bannerDesafio.vue';
import BannerNHVitaminBiotina from '../components/gerais/bannerNHVitaminBiotina.vue';
import CompraSegura from '../components/gerais/compraSegura.vue';
import Credibilidade from '../components/gerais/credibilidade.vue';
// import MenuMob from '../components/gerais/menuMob.vue';
// import MenuNH from '../components/gerais/menuNH.vue';
import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue';
import Newsletter from '../components/gerais/newsletter/newsletter.vue';
import ResultadosNewHair from '../components/gerais/resultados/resultados-new-hair.vue';
import BeneficiosNhMamae from '../components/gerais/vitamina-mamaes/beneficios-nh-mamae.vue';
import FormulaPotenteMamae from '../components/gerais/vitamina-mamaes/formula-potente-mamae.vue';
import InformacoesNutricionaisMamae from '../components/gerais/vitamina-mamaes/informacoes-nutricionais-mamae.vue';
import ParaQuemVitaminaMamae from '../components/gerais/vitamina-mamaes/para-quem-vitamina-mamae.vue';
import KitsNhbLp from '../components/produtos-exibicao/lp/kits-nhb-lp.vue';
// import KitsRelacionados from '../components/produtos-exibicao/relacionados/kits-relacionados.vue';
import Titulos from '../components/produtos-exibicao/titulos.vue';
import AtivosFormulaMamae from '../components/gerais/vitamina-mamaes/ativos-formula-mamae.vue';
import DuvidasVitaminaMamae from '../components/gerais/duvidas/duvidasVitaminaMamae.vue';

export default {
  name: "VitaminaMamae",
  components: {
    FormulaPotenteMamae,
    // MenuNH,
    // MenuMob,
    Credibilidade,
    BeneficiosNhMamae,
    ParaQuemVitaminaMamae,
    InformacoesNutricionaisMamae,
    ResultadosNewHair,
    KitsNhbLp,
    Titulos,
    // KitsRelacionados,
    BannerDesafio,
    CompraSegura,
    MomentoNewHair,
    Newsletter,
    BannerNHVitaminBiotina,
    AtivosFormulaMamae,
    DuvidasVitaminaMamae
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
    response.data.estrutura.seo.title = 'Vitamina para cabelo linha gestante - Cabelos mais fortes na gravidez | NEW HAIR'
    response.data.estrutura.seo.description = 'Cuide dos seus cabelos na fase mais importante da sua vida. Vitamina para cabelo rica em biotina. Menos queda durante a lactação'
    response.data.estrutura.seo.canonical = ' https://www.newhair.com.br/vitamina-para-gestante-e-lactantes'
    this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
    this.$aplicaSEO(response.data.estrutura)
    this.changeDadosPageAtual(response.data)
  },
  metaInfo: {
           meta:[
            { property: 'og:title', content: 'Vitamina para cabelo linha gestante - Cabelos mais fortes na gravidez | NEW HAIR'},
            { property: 'og:description', content: 'Cuide dos seus cabelos na fase mais importante da sua vida. Vitamina para cabelo rica em biotina. Menos queda durante a lactação'},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/vitamina-para-gestante-e-lactantes'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Biotina-3-Potes.516e5db7.jpg'},
            { property: 'og:image:alt', content: 'Três potes da vitamina para cabelos, pele e unhas New Hair'},
            { property: 'twitter:title', content: 'Vitamina para cabelo linha gestante - Cabelos mais fortes na gravidez | NEW HAIR' },
            { property: 'twitter:description', content: 'Cuide dos seus cabelos na fase mais importante da sua vida. Vitamina para cabelo rica em biotina. Menos queda durante a lactação' },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Biotina-3-Potes.516e5db7.jpg'},
            { property: 'twitter:image:alt:', content: 'Três potes da vitamina para cabelos, pele e unhas New Hair'},
           ]
        },
}
</script>