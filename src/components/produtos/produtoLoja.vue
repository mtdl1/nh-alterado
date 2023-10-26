<template>
	<div :class="['produtoLoja position-relative', {espacoEscolhaSabor: possuiVariacao, coresMasculino: coresMasculino}]">
		<div class="destaque">
			<p v-if="destaqueoferta">⚡ OFERTA RELÂMPAGO ⚡</p>
		</div>
		<div class="destaque-vendido">
			<p v-if="destaquevendido"> Mais Vendido </p>
		</div>
		<div class="destaque-mascara">
			<p v-if="!destaquevendido && !destaqueoferta"> New Hair </p>
		</div>
		
		<div class="img-produto desk text-center">
			<a :href="urlImgLp">
				<img v-if="$route.name == 'homeTesteB'" class="img-fluid" v-lazy="imagemProduto" :alt="alt" :title="title" loading="lazy" />
				<img v-else class="img-fluid" :src="require(`@/${imgProduto}`)"  :alt="alt" :title="title"/>
			</a>
		</div>
		<div class="img-produto mob">
			<a :href="urlImgLp">
				<img class="img-fluid" v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdutoMob" :alt="alt" :title="title" loading="lazy" />
				<img class="img-fluid" v-else :src="imagemProdutoMob.src"  :alt="alt" :title="title" />
			</a>
		</div>
		<div v-if="quantidadeProduto > 1" class="preco-por-pote">
			<p><strong> R$ {{ (precoPor / quantidadeProduto).toFixed(2).toString().replace(".", ",") }}</strong> cada pote</p>
		</div>
		<div v-if="quantidadeProduto < 2" class="preco-por-pote-1">
		</div>
		<div class="frete-gratis">
			<p>Frete Grátis</p>
		</div>
		<div class="nome-produto" v-html="nomeProduto"></div>
		<div class="precos position-relative mt-3">
			<p class="preco-de"> <s>R$ {{ precoDe.toFixed(2).toString().replace(".", ",") }}</s> </p>
			<p class="preco-por">até <strong>8x sem juros</strong> de</p>
			<p class="preco-parcelado">
				<strong>R$ {{(precoPor/8).toFixed(2).toString().replace(".", ",") }}</strong>
			</p>
			<p class="preco-por">ou <strong>R$ {{ precoPor.toFixed(2).toString().replace(".", ",") }}</strong> à vista</p>
			<p class="desconto position-absolute">
				<strong>{{ (100 - (precoPor * 100 / precoDe)).toFixed(0) }}% OFF</strong>
			</p>
		</div>
		<div class="botaoLoja position-absolute text-lowercase">
			<a :href="`${urlBotaoSingle}`" >Compre AGora</a>
		</div>
	</div>
</template>

