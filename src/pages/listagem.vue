<template lang="html">
  <main>
    <!-- <CabecalhoHomem />
    <CabecalhoHomemMob /> -->
    <BannerMasculinoProduto />
    <!-- <ListaProdutosMasculino /> -->
    <VitrineProdutosMasc class="mt-5"/>
  </main>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
import VitrineProdutosMasc from '../components/produtos-exibicao/lp/vitrine-produtos-masc.vue';

    export default {
        components: {
    // CabecalhoHomem: () => import("@/components/gerais/cabecalho-homem.vue"),
    // CabecalhoHomemMob: () => import("@/components/gerais/cabecalho-homem-mob.vue"),
    BannerMasculinoProduto: () => import("@/components/newhair-masculino/components/bannerMasculinoProduto.vue"),
    VitrineProdutosMasc
},

        data() {
            return {
                listagemData: {},
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
            ...mapGetters(['tipoImg']),
        },

        watch: {
            $route(newVal, oldVal) {
                if (newVal.query != oldVal.query) {
                    this.requestData();
                }
            },
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

            genPath(path, onlyQuery) {
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1');
                    return path;
                }
                path = path.replace('?', '&');
                return path;
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
                        response.data.estrutura.seo.title = "Vitamina para cabelo masculina em comprimido ou goma sabor uva verde | NEW HAIR"
                        response.data.estrutura.seo.description = "Cabelos e barba mais fortes e saudáveis, a única fórmula com ácido hialurônico. Reduz a calvície e promove uma barba mais volumosa"
                        response.data.estrutura.seo.canonical = "https://www.newhair.com.br/produtos-masculino"
                        this.$aplicaSEO(response.data.estrutura);
                        this.loading.geral = false;
                        //VARIÁVEIS PÚBLICAS
                        this.changeDadosPageAtual(response.data);
                        return;
                    }

                    this.loading.geral = false;
                });
            }
        },

        created() {
            this.defineTypeListing();
            this.offsetAtual = this.$route.query.pg ? (this.$route.query.pg - 1) * this.limit : 0;
            this.requestData();
        }
        
    }
</script>