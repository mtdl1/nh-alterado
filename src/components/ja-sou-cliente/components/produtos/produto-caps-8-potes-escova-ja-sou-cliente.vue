<template>
	<div class="box-produto mb-3 border-black">
		<div class="header-produto nome-produto d-flex flex-column justify-content-center bgTitle">
			<h2>8 Potes New Hair Caps</h2>
			<p>Brinde Escova Alisadora - TRATAMENTO 240 DIAS</p>
		</div>
		<div class="body-produto d-flex">
			<div class="col-produto w-50 d-flex justify-content-center align-items-center position-relative">
                <div class="pote-preco position-absolute"><strong>R$ {{((precoPor/quantidadeItens).toFixed(2)).toString().replace(".", ",")}}</strong> cada pote</div>
				<div class="d-flex">
					<img id="57" class="img-fluid" src="@/assets/img/produtos/caps/NEW-HAIR_ESCOVA_ALISADORA.jpg" alt="8 Potes New Hair Cápsulas Femininas com Escova Alisadora" title="8 Potes New Hair Cápsulas Femininas com Escova Alisadora" />
				</div>
			</div>
			<div class="col-produto w-50 pl-2 d-flex flex-column justify-content-between ">
				<div class="d-flex">
					<div class="col-desconto text-center w-50 d-flex align-items-center justify-content-center py-2">
						<strong>{{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF</strong>
					</div>
					<div class="col-frete text-center w-50 d-flex align-items-center justify-content-center py-2">
						<strong>FRETE GRÁTIS</strong>
					</div>
				</div>
				<div class="">
					<div class="d-flex justify-content-start pr-3 pt-3">
						<p class="preco-de" style="color: #777777; font-size: 15px"> De: <s style="color: #777777; font-size: 15px" class="mr-4">{{ precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</s> </p>
						<p class="preco-por" style="font-size: 17px"> Por: <strong>{{ precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })  }}</strong> </p>
					</div>
					<div class="preco-produto pr-3">
						<h2 class="mt-2">Ou 8x sem juros de</h2>
						<h3>R$ {{ (precoPor / 12).toFixed(2).toString().replace(".", ",") }} </h3>
					</div>
					<div class="mt-2 pr-3">
						<a @click="addCartBoxCompra();" class="d-flex align-items-center justify-content-center add-to-cart mb-1 w-100 text-white"> COMPRE AGORA </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: "ProdutoCaps8PotesEscova",

        data(){
            return {
                sabores: 0,
                precoDe: 1119.20,
                precoPor: 517.70,
                quantidadeItens: 8,
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "124",
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
            addCartBoxCompra() {
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
													this.$fbAddToCart({ 
														dataProducts: response.data,
														currentProduct: '8 Potes New Hair Caps', 
														currentPrice: this.precoPor, 
														currentUser: this.$store.state.dadosUser
													});
													return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                        }
                        this.changeDadosPageAtual(response.data)
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    });
                    return;
                }
            },
        },
    }

</script>

<style scoped>
.bgTitle {
	background-color: #ff4289;
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

.nome-produto h2 {
	color: #fff;
	font-size: 23px;
	font-family: "Open Sans", sans-serif;
	text-align: center;
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
	background: #333333;
	color: #fff;
	font-size: 14px;
}

.preco-produto h2 {
	font-family: "Open Sans", sans-serif;
	font-weight: normal!important;
	color: #000;
	font-size: 14px;
}

.preco-produto h3 {
	font-family: "Helvetica", sans-serif;
	font-weight: bold;
	font-size: 45px;
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

@media (max-width: 768px) {
	.box-produto {
		width: 100%;
		border-radius: 18px;
		overflow: hidden;
	}

	.pr-3 {
		padding-right: 10px !important;
	}

	.nome-produto h2 {
		font-size: 19px;
	}

	.nome-produto p {
		font-size: 13px;
	}

	.col-desconto,
	.col-frete {
		font-size: 11px;
	}

	.preco-de,
	.preco-por {
		font-size: 12px !important;
	}

	.preco-por {
		padding-left: 8px;
	}

	.preco-de s {
		font-size: 12px !important;
		margin-right: 0 !important;
	}

	.preco-produto h3 {
		font-size: 35px !important;
	}

	.add-to-cart {
		font-size: 14px !important;
	}

	.col-produto.w-50.p-4 {
		padding: 0 !important;
	}
}

@media (max-width: 380px) {
	.preco-de, .preco-de s {
		font-size: 8px !important;
	}
}
</style>