<script>
import loadingBannerDesk from "../../assets/img/geral/preloader.svg"
export default {
	components: { },
	name: "ProdutoLoja",
	props: {
		nomeProduto: {
			type: String,
			default: 'New Hair'
		},
		subtituloProduto: {
			type: String,
			default: 'Cápsula Feminina'
		},
		destaqueoferta: {
			type: Boolean,
			default: false
		},
		destaquevendido: {
			type: Boolean,
			default: false
		},
		imgProduto: {
			type: String,
			default: 'assets/img/logo_nh.png'
		},
		imgProdutoMob: {
			type: String,
			default: 'assets/img/logo_nh.png'
		},
		precoDe: {
			type: Number,
			default: 0
		},
		// precoPor: {
		// 	type: Number,
		// 	default: 0
		// },
		quantidadeProduto: {
			type: Number,
			default: 0
		},
		idProduto: {
			type: Number,
			default: 0
		},
		possuiVariacao: {
			type: Boolean,
			default: false
		},
		variacoes: {
			type: Array,
			default: function () {
				return []
			}
		},
		urlImgLp: {
			type: String,
			default: 'assets/img/logo_nh.png'
		},
		urlBotaoSingle: {
			type: String,
			default: ''
		},
			alt:{
			type: String,
			default:""
		},
		title:{
			type: String,
			default:""
		},
		urlLista: {
			type: String,
			default: ''
		},
		coresMasculino: {
			type: Boolean,
			default: false
		},
	
	},
	data() {
		return {
			precoPor: 0,
			imagemProduto: {
				src: require(`@/${this.imgProduto}`),
				error: loadingBannerDesk,
				loading: loadingBannerDesk,
			},
			imagemProdutoMob: {
				src: require(`@/${this.imgProdutoMob}`),
				error: loadingBannerDesk,
				loading: loadingBannerDesk,
			},
		}
	},

	created(){
			this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/${this.urlLista}`, {}, (success, response) => {
					if (success) {
							// this.precoDe = response.data.conteudo.precos.de
							this.precoPor = response.data.conteudo.precos.por
					} else {
							console.log('não foi possível recuperar o ID da lista de compras')
					}
			})
	},
}
</script>

<style scoped>

.produtoLoja {
    width: 24%;
    background-color: #FFF;
    border: 1px solid #dadada;
    border-radius: 12px;
    padding: 10px;
		padding-bottom: 70px;
}

.destaque {
    background-color: #FFFF00;
    border-radius: 4px;
}

.destaque p {
    font: normal normal 800 18px/22px Open Sans;
    letter-spacing: -0.72px;
    color: #222222;
		text-align: center;
		padding: 5px 0;
		text-transform: lowercase;
}

.destaque-vendido {
    background-color: #ff4289;
    border-radius: 4px;
}

.destaque-vendido p {
    font: normal normal 800 18px/22px Open Sans;
    letter-spacing: -0.72px;
    color: #FFf;
		text-align: center;
		padding: 5px 0;
		text-transform: lowercase;
}

.destaque-mascara {
    background-color: #FFF;
    border-radius: 4px;
}

.destaque-mascara p {
    font: normal normal 800 18px/22px Open Sans;
    letter-spacing: -0.72px;
    color: #FFf;
		text-align: center;
		padding: 5px 0;
		text-transform: uppercase;
}

.preco-por-pote {
    background-color: #F1F1F1;
    width: fit-content;
    margin-left: -10px;
    padding: 2px 20px;
    border-radius: 0px 2px 2px 0px;
}

.preco-por-pote p {
    font: normal normal 300 13px/17px Helvetica;
    letter-spacing: -0.13px;
		color: #222222;
}

.preco-por-pote p strong {
		font-weight: bold;
}

.frete-gratis {
		background-color: #ff4289;
		width: fit-content;
		margin-left: -10px;
		padding: 2px 6px;
		border-radius: 0px 2px 2px 0px;
		margin-top: 10px;
		
}

.frete-gratis p {
	font: normal normal bold 13px/17px Open Sans;
	letter-spacing: -0.20px;
	color: #FFFFFF;
	text-transform: lowercase;
	font-weight: 600;
}

.nome-produto {
	margin-top: 10px;
	font: normal normal bold 18px/22px Open Sans;
	letter-spacing: -0.72px;
	color: #222222;
	min-height: 45px;
	text-transform: lowercase;
}

.precos p{
	font: normal normal normal 16px/20px Helvetica;
	letter-spacing: -0.64px;
	color: #777777;
}

.preco-parcelado strong{
	font: normal normal bold 42px/46px Helvetica;
	letter-spacing: -1.68px;
	color: #222222;
}

.preco-parcelado span{
	color: #18a851;
	font-size: 14px;
}

.preco-por strong{
	color: #222222;
}

.desconto{
	top: 0;
	right: 0;
	width: fit-content;
	background-color: #FFFF00;
	margin-right: -10px;
	padding: 2px 10px;
	border-radius: 3px 0px 0px 3px;
}

.desconto strong{
	color: #222222;
}

.preco-por-pote-1{
	height: 21px;
}

.img-produto img{
	background: url('../../assets/img/icones/loading-img.svg') no-repeat center center;
}

.img-produto img{
	background: #FFF!important;
	min-height: 266px !important;
}

.coresMasculino .destaque-vendido {
    background-color: #13509f;
}

.coresMasculino .frete-gratis {
    background-color: #13509f;
}

@media (max-width: 430px) {
	.produtoLoja {
		width: 48%;
		margin-top: 20px;
	}

	.img-produto.mob {
		text-align: center;
	}

	.destaque p{
		font-size: 12px;
		line-height: 16px;
	}

	.destaque-vendido p{
		font-size: 12px;
		line-height: 16px;
	}
	.preco-por-pote{
		padding: 2px 10px;
	}
	.preco-por-pote p{
		font-size: 11px;
		line-height: 15px;
	}
	.frete-gratis{
		padding: 2px 10px;
	}
	.frete-gratis p{
		font-size: 10px;
		line-height: 14px;
	}
	.nome-produto {
		font-size: 14px;
		line-height: 18px;
	}
	.precos p{
		font-size: 11px;
		line-height: 14px;
	}

	.preco-de{
		margin-bottom: 5px;
	}

	.preco-por{
		margin-top: 5px;
	}
	.preco-parcelado strong{
		font-size: 24px;
		line-height: 28px;
	}

	.desconto{
		padding: 0 5px;
	}

	.desconto strong{
		font-size: 10px;
		line-height: 14px;
	}

	.preco-parcelado span{
		font-size: 11px;
	}

	.img-produto img{
		background: #FFF!important;
		min-height: 161px !important;
	}
}

.botaoLoja {
  background-color: #18A851;
  text-align: center;
  font: normal normal 800 20px/24px Open Sans;
  letter-spacing: -1.04px;
  color: #FFFFFF;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.5s ease;
  text-transform: uppercase;
  margin: 20px auto;
	cursor: pointer;
	bottom: 0;
	right: 10px;
	left: 10px;
}

.botaoLoja:hover {
  background-color: #d54c8c;
  transition: all 0.5s ease;
}

.botaoLoja p {
  margin: 0;
}

@media (max-width: 768px) {
  .botaoLoja {
    font: normal normal 800 15px/19px Open Sans;
    letter-spacing: -0.84px;
  }

	select{
		font-size: 12px;
	}

	.espacoEscolhaSabor{
		padding-bottom: 70px;
	}


}

/* responsivo 360 */
@media (max-width: 375px) {
	.destaque p{
		font-size: 10px;
	}

	.preco-parcelado {
		margin-top: 10px;
	}

	.preco-parcelado span{
		font-size: 8px;
	}

	select{
		font-size: 10px;
	}
}
</style>