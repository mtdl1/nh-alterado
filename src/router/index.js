import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Erro404 = () => import(/* webpackChunkName: "erro404" */'@/pages/404.vue')
const Home = () => import(/* webpackChunkName: "home" */'@/pages/home.vue')
const Produtos = () => import(/* webpackChunkName: "produtos" */'@/pages/mulher.vue')
const Masculino = () => import(/* webpackChunkName: "masculino" */'@/pages/newhair-masculino.vue')
const ProdutosMasculino = () => import(/* webpackChunkName: "produtosmasculino" */'@/pages/listagem.vue')
const HomeTaboola = () => import(/* webpackChunkName: "homeTaboola" */'@/components/taboola/home-taboola.vue')
const HomeTesteB = () => import(/* webpackChunkName: "homeTaboola" */'@/pages/home.vue')
const HomeTesteC = () => import(/* webpackChunkName: "homeTaboola" */'@/pages/home.vue')
const HomeTesteD = () => import(/* webpackChunkName: "homeTaboola" */'@/pages/home.vue')
const QuemSomos = () => import(/* webpackChunkName: "quemsomos" */'@/pages/quem-somos.vue')
const Institucionais = () => import(/* webpackChunkName: "institucionais" */'@/pages/institucionais.vue')
const PoliticaPagamento = () => import(/* webpackChunkName: "politicapagamento" */'@/components/institucionais/paginas/politica-de-pagamento.vue')
const PoliticaPrivacidade = () => import(/* webpackChunkName: "politicaprivacidade" */'@/components/institucionais/paginas/politica-de-privacidade.vue')
const Faq = () => import(/* webpackChunkName: "faq" */'@/components/institucionais/paginas/duvidas-frequentes.vue')
const FaleConosco = () => import(/* webpackChunkName: "faleconosco" */'@/components/institucionais/paginas/fale-conosco.vue')
const Termos = () => import(/* webpackChunkName: "termos" */'@/components/institucionais/paginas/termos.vue')
const ReferenciasCientificas = () => import(/* webpackChunkName: "referenciascientificas" */'@/components/institucionais/paginas/referencias-cientificas.vue')
const ProdutoSingle = () => import(/* webpackChunkName: "produtosingle" */'@/pages/Produto-Single.vue')
const Apresentacao = () => import(/* webpackChunkName: "apresentacao" */'@/pages/Apresentacao.vue')
const BuscaListining = () => import(/* webpackChunkName: "buscalistining" */'@/pages/listagem.vue')
const Listagem = () => import(/* webpackChunkName: "listagem" */'@/pages/listagem.vue')
// const ListagemValidaPage = () => import(/* webpackChunkName: "listagemvalidapage" */'@/components/listagem/valida-page.vue')

const SingleNewHairGummyMasc = () => import(/* webpackChunkName: "singlenewhairgummymasc" */'@/components/single/new-gummy-masculino/single-new-gummy-masculino.vue')
const SingleNewHairGummyMasc3Potes = () => import(/* webpackChunkName: "singlenewhairgummymasc3potes" */'@/components/single/new-gummy-masculino/single-new-gummy-masculino-3-potes.vue')
const SingleNewHairGummyMasc6Potes = () => import(/* webpackChunkName: "singlenewhairgummymasc6potes" */'@/components/single/new-gummy-masculino/single-new-gummy-masculino-6-potes.vue')

const SingleNewHairGummy = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy.vue')
const SingleNewHairGummyKit3 = () => import(/* webpackChunkName: "singlenewhair3gummy" */'@/components/single/new-gummy/single-new-gummy-kit-3.vue')
const SingleNewHairGummyKit7 = () => import(/* webpackChunkName: "singlenewhair7gummy" */'@/components/single/new-gummy/single-new-gummy-kit-7.vue')
// Single New Hair Gummy morango 3 potes
const singleNewGummyMorango3 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-morango-kit-3.vue')
// Single New Hair Gummy laranja 3 potes 
const singleNewGummyLaranja3 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-laranja-kit-3.vue')
// Single New Hair Gummy uva 3 potes
const singleNewGummyUva3 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-uva-kit-3.vue')
//Single New Hair Gummy Uva 6 potes
const singleNewGummyUva7 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-uva-kit-7.vue')
//Single New Hair Gummy Laranja 6 potes
const singleNewGummyLaranja7 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-laranja-kit-7.vue')
//Single New Hair Gummy Morango 6 potes
const singleNewGummyMorango7 = () => import(/* webpackChunkName: "singlenewhairgummy" */'@/components/single/new-gummy/single-new-gummy-morango-kit-7.vue')

