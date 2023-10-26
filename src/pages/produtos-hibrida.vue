<template>
  <div>
    <!-- <MenuNH />
    <MenuMob /> -->
    <BannerHome />
    <Credibilidade cor="home" />
    <BeneficiosNewHair />
    <InformacoesNutricionais bgAlt="produtosHibrida"/>
    <NovasGomas />
    <!-- <BeneficiosNhMamae /> -->
    <!-- <ResultadosNewHair />
    <ParaQuemVitaminaMamae /> -->
    <!-- <InformacoesNutricionaisMamae /> -->
    <Titulos :titulo="'Encontre o melhor kit para seus cabelos, pele e unhas'" :subtitulo="'O custo-benefício que a sua beleza merece está aqui, escolha'" class="mt-5 mb-3"/>
    <VitrineProdutos />
    <BannerDesafio />
    <CompraSegura />
    <DuvidasHome />
    <MomentoNewHair />
    <Newsletter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BannerHome from '../components/gerais/banner-home.vue';
import BannerDesafio from '../components/gerais/bannerDesafio.vue';
import BeneficiosNewHair from '../components/gerais/beneficios-new-hair/beneficios-new-hair.vue';
import CompraSegura from '../components/gerais/compraSegura.vue';
import Credibilidade from '../components/gerais/credibilidade.vue';
import DuvidasHome from '../components/gerais/duvidas/duvidasHome.vue';
import InformacoesNutricionais from '../components/gerais/informacoes-nutricionais/informacoes-nutricionais.vue';
// import MenuMob from '../components/gerais/menuMob.vue';
// import MenuNH from '../components/gerais/menuNH.vue';
import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue';
import Newsletter from '../components/gerais/newsletter/newsletter.vue';
import NovasGomas from '../components/gerais/novas-gomas/novas-gomas.vue';
// import ResultadosNewHair from '../components/gerais/resultados/resultados-new-hair.vue';
// import BeneficiosNhMamae from '../components/gerais/vitamina-mamaes/beneficios-nh-mamae.vue';
// import InformacoesNutricionaisMamae from '../components/gerais/vitamina-mamaes/informacoes-nutricionais-mamae.vue';
// import ParaQuemVitaminaMamae from '../components/gerais/vitamina-mamaes/para-quem-vitamina-mamae.vue';
import VitrineProdutos from '../components/produtos-exibicao/lp/vitrine-produtos.vue';
import Titulos from '../components/produtos-exibicao/titulos.vue';
export default {
  name: "ProdutosHibrida",
  components: {
    // MenuNH,
    // MenuMob,
    BannerHome,
    Credibilidade,
    // BeneficiosNhMamae,
    // ParaQuemVitaminaMamae,
    // InformacoesNutricionaisMamae,
    // ResultadosNewHair,
    Titulos,
    BannerDesafio,
    CompraSegura,
    DuvidasHome,
    MomentoNewHair,
    Newsletter,
    BeneficiosNewHair,
    InformacoesNutricionais,
    NovasGomas,
    VitrineProdutos
  },
    methods: {
    ...mapMutations(['changeDadosPageAtual']),
  },

  created() {
    //RESPONSE FIXO DE ADVERTORIAL
    var response = {
      data: {
        estrutura: {
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
    response.data.estrutura.seo.title = 'Vitamina para cabelo em comprimido e goma nos sabores morango fresh, laranja e uva verde | NEW HAIR'
    response.data.estrutura.seo.description = ' Conheça os kits de vitamina capilar em goma e comprimidos. A fórmula do New Hair passou por um upgrade e agora cuida da sua pelo com o ácido hialurônico'
    response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/melhor-vitamina-para-cabelo-e-unha'
    this.$aplicaSEO(response.data.estrutura)
    this.changeDadosPageAtual(response.data)
  },

}
</script>