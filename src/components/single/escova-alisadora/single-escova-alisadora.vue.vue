<template>
    <div>
        <MenuMob />
        <MenuNH />
        <ProdutoEscovaAlisadoraSingle class="mb-5"/>
        <BeneficiosEscova />
        <ComparativoEscovas />
        <TecnologiaFavor />
        <PassosUsoEscova />
        <ResultadosNewHair />
        <OpinioesProdutoTrustvox class="mb-3" :dataProd="prodInfo" />
        <DuvidasEscova/>
        <CompraSegura />
        <BotaoFlutuanteSingle />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import MenuMob from '../../gerais/menuMob.vue';
    import MenuNH from '../../gerais/menuNH.vue';
    import ProdutoEscovaAlisadoraSingle from './components/produto-escova-alisadora-single.vue';
    import CompraSegura from '../../gerais/compraSegura.vue';
    import BotaoFlutuanteSingle from '../new-gummy/components/botao-flutuante-single.vue';
    import OpinioesProdutoTrustvox from '../../gerais/avaliacoes/opinioes-produto-trustvox.vue'
    import BeneficiosEscova from './components/beneficios-escova.vue';
    import ComparativoEscovas from './components/comparativo-escovas.vue';
    import TecnologiaFavor from './components/tecnologia-favor.vue';
    import PassosUsoEscova from './components/passos-uso-escova.vue';
    import ResultadosNewHair from '../../gerais/resultados/resultados-new-hair.vue';
    import DuvidasEscova from '../../gerais/duvidas/duvidasEscova.vue';


    export default {
        components: {
            MenuNH,
            MenuMob,
            ProdutoEscovaAlisadoraSingle,
            CompraSegura,
            BotaoFlutuanteSingle,
            OpinioesProdutoTrustvox,
            BeneficiosEscova,
            ComparativoEscovas,
            TecnologiaFavor,
            PassosUsoEscova,
            ResultadosNewHair,
                DuvidasEscova,
                
        },

        data() {
            return {
                loading: {
                    geral: true
                },
                prodInfo: []
            }
        },

        methods: {
            ...mapMutations(['changeDadosPageAtual']),
            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path;
                }
                path = path.replace('?', '&')
                return path
            },
        },

        created() {
            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    this.prodInfo = response.data.conteudo
                    this.$aplicaSEO(response.data.estrutura)
                    this.loading.geral = false
                    this.changeDadosPageAtual(response.data)
                    this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                    this.$fbViewContent({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
                }
            })
        },
    }
</script>