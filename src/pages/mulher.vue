<template>
    <main>
        <!-- <MenuNH />
        <MenuMob /> -->
        <transition name="fade">
            <SklGeral v-if="loading.geral" />
        </transition>
        <transition name="fade">
            <div v-if="!loading.geral">
                <BannerProduto />   
                <Credibilidade cor="home" />
                <Titulosheading1 class="mt-5" :h1="`Vitaminas para cabelo e unha em kits incríveis`" :h3="`Cabelos sem queda, brilhantes, fortes e com muito mais crescimento`"/>
                <VitrineProdutos />
                <BannerDesafio />
                <CompraSegura />
                <Newsletter />
            </div>
        </transition>
    </main>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    // import MenuNH from '../components/gerais/menuNH.vue';
    // import MenuMob from '../components/gerais/menuMob.vue';
    import Newsletter from '../components/gerais/newsletter/newsletter.vue';
    import SklGeral from '../components/skeletons/home.vue';
    import BannerProduto from '../components/gerais/bannerProduto.vue';
    import CompraSegura from '../components/gerais/compraSegura.vue';
    import Credibilidade from '../components/gerais/credibilidade.vue';
    import Titulosheading1 from '../components/produtos-exibicao/titulosheading1.vue';
    import BannerDesafio from '../components/gerais/bannerDesafio.vue';
    import VitrineProdutos from '../components/produtos-exibicao/lp/vitrine-produtos.vue';

    export default {
        components: {
            // MenuNH,
            // MenuMob,
            BannerProduto,
            SklGeral,
            Newsletter,
            CompraSegura,
            Credibilidade,
            Titulosheading1,
            BannerDesafio,
            VitrineProdutos,
        },

        data() {
            return {
                infos: 1,
                offsetAtual: 0,
                limit: this.$route.query.ipp ? this.$route.query.ipp : 12,
                typeListing: false,
                complementoUrlRequest: '',
                loading: {
                    geral: true,
                    prods: true
                }
            }
        },

        computed: {
            ...mapState({
                screenWidth: state => state.screenWidth,
            }),

            ...mapGetters(['tipoImg']),
        },

        methods: {
            ...mapMutations(['changeDadosPageAtual']),
            defineTypeListing() {
                switch (this.$route.name) {
                    case 'product/listing/landing-page':
                        this.typeListing = 'landingPage';
                        this.complementoUrlRequest = 'landing-page'
                        break;
                    case 'product/listing/brand':
                        this.typeListing = 'marca';
                        this.complementoUrlRequest = 'brand'
                        break;
                    case 'product/listing/search':
                        this.typeListing = 'busca';
                        this.complementoUrlRequest = 'search'
                        break;
                    default:
                        this.typeListing = 'categoria';
                        this.complementoUrlRequest = 'category'
                }
            },

            urlRequest() {
                let url;
                if (this.typeListing == 'search') {
                    url = `/v2/front/url/product/listing/${this.complementoUrlRequest}${this.genPath(this.$route.fullPath, true)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
                    return url;
                }
                url = `/v2/front/url/product/listing/${this.complementoUrlRequest}?url=${this.genPath(this.$route.fullPath)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
                return url;
            },

            requestData() {
                this.$requestSend('get', this.urlRequest(), {}, (success, response) => {
                    if (success) {
                        this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                         response.data.estrutura.seo.title = 'Kits com vitamina para cabelo em comprimidos e goma com ácido hialurônico | New Hair '
                         response.data.estrutura.seo.description = 'Conheça os kits com vitaminas para cabelo com ácido hialurônico. Kits para gestantes rico em biotina'
                         response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/produtos'
                        this.$aplicaSEO(response.data.estrutura);
                        this.loading.geral = false;
                        //VARIÁVEIS PÚBLICAS
                        this.changeDadosPageAtual(response.data);
                        return;
                    }

                    this.loading.geral = false;
                });
            },
            genPath(path, onlyQuery) {
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1');
                    return path;
                }
                path = path.replace('?', '&');
                return path;
            },
        },

        created() {
            this.defineTypeListing();
            this.offsetAtual = this.$route.query.pg ? (this.$route.query.pg - 1) * this.limit : 0;
            this.requestData();
        },

    }
</script>

<style scoped>
    .pt-0 {
        padding-top: 0 !important;
    }
    
    .tb img {
        width: 350px !important;
        margin: 0 auto;
    }

    .tablenutri {
        width: 90% !important;
        display: flex;
    }

    h1{
        text-align: center;
        font: normal normal bold 32px/36px Open Sans;
        letter-spacing: -1.28px;
        color: #222222;
    }

    h2 {
        font-size: 25px;
        color: #ff4289;
        font-weight: 700;
        font-family: 'Open Sans', sans-serif !important;
        text-align: center;
        padding-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: -.9px;
    }

    .infos-nav button {
        width: 370px;
        text-align: center;
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #888;
        font-weight: 700;
        border: 1px solid #eee;
        border-radius: 5px;
        font-family: 'Open Sans', sans-serif !important;
    }

    .infos-nav button.itemInfosActiver,
    .infos-nav button:hover {
        background-color: #ff4289;
        color: #fff;
    }

    .infos-texts p {
        font-size: 14px;
        padding: 40px 0 25px;
        color: #656565;
        font-family: 'Roboto Regular', sans-serif !important;
    }

    @media (max-width: 767px) {
        .tablenutri {
            margin: 0;
        }

        .infos-texts {
            margin: 20px 20px 20px 20px;
        }

        .tb .imgGummie {
            max-width: 100% !important;

        }

        .tb .imgGummie {
            margin-top: 25px;
        }

        .infos-nav {
            flex-direction: column;
        }

        .infos-nav button {
            width: 100%;
            margin-bottom: 5px;
        }
        
    }
</style>