const LandingPageEssential = () => import(/* webpackChunkName: "landingpageessential" */'@/components/landing-page/home-linha-essential.vue')
const LPListaVipBlackFriday = () => import ( /* webpackChunkName: "lpListaVipBlackFriday" */ '@/components/landing-page/lista-vip-black-friday/lista-vip-black-friday.vue');

const LpNewHairVitamin = () => import ( /* webpackChunkName: "lpnewhairvitamin" */ '@/pages/newhair-vitamin.vue');
const VitaminaMamae = () => import(/* webpackChunkName: "vitaminamamae" */'@/pages/vitamina-mamae.vue')
const GummyCapilar = () => import(/* webpackChunkName: "gummycapilar" */'@/pages/gummy-capilar.vue')
const SerumFacial = () => import(/* webpackChunkName: "serumfacial" */'@/pages/serum-facial.vue')
const ProdutosHibrida = () => import(/* webpackChunkName: "produtoshibrida" */'@/pages/produtos-hibrida.vue')

// SIngle Novos Produtos Março 2023
const SingleNewHairVitamin = () => import(/* webpackChunkName: "singlenewhairvitamin" */'@/components/single/vitamin-feminino/single-new-hair-feminino.vue')
const SingleNewHairVitamin3Potes = () => import(/* webpackChunkName: "singlenewhairvitamin" */'@/components/single/vitamin-feminino/single-new-hair-feminino-3-potes.vue')
const SingleNewHairVitamin7Potes = () => import(/* webpackChunkName: "singlenewhairvitamin" */'@/components/single/vitamin-feminino/single-new-hair-feminino-7-potes.vue')
const SingleNewHairVitaminMamae = () => import(/* webpackChunkName: "singlenewhairvitaminmamae" */'@/components/single/vitamin-mamae/single-new-hair-mamae.vue')
const SingleNewHairVitaminMamae3Potes = () => import(/* webpackChunkName: "singlenewhairvitaminmamae3potes" */'@/components/single/vitamin-mamae/single-new-hair-mamae-3-potes.vue')
const SingleNewHairVitaminMamae7Potes = () => import(/* webpackChunkName: "singlenewhairvitaminmamae7potes" */'@/components/single/vitamin-mamae/single-new-hair-mamae-7-potes.vue')
const SingleNewHairSerumFacial = () => import(/* webpackChunkName: "singlenewhairserumfacial" */'@/components/single/serum-facial/single-new-hair-serum-facial.vue')
const SingleNewHairSerumFacial2Frascos = () => import(/* webpackChunkName: "singlenewhairserumfacial2frascos" */'@/components/single/serum-facial/single-new-hair-serum-facial-2-frascos.vue')
const SingleNewHairSerumFacial3Frascos = () => import(/* webpackChunkName: "singlenewhairserumfacial3frascos" */'@/components/single/serum-facial/single-new-hair-serum-facial-3-frascos.vue')

const SingleNewHairVitaminMasculino = () => import(/* webpackChunkName: "singlenewhairmasculino" */'@/components/single/vitamin-masculino/vitain-masculino.vue')
const SingleNewHairVitaminMasculino3 = () => import(/* webpackChunkName: "singlenewhairmasculino3" */'@/components/single/vitamin-masculino/vitain-masculino-3-potes.vue')
const SingleNewHairVitaminMasculino7 = () => import(/* webpackChunkName: "singlenewhairmasculino7" */'@/components/single/vitamin-masculino/vitain-masculino-7-potes.vue')
// SIngle Novos Produtos Março 2023

