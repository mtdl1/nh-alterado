<template>
    <div>
		<MenuNH />
		<MenuMob />
		<BannerJaSouCliente />
		<ProdutosJaSouCliente />
		<ConhecaMaisSobre />
		<CompraSegura />
		<DuvidasHome />
		<Newsletter />
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	import CompraSegura from '../gerais/compraSegura.vue'
	import DuvidasHome from '../gerais/duvidas/duvidasHome.vue'
	import MenuMob from '../gerais/menuMob.vue'
	import MenuNH from '../gerais/menuNH.vue'
	import Newsletter from '../gerais/newsletter/newsletter.vue'
	import BannerJaSouCliente from './components/banner-ja-sou-cliente.vue'
	import ConhecaMaisSobre from './components/conheca-mais-sobre.vue'
	import ProdutosJaSouCliente from './components/produtos-ja-sou-cliente.vue'

    export default {
		name: 'JaSouCliente',

		components: { 
			MenuNH,
			MenuMob,
			BannerJaSouCliente,
			ProdutosJaSouCliente,
			ConhecaMaisSobre,
			CompraSegura,
			DuvidasHome,
			Newsletter,
		},

        data() {
			return {
				loading: {
					geral: true,
					banner: true,
				},
			};
		},

		methods: {
			...mapMutations(['changeDadosPageAtual']),
		},

		created() {
			this.$requestSend("get", "/v2/front/url/home", {}, (success, response) => {
				if (success) {
					this.$fbPageView({ dataPage: response.data, currentUser: this.$store.state.dadosUser });
					this.loading.geral = false;
					this.$aplicaSEO(response.data.estrutura);
					//comunicacao.$emit("paginaCarregada", response.data);
					this.changeDadosPageAtual(response.data);
				}
			});
		},
    }
</script>