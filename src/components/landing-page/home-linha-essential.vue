<template>
    <div>
        <MenuNH />
        <MenuMob />
        <BannerEssential />
        <Credibilidade cor="home" />
        <ForumulaEssential />
        <LinhasDeProdutos id="linhas" />
        <!-- <DescubraOTratamento /> -->
        <InstitucionalLinhaEssential />
        <CompraSegura />
        <DuvidasLinhaEssential />
        <MomentoNewHair />
        <Newsletter />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    import BannerEssential from './linha-essential/banner-essential.vue'
    import ForumulaEssential from './linha-essential/forumula-essential.vue'
    import MenuNH from '../gerais/menuNH.vue'
    import MenuMob from '../gerais/menuMob.vue'
    import LinhasDeProdutos from './linha-essential/linhas-de-produtos.vue'
    import InstitucionalLinhaEssential from './linha-essential/institucional-linha-essential.vue'
    import CompraSegura from '../gerais/compraSegura.vue'
    import Newsletter from '../gerais/newsletter/newsletter.vue'
    import MomentoNewHair from '../gerais/momento-new-hair/momento-new-hair.vue'
    import DuvidasLinhaEssential from './linha-essential/duvidas-linha-essential.vue'
    import Credibilidade from '../gerais/credibilidade.vue'

    export default {
        name: 'HomeEssential',

        components: {
            BannerEssential,
            ForumulaEssential,
            MenuNH,
            MenuMob,
            LinhasDeProdutos,
            InstitucionalLinhaEssential,
            CompraSegura,
            Newsletter,
            MomentoNewHair,
            DuvidasLinhaEssential,
            Credibilidade
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
                            indexar: true
                        }
                    }
                }
            }
            response.data.estrutura.seo.title = 'Tratamento Capilar: Linha Essential - Shampoo, condicionador, máscara, sérum e detox | NEW HAIR'
            response.data.estrutura.seo.description = 'Conheça as nossas linhas liso perfeito, S.O.S. reparação, pós química, cachos e ondas, força e brilho e detox'
            response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/tratamento-capilar-linha-essential'
            this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
            this.$aplicaSEO(response.data.estrutura)
            this.changeDadosPageAtual(response.data)
        },
        metaInfo: {
           meta:[
            { name: 'robots', content: 'index,follow'},
            { property: 'og:title', content: 'Tratamento Capilar: Linha Essential - Shampoo, condicionador, máscara, sérum e detox | NEW HAIR'},
            { property: 'og:description', content: 'Conheça as nossas linhas liso perfeito, S.O.S. reparação, pós química, cachos e ondas, força e brilho e detox'},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/tratamento-capilar-linha-essential'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/KIT%20LISO%20PERFEITO.02814c91.jpg'},
            { property: 'og:image:alt', content: 'Shampoo e condicionador liso perfeito linha essential'},
            { property: 'twitter:title', content: 'Tratamento Capilar: Linha Essential - Shampoo, condicionador, máscara, sérum e detox | NEW HAIR' },
            { property: 'twitter:description', content: 'Conheça as nossas linhas liso perfeito, S.O.S. reparação, pós química, cachos e ondas, força e brilho e detox' },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/KIT%20LISO%20PERFEITO.02814c91.jpg'},
            { property: 'twitter:image:alt:', content: 'Shampoo e condicionador liso perfeito linha essential'},
           ]
        },
    }
</script>