const SingleNewHairLisoPerfeito = () => import(/* webpackChunkName: "singlenewhairlisoperfeito" */'@/components/single/linha-essential/liso-perfeito/single-liso-perfeito.vue')
const SingleNewHairPosQuimica = () => import(/* webpackChunkName: "singlenewhairposquimica" */'@/components/single/linha-essential/pos-quimica/single-pos-quimica.vue')
const SingleNewHairCachosOndas = () => import(/* webpackChunkName: "singlenewhaircachosondas" */'@/components/single/linha-essential/cachos-ondas/single-cachos-ondas.vue')
const SingleNewHairSosReparacao = () => import(/* webpackChunkName: "singlenewhairsosreparacao" */'@/components/single/linha-essential/sos-reparacao/single-sos-reparacao.vue')
const SingleNewHairForcaBrilho = () => import(/* webpackChunkName: "singlenewhairforcabrilho" */'@/components/single/linha-essential/forca-brilho/single-forca-brilho.vue')
const SingleNewHairDetox = () => import(/* webpackChunkName: "singlenewhairdetox" */'@/components/single/linha-essential/detox/single-detox.vue')

const SingleNewHairEscovaAlisadora = () => import(/* webpackChunkName: "singlenewhairescovaalisadora" */'@/components/single/escova-alisadora/single-escova-alisadora.vue')
const SingleVitaminBranco = () => import(/* webpackChunkName: "singlevitaminbranco" */'@/pages/single/vitamina-branca.vue')

// Pagina já sou cliente
const JaSouCliente = () => import(/* webpackChunkName: "jasoucliente" */'@/components/ja-sou-cliente/ja-sou-cliente.vue')

