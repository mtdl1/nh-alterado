<template>
    <div>
        <!-- <CabecalhoHomem />
        <CabecalhoHomemMob /> -->
        <BannerMasculino />
        <Credibilidade cor="masculino" />
        
        <ComparativoFormulaMasc />
        <BeneficiosNewHairMasc />
        <InformacoesNutricionaisMasc />
        <GummyInformacionalMasc class="desk"/>
        <GummiesMasculinos class="mob" />
        <InformacoesNutricionaisGummyMasc />

        <!-- <ListaProdutosMasculino /> -->
        <VitrineProdutosMasc />
        <BannerResultadoGarantido />
        <CompraSegura />
        <DuvidasNewHairMasculino/>
        <MomentoNewHair class="mb-5" />
        <NewsletterMasculino />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import BannerMasculino from '../components/newhair-masculino/components/bannerMasculino.vue';
    // import CabecalhoHomem from '../components/gerais/cabecalho-homem.vue';
    // import CabecalhoHomemMob from '../components/gerais/cabecalho-homem-mob.vue';
    import BannerResultadoGarantido from '../components/newhair-masculino/components/bannerResultadoGarantido.vue';
    import CompraSegura from '../components/gerais/compraSegura.vue';
    import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue';
    import NewsletterMasculino from '../components/newhair-masculino/components/newsletter-masculino.vue';
    import Credibilidade from '../components/gerais/credibilidade.vue';
    import ComparativoFormulaMasc from '../components/newhair-masculino/components/comparativo-formula/comparativo-formula-masc.vue';
    import BeneficiosNewHairMasc from '../components/newhair-masculino/components/beneficios-new-hair/beneficios-new-hair-masc.vue';
    import InformacoesNutricionaisMasc from '../components/newhair-masculino/components/informacoes-nutricionais/informacoes-nutricionais-masc.vue';
    import GummyInformacionalMasc from '../components/newhair-masculino/components/gummy-informacional/gummy-informacional-masc.vue';
    import InformacoesNutricionaisGummyMasc from '../components/newhair-masculino/components/informacoes-nutricionais-gummy-masc/informacoes-nutricionais-gummy-masc.vue';
    import GummiesMasculinos from '../components/newhair-masculino/components/gummies-masculinos.vue';
    import VitrineProdutosMasc from '../components/produtos-exibicao/lp/vitrine-produtos-masc.vue';
    import DuvidasNewHairMasculino from '../components/gerais/duvidas/duvidasNewHairMasculino.vue';

    export default {

        components: { 
            BannerMasculino,
            // CabecalhoHomem,
            // CabecalhoHomemMob,
            // ListaProdutosMasculino,
            BannerResultadoGarantido,
            CompraSegura,
            MomentoNewHair,
            NewsletterMasculino,
            Credibilidade,
            ComparativoFormulaMasc,
            BeneficiosNewHairMasc,
            InformacoesNutricionaisMasc,
            GummyInformacionalMasc,
            InformacoesNutricionaisGummyMasc,
            GummiesMasculinos,
            VitrineProdutosMasc,
            DuvidasNewHairMasculino,
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
            response.data.estrutura.seo.title = 'Vitamina para cabelo masculina, reduz a calvície e acelera o crescimento da barba | NEW HAIR'
            response.data.estrutura.seo.description = "Vitamina para cabelos e barba em comprimidos ou goma com ácido hialurônico. Barba mais volumosas e cabelos mais saudáveis"
            response.data.estrutura.seo.canonical = "https://www.newhair.com.br/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina"
            this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
            this.$aplicaSEO(response.data.estrutura)
            this.changeDadosPageAtual(response.data)
        },
        metaInfo: {
           meta:[
            { property: 'og:title', content: 'Vitamina para cabelo masculina, reduz a calvície e acelera o crescimento da barba | NEW HAIR'},
            { property: 'og:description', content: 'Vitamina para cabelos e barba em comprimidos ou goma com ácido hialurônico. Barba mais volumosas e cabelos mais saudáveis'},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Masculino-3-Potes.f670598a.jpg'},
            { property: 'og:image:alt', content: 'Três potes da vitamina com ácido hialurônico para barba, cabelos e pele New Hair'},
            { property: 'twitter:title', content: 'Vitamina para cabelo masculina, reduz a calvície e acelera o crescimento da barba | NEW HAIR' },
            { property: 'twitter:description', content: 'Vitamina para cabelos e barba em comprimidos ou goma com ácido hialurônico. Barba mais volumosas e cabelos mais saudáveis' },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Masculino-3-Potes.f670598a.jpg'},
            { property: 'twitter:image:alt:', content: 'Três potes da vitamina com ácido hialurônico para barba, cabelos e pele New Hair'},
           ]
        },
        

    };
</script>
