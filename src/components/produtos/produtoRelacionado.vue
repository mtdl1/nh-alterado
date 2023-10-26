<template>
  <div class="produtoRelacionado position-relative d-flex flex-wrap justify-content-between">
    <div class="img-produto d-flex justify-content-center align-items-center">
      <img v-show="!trocaImagem" class="img-fluid" :src="require(`@/${imgProduto}`)" alt="" title="" loading="lazy" />
      <img v-show="trocaImagem" class="img-fluid" :src="require(`@/${imgTroca}`)" alt="" title="" loading="lazy"    />
    </div>
    <div class="conteudo-box">
      <p class="nomeProduto mt-2" v-html="nomeProduto"></p>
      <p class="precoDe mt-2"><s>R$ {{ precoDe.toFixed(2).toString().replace(".", ",") }}</s> <span class="desconto"> {{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF </span></p>
      <p class="precoPor mt-2"> R$ {{ precoPor.toFixed(2).toString().replace(".", ",") }}</p>
      <div class="form-group select_sabores w-100 pr-3 my-1" v-if="possuiVariacao">
			<select name="saboresColagProd3" class="select_option browser-default custom-select" id="saboresColagProd3"
				@change="onChange($event)" v-model="sabores">
				<option class="option" value="0">Escolha o Sabor</option>
				<option class="option" :value="item.id" v-for="item, i in variacoes" :key="i">{{item.nome}}</option>
			</select>
		</div>
      <div class="botaoRelacionados position-absolute">
        <a @click="addCartBoxCompra();">Adicionar<br class="mob"> ao Carrinho</a>
      </div>
    </div>
  </div>
</template>

<script>
import Comunicacao from '@/comunicacao.js'
export default {
  components: {},
    name: "ProdutoRelacionado",
    data() {
      return {
        precoPor: 0,
        sabores: 0,
        imgTroca: '',
        trocaImagem: false,
        boxCompraCarrinho: {
          tipo: "lista",
          itens: [{
            idProduto: this.idProduto,
            idAtributoSimples: "0",
            idUnidadeVenda: "0",
            idArmazem: "0",
            quantidade: "1",
            adicional: "",
            parametros: ""
          }, ]
        },
      }
    },
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
          idProduto: {
            type: Number,
            default: 0
          },
        precoDe: {
          type: Number,
          default: 0
        },
        // precoPor: {
        //   type: Number,
        //   default: 0
        // },
        quantidadeProduto: {
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
                        this.changeDadosPageAtual(response.data);
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    })
                    return;        
                }
            },
					},
    created() {
      this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/${this.urlLista}`, {}, (success, response) => {
					if (success) {
							// this.precoDe = response.data.conteudo.precos.de
							this.precoPor = response.data.conteudo.precos.por
					} else {
							console.log('não foi possível recuperar o ID da lista de compras')
					}
			})
      this.imgTroca = this.imgProduto;
    },


}
</script>

<style scoped>
.produtoRelacionado {
  border-radius: 10px;
  border: 1px solid #dadada;
  padding: 10px;
  width: 32%;
  padding-bottom: 30px;
  background-color: #FFF;
}

.img-produto, .conteudo-box {
  width: 48%;
}

.nomeProduto {
  font: normal normal bold 18px/22px Open Sans;
  letter-spacing: -0.72px;
  color: #333333;
}

.precoDe {
  font: normal normal normal 12px/16px Helvetica;
  letter-spacing: -0.24px;
  color: #777777;
}

.precoPor span{
  padding-left: 5px;
  font-weight: normal;
}

.precoPor {
  font: normal normal bold 20px/18px Helvetica;
  letter-spacing: -0.4px;
  color: #333333;
  display: flex;
  align-items: center;
}

.desconto {
  font: normal normal bold 10px/14px Helvetica;
  letter-spacing: -0.2px;
  color: #333333;
  background-color: #FFFF00;
  padding: 2px 5px;
  border-radius: 2px;
  margin-left: 5px;
}

.botaoRelacionados {
  background-color: #18A851;
  text-align: center;
  font: normal normal 700 10px/14px Helvetica;
  letter-spacing: 0.48px;
  color: #FFFFFF;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.5s ease;
  text-transform: uppercase;
  margin: 18px auto;
  right: 24px;
  bottom: 0;
  cursor: pointer;
  
}

.botaoRelacionados:hover {
  background-color: #d54c8c;
  transition: all 0.5s ease;
}

.botaoRelacionados p {
  margin: 0;
}

.form-group {
  padding-top: 2px;
}

select{
  font-size: 14px;
}

@media (max-width: 768px) {

  .botaoRelacionados {
    font: normal normal 700 12px/16px Helvetica;
    letter-spacing: -0.5px;
    width: 146px;
    height: 40px;
    left: 50%;
    bottom: -2%;
  }
  .botaoRelacionados a {
  position: relative;
   bottom: 20%;
}

  .produtoRelacionado {
    width: 100%;
    padding-bottom: 15px;
    margin-top: 30px;
  }

  .produtoRelacionado:first-child {
    margin-top: 0;
  }


  .nomeProduto {
  font: normal normal bold 14px/16px Open Sans;
  letter-spacing: -0.72px;
  color: #333333;
}

.precoDe {
  font: normal normal normal 10px/14px Helvetica;
  letter-spacing: -0.24px;
  color: #777777;
}

.precoPor {
  font: normal normal bold 18px/14px Helvetica;
  letter-spacing: -0.4px;
  color: #333333;
  display: flex;
  align-items: center;
}

.form-group {
  padding-top: 4%
}
}

@media (max-width: 375px) {

  .botaoRelacionados {
    font: normal normal 700 11px/15px helvetica;
    letter-spacing: -0.2px;
    width: 139px !important;
    height: 36px;
    left: 50%;
    bottom: -5%;
  }

  .botaoRelacionados a {
  position: relative;
  bottom: 7px;
 
   
}

  .produtoRelacionado {
    width: 100%;
    padding-bottom: 27px;
    margin-top: 30px;
  }

  .produtoRelacionado:first-child {
    margin-top: 0;
  }



select {
  padding-top: 6px;
  height: 36px !important; 

}

@media (max-width: 360px){
    .botaoRelacionados {
    font: normal normal 700 11px/15px helvetica;
    letter-spacing: -0.2px;
    width: 132px !important;
    height: 36px;
    left: 50%;
    bottom: -7%;
  }

}
}
</style>