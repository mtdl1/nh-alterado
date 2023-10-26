<template>
  <div>
    <!-- <menuNH />
    <MenuMob /> -->
    <BannerNHSerumFacial />
    <Credibilidade cor="home"/>
    <BeneficiosSerum />
    <PorcentagemResultados />
    <PassosUsoSerum />
    <FaixaAtivos />
    <AtivosSerum />
    <div class="bg-alt">
      <KitsNhsLp />
      <!-- <KitsRelacionados /> -->
    </div>


    <CompraSegura />
    <DuvidasSerum/>
    <MomentoNewHair />
    <Newsletter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import BannerNHSerumFacial from '../components/gerais/bannerNHSerumFacial.vue'
import CompraSegura from '../components/gerais/compraSegura.vue'
import Credibilidade from '../components/gerais/credibilidade.vue'
import DuvidasSerum from '../components/gerais/duvidas/duvidasSerum.vue';
// import MenuMob from '../components/gerais/menuMob.vue'
// import menuNH from '../components/gerais/menuNH.vue'
import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue'
import Newsletter from '../components/gerais/newsletter/newsletter.vue'
import AtivosSerum from '../components/gerais/serum/ativos-serum.vue'
import BeneficiosSerum from '../components/gerais/serum/beneficios-serum.vue'
import FaixaAtivos from '../components/gerais/serum/faixa-ativos.vue'
import PassosUsoSerum from '../components/gerais/serum/passos-uso-serum.vue'
import PorcentagemResultados from '../components/gerais/serum/porcentagem-resultados.vue'
import KitsNhsLp from '../components/produtos-exibicao/lp/kits-nhs-lp.vue'
// import KitsRelacionados from '../components/produtos-exibicao/relacionados/kits-relacionados.vue'
export default {
  name: "SerumFacial",
  components: {
    // menuNH,
    // MenuMob,
    Credibilidade,
    CompraSegura,
    Newsletter,
    MomentoNewHair,
    BeneficiosSerum,
    PorcentagemResultados,
    PassosUsoSerum,
    FaixaAtivos,
    AtivosSerum,
    KitsNhsLp,
    // KitsRelacionados,
    BannerNHSerumFacial,
    DuvidasSerum,
   
  },
  methods: {
      ...mapMutations(['changeDadosPageAtual']),
    },

    created() {
      //RESPONSE FIXO GTM
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
              indexar: true,
            }
          }
        }
      }
      response.data.estrutura.seo.title = 'Sérum Facial 10 em 1 para skincare em casa | NEW HAIR'
      response.data.estrutura.seo.description = "Sérum Facial 10 em 1 New Hair: fórmula que trata a sua pele de forma descomplicada com 10 ativos poderosos, para benefícios e resultados incríveis"
      response.data.estrutura.seo.canonical = "https://www.newhair.com.br/serum-facial"
      this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
      this.$aplicaSEO(response.data.estrutura)
      this.changeDadosPageAtual(response.data)
    }
}
</script>
