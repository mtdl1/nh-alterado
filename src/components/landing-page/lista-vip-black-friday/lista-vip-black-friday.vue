<template>
    <div>
		<MenuNH />
		<MenuMob />
        <BannerListaVip />
		<NewsletterListaVip class="desk" :tituloListaVip="'ÚLTIMAS VAGAS PARA FAZER PARTE DA LISTA VIP E <br> RECEBER CUPONS E OFERTAS EXCLUSIVAS DA MELHOR<br> VITAMINA PARA CABELOS DO BRASIL!'" />
		<NewsletterListaVip class="mob" :tituloListaVip="'ÚLTIMAS VAGAS PARA FAZER PARTE DA LISTA VIP E RECEBER CUPONS E OFERTAS EXCLUSIVAS DA MELHOR VITAMINA PARA CABELOS DO BRASIL!'" />
		<KitsMaisVendidosListaVip />
		<CohecaNossaLinhaListaVip class="desk" />
		<NewsletterListaVip class="desk" :tituloListaVip="'GARANTA JÁ O SEU CUPOM PARA A MAIOR BLACK FRIDAY DE VITAMINA PARA CABELOS DO BRASIL E FAÇA PARTE DA NOSSA <br>LISTA VIP'" />
		<NewsletterListaVip class="mob" :tituloListaVip="'GARANTA JÁ O SEU CUPOM PARA A MAIOR BLACK FRIDAY DE VITAMINA PARA CABELOS DO BRASIL E FAÇA PARTE DA NOSSA LISTA VIP'" />
		<PassoAPassoBlackFriday />
		<CohecaNossaLinhaListaVip class="mob" />
		<ComoSurgiuListaVip />
		<BlendDeVitaminas />
		<NewsletterListaVip class="pt-5" :tituloListaVip="'RECEBA AS MELHORES OFERTAS EM PRIMEIRA MÃO'" />
		<!-- <DuvidasHome /> -->
		<CompraSegura />
		<DuvidasBlackFridaynewhair/>
    </div>
</template>

<script>
	import { mapMutations } from "vuex"
	import CompraSegura from '../../gerais/compraSegura.vue'
	import MenuMob from '../../gerais/menuMob.vue'
	import MenuNH from '../../gerais/menuNH.vue'
	import BannerListaVip from './components/banner-lista-vip.vue'
	import CohecaNossaLinhaListaVip from './components/coheca-nossa-linha-lista-vip.vue'
	import KitsMaisVendidosListaVip from './components/kits-mais-vendidos-lista-vip.vue'
	import NewsletterListaVip from './components/newsletter-lista-vip.vue'
	import PassoAPassoBlackFriday from './components/passo-a-passo-lista-vip.vue'
	import ComoSurgiuListaVip from './components/como-surgiu-lista-vip.vue'
	import BlendDeVitaminas from '../../gerais/blend-vitaminas/blend-de-vitaminas.vue'
  import DuvidasBlackFridaynewhair from './duvidasBlackFridaynewhair.vue'

    export default {
        name: 'ListaVipBlackFriday',

        components: {
						BannerListaVip,
						NewsletterListaVip,
						PassoAPassoBlackFriday,
						KitsMaisVendidosListaVip,
						ComoSurgiuListaVip,
						CompraSegura,
						CohecaNossaLinhaListaVip,
						// DuvidasHome, 
						MenuNH,
						MenuMob,
						BlendDeVitaminas,
						DuvidasBlackFridaynewhair,
        },

		data(){
        
            return {
                //
            }
        },

        methods: {
			...mapMutations(["changeDadosPageAtual"]),
        },

		created() {
			this.$requestSend("get", "/v2/front/url/home", {}, (success, response) => {
				if (success) {
					this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
					response.data.estrutura.seo.title = "Black Friday New Hair - Ofertas e Frete Grátis"
                    response.data.estrutura.seo.description = "A Black Friday da New Hair vai contar com ofertas imperdíveis, descontos fantásticos e frete grátis! Então se prepare e venha conferir todas as promoções! "
					response.data.estrutura.seo.canonical = "https://www.newhair.com.br/lista-vip-black-friday"
					this.$aplicaSEO(response.data.estrutura)
					this.changeDadosPageAtual(response.data)
					this.loading.geral = false
				}
			});
		},
    }
</script>

<style scoped>
h2 {
    font: normal normal bold 40px/40px Open Sans;
		letter-spacing: 0px;
		color: #1A1A1A;
}
@media screen and (max-width: 600px) {
	h2 {
		font: normal normal bold 26px/35px Open Sans;	}
}
</style>