const routes = [{
        path: '*',
        name: 'Not_found',
        component: Erro404
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: Produtos
    },
    {
        path: '/newhair-masculino',
        name: 'masculino',
        component: Masculino
    },
    {
        path: '/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina',
        name: 'masculino2',
        component: Masculino
    },
    {
        path: '/produtos-masculino',
        name: 'produtosMasculino',
        component: ProdutosMasculino
    },
    {
        path: '/home',
        name: 'homeTaboola',
        component: HomeTaboola
    },
    {
        path: '/homeTesteB',
        name: 'homeTesteB',
        component: HomeTesteB
    },
    {
        path: '/homeTesteC',
        name: 'homeTesteC',
        component: HomeTesteC
    },
    {
        path: '/homeTesteD',
        name: 'homeTesteD',
        component: HomeTesteD
    },
    {
        path: '/ja-sou-cliente',
        name: 'ja-sou-cliente',
        component: JaSouCliente
    },
    {
        path: '/quem-somos',
        name: 'quem-somos',
        component: QuemSomos
    },
    {
        path: '/linha-essential',
        name: 'landing-page-essential',
        component: LandingPageEssential
    },
    {
        path: '/tratamento-capilar-linha-essential',
        name: 'landing-page-essential2',
        component: LandingPageEssential
    },
    {
        path: '/vitamina-mamae',
        name: 'vitamina-mamae',
        component: VitaminaMamae
    },
    {
        path: '/vitamina-para-gestante-e-lactantes',
        name: 'vitamina-mamae2',
        component: VitaminaMamae
    },
    {
        path: '/new-hair-vitamin',
        name: 'new-hair-vitamin',
        component: LpNewHairVitamin
    },
    {
        path: '/vitamina-para-cabelo-e-unha-em-comprimido',
        name: 'new-hair-vitamin2',
        component: LpNewHairVitamin
    },
    {
        path: '/gummy-capilar',
        name: 'gummy-capilar',
        component: GummyCapilar
    },
    {
        path: '/massageador-facial.html',
        name: 'vitamimbranco',
        component: SingleVitaminBranco
    },
    // {
    //     path: '/new-hair-gummy-vitamina-em-goma-para-cabelo',
    //     name: 'gummy-capilar2',
    //     component: GummyCapilar
    // },
    {
        path: '/serum-facial',
        name: 'serum-facial',
        component: SerumFacial
    },
    {
        path: '/new-hair-gummy-vitamina-em-goma-para-cabelo',
        name: 'gummy-capilar3',
        component: GummyCapilar
    },
    {
        path: '/produtos-hibrida',
        name: 'produtos-hibrida',
        component: ProdutosHibrida
    },
    {
        path: '/melhor-vitamina-para-cabelo-e-unha',
        name: 'produtos-hibrida2',
        component: ProdutosHibrida
    },
    {
        path: '/lista-vip-black-friday',
        name: 'lp-lista-vip-black-friday',
        component: LPListaVipBlackFriday
    },
    {
        path: '/pagina',
        name: 'institucionais',
        component: Institucionais,
        children: [
            {
                name: 'politica-de-pagamento',
                path: 'politica-de-pagamento',
                component: PoliticaPagamento
            },
            {
                name: 'politica-de-pagamento2',
                path: 'politica-de-reembolso',
                component: PoliticaPagamento
            },
            {
                name: 'politica-de-privacidade',
                path: 'politica-de-privacidade',
                component: PoliticaPrivacidade
            },
            {
                name: 'faq',
                path: 'duvidas-frequentes',
                component: Faq
            },
            {
                name: 'fale-conosco',
                path: 'atendimento',
                component: FaleConosco
            },
            {
                name: 'termos',
                path: 'termos',
                component: Termos
            },
            {
                name: 'referencias-cientificas',
                path: 'referencias-cientificas',
                component: ReferenciasCientificas
            },
        ]
    },

    // ROTAS PARA PÁGINA DE PRODUTOS SINGLE
    {
        path: '/pagina',
        name: 'produto-single',
        component: ProdutoSingle,
        children: [
            // Páginas de produto-single
            { // Single Dinâmico Gummy
                name: 'SingleNHGK3',
                path: '/new-hair-gummies*',
                component: SingleNewHairGummyKit3
            },
            { // Single Dinâmico Gummy
                name: 'SingleNHG',
                path: '/new-hair-gummy-vitamina-em-goma-para-cabelos-e-unhas-6-mais-1-potes.html',
                component: SingleNewHairGummyKit7
            },
            { // Single Dinâmico Gummy Masculino
                name: 'SingleNHM',
                path: '/new-hair-gummy-uva-verde-vitamina-em-goma-para-cabelos.html',
                component: SingleNewHairGummyMasc
            },
            { // Single Dinâmico Gummy Masculino
                name: 'SingleNHMK3',
                path: '/new-hair-gummy-uva-verde-vitamina-em-goma-para-cabelos-3-potes-masculino.html',
                component: SingleNewHairGummyMasc3Potes
            },
            { // Single Dinâmico Gummy Masculino
                name: 'SingleNHMK6',
                path: '/new-hair-gummy-uva-verde-vitamina-em-goma-para-cabelos-61-potes-masculino.html',
                component: SingleNewHairGummyMasc6Potes
            },
            { // Single Novos Gummies Kit 3
                name: 'SingleNHNVGMK3',
                path: '/new-hair-gummy-vitamina-em-goma-para-cabelos-e-unhas-3-potes*',
                component: SingleNewHairGummyKit3
            },
            // Single 3 Potes Gummy Morango 
            {
                name:'singleNewGummyMorango3',
                path: '/new-hair-gummy-morango-vitamina-em-goma-para-cabelos-e-unhas-3-potes.html',
                component: singleNewGummyMorango3
            },
            // Single 3 Potes Gummy Laranja
            {
                name:'SingleNHNVGLARANJAKIT3',
                path: '/new-hair-gummy-laranja-vitamina-em-goma-para-cabelos-e-unhas-3-potes.html',
                component: singleNewGummyLaranja3
            },
            //Single 3 Potes Gummy Uva
            {
                name:'SingleNewGummyUva3',
                path: '/new-hair-gummy-laranja-vitamina-em-goma-para-cabelos-e-unhas-3-potes.html',
                component: singleNewGummyUva3
            },
            //Single 6 potes Gummy Morango
            {
                name:'singleNewGummyMorango7',
                path: '/new-hair-gummy-morango-vitamina-em-goma-para-cabelos-e-unhas-6-potes.html',
                component: singleNewGummyMorango7
            },
            //Single 6 potes Gummy Laranja
            {
                name:'singleNewGummyLaranja7',
                path: '/new-hair-gummy-laranja-vitamina-em-goma-para-cabelos-e-unhas-6-potes.html',
                component: singleNewGummyLaranja7
            },
            //Single 6 potes Gummy uva
            {
                name:'singleNewGummyUva7',
                path: '/new-hair-gummy-uva-vitamina-em-goma-para-cabelos-e-unhas-6-potes.html',
                component: singleNewGummyUva7
            },
            {
                name: 'SingleNHNVGM',
                path: '/new-hair-gummy*',
                component: SingleNewHairGummy
            },
            // Single Linha Essential
            // Single Liso perfeito kit completo
            {
                name: 'SingleNHHCLP',
                path: '/new-hair-home-care-essential-liso-perfeito.html',
                component: SingleNewHairLisoPerfeito
            },
            {
                name: 'SingleNHHCLP1',
                path: '/kit-liso-perfeito-shampoo-condicionador-spray-mascara-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            // Single Liso perfeito kit básico
            {
                name: 'SingleNHHCLP2',
                path: '/kit-liso-perfeito-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            //Single Spray Liso Perfeito
            {
                name: 'SingleNHHCLP3',
                path: '/spray-pre-escova-liso-perfeito-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            //Single Mascara Liso Perfeito
            {
                name: 'SingleNHHCLP4',
                path: '/mascara-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            //Single Shampoo Liso Perfeito
            {
                name: 'SingleNHHCLP5',
                path: '/shampoo-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            //Single Condicionador Liso Perfeito
            {
                name: 'SingleNHHCLP6',
                path: '/condicionador-liso-perfeito-cabelos-alisados-new-hair-home-care-essential.html',
                component: SingleNewHairLisoPerfeito
            },
            //Singles Pós Química
            //Single Kit completo
            {
                name: 'SingleNHHCPQ',
                path: '/new-hair-home-care-essential-pos-quimica.html',
                component: SingleNewHairPosQuimica
            },
            {
                name: 'SingleNHHCPQ1',
                path: '/kit-pos-quimica-shampoo-condicionador-mascara-new-hair-home-care-essential.html',
                component: SingleNewHairPosQuimica
            },
            //Single Kit Basico
            {
                name: 'SingleNHHCPQ2',
                path: '/kit-pos-quimica-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairPosQuimica
            },
            //Single Máscara Pós Química
            {
                name: 'SingleNHHCPQ3',
                path: '/mascara-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairPosQuimica
            },
            //Single Shampoo Pós Química
            {
                name: 'SingleNHHCPQ4',
                path: '/shampoo-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairPosQuimica
            },
            //Single Shampoo Pós Química
            {
                name: 'SingleNHHCPQ5',
                path: '/condicionador-pos-quimica-para-cabelos-danificados-ressecados-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairPosQuimica
            },
            // Single Cachos e ondas
            //Single Kit completo 
            {
                name: 'SingleNHHCCO',
                path: '/new-hair-home-care-essential-cachos-e-ondas.html',
                component: SingleNewHairCachosOndas
            },
            {
                name: 'SingleNHHCCO1',
                path: '/kit-cachos-e-ondas-shampoo-condicionador-creme-ativador-serum-reparador-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },
            //Single Kit Basico
            {
                name: 'SingleNHHCCO2',
                path: '/kit-cachos-e-ondas-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },
            //Single condicionador
            {
                name: 'SingleNHHCCO3',
                path: '/condicionador-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },
            //Single shampoo cachos e ondas
            {
                name: 'SingleNHHCCO4',
                path: '/shampoo-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },
            //Single ativador de cachos
            {
                name: 'SingleNHHCCO5',
                path: '/creme-ativador-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },
            //Single cachos e ondas sérum
            {
                name: 'SingleNHHCCO6',
                path: '/serum-cachos-e-ondas-cabelos-cacheados-new-hair-home-care-essential.html',
                component: SingleNewHairCachosOndas
            },

            // Singles SOS Reparação
            //Single Kit Completo SOS Reparação
            {
                name: 'SingleNHHCSOS',
                path: '/new-hair-home-care-essential-sos-reparacao.html',
                component: SingleNewHairSosReparacao
            },
            //Single Kit Completo SOS Reparação
            {
                name: 'SingleNHHCSOS1',
                path: '/kit-sos-reparacao-shampoo-condicionador-mascara-new-hair-home-care-essential.html',
                component: SingleNewHairSosReparacao
            },
            //Single Kit Basico SOS Reparação
            {
                name: 'SingleNHHCSOS2',
                path: '/kit-sos-reparacao-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairSosReparacao
            },
            //Single Máscara SOS Reparação
            {
                name: 'SingleNHHCSOS3',
                path: '/mascara-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html',
                component: SingleNewHairSosReparacao
            },
            //Single Shampoo SOS Reparação
            {
                name: 'SingleNHHCSOS4',
                path: '/shampoo-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html',
                component: SingleNewHairSosReparacao
            },
            //Single Condicionador SOS Reparação
            {
                name: 'SingleNHHCSOS5',
                path: '/condicionador-sos-reparacao-para-cabelos-danificados-new-hair-home-care-essential.html',
                component: SingleNewHairSosReparacao
            },


            // Singles Força e Brilho
            //Single força e brilho kit completo
            {
                name: 'SingleNHHCFB',
                path: '/new-hair-home-care-essential-forca-e-brilho.html',
                component: SingleNewHairForcaBrilho
            },
            {
                name: 'SingleNHHCFB1',
                path: '/kit-forca-e-brilho-shampoo-condicionador-serum-reparador-mascara-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },
            //Single força e brilho kit basico
            {
                name: 'SingleNHHCFB2',
                path: '/kit-forca-e-brilho-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },
            //Single força e brilho Máscara
            {
                name: 'SingleNHHCFB3',
                path: '/mascara-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },
            //Single força e brilho Shampoo
            {
                name: 'SingleNHHCFB4',
                path: '/shampoo-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },
            //Single força e brilho Condicionador
            {
                name: 'SingleNHHCFB5',
                path: '/condicionador-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },
            //Single força e brilho Serum
            {
                name: 'SingleNHHCFB6',
                path: '/serum-forca-e-brilho-cabelos-quebradicos-new-hair-home-care-essential.html',
                component: SingleNewHairForcaBrilho
            },

            // Single Detox
            //Single Detox Kit Completo
            {
                name: 'SingleNHHCDT1',
                path: '/new-hair-home-care-essential-detox.html',
                component: SingleNewHairDetox
            },
            {
                name: 'SingleNHHCDT2',
                path: '/kit-super-detox-shampoo-condicionador-serum-reparador-new-hair-home-care-essential.html',
                component: SingleNewHairDetox
            },
            //single kit basico super detox
            {
                name: 'SingleNHHCDT3',
                path: '/kit-super-detox-shampoo-condicionador-new-hair-home-care-essential.html',
                component: SingleNewHairDetox
            },
            //Single Detox condicionador
            {
                name: 'SingleNHHCDT4',
                path: '/condicionador-super-detox-cabelos-oleosos-new-hair-home-care-essential.html',
                component: SingleNewHairDetox
            },
            //Single Detox shampoo
            {
                name: 'SingleNHHCDT5',
                path: '/shampoo-super-detox-cabelos-oleosos-new-hair-home-care-essential.html',
                component: SingleNewHairDetox
            },
            //Single Detox sérum
            {
                name: 'SingleNHHCDT6',
                path: '/serum-super-detox-cabelos-oleosos-new-hair-home-care-essential.html',
                component: SingleNewHairDetox
            },

            {
                name: 'SingleNHEA',
                path: '/new-hair-escova-alisadora.html',
                component: SingleNewHairEscovaAlisadora
            },
            // Single´s novos produtos Março 2023
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronicoebiotina.html',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronicoebiotina.html',
                component: SingleNewHairVitamin,
            },
            {
                path: '/vitamina-para-cabelo-com-acido-hialuronico-e-biotina.html',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronicoebiotina.html2',
                component: SingleNewHairVitamin,
            },
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-3-potes.html',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-3-potes.html',
                component: SingleNewHairVitamin3Potes,
            },
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-7-potes.html',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-7-potes.html',
                component: SingleNewHairVitamin7Potes,
            },
            {
                path: '/new-hair-vitamina-capilar-com-biotina.html',
                name: 'new-hair-vitamina-capilar-com-biotina',
                component: SingleNewHairVitaminMamae,
            },
            {
                path: '/vitamina-para-cabelo-gestante-e-lactantes.html',
                name: 'new-hair-vitamina-capilar-com-biotina2',
                component: SingleNewHairVitaminMamae,
            },
            {
                path: '/new-hair-vitamina-capilar-com-biotina-3-potes.html',
                name: 'new-hair-vitamina-capilar-com-biotina-3-potes',
                component: SingleNewHairVitaminMamae3Potes,
            },
            {
                path: '/new-hair-vitamina-capilar-com-biotina-7-potes.html',
                name: 'new-hair-vitamina-capilar-com-biotina-7-potes',
                component: SingleNewHairVitaminMamae7Potes,
            },
            {
                path: '/serum-facial-10-em-1-new-hair.html',
                name: 'serum-facial-10-em-1-new-hair',
                component: SingleNewHairSerumFacial,
            },
            {
                path: '/serum-facial-10-em-1-new-hair-2-frascos.html',
                name: 'serum-facial-10-em-1-new-hair-2-frascos',
                component: SingleNewHairSerumFacial2Frascos,
            },
            {
                path: '/serum-facial-10-em-1-new-hair-3-frascos.html',
                name: 'serum-facial-10-em-1-new-hair-3-frascos',
                component: SingleNewHairSerumFacial3Frascos,
            },
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronicoebiotina-masculino.html',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronicoebiotina-masculino',
                component: SingleNewHairVitaminMasculino,
            },
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-masculino-3-potes*',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronicoebiotina-masculino-3-potes',
                component: SingleNewHairVitaminMasculino3,
            },
            {
                path: '/new-hair-vitamina-capilar-com-acido-hialuronico-e-biotina-masculino-7-potes*',
                name: 'new-hair-vitamina-capilar-com-acido-hialuronicoebiotina-masculino-7-potes',
                component: SingleNewHairVitaminMasculino7,
            },
        ]
    },
    {
        path: '/apresentacao',
        name: 'Apresentacao',
        component: Apresentacao
    },
    {
        path: '/busca',
        name: 'product/listing/search',
        component: BuscaListining
    },
    // {
    //   path: "/lista/:lista.html",
    //   name: "list/detail",
    //   component:  () => import(/* webpackChunkName: "detalhe-lista" */`@/pages/detalhe-lista.vue`),
    // },
    {
        path: '/c/:landingPage/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
        name: 'product/listing/landing-page',
        component: Listagem
    },
    // {
    //     path: '/:categoriaNivel2?/:categoriaNivel3?/:categoriaNivel4?/:categoriaNivel5?',
    //     name: 'product/listing/category',
    //     component: ListagemValidaPage
    // }
]

const router = new VueRouter({
    mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    /**
     * Reseta document.referrer quando o site
     * é acessado a partir de uma midia paga
     * do google (GCLID);
     */
    if (from.query.gclid) {
        window.location.href = window.location.origin + to.path;
        return;
    }
    next();
});

export default router