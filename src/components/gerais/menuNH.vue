<template>
    <header class="desk">
        <!-- <a :href="linkTarja">
            <video autoplay muted loop playsinline>
                <source src="@/assets/img/banners/home/desk/Mes-do-Cliente-New-Hair-Desktop (1).mp4" type="video/mp4">
            </video>
        </a> -->
        <div class="container px-0">
            <nav class="navbar navbar-expand-lg px-0">
                <ul class="navbar-nav mr-auto d-flex align-itens-center">
                    <BarraDePesquisa />
                    <ul class="navbar-nav mr-auto ulMenu ml-4">
                        <li class="nav-item dropdown d-flex align-itens-center">
                            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">PRODUTOS</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a href="/vitamina-para-cabelo-e-unha-em-comprimido" class="dropdown-item nav-link">Vitamina com Ácido Hialurônico</a>
                                <a href="/new-hair-gummy-vitamina-em-goma-para-cabelo" class="dropdown-item nav-link">Vitamina em Gomas</a>
                                <a href="/vitamina-para-gestante-e-lactantes" class="dropdown-item nav-link">Vitamina para Mamães</a>
                                <a href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina" class="dropdown-item nav-link">Vitamina para Homens</a>
                                <a href="/serum-facial" class="dropdown-item nav-link">Sérum Facial</a>
                                <a href="/tratamento-capilar-linha-essential" class="dropdown-item nav-link">Linha Essential</a>
                                <a href="/produtos" class="dropdown-item nav-link">Todos os Produtos</a>
                            </div>
                        </li>
                    </ul>
                </ul>
                <a href="/" class="navbar-brand mx-auto">
                    <img src="@/assets/img/logo_newhair.png" alt="">
                </a>
                <ul class="navbar-nav ml-auto position-relative justify-content-end align-items-center">
                    <li class="nav-item">
                        <a :href="`${$siteUrl}pagina/atendimento`" class="nav-link">ATENDIMENTO</a>
                    </li>
                    <li class="nav-item pr-3">
                        <a :href="`${$siteUrl}checkout/acesso/`" class="nav-link">MINHA CONTA</a>
                    </li>
                    <li class="nav-item pr-0 mr-0">
                        <a :href="`${$siteUrl}/checkout/carrinho/`" @click.prevent="openCarrinho()">
                            <img src="@/assets/img/CART.svg" alt="">
                            <div class="headerContainerTop-carrinho-num">
                                <p>{{ dadosCarrinho.quantidadeItens }}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- <div class="submenu-nh">
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/vitamina-para-cabelo-e-unha-em-comprimido">Vitamina com Ácido Hialurônico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/new-hair-gummy-vitamina-em-goma-para-cabelo">Vitamina em Gomas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/vitamina-para-gestante-e-lactantes">Para mamães</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tratamento-capilar-linha-essential">Linha Essential</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina">Linha Masculina</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/produtos">Todos os produtos <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div> -->
    </header>
</template>

