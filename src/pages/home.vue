<template>
    <main>
        <MenuMob />
        <!-- <MenuNH /> -->

        <!-- Fazer skeleton funcionar com a eficiencia do loading lazy -->
        <!-- fazer as importacoes dos produtos com props do banner lateral e dos produtos, mais dinamico e limpo -->

        <transition name="fade">
            <div>
                <BannerHome />
                <Credibilidade cor="home" />

                <!-- Kits Mais Vendidos -->
                <KitsSortidos />

                <BannersLpCorpo />

                <!-- Kits Pote Branco -->
                <KitsNhLoja />
                <!-- Kits Pote Rosa -->
                <KitsNhbLoja />
                <!-- Kits Sérum Facial -->
                <KitsNhsLoja />

                <BannerCorpoDesconto />

                <!-- Kit Gummy Feminina -->
                <KitsNhgLoja />

                <NewsletterCorpo class="desk" />

                <!-- Kits Pote Azul -->
                <KitsNhmLoja />
                <!-- Kits Gummy Masculino -->
                <KitsNhgmLoja />

                <BannerDesafio />
                <InfoProds/>
                <OpinioesLojaTrustvox />
                <CompraSegura />
                <DuvidasHome/>
                <MomentoNewHair />
                <Newsletter />
            </div>
        </transition>
    </main>
</template>

<script>
import { mapMutations } from "vuex"
import BannerHome from '../components/gerais/banner-home.vue'
import Credibilidade from '../components/gerais/credibilidade.vue'
import CompraSegura from '../components/gerais/compraSegura.vue'
import MenuMob from '../components/gerais/menuMob.vue'
// import MenuNH from '../components/gerais/menuNH.vue'
import MomentoNewHair from '../components/gerais/momento-new-hair/momento-new-hair.vue'
import Newsletter from '../components/gerais/newsletter/newsletter.vue'
import KitsSortidos from '../components/produtos-exibicao/loja/kits-sortidos.vue'
import KitsNhbLoja from '../components/produtos-exibicao/loja/kits-nhb-loja.vue'
import KitsNhmLoja from '../components/produtos-exibicao/loja/kits-nhm-loja.vue'
import KitsNhgLoja from '../components/produtos-exibicao/loja/kits-nhg-loja.vue'
import KitsNhLoja from '../components/produtos-exibicao/loja/kits-nh-loja.vue'
import KitsNhgmLoja from '../components/produtos-exibicao/loja/kits-nhgm-loja.vue'
import BannerDesafio from '../components/gerais/bannerDesafio.vue'
import BannersLpCorpo from '../components/gerais/banners-lp-corpo/banners-lp-corpo.vue'
import BannerCorpoDesconto from '../components/gerais/banner-corpo-desconto/banner-corpo-desconto.vue'
import NewsletterCorpo from '../components/gerais/newsletter-corpo/newsletter-corpo.vue'
import KitsNhsLoja from '../components/produtos-exibicao/loja/kits-nhs-loja.vue'
import InfoProds from '../components/gerais/infoProds.vue'
import DuvidasHome from '../components/gerais/duvidas/duvidasHome.vue'
import OpinioesLojaTrustvox from '../components/gerais/avaliacoes/opinioes-loja-trustvox.vue'

export default {
    components: {
        // MenuNH,
        MenuMob,
        BannerHome,
        CompraSegura,
        DuvidasHome,
        MomentoNewHair,
        Newsletter,
        Credibilidade,
        KitsSortidos,
        KitsNhbLoja,
        KitsNhmLoja,
        KitsNhgLoja,
        KitsNhLoja,
        KitsNhgmLoja,
        BannerDesafio,
        BannersLpCorpo,
        BannerCorpoDesconto,
        NewsletterCorpo,
        KitsNhsLoja,
        InfoProds,
        OpinioesLojaTrustvox,
    },

    data() {
        return {
        };
    },

    methods: {
        ...mapMutations(['changeDadosPageAtual']),
    },

    created() {
        this.$requestSend("get", "/v2/front/url/home", {}, (success, response) => {
            if (success) {
                this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                response.data.estrutura.seo.title = "NEW HAIR | A vitamina para cabelos e unhas mais potente!"
                response.data.estrutura.seo.description = "New Hair: vitamina para cabelo, pele e unhas. Linha essencial, masculina e para mamães. Compre com frete grátis e em até 8x sem juros. Aproveite!"
                this.$aplicaSEO(response.data.estrutura)
                this.changeDadosPageAtual(response.data)
            }
        });
    },

    metaInfo: {
        meta:[
            { name: 'robots', content: 'index,follow'},
            { property: 'og:title', content: 'Cabelos e unhas mais fortes e crescendo como nunca! | NEW HAIR'},
            { property: 'og:description', content: "New Hair: vitamina para cabelo, pele e unhas. Linha essencial, masculina e para mamães. Compre com frete grátis e em até 8x sem juros. Aproveite!"},
            { property: 'og:site_name', content:'New Hair'},
            { property: 'og:type', content:'Website'},
            { property: 'og:url', content:'https://www.newhair.com.br/'},
            { property: 'og:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Acido-Hialuronico-Biotina-3-Potes.f0fb7883.jpg'},
            { property: 'og:image:alt', content: 'Três potes da vitamina para cabelos, pele e unha com ácido hialurônico New Hair vitamin'},
            { property: 'twitter:title', content: 'Cabelos e unhas mais fortes e crescendo como nunca! | NEW HAIR' },
            { property: 'twitter:description', content: "New Hair: vitamina para cabelo, pele e unhas. Linha essencial, masculina e para mamães. Compre com frete grátis e em até 8x sem juros. Aproveite!" },
            { property: 'twitter:card:', content: 'twitter:card: summary_large_image'},
            { property: 'twitter:image', content: 'https://www.newhair.com.br/tema/vitabe-vue/dist/img/New-Hair-Vitamina-Capilar-Acido-Hialuronico-Biotina-3-Potes.f0fb7883.jpg'},
            { property: 'twitter:image:alt:', content: 'Três potes da vitamina para cabelos, pele e unha ácido hialurônico New Hair vitamin '},
        ]
    },
}
</script>
