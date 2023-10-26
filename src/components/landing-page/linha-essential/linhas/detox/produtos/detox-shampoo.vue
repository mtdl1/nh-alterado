<template>
    <div class="card">
        <div class="img-card position-relative">
            <a href="/shampoo-super-detox-cabelos-oleosos-new-hair-home-care-essential.html">
                <img class="card-img-top" src="@/assets/img/linha-essential/linhas/detox/produtos/detox-shampoo.jpg" alt="Imagem do Shampoo New Hair Linha Essential Super Detox" title="Shampoo Super Detox">
            </a>
            <div class="position-absolute desconto"> {{ (Math.floor(100 - (precoPor*100)/precoDe)) }}% OFF </div>
        </div>
        <div class="card-body">
            <div class="body-title">
                <h5 class="card-title">Super Detox Shampoo 300ml</h5>
                <p class="card-subtitle"></p>
            </div>
            <div class="price">
                <div class="d-flex align-items-center">
                    <p class="precoDe"><s> {{ precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s></p>
                    <p class="precoPor"> {{ precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </p>
                </div>
                <p class="parcelas">Ou 8x sem juros de</p>
                <p class="precoParcelado"> {{ (precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </p>
            </div>
            <div v-if="$route.name == 'landing-page-essential'">
                <a href="/shampoo-super-detox-cabelos-oleosos-new-hair-home-care-essential.html" class="btn-compra">Saiba mais</a>
            </div>
            <button class="btn-compra" @click="addCartBoxCompra();" v-else>ADICIONAR AO CARRINHO</button>
        </div>
    </div>
</template>

<script>
    import Comunicacao from '@/comunicacao.js'

    export default {
        name: 'SosReparacaoCondicionador',

        data() {
            return {
                precoDe: 49.90,
                precoPor: 27.70,
                quantidadeItens: 1,
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "154",
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
                                currentProduct: 'Super Detox Shampoo 300ml', 
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
    .card {
        border: none !important;
    }

    .card-body {
        padding: 10px 0 !important;
    }

    .body-title {
        min-height: 60px;
    }

    .card-title {
        text-align: left;
        font: normal normal bold 18px/20px Open Sans;
        letter-spacing: -0.18px;
        color: #333333;
    }

    .card-subtitle {
        text-align: left;
        font: normal normal normal 14px/20px Open Sans;
        letter-spacing: -0.14px;
        color: #999999;
        margin-top: -10px;
    }

    .precoDe {
        font: normal normal normal 15px/15px Helvetica;
        letter-spacing: -0.15px;
        color: #999999;
    }

    .precoPor {
        font: normal normal bold 16px/15px Helvetica;
        letter-spacing: -0.16px;
        color: #333333;
        padding-left: 8px;
    }

    .parcelas {
        font: normal normal normal 15px/15px Helvetica;
        letter-spacing: -0.15px;
        color: #A2A1A1;
        padding-top: 9px;
    }

    .precoParcelado {
        font: normal normal bold 40px/50px Helvetica;
        letter-spacing: -0.4px;
        color: #0F0F0F;
    }

    .btn-compra {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #12AC53 0% 0% no-repeat padding-box;
        border-radius: 7px;
        font: normal normal 800 18px/15px Open Sans;
        letter-spacing: -0.25px;
        color: #FFFFFF;
        margin-top: 15px;
        text-transform: uppercase;
    }

    .btn-compra:hover {
        opacity: .8;
    }

    .desconto {
        width: 80px;
        height: 26px;
        background: #FF4289 0% 0% no-repeat padding-box;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font: normal normal bold 15px/50px Helvetica;
        letter-spacing: 0px;
        color: #FFFFFF;
        z-index: 1;
    }

    @media(max-width: 768px) {
        .card-title {
            font: normal normal bold 16px/20px Open Sans;
            letter-spacing: -0.14px;
            min-height: 40px;
        }

        .card-subtitle {
            font: normal normal normal 15px/16px Open Sans;
            letter-spacing: -0.12px;
            min-height: 50px;
        }

        .precoParcelado {
            font: normal normal bold 35px/38px Helvetica;
            letter-spacing: -0.35px;
        }

        .body-title {
            min-height: 70px;
        }

        .btn-compra {
            height: 42px;
            font: normal normal 800 13.1px/15px Open Sans;
            letter-spacing: -0.2px;
        }

        .desconto {
            width: 70px;
            height: 20px;
            font: normal normal bold 12px/20px Helvetica;
        }
    }
</style>