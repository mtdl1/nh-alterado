<template>
    <div class="box-produto mb-3 border-pink" id="ColagenoProd3">
        <div class="header-produto nome-produto d-flex flex-column justify-content-center pink">
            <h2>3 Potes New Hair Gummy</h2>
            <p class="pt-1">Brinde Massageador - TRATAMENTO 90 DIAS</p>
        </div>
        <div class="body-produto d-flex">
            <div class="col-produto w-50 p-4 d-flex justify-content-center align-items-center position-relative">
                <div class="pote-preco position-absolute"><strong>R$ {{((precoPor/quantidadeItens).toFixed(2)).toString().replace(".", ",")}}</strong> cada pote</div>
                <div class="d-flex">
                    <img id="103" v-if="sabores == 103 || sabores == 0" class="img-fluid" src="@/assets/img/produtos/gomas/kit-3/home/3 Potes New Hair Gummy + mascara.jpg" alt="3 Potes Gummy Uva - Laranja - Morango" title="3 Potes Gummy Uva - Laranja - Morango">
                    <img id="104" v-if="sabores == 104" class="img-fluid" src="@/assets/img/produtos/gomas/kit-3/home/3 Potes New Hair Gummy  morango + mascara.jpg" alt="3 Potes Gummy Morango - Morango - Morango" title="3 Potes Gummy Morango - Morango - Morango">
                    <img id="105" v-if="sabores == 105" class="img-fluid" src="@/assets/img/produtos/gomas/kit-3/home/3 Potes New Hair Gummy VERDE + mascara.jpg" alt="3 Potes Gummy Uva Verde" title="3 Potes Gummy Uva Verde">
                    <img id="106" v-if="sabores == 106" class="img-fluid" src="@/assets/img/produtos/gomas/kit-3/home/3 Potes New Hair Gummy LARANJA + mascara.jpg" alt="3 Potes Gummy Laranja" title="3 Potes Gummy Laranja">
                </div>
            </div>
            <div class="col-produto w-50 pl-2">
                <div class="d-flex">
                    <div class="col-desconto text-center w-50 d-flex align-items-center justify-content-center py-2"><strong>{{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF</strong></div>
                    <div class="col-frete text-center w-50 d-flex align-items-center justify-content-center py-2"><strong>FRETE GRÁTIS</strong></div>
                </div>
                <div class="d-flex justify-content-start align-items-center pr-3 pt-1">
                    <p class="preco-de" style="color: #777777; font-size: 15px">De: <s style="color: #777777; font-size: 15px" class="mr-4">{{precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</s></p>
                    <p class="preco-por" style="font-size: 17px">Por: <strong>{{precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}</strong></p>
                </div>
                <div class="preco-produto pr-3">                            
                    <h2 class="mt-2">Ou 8x sem juros de </h2>                       
                    <h3>R$ {{((precoPor/8).toFixed(2)).toString().replace(".", ",")}}</h3>   
                </div>
                <div class="form-group select_sabores w-100 pr-3 my-1">
                    <select name="saboresColagProd3" class="select_option browser-default custom-select" id="saboresColagProd3" @change="onChange($event)" v-model="sabores">
                        <option class="option" value="0">Escolha o Sabor</option>
                        <option class="option" value="103">3 Potes Gummy Uva - Laranja - Morango</option>
                        <option class="option" value="104">3 Potes - Morango</option>
                        <option class="option" value="105">3 Potes - Uva Verde</option>
                        <option class="option" value="106">3 Potes - Laranja</option>
                    </select>
                </div>
                <div class="mt-2 pr-3">
                    <button class="add-to-cart mb-2 w-100" @click="addCartBoxCompra()">COMPRE AGORA</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import Comunicacao from '@/comunicacao.js'
    import { mapMutations } from 'vuex'
    
    export default {
        name: 'ProdutoGummy3Potes',

        data(){
            return {
                sabores: 0,
                precoDe: 449.70,
                precoPor: 247.70,
                quantidadeItens: 3,
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "5",
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
            ...mapMutations(['changeDadosPageAtual']),

            // obtem o valor do select
            onChange(event) {
                this.sabores = event.target.value;
            },

            addCartBoxCompra() {
                //Recupera o id selecionado do produto
                var Produto = this.sabores
                this.boxCompraCarrinho.itens[0].idProduto = Produto
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
                            if (Produto == 0) { 
                                this.$toast.error("Selecione um sabor para adicionar ao carrinho!")
                            }
                            else{
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
            this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/renova-be-cranberry-cranberry-cranberry.html`, {}, (success, response) => {
                if (success) {
                    this.precoPor = response.data.conteudo.precos.por.toFixed(2)
                } else {
                    console.log('erro')
                }
            });
        },

        mounted(){
            // 
        },
    }
</script>

<style scoped>
    .pink {
        background-color: #ff4289;
    }

    .border-pink {
        border: 1px solid #ff4289;
    }

    .box-produto {
        width: 49%;
        border-radius: 18px;
        overflow: hidden;
    }

    .imgProdColageno3{
        display: none;
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
    
    .nome-produto{
        padding: 14px;
        height: 65px;
    }

    .nome-produto h2{
        color: #fff;
        font-size: 23px;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }

    .nome-produto p{
        color: #fff;
        text-align: center;
        font-size: 15px;
        font-weight: normal;
        font-family: 'Open Sans', sans-serif;
    }

    .col-desconto{
        background: #fffc00;
        color: #333333;
        font-size: 14px;
    }

    .col-frete {
        background: #333333;
        color: #fff;
        font-size: 14px;
    }

    .preco-produto h2{
        font-family: 'Open Sans', sans-serif;
        font-weight: normal!important;
        color: #000;
        font-size: 14px;
    }

    .preco-produto h3{
        font-family: 'Helvetica', sans-serif;
        font-weight: bold;
        font-size: 45px;
    }

    .add-to-cart{
        background-color:#18A851;
        color:#fff;
        font-weight: bold;
        width:73%;
        height:60px;
        border-radius:6px;
        font-family: 'Helvetica',sans-serif;
        border:none;
        cursor: pointer;
        transition: 0.4s ease;
        text-align: center;
        outline: none;
    }

    .add-to-cart:hover{
        opacity: 0.8;
    }

    /* SELECT DE SABORES */
    .select_sabores{ 
        position: relative;
        user-select: none;
        border-radius: 8px;
        margin: -3px auto 0;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;   
        font-family: 'Helvetica', sans-serif;    
        font-size: 15px;    
        cursor: pointer;
        width: 73%;
        height: 48px;
        text-align: center;
        line-height: 2.2;
    }

    .select_sabores select {
        width: 100%;
        height: 100%;
        border: 1px solid #dedede;
        color: #333;
        border-radius: 8px;
        padding: 10px;
    }
    /* SELECT DE SABORES */

    

    @media (max-width: 768px) {
        .box-produto {
            width: 100%;
            border-radius: 18px;
            overflow: hidden;
        }

        .pr-3 {
            padding-right: 10px !important;
        }

        .nome-produto h2{
            font-size: 19px;
        }

        .nome-produto p{
            font-size: 13px;
        }

        .col-desconto, .col-frete{
            font-size: 11px;
        }

        .preco-de, .preco-por {
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

        .add-to-cart{
            font-size: 14px !important;
        }

        .col-produto.w-50.p-4 {
            padding: 5px !important;
        }
    }

    @media (max-width: 380px) {
	.preco-de, .preco-de s {
		font-size: 8px !important;
	}
}

</style>
