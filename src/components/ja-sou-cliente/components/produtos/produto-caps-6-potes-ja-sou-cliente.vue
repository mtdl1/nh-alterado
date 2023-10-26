<template>
    <div class="container d-flex flex-column col-produto">
        <div class="d-flex header-produto">
            <div class="col px-0 h-100 d-flex align-items-center justify-content-center bg-pink text-center"> <h2>{{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF</h2> </div>
            <div class="col px-0 h-100 d-flex align-items-center justify-content-center bg-gray text-center"> <p>TRATAMENTO 180 DIAS</p></div>
        </div>
        <div class="d-flex flex-grow-1 pb-1 pr-3">
            <div class="col-6 col-md-6 d-flex justify-content-center align-items-end align-items-mob">
                <div class="flag d-flex justify-content-center align-items-center">FRETE GRÁTIS</div>
                <div class="precoPorPote mt-2 text-center">R$ {{(precoPor/quantidadeItens).toFixed(2).toString().replace(".", ",")}} cada pote</div>
                <img id="169" src="@/assets/img/produtos/kit5.png" class="img-fluid img-produto" alt="">
            </div>
            <div class="col-6 col-md-6 p-0 pt-2 d-flex flex-column justify-content-between align-items-end">
                <p class="name-product pt-2 pb-2">6 Potes New Hair Caps<br> + Massageador + Máscara</p>
                <div class="d-flex pt-4">
                    <span><s class="precoDe mr-2">R$ {{precoDe.toFixed(2).toString().replace(".", ",")}}</s> 
                    <span class="precoPor">R$ {{precoPor.toFixed(2).toString().replace(".", ",")}}</span></span>
                </div>
                <div class="text-right">
                    <p class="parcelamento mt-2">Ou 8x sem juros de</p>
                    <span class="precoParcelado">R$ {{((precoPor/8).toFixed(2)).toString().replace(".", ",")}}</span>
                </div>
                <input type="submit" value="COMPRE AGORA" class="btnCompra" @click="addCartBoxCompra();">
            </div>
        </div>
    </div>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: "ProdutoCaps6Pote",

        data(){
            return {
                sabores: 0,
                precoDe: 714.00,
                precoPor: 379.90,
                quantidadeItens: 6,
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "117",
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
                                currentProduct: '6 Potes New Hair Caps + Massageador + Máscara', 
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
    .col-produto {
        width: 49%;
        height: 362px;
        border: 1px solid #9E9E9E;
        padding: 0;
        margin: 0 0 15px;
    }

    .header-produto h2 {
        font: normal normal 800 15px Open Sans;
        letter-spacing: -0.53px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .header-produto p {
        font: normal normal 800 14px Open Sans;
        letter-spacing: -0.53px;
        color: #333333;
        text-transform: uppercase;
    }

    .header-produto {
        height: 44px !important;      
    }

    .bg-pink  {
        background: #ff4289 0% 0% no-repeat padding-box;
        border-radius: 3px 0px 0px 0px;
    }
    .bg-gray  {
        background: #F2F2F2 0% 0% no-repeat padding-box;
        border-radius: 0px 3px 0px 0px;
    }

    .flag {
        width: 168px;
        height: 36px;
        background-color: #fffc00;
        position: absolute;
        top: 0; 
        left: 0;
        z-index: 9;
        font-family: 'Roboto',sans-serif;
        font-weight:900;
        font-size:14px;
        color: #333333;
    }

    .frete {
        width: 168px;
        height: 36px;
        background-color: #ED3D80;
        position: absolute;
        top: 36px; 
        left: 0;
        z-index: 9;
        font-family: 'Roboto',sans-serif;
        font-weight:900;
        font-size:14px;
        color: #FFF;
    }

    .img-produto {
        height: auto !important;
        margin-top: 20px !important;
    }

    .name-product {
        font: normal normal 700 17px/17px Open Sans;
        letter-spacing: -0.53px;
        color: #333333;
        text-align: right;
    }

    .precoDe {
        font: normal normal normal 15px Helvetica;
        letter-spacing: -0.53px;
        color: #949494;
        text-transform: uppercase;
    }

    .precoPor {
        font: normal normal bold 16px Helvetica;
        letter-spacing: -0.56px;
        color: #333333;
        text-transform: uppercase;
        top: 36px;
    }

    .parcelamento {
        font: normal normal normal 15px Open Sans;
        letter-spacing: -0.53px;
        color: #949494;
    }

    .precoParcelado {
        font: normal normal bold 50px Helvetica;
        letter-spacing: -1.75px;
        color: #333333;
    }

    select {
        width: 200px;
    }

    .precoPorPote {
        width: 168px;
        padding: 5px;
        background: #E2E2E2 0% 0% no-repeat padding-box;
        font: normal normal normal 13px Open Sans;
        letter-spacing: -0.46px;
        color: #333333;
        position: absolute;
        top: 28px; 
        left: 0;
    }

    .btnCompra {
        transition: 0.5s ease;
        width: 200px;
        height: 60px;
        background: #12AC53 0% 0% no-repeat padding-box;
        border-radius: 4px;
        color: #fff;
        font: normal normal bold 14px/14px Open Sans;
        letter-spacing: -0.16px;
        color: #FFFFFF;
        border: none;
        margin: 12px 0;
        cursor: pointer;
    }

    .btnCompra:hover {
        opacity: 0.7;
    }

    @media screen and (max-width:768px) {
        .col-produto {
            width: 100%;
            margin-bottom: 15px !important;
        }

        .precoParcelado {
            font: normal normal bold 40px Helvetica;
        }

        select, .btnCompra  {
            width: 85%;
        } 
        
        .flag, .frete {
            width: 120px;
        }

        .precoPorPote {
            width: 120px;
        }

        .name-product {
            font: normal normal 700 14px/14px Open Sans;
        }

        .align-items-mob {
            align-items: center !important;
        }

        select {
            font-size: 14px;
        }
        
    }
</style>