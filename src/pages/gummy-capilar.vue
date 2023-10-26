<template>
  <div>
    <!-- <MenuNH />
    <MenuMob /> -->
    <BannerNHGummy />
    <Credibilidade cor="home" />

    <NovasGomas />
    <ResultadosNewHairGummy/>
    <Titulos :titulo="'Encontre o melhor kit para seus cabelos, pele e unhas'" :subtitulo="'O custo-benefício que a sua beleza merece está aqui, escolha'" class="mt-5 mb-3"/>
    <KitsNhgLp />
    <!-- <KitsRelacionados /> -->
    <BannerDesafio />
    <!-- <InformacoesNutricionaisGummy /> -->
    <AtivosFormula />
    <Motivos-new-hair/>
    <CompraSegura />
    <DuvidasGummy/>
    <MomentoNewHair />
    <Newsletter />
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import AtivosFormula from '../components/gerais/ativos-formula/ativos-formula-gomas.vue';
    import BannerDesafio from '../components/gerais/bannerDesafio.vue';
    import BannerNHGummy from '../components/gerais/bannerNHGummy.vue';
    import CompraSegura from '../components/gerais/compraSegura.vue';
    import Credibilidade from '../components/gerais/credibilidade.vue';
    import DuvidasGummy from '../components/gerais/duvidas/duvidasGummy.vue';
    // import MenuMob from '../components/gerais/menuMob.vue';
    // import MenuNH from '../components/gerais/menuNH.vue';
    import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue';
    import MotivosNewHair from '../components/gerais/motivos-new-hair/motivos-new-hair.vue';
    import Newsletter from '../components/gerais/newsletter/newsletter.vue';
    // import InformacoesNutricionaisGummy from '../components/gerais/novas-gomas/informacoes-nutricionais-gummy.vue';
    import NovasGomas from '../components/gerais/novas-gomas/novas-gomas.vue';
    import ResultadosNewHairGummy from '../components/gerais/resultados/resultados-new-hair-gummy.vue';
    import KitsNhgLp from '../components/produtos-exibicao/lp/kits-nhg-lp.vue';
    // import KitsRelacionados from '../components/produtos-exibicao/relacionados/kits-relacionados.vue';
    import Titulos from '../components/produtos-exibicao/titulos.vue';

    export default {
        name: "VitaminaMamae",
        components: {
            // MenuNH,
            // MenuMob,
            Credibilidade,
            Titulos,
            // KitsRelacionados,
            BannerDesafio,
            CompraSegura,
            MomentoNewHair,
            Newsletter,
            NovasGomas,
            AtivosFormula,
            KitsNhgLp,
            // InformacoesNutricionaisGummy,
            BannerNHGummy,
            MotivosNewHair,
            ResultadosNewHairGummy,
            DuvidasGummy
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
            response.data.estrutura.seo.title = 'Vitamina para cabelo em goma - New Hair gummy + ácido hialurônico | NEW HAIR' 
            response.data.estrutura.seo.description = ' As gummies com 17 ativos + ácido hialurônico, com apenas uma gominha de ursinho ao dia você fortalece os seus fios e unhas. Nos sabores uva verde, laranja e morango'
            response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/new-hair-gummy-vitamina-em-goma-para-cabelo'
            this.$aplicaSEO(response.data.estrutura)
            this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
            this.changeDadosPageAtual(response.data)
        },
        metaInfo: {
           meta:[
            { name: 'robots', content: 'index,follow'},
            { property: 'og:title', content:'Vitamina para cabelo em goma - New Hair gummy + ácido hialurônico | NEW HAIR' },
            { property: 'og:description', content: 'As gummies com 17 ativos + ácido hialurônico, com apenas uma gominha de ursinho ao dia você fortalece os seus fios e unhas. Nos sabores uva verde, laranja e morango'},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/new-hair-gummy-vitamina-em-goma-para-cabelo'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Gummy-Vitamina-Capilar-Mix-Morango-Laranja-Uva-3-Potes.a164d424.jpg'},
            { property: 'og:image:alt', content: 'Três potes do Gummy New Hair'},
            { property: 'twitter:title', content:'Vitamina para cabelo em goma - New Hair gummy + ácido hialurônico | NEW HAIR'  },
            { property: 'twitter:description', content: 'As gummies com 17 ativos + ácido hialurônico, com apenas uma gominha de ursinho ao dia você fortalece os seus fios e unhas. Nos sabores uva verde, laranja e morango' },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Gummy-Vitamina-Capilar-Mix-Morango-Laranja-Uva-3-Potes.a164d424.jpg'},
            { property: 'twitter:image:alt:', content: 'Três potes do Gummy New Hair'},
           ]
        },


    }
</script>