<script>
    import comunicacao from "@/comunicacao.js"
    import { mapState, mapMutations } from 'vuex'
    import BarraDePesquisa from './menu/barra-de-pesquisa.vue';

    export default {
        data() {
            return {
                dadosCarrinho: false,
                linkTarja: "/produtos",
                
            };
        },
        components: {
                BarraDePesquisa
        },
        computed: {
            ...mapState(['screenWidth', 'menuLoaded', 'dadosUser'])
        },
        methods: {
            ...mapMutations(['changeStatusMenu']),
            openMenu() { 
                comunicacao.$emit("openMenu")
            },
            openCarrinho() {
                comunicacao.$emit("toggleCarrinho", { show: true });
            },
        },
        mounted() {
            comunicacao.$on("updateSubTotal", (response) => {
                this.subTotalCarrinho = response.valor;
            });
            this.$requestSend( "get", "/v2/front/checkout/cart", {},
                (success, response) => {
                    this.dadosCarrinho = response.data;
                    if (
                        response.data &&
                        response.data.subtotal &&
                        response.data.subtotal.valor
                    ) {
                        this.dadosSubTotal = response.data.subtotal.valor;
                    }
                    comunicacao.$emit("carrinhoCarregado", response.data);
                }
            );
            this.$requestSend( "get", "/v2/front/checkout/cart", {},
                (success, response) => {
                    this.dadosCarrinho = response.data;
                    comunicacao.$emit("carrinhoCarregado", response.data);
                }
            );
        },
        created() {
            comunicacao.$on( "updateNumCarrinho", (qtd) => (this.dadosCarrinho.quantidadeItens = qtd) );
            // se a url tiver /produtos o link da tarja é #produtos
            if (window.location.href.indexOf("/produtos") > -1) {
                this.linkTarja = "#produtos";
            }

        },
    };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');
    header {
        background-color: var(--cor-secundaria);
        position: relative;
    }

    ul.navbar-nav {
        width: 33%;
    }

    a.nav-link {
        color: #fff;
        font: normal normal 700 15px/19px 'Open Sans';
        letter-spacing: -0.72px;
        text-transform: lowercase;
    }

    .dropdown-item.nav-link:hover {
    background-color: #FFF!important;
}

    .headerContainerTop-carrinho-num {
        position: absolute;
        font-size: 10px;
        color: #ff4289;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        top: -3px;
        right: -3px;
    }

    .headerContainerTop-carrinho-num p{
        line-height: 1;
        padding-top: 1px;
        padding-left: 1px;
        width: 11px;
        text-align: center;
    }

    .navbar .nav-item .dropdown-menu{ display: none; }
	.navbar .nav-item:hover .dropdown-menu { 
        display: block;
        width: 260px !important;
        margin-left: -10px !important;
        border: 1px solid #dbdbdb;
        padding: 0;
    }

    .navbar .nav-item .dropdown-menu{ margin-top:0; }

    .dropdown-menu a {
        font-weight: 500 !important;
        padding-left: 16px !important;
        color: #000 !important;
    }

    .dropdown-toggle::after {
        display: block !important;
        margin-left: unset !important;
        border-top: unset !important;
        border-right: unset !important;
        border-bottom: unset !important;
        border-left: unset !important;
        font-family: "Font Awesome 5 Free";
        font-weight: 600 !important;
        content: "\f107";
        padding-right: 5px;
        color: #FFF;
        font-size: 13px;
        padding-left: 5px;
        padding-top: 4px;
    }

    .nav-item.dropdown:hover .dropdown-toggle::after {
        content: "\f106";
    }

    .dropdown-item.nav-link:hover, .dropdown-item.nav-link:active {
        background-color: #ff4289!important;
        color: white!important;
        font-weight: bold!important;
    }

    .faixadestaquemenu{
        background-color: #ffd516;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .faixadestaquemenu p{
        font-size: 13px;
        font-family: 'Open Sans', sans-serif;
        line-height: 24px;
        color: #000;
        font-weight: bold;
    }

    .submenu-nh ul.navbar-nav {
        width: 60%;
        padding: 10px 0;
    }

    .submenu-nh li.nav-item {
        border-right: 1px solid #999999;
        margin-right: 10px;
        padding-right: 10px;
    }

    .submenu-nh li.nav-item:last-child {
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
    }

    .submenu-nh .nav-link{
        font: normal normal bold 16px/14px Open Sans!important;
        letter-spacing: -0.72px;
        color: #333333!important;
        padding: 0;
        transition: 0.5s;
    }

    .submenu-nh .nav-link:hover {
        color: #ff4289!important;
        transition: 0.5s;
    }

    @media screen and (max-width:768px) {
        header.desk {
            display: none !important;
        }
    }
.faixa-destaque-black-friday {
    padding: 5px 0;
    background-color: #edbf2c;
    color: #000;
    font-weight: bold;
    width: 400%;
    margin-left: -60px;
}

.faixa-destaque-black-friday p {
    width: fit-content;
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    text-transform: uppercase;
}

.faixa-destaque-black-friday img {
    width: 15px;
    margin-left: 5px;
}
</style>