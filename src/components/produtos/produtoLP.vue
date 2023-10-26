<template>
	<div class="box-produto mb-3 border-black">
		<div :class="['header-produto nome-produto d-flex flex-column justify-content-center bgTitle', {bgPink: bgTitle == 'pink', bgBlue: bgTitle == 'blue' }]">
			<p class="nome" v-html="nomeProduto"></p>
			<p>{{ subtituloProduto }}</p>
		</div>
		<div class="body-produto d-flex">
			<div class="col-produto w-50 d-flex justify-content-center align-items-center position-relative">
				<div v-if="quantidadeProduto > 1" class="pote-preco position-absolute"><strong>R$ {{((precoPor/quantidadeProduto).toFixed(2)).toString().replace(".", ",")}}</strong> cada pote</div>
				<div class="d-flex">
					<img v-show="!trocaImagem" class="img-fluid" :src="require(`@/${imgProduto}`)"  :alt="alt" :title="title" loading="lazy" />
					<img v-show="trocaImagem" class="img-fluid" :src="require(`@/${imgTroca}`)"  :alt="alt" :title="title" loading="lazy"  />
				</div>
			</div>
			<div class="col-produto w-50 pl-2 d-flex flex-column justify-content-between ">
				<div class="d-flex">
					<div class="col-desconto text-center w-50 d-flex align-items-center justify-content-center py-2">
						<strong>{{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF</strong>
					</div>
					<!-- <div class="col-frete text-center w-50 d-flex align-items-center justify-content-center py-2"> -->
					<div :class="['col-frete text-center w-50 d-flex align-items-center justify-content-center py-2', {freteGratisBgBlue: freteGratis == 'blue'}]">
						<strong>FRETE GRÁTIS</strong>
					</div>
				</div>
				<div class="mb-2 mt-4 pt-1">
					<div class="d-flex justify-content-start pr-3 pt-3 ">
						<p class="preco-de" style="color: #777777; font-size: 15px"><s style="color: #777777; font-size: 15px" class="mr-4"> {{ precoDe.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}}</s></p>
					</div>
					<div class="preco-produto pr-3">
						<p>até <strong>8x sem juros</strong> de</p>
						<p class="produto">{{ (precoPor/8).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</p>
						<p>ou <strong>{{ precoPor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</strong> à vista <br class="desk"> </p>
					</div>
					<div class="form-group select_sabores w-100 pr-3 my-1" v-if="possuiVariacao">
						<select name="saboresColagProd3" class="select_option browser-default custom-select" id="saboresColagProd3" @change="onChange($event)" v-model="sabores">
							<option class="option" value="0">Escolha o Sabor</option>
							<option class="option" :value="item.id" v-for="item, i in variacoes" :key="i">{{item.nome}}</option>
						</select>
					</div>
					<div class="mt-2 pr-3">
						<a @click="addCartBoxCompra();" class="d-flex align-items-center justify-content-center add-to-cart mb-2 w-100 text-white"> COMPRE AGORA </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Comunicacao from '@/comunicacao.js'

	export default {
		name: "NewHairAcidoHiauluronico1Pote",
		props: {
			nomeProduto: {
					type: String,
					default: 'New Hair'
			},
			subtituloProduto: {
					type: String,
					default: 'Cápsula Feminina'
			},
			imgProduto: {
					type: String,
					default: 'assets/img/logo_nh.png'
			},
			precoDe: {
					type: Number,
					default: 0
			},
			// precoPor: {
			// 		type: Number,
			// 		default: 0
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
			urlLista: {
				type: String,
				default: ''
			},
			bgTitle: String,
			freteGratis: String,
		},

		data(){
			return {
				precoPor: 0,
				sabores: 0,
				imgTroca: '',
				trocaImagem: false,
				boxCompraCarrinho: {
					tipo: "lista",
					itens: [
						{		
							idProduto: this.idProduto,
							idAtributoSimples: "0",
							idUnidadeVenda: "0",
							idArmazem: "0",
							quantidade: "1",
							adicional: "",
							parametros: ""
						},
					]
				},
			}
		},

	methods: {
		onChange(event) {
			this.trocaImagem = true;
			this.imgTroca = this.imgProduto;
			this.sabores = event.target.value;

			if(this.sabores == 91){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/1-POTE-NEW-HAIR-GOMA-MORANGO-FRESH.jpg';
			}
			if(this.sabores == 89){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/1-POTE-NEW-HAIR-GOMA-UVA-VERDE.jpg';
			}
			if(this.sabores == 87){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/1-POTE-NEW-HAIR-GOMA-LARANJA.jpg';
			}

			if(this.sabores == 94){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/3-POTES-NEW-HAIR-GOMA-MIX.jpg';
			}
			if(this.sabores == 93){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/3-POTES-NEW-HAIR-GOMA-TANGERINA-MORANGO-FRESH.jpg';
			}
			if(this.sabores == 90){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/3-POTES-NEW-HAIR-GOMA-TANGERINA-UVA-VERDE.jpg';
			}
			if(this.sabores == 88){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/3-POTES-NEW-HAIR-GOMA-LARANJA.jpg';
			}
			
			if(this.sabores == 170){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/6-POTES-NEW-HAIR-GOMA-MORANGO-FRESH.jpg';
			}
			if(this.sabores == 171){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/6-POTES-NEW-HAIR-GOMA-MORANGO-FRESH.jpg';
			}
			if(this.sabores == 172){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/3-POTES-NEW-HAIR-GOMA-TANGERINA-UVA-VERDE.jpg';
			}
			if(this.sabores == 173){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/6-POTES-NEW-HAIR-GOMA-LARANJA.jpg';
			}
			if(this.sabores == 174){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/6-POTES-NEW-HAIR-GOMA-LARANJA.jpg';
			}
			if(this.sabores == 175){
				this.imgTroca = 'assets/img/produtos/nh-gummy/loja/desk/6-POTES-NEW-HAIR-GOMA-UVA-VERDE.jpg';
			}
		},

		addCartBoxCompra() {
			// Altera o id se possuir variacao 
			if (this.possuiVariacao) {
				this.boxCompraCarrinho.itens[0].idProduto = this.sabores;
			}

			Comunicacao.$emit('toggleLoader', true)
			let {tipo, itens} = this.boxCompraCarrinho
			let itemAdc       = false
			if (tipo && itens) {
				//ADICIONA O PRODUTO AO CARRINHO
				this.$carrinho.add(tipo,itens,(success, response) => {
					response.data.itens.forEach(prod => {
						itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto
					})
					//PRODUTO ADICIONADO COM SUCESSO
					if(success){
						if ( this.possuiVariacao && this.sabores == 0) { 
							this.$toast.error("Selecione um sabor para adicionar ao carrinho!")
						}
						else{
							this.$fbAddToCart({ 
								dataProducts: response.data,
								currentProduct: this.nomeProduto, 
								currentPrice: this.precoPor, 
								currentUser: this.$store.state.dadosUser
							});
							return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
						}
						return true
					}
					this.changeDadosPageAtual(response.data)
					//PROBLEMAS AO ADICIONAR PRODUTO
					this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
				})
				return
			}
		},
	},

	created() {
		this.imgTroca = this.imgProduto;
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
.bgTitle {
	background-color: #333;
}

.bgPink {
	background-color: #ff4289!important;
}

.bgBlue {
	background-color: #13509f!important;
}

.border-black {
	border: 1px solid #dadada;
}

.box-produto {
	width: 49%;
	border-radius: 18px;
	overflow: hidden;
}

.pote-preco {
	font-size: 14px;
	color: #898989;
	background: #e9e9e9;
	left: 0;
	top: 10px;
	padding: 8px;
	border-radius: 0 20px 20px 0;
}

.nome-produto {
	padding: 14px;
	height: 65px;
}

.nome-produto .nome {
	color: #fff;
	font-size: 23px;
	font-family: "Open Sans", sans-serif;
	text-align: center;
	font-weight: 700 !important;
}

.nome-produto p {
	color: #fff;
	text-align: center;
	font-size: 15px;
	font-weight: normal;
	font-family: "Open Sans", sans-serif;
}

.col-desconto {
	background: #fffc00;
	color: #333333;
	font-size: 14px;
}

.col-frete {
	background: #ff4289;
	color: #fff;
	font-size: 14px;
}

.col-frete.freteGratisBgBlue{
	background: #13509f;
}

.preco-produto .nome {
	font-family: "Open Sans", sans-serif;
	font-weight: normal!important;
	color: #000;
	font-size: 14px;
}

.preco-produto .produto {
	font: normal normal bold 36px/15px Helvetica;
	letter-spacing: -1.44px;
	color: #333333;
	padding: 10px 0;
}

.preco-produto .produto span{
	font: normal normal normal 14px/15px Helvetica;
	letter-spacing: -0.96px;
	color: #18A851;
}

.add-to-cart {
	background-color: #18A851;
	color: #fff;
	font-weight: bold;
	width: 73%;
	height: 60px;
	border-radius: 6px;
	font-family: "Helvetica", sans-serif;
	border: none;
	cursor: pointer;
	transition: 0.4s ease;
	text-align: center;
	outline: none;
}

.add-to-cart:hover {
    opacity: 0.8;
}

.pote-preco {
    font-size: 14px;
    color: #898989;
    background: #e9e9e9;
    left: 0;
    top: 10px;
    padding: 8px;
    border-radius: 0 20px 20px 0;
}

.d-flex.justify-content-start.pr-3.pt-3 {
    align-items: center!important;
}

img{
	padding: 15px;
}

.body-produto {
    background-color: #FFF;
}

@media (max-width: 768px) {
	

	.mb-2.mt-5.pt-1 {
    margin-top: 0!important;	
	}

	.box-produto {
		width: 100%;
		border-radius: 18px;
		overflow: hidden;
	}

	.pr-3 {
		padding-right: 10px !important;
	}

	.nome-produto .nome {
		font-size: 17px;
	}

	.nome-produto {
		height: 65px;
	}


	.nome-produto p {
		font-size: 13px;
		line-height: 18px;
	}

	.col-desconto,
	.col-frete {
		font-size: 10px;
	}

	.preco-de,
	.preco-por {
		font-size: 14px !important;
	}

	.preco-por {
		padding-left: 8px;
	}

	.preco-de s {
		font-size: 14px !important;
		margin-right: 0 !important;
	}

	.preco-produto .produto {
		font-size: 30px !important;
		padding: 5px 0;
	}

	.preco-produto .produto span {
		font-size: 14px !important;
	}

	.preco-produto p{
		font-size: 11px !important;
		line-height: 16px;
	}

	.add-to-cart {
		font-size: 14px !important;
		height: 45px;
	}


	.col-produto.w-50.p-4 {
		padding: 0 !important;
	}
}
@media (max-width: 380px) {
	.preco-de, .preco-de s {
		font-size: 14px !important;
	}

	select{
		font-size: 10px !important;
	}
}
</style>