<template>
    <div id="app" @keyup.esc="closeFundo()">
        <transition name="fade">
            <div id="fundoEscuro" v-if="fundoEscuro" @click="closeFundo()"></div>
        </transition>
        <MenuNH />
        <VariaveisPublicas />
        <Datalayers v-if="this.$store.state.config" />
        <Snippets />
        <transition name="slideLeft">
            <CarrinhoLateral v-if="showCarrinho" :dataCarrinho="dataCarrinho" />
        </transition>
        <ChatHichat class="d-none" />
        <!-- <ChatWhatsApp class="d-flex" /> -->
        <transition name="fade">
            <router-view :key="$route.path" v-if="this.$store.state.dadosUser"/>
        </transition>
        <Rodape v-if="showRodape && $store.state.config != null" />
    </div>
</template>

<script>
    import Comunicacao from "@/comunicacao.js"
    import { mapActions } from 'vuex'
    import CarrinhoLateral from './components/gerais/carrinho-lateral.vue'
    import VariaveisPublicas from './components/gerais/head/variaveis-publicas.vue'
    import Datalayers from './components/gerais/head/datalayers.vue'
    import Snippets from './components/gerais/head/snippets.vue'
    import ChatHichat from './components/gerais/chatHichat.vue'
    // import ChatWhatsApp from './components/gerais/chatWhatsApp.vue'
    import Rodape from './components/gerais/rodape.vue'
    import MenuNH from './components/gerais/menuNH.vue'

    export default {
        components: {
            CarrinhoLateral,
            VariaveisPublicas,
            Datalayers,
            Snippets,
            ChatHichat,
            // ChatWhatsApp,
            Rodape,
                MenuNH,
        },

        data() {
            return {
                fundoEscuro: false,
                fundoEscuroData: {},
                showRodape: false,
                trocaCabecalho: false,
                showCarrinho: false,
                dataCarrinho: false,
            };
        },

        watch: {
            $route(newVal, oldVal) {
                if (newVal.path != oldVal.path) {
                    this.showContent()
                    window.addEventListener("scroll", this.showContent)
                    document.querySelector("html").scrollTop = 0
                    this.closeFundo()
                }
            },
        },

        methods: {
            ...mapActions(['getMainMenu', 'getDadosUser']),

            closeFundo() {
                this.fundoEscuro = false;
                if (this.fundoEscuroData.el) {
                    this.fundoEscuroData.el.$el.classList.remove(
                        this.fundoEscuroData.class
                    );
                }
                document.querySelector("body").style.overflow = ""
                Comunicacao.$emit("closeMenu")
            },

            showContent() {
                if (
                    document.querySelector("html").scrollTop > 100 ||
                    this.$route.query.wapRender == "true"
                ) {
                    window.removeEventListener("scroll", this.showContent)
                    Comunicacao.$emit("loadContent")
                    this.showRodape = true
                }
            },
        },

        created() {
            // document.cookie = "PHPSESSID=dh2d2cu891j697o3s2o5md8k7o"
            this.getMainMenu()
            this.getDadosUser()
            Comunicacao.$on("toggleCarrinho", (response) => {
                // this.showCarrinho = response.show
                this.dataCarrinho = response.data
                window.location.href = this.$siteUrl + "checkout/pagamento";
            })

            Comunicacao.$on("siteLoaded", () => {
                if (document.body.clientHeight < screen.height) {
                    window.removeEventListener("scroll", this.showContent)
                    Comunicacao.$emit("loadContent")
                    this.showRodape = true
                }
            })

            this.showContent()
            window.addEventListener("scroll", this.showContent)
            Comunicacao.$on("toggleFundoEscuro", (data) => {
                this.fundoEscuro = data.acao
                this.fundoEscuroData = data
            })
        },
        mounted() {
            this.urlPage = window.location.href.includes("cupom=picpay12") ? this.$toast.success("Você ganhou 12% de desconto ao pagar com o PicPay!", {
                position: "top-center"
            }) : 'cupom não se aplica'
        },
    }
</script>

<style scoped>
    #app {
        overflow-x: hidden;
    }

    #fundoEscuro {
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #00000047;
    }

    .slideLeft-leave-to,
    .slideLeft-enter {
        transform: translate(110%);
    }

    .slideLeft-leave-active,
    .slideLeft-enter-active {
        transition: 500ms;
    }

    .slideLeft-leave,
    .slideLeft-enter-to {
        transform: translate(0);
    }

    button#wCookieConsentBar-acceptAll:hover {
        padding: 10px 20px !important;
    }

    .wCookieConsent-button:hover {
        padding: 10px 20px !important;
    }

    @media screen and (max-width: 768px) {
        .mob {
            display: block;
        }

        .mobf {
            display: flex;
        }
    }
</style>
