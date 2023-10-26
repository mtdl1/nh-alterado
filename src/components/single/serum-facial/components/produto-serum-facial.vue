<template>
    <section class="produtoSingle pb-5" id="produtos">

        <div class="container breadcrumb-single mt-3 mb-3">
            <div class="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Início</a></li>
                        <li class="breadcrumb-item active pink" id="breadcrumbTitle" aria-current="page">
                            {{ nome }}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-7" id="sliderProductSingle" ref="sliderProductSingle">

                    <div id="custCarousel" class="carousel slide d-flex" align="center">
                        <!-- Thumbnails -->
                        <div class="overflowThumbs">
                            <div class="desk">
                                <ol class="list-group carousel-indicators thumbs d-flex">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['list-inline-item',{active: index==0}]"
                                        style="width: 100px;height: 100px!important">
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index"
                                            data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div class="mob">
                                <ol class="list-groupMob carousel-indicators thumbs d-block">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['list-inline-item',{active: index==0}]"
                                        style="width: 100px;height: 100px!important">
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index"
                                            data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <div class="desk">
                            <a class="thumb-controls cima" href="#custCarousel" data-slide="prev"><i
                                    class="fas fa-chevron-up"></i></a>
                            <a class="thumb-controls baixo" href="#custCarousel" data-slide="next"><i
                                    class="fas fa-chevron-down"></i></a>
                        </div>
                        <div class="mob">
                            <a class="thumb-controls left cimaMob" href="#custCarousel" data-slide="prev"><i
                                    class="fa fa-chevron-up"></i></a>
                            <a class="thumb-controls right baixoMob" href="#custCarousel" data-slide="next"><i
                                    class="fa fa-chevron-down"></i></a>
                        </div>

                        <!-- slides -->
                        <div class="carousel-inner" id="carouselInnerSlider">
                            <div class="imagens-plataforma">
                                <div v-if="opcoes == 'OPCAO1'">
                                  <div v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['carousel-item',{active: index==0}]">
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div class="carousel-item active" v-if="opcoes == 'OPCAO2'">
                                  <img src="@/assets/img/produtos/nh-serum/single/new-hair-imagens-kit-2.jpg" class="img-fluid" alt="">
                                </div>
                                <div class="carousel-item active" v-if="opcoes == 'OPCAO3'">
                                    <img src="@/assets/img/produtos/nh-serum/single/new-hair-imagens-kit-3.jpg"
                                        class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="selos d-flex align-center align-items-center desk mt-4">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/21082020224934.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Compra-Segura.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Nao-Testamos-Em-Animais.png"
                            alt="Compra segura">
                    </div>

                </div>

                <div class="col-md-5" id="InfoProduto">
                    <h1 class="titleProduto pb-3" id="titleProduct">{{nome}}</h1>

                    <div class="qualidades-produto">
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Pele mais jovem;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Hidratação profunda;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Redução de manchas;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Redução de acnes;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Ação antioxidante;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Renovação celular da pele;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Iluminação da pele;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Redução de poros;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Pele suave e macia;</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Promove sustentação;</p>
                        </div>
                    </div>

                    <div class="prices" v-if="opcoes == 'OPCAO1'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$
                                    {{ selecaoOpcao.opcao1.precosGerais.precoDe.toFixed(2).replace(".", ",") }}
                                </s> </p>
                            <p class="discount"> <strong>ECONOMIZE R$
                                    {{ (selecaoOpcao.opcao1.precosGerais.precoDe - selecaoOpcao.opcao1.precosGerais.precoPor).toFixed(2).replace(".", ",") }}
                                </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$
                                {{(selecaoOpcao.opcao1.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R$
                                    {{((selecaoOpcao.opcao1.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong>
                            </p>
                        </div>
                    </div>

                    <div class="prices" v-if="opcoes == 'OPCAO2'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$
                                    {{ selecaoOpcao.opcao2.precosGerais.precoDe.toFixed(2).replace(".", ",") }}
                                </s>
                            </p>
                            <p class="discount"> <strong>ECONOMIZE R$
                                    {{ (selecaoOpcao.opcao2.precosGerais.precoDe - selecaoOpcao.opcao2.precosGerais.precoPor).toFixed(2).replace(".", ",") }}
                                </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$
                                {{(selecaoOpcao.opcao2.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R$
                                    {{((selecaoOpcao.opcao2.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong>
                            </p>
                        </div>
                    </div>

                    <div class="prices" v-if="opcoes == 'OPCAO3'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$
                                    {{ selecaoOpcao.opcao3.precosGerais.precoDe.toFixed(2).replace(".", ",") }}
                                </s>
                            </p>
                            <p class="discount"> <strong>ECONOMIZE R$
                                    {{ (selecaoOpcao.opcao3.precosGerais.precoDe - selecaoOpcao.opcao3.precosGerais.precoPor).toFixed(2).replace(".", ",") }}
                                </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$
                                {{(selecaoOpcao.opcao3.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong> </p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R$
                                    {{((selecaoOpcao.opcao3.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong>
                            </p>
                        </div>
                    </div>

                    <div class="group-kits mb-3">
                        <h3 class="label-title">Selecione o Kit:</h3>
                        <form>

                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao3" @click="changeKit($event), idLista = 188">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="opcao3" name="kit"
                                            value="OPCAO3" v-model="opcoes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">3 Frascos Sérum Facial</p>
                                    </div>
                                </div>
                                <!-- <div class="position-absolute box-infos kit1">
                                    <div class="info-kit mb-1 firstColor">Tratamento 210 dias</div>
                                    <div class="desconto-kit position-relative">
                                        {{ (Math.floor(100 - (selecaoOpcao.opcao3.precosGerais.precoPor*100)/selecaoOpcao.opcao3.precosGerais.precoDe)) }}%
                                        OFF</div>
                                </div> -->
                            </label>

                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao2" @click="changeKit($event), idLista = 187">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="opcao2" name="kit"
                                            value="OPCAO2"  v-model="opcoes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">2 Frascos Sérum Facial</p>
                                        <!-- <p class="brinde-kit">1 Pote de Brinde</p> -->
                                    </div>
                                </div>
                                <!-- <div class="position-absolute box-infos kit2">
                                    <div class="info-kit mb-1 yellow">Kit Mais Vendido</div>
                                    <div class="desconto-kit position-relative">
                                        {{ (Math.floor(100 - (selecaoOpcao.opcao2.precosGerais.precoPor*100)/selecaoOpcao.opcao2.precosGerais.precoDe)) }}%
                                        OFF</div>
                                </div> -->
                            </label>

                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao1" @click="changeKit($event), idLista = 186">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="opcao1" name="kit"
                                            value="OPCAO1" checked v-model="checked">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">1 Frasco Sérum Facial</p>
                                    </div>
                                </div>
                            </label>

                        </form>
                    </div>

                    <div class="btn btn-primary btn-lg green mt-2" @click="addCartBoxCompra()">COMPRE AGORA</div>

                    <div class="selos d-flex align-center align-items-center mob">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/21082020224934.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Compra-Segura.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Nao-Testamos-Em-Animais.png"
                            alt="Compra segura">
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from "jquery"
    import Facebook from '@/Facebook.js'
    import Comunicacao from "@/comunicacao.js"

    // funcao desktop para avançar e voltar imagens do carousel
    $(function () {
        setTimeout(function() {
            var qtdImages = $('.list-group .list-inline-item').length
            var height = (parseInt($('.carousel .list-group .list-inline-item').outerHeight())) * qtdImages //Calcula altura da coluna de Thumbs
            var numImages = 3 // Quantidade de imagens que vai correr em cada carossel
            var count = Math.floor(height/480) // Quantidade de vezes que pode clicar para avançar
            var marginPadding = 0 // Caso haja margin e padding nos elementos
            var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
            var slide = (numImages * marginPadding) + ($('.carousel .list-group .list-inline-item').outerHeight() * numImages) // Tamanho do Slide (quanto de margin pode avançar)

            // Passa o valor da altura da coluna obtida no 'var height'
            $('.carousel .list-group').css('height', height)

            // Avança o Slide para baixo
            $('.baixo').click(function () {
                if(contador < count){
                    contador ++
                    $('.list-group').animate({'margin-top': '-=' + slide + 'px'}, '500')
                }
            });

            // Avança o Slide para cima
            $('.cima').click(function () {
                if(contador >= 1){
                    contador --
                    $('.list-group').animate({'margin-top': '+=' + slide + 'px'}, '500')
                }
            });
        }, 1500);

    })

    // funcao mobile para avancar e voltar imagens do carousel
    $(function () {
        var width = 900 //Calcula largura da linha de Thumbs
        var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
        var count = 4  // Quantidade de vezes que pode clicar para avançar
        var slide = 100  // Tamanho do Slide (quanto de margin pode avançar)

        $('.carousel .list-groupMob').css('width', width)

        $('.baixoMob').click(function () {
            if(contador < count){
                contador ++
                $('.list-groupMob').animate({'margin-left': '-=' + slide + 'px'}, '500')
            }
        });

        $('.cimaMob').click(function () {
            if(contador >= 1){
                contador --
                $('.list-groupMob').animate({'margin-left': '+=' + slide + 'px'}, '500')
            }
        });
    })

    export default {
      name: "ProdutoVitaminFeminino",
      data() {
            return {
                changeLinha: 1,
                checked: 'OPCAO1',
                activeClass: 'active',
                classImage: 'carousel-item',
                nome: 'New Hair - Sérum Facial 10 em 1',
                galeriaImagens: [],
                opcoes: 'OPCAO1',
                idLista: 186,
                selecaoOpcao: {
                    opcao1: {
                        precosGerais: {
                            precoDe: 149.99,
                            precoPor: 108.56,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        }
                    },
                    opcao2: {
                        precosGerais: {
                            precoDe: 299.80,
                            precoPor: 186.33,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
                    opcao3: {
                        precosGerais: {
                            precoDe: 449.70,
                            precoPor: 219.67,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    }
                },
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
            changeKit(event) {
                this.opcoes = event.target.value
                this.scrollToDiv()
            },

            // scroll para a div sliderProductSingle
            scrollToDiv() {
                window.scrollTo({
                    top: this.$refs.sliderProductSingle.offsetTop,
                    behavior: 'smooth'
                });
            },

            addCartBoxCompra() {
                let obFacebookPixel = new Facebook(this.$store.state.pixelFB)
                var Produto = this.idLista
                this.boxCompraCarrinho.itens[0].idProduto = Produto
                Comunicacao.$emit('toggleLoader', true)
                let {tipo, itens} = this.boxCompraCarrinho
                let itemAdc = false
                if (tipo && itens) {
                    //ADICIONA O PRODUTO AO CARRINHO
                    this.$carrinho.add(tipo,itens,(success, response) => {
                        response.data.itens.forEach(prod => {
                            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto
                        })
                        //PRODUTO ADICIONADO COM SUCESSO
                        if(success){
                            obFacebookPixel.apply('AddToCart', response.data)
                            return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                        }
                        this.changeDadosPageAtual(response.data)
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    });
                    return;
                }
            },

            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path
                }
                path = path.replace('?', '&')
                return path
            },
        },

        created() {
            // recupera o ID da lista de compras
            this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/${this.genPath(this.$route.fullPath)}`, {}, (success, response) => {
                if (success) {
                    var idLista = response.data.conteudo.id
                    this.idLista = idLista
                } else {
                    console.log('não foi possível recuperar o ID da lista de compras')
                }
            })

            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    //RECUPERA DADOS DO PRODUTO
                    var objetoProduto = JSON.parse(response.request.response)

                    // galeria de imagens
                    this.galeriaImagens = objetoProduto.conteudo.midias.imagensFull

                    // // descrição
                    document.getElementById("descricao").innerHTML = objetoProduto.conteudo.descricoes.curta

                    //ALTERA ID DO PRODUTO PRO CARRINHO
                    this.boxCompraCarrinho.itens[0].idProduto = objetoProduto.conteudo.id

                    //SETA PRODUTO PARA EVENTO DE ADDCART NO GTM
                    let prod = {
                        id: objetoProduto.conteudo.id,
                        nome: objetoProduto.conteudo.nome,
                        marca: {
                            nome: objetoProduto.conteudo.marca.nome,
                        },
                        precos: {
                            por: objetoProduto.conteudo.precos.por,
                        }
                    }
                    this.boxCompraCarrinho.prod = prod

                    this.$aplicaSEO(response.data.estrutura)
                    this.listagemData = response.data.conteudo
                    this.loading.geral = false

                    //VARIÁVEIS PÚBLICAS
                    this.changeDadosPageAtual(response.data)
                }
            });
        },
        
    }
</script>

<style scoped>
.circ-select {
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  margin: 0 10px;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ff428a00;
  margin: 0 !important;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* opacity: 1; */
}

input[type="radio"]:checked {
  background-color: #FF4289;
  border: 5px solid white !important;
}

.selecionado {
  background-color: #FFF7FA;
  outline: 1px solid #FF4289;
  border: 0 !important;
}

.breadcrumb-single .breadcrumb {
  background-color: unset;
  font-size: 13px;
}

.pink {
  color: #000000;
  font-weight: bold;
}

span.carousel-control-prev-icon,
span.carousel-control-next-icon {
  transform: rotate(90deg);
}

.thumb-controls i {
  color: #555555;
  font-size: 20px;
}

.cima {
  position: absolute;
  top: 0;
  width: 105px;
  left: 0;
  z-index: 99;
}

.baixo {
  position: absolute;
  bottom: 37px;
  width: 105px;
  left: 0;
  z-index: 99;
}

.list-group.carousel-indicators.thumbs {
  height: 1100px;
  overflow: hidden;
  align-self: flex-start;
}

#custCarousel .carousel-indicators li img {
  display: block;
}

.carousel-inner {
  width: 560px;
}

.carousel-inner img {
  width: 100%;
  height: auto;
}

#custCarousel .carousel-indicators{
  width: 150px;
  position: relative;
  margin: 0;
  flex-direction: column;
  right: unset;
  bottom: unset;
  left: unset;
  padding: unset;
  z-index: 8;
}

/* Slider Produtos */

.titleProduto {
  font: normal normal normal 28px/30px Open Sans;
    letter-spacing: 0px;
    color: #1a1a1a;
    font-weight: 700 !important;
}

p.descricao {
  font-size: 15px;
  padding: 0 0 18px;
  line-height: 1;
  color: #3c3c3c;
  font-family: "Roboto Regular", sans-serif;
}

.priceOld s {
  font-size: 16px;
  color: #8f8f8f;
  font-family: "Roboto Regular", sans-serif;
}

.priceOld,
.priceNew,
.discount {
  margin: -10px 20px 0 0;
  font-family: "Roboto Regular", sans-serif;
}

.discount {
  background: #fff154;
  font-size: 15px;
  color: #000;
  font-weight: 900;
  padding: 5px 10px;
  box-sizing: border-box;
  font-family: "Roboto Regular", sans-serif;
}

.txtPrice {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  font-family: "Roboto Regular", sans-serif;
}

.green {
  background: #18a851;
  border-color: #18a851;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
}

.green:active,
.green:hover {
  opacity: 0.8;
  border-color: #18a851 !important;
}

.currentPrice {
  font-size: 46px;
}

.currentPrice span {
  font-size: 20px;
  color: #18A851;
}

/* Slider Column */

div#custCarousel,
div#custCarousel2 {
  height: 560px;
}

.carousel-item {
  height: 560px;
}

div#carouselInnerSlider {
  align-self: flex-start;
}

.overflowThumbs {
  height: 490px;
  overflow: hidden;
  margin-top: 20px;
}

.carousel-indicators li {
  opacity: 1 !important;
}

.select_sabores {
  position: relative;
  user-select: none;
  border: 1px solid #707070;
  border-radius: 8px;
  margin: 5px auto 15px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "Helvetica", sans-serif;
  font-size: 15px;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 2.5;
}

.select_sabores select {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  /* background: #fff; */
}

.label-title {
  font: normal normal bold 20px/30px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

.check-label {
  height: 65px;
  border: 1px solid #707070;
  border-radius: 8px !important;
  cursor: pointer;
}

.check-label:hover {
  border: 1px solid #FF4289;
}

.check-input {
  width: 30px;
  height: 30px;
}

input:checked {
  border: 6px solid black !important;
}

.name-kit {
  font: normal normal bold 19px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

.description-kit {
  font: normal normal 300 12px/30px Open Sans;
  letter-spacing: -0.52px;
  color: #7B7B7B;
}

.box-infos {
  right: 0;
  text-align: right;
}

.info-kit {
  font: normal normal bold 13px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
}

.orange {
  background: #ff8000 !important;
}

.yellow {
  background: #ffff00 !important;
  color: #1a1a1a !important;
}

.firstColor {
  background: #FF4289 !important;
}

.desconto-kit {
  background: #18a851;
  font: normal normal bold 13px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
  width: max-content;
  margin-left: auto;
}

.carousel-indicators {
  justify-content: flex-start;
}

.txt-beneficio p {
    text-align: center!important;
    letter-spacing: 0px!important;
    color: #333333;
    font-weight: bold !important;
    font-size: 14px!important;
    line-height: 19px!important;
}

.segundo-texto {
  margin-bottom: 10px!important;
}

p.description-kit {
    line-height: 10px!important;
}

.info-prod.desk p.desk {
    padding-top: 15px;
}

@media (max-width: 767px) {
  .breadcrumb-single .breadcrumb {
    background-color: unset;
    font-size: 13px;
  }

  .pink {
    color: #333;
    font-weight: bold;
  }

  .overflowThumbs {
    height: 120px;
    overflow: hidden;
    margin-top: 20px;
    text-align: left;
  }

  .thumb-controls {
    background: #00000044;
  }

  .thumb-controls:hover {
    background: #0000007e;
  }

  .thumb-controls i {
    color: #fff;
    font-size: 25px;
  }

  .left {
    position: absolute;
    bottom: 0 !important;
    top: unset;
    width: 25px;
    height: 118px;
    left: 0px;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left i {
    transform: rotate(-90deg);
  }

  .right {
    position: absolute;
    bottom: 0 !important;
    width: 25px;
    height: 118px;
    right: 0px;
    left: unset;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right i {
    transform: rotate(270deg);
  }

  .list-group.carousel-indicators.thumbs {
    /* height: 1100px; */
    overflow: hidden;
    align-self: flex-start;
  }

  .list-groupMob.carousel-indicators.thumbs {
    overflow: hidden;
    align-self: flex-start;
    width: 90px;
    justify-content: flex-start;
    width: 90px;
    justify-content: flex-start;
  }

  .carousel-item {
    height: auto;
  }

  /* Slider Produtos */

  .titleProduto {
    font: normal normal bold 28px/30px Open Sans;
    letter-spacing: 0px;
    color: #1a1a1a;
  }

  p.descricao {
    font-size: 15px;
    padding: 0 0 18px;
    line-height: 1;
    color: #3c3c3c;
    font-family: "Roboto Regular", sans-serif;
  }

  .priceOld,
  .priceNew,
  .discount {
    margin: 0 10px 0 0;
    font-family: "Roboto Regular", sans-serif;
  }

  .priceOld {
    margin-bottom: 10px;
  }

  .priceNew {
    font-size: 18px;
    margin-top: -15px !important;
  }

  .discount {
    background: #fff154;
    font-size: 14px;
    color: #000;
    font-weight: 900;
    padding: 5px 10px;
    box-sizing: border-box;
    font-family: "Roboto Regular", sans-serif;
  }

  .txtPrice {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    font-family: "Roboto Regular", sans-serif;
  }

  .green {
    background: #18a851;
    border-color: #18a851;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  .green:active,
  .green:hover {
    opacity: 0.8;
    border-color: #18a851 !important;
  }

  .currentPrice {
    font-weight: 900;
    font-size: 35px !important;
  }

  /* Slider Column */

  div#custCarousel,
  div#custCarousel2 {
    flex-direction: column-reverse;
    overflow: hidden;
    height: auto;
    margin-bottom: 20px;
  }

  div#carouselInnerSlider {
    align-self: flex-start;
  }

  .list-groupMob #custCarousel .carousel-indicators {
    flex-direction: row;
    height: 120px !important;
    order: 2;
    width: 900px;
    justify-content: flex-start;
  }

  #custCarousel .carousel-indicators {
    width: 900px;
  }

  .overflowThumbs {
    margin-top: 0;
  }

  .carousel-inner img {
    width: 100%;
    height: auto;
  }

  #custCarousel .carousel-indicators li img {
    width: 100px;
    height: 100px;
  }

  .carousel-inner {
    width: 100% !important;
  }

  .carousel-item img {
    width: 100% !important;
  }

  .titleProduto {
    font-size: 20px;
  }

  .descricao {
    display: none;
  }

  .subTitle {
    font-size: 18px;
  }

  li.list-inline-item {
    width: unset !important;
  }

  img.thumbnailsprod {
    width: 120px !important;
  }

  .name-kit {
    font: normal normal bold 16px Open Sans;
  }

  .description-kit {
    font: normal normal normal 12px Open Sans;
  }

  .select_sabores {
    position: relative;
    user-select: none;
    border: 1px solid #dedede;
    border-radius: 8px;
    margin: 15px auto;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: "Helvetica", sans-serif;
    font-size: 15px;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 2.5;
  }

  .select_sabores select {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    /* background: #fff; */
  }

  .desk {
    display: none !important;
  }

  .selos.mob {
    width: 100% !important;
    padding: 0;
    display: flex !important;
  }

  .qualidades-produto {
    padding: 10px 0;
    margin-bottom: 15px;
  }

  .qualidades-produto .qualidade {
    margin-bottom: 0;
  }

  a.btn.btn-header-link {
    border-radius: 0;
  }

  ul#myTab {
    justify-content: space-around;
  }

  li.nav-item {
      width: fit-content;
      text-align: center;
  }

  }

/* Single Serum Vita C  */

.qualidade {
  display: flex;
  align-items: center;
}

.qualidade img {
  padding-right: 8px;
}

.priceOld,
.priceNew,
.discount {
  margin: 0 !important;
}

.qualidades-produto {
  padding-bottom: 5px;
}

#custCarousel,
#custCarousel2 {
  height: 530px !important;
}

.carousel-inner {
  height: 530px !important;
}

.selos {
    justify-content: center;
}

@media (max-width: 600px) {
  .selos {
    flex-wrap: wrap;
  }

  .selos {
    justify-content: space-between !important;
    margin-top: 25px !important;
    margin-right: 0;
    padding: 0 20px;
  }

  .selos img {
    padding: 0 !important;
    padding-right: 0 !important;
  }

  .carousel-inner {
    height: unset !important;
  }

  ol.breadcrumb {
    padding-right: 0;
    margin-right: 0;
    padding-left: 5px;
  }

  .qualidade {
    margin-bottom: 15px;
  }

  .check-label {
    border-radius: 8px !important;
  }

}

p.discount {
  text-align: right;
}

p.discount span {
  font-size: 18px;
}

@media (max-width: 600px) {
  .selos img {
    width: 25%;
  }

  .selos .premium {
    height: 80px !important;
    width: auto !important;
  }

  ol.breadcrumb {
    padding-bottom: 0;
    margin-bottom: 5px;
  }

  .txt-beneficio p{
    line-height: 14px!important;
    font-size: 10px!important;
  }

  .txt-beneficio p {
    font-size: -3px!important;
  }

  div#faq a {
      font-family: 'Open Sans';
      padding-bottom: 0;
      margin-top: 2px;
  }

  a#beneficios3-tab {
      text-align: left;
      padding-left: 0;
      padding-right: 0;
  }

  ul#myTab {
      justify-content: space-between!important;
  }

  a#resultados3-tab {
    padding-left: 0;
    padding-right: 0;
  }

  a#como-usar3-tab {
      padding-left: 0;
      padding-right: 0;
  }

  a.btn.btn-header-link {
    padding-bottom: 8px!important;
  }

}


/* Infos Goma */
.btn:focus {
  box-shadow: none;
}

.card {
  border: none;
}

.card-group {
  flex-direction: row;
  flex-wrap: wrap;
}

.item-card {
  width: 110px;
  padding: 0 !important;
}

#faq .card .card-header {
  border: 0;
  border-radius: 2px;
  padding: 0;
  height: 48px;
}

#faq .card .card-header .btn-header-link {
  font: normal normal bold 18px Open Sans;
  display: block;
  text-align: left;
  height: 48px;
}

.card-tree .btn-header-link {
  background: #FF4289;
  color: #fff;
}

.card-one .card-header .btn-header-link:after {
  color: #333;
}

#faq .card .card-header .btn-header-link:after {
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  float: right;
}

.card-one .card .card-header .btn-header-link.collapsed {
  /* background: #A541BB; */
  color: #333;
}

#faq .card .card-header .btn-header-link.collapsed:after {
  content: "\f106";
}

#faq .card .collapsing {
  /* background: #FFE472; */
  line-height: 30px;
}

#faq .card .collapse {
  border: 0;
}

#faq .card .collapse.show {
  /* background: #FFE472; */
  line-height: 30px;
  color: #333;
}

.card-body h3 {
  font: normal normal bold 20px/22px Open Sans;
  color: #333333;
}

.card-body p {
  font: normal normal normal 18px Open Sans;
  color: #333333;
}

.card-img-top {
  margin: 0 auto;
}

.card-title {
  font: normal normal bold 13px/14px Open Sans;
  color: #333333;
  line-height: 15px;
}

.card-group .card-body {
  padding: 0;
}

/* Info Gomas */

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

.info-prod-total {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img-antes-depois h3 {
  width: 60%;
  background: #FF4289;
  border-radius: 6px 6px 0px 0px;
  text-align: center;
  margin: 0 auto;
  font: normal normal bold 25px/25px Open Sans;
  letter-spacing: -0.88px;
  color: #FFFFFF;
  padding: 15px 0 10px;
}

.info-prod {
  width: 100%;
}

.info-prod p {
  text-align: left;
  font: normal normal normal 16px/26px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}

.img-info-prod {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}

div#faq a {
  width: 100%;
}

.card-header {
  background-color: unset;
  height: unset !important;
}

.cards-beneficios {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}

.cards-beneficios h5 {
  text-align: center;
}

.img-beneficio {
  text-align: center;
}

.texto-beneficio h5 {
  font-size: 13px !important;
  font-family: "Open Sans";
  margin-top: 10px;
}

.cards-beneficios.dados .beneficios {
  width: 20%;
}

.texto-beneficio.dados p {
  text-align: center;
  font: normal normal normal 15px/18px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}

.dados-beneficio p {
  text-align: center;
  font: normal normal 800 40px/55px Open Sans;
  letter-spacing: 0px;
  color: #FF4289;
}

.dados-beneficio {
  letter-spacing: 0 !important;
}

.btn-header-link {
  height: unset !important;
  padding: 11px 0.75rem;
}


.acido .segundo-texto strong {
  color: #FF4289;
}

.segundo-texto strong {
  font-weight: 800;
}

.como-usar.final {
  margin-bottom: 0;
}

span.desk {
  display: inline-block;
}

@media (max-width: 600px) {
  .img-info-prod {
    display: none;
  }

  div#faq a {
    width: 100% !important;
  }

  .info-prod {
    width: 100% !important;
  }

  .cards-beneficios {
    flex-wrap: wrap;
    margin-bottom: 0 !important;
  }

  .beneficios {
    width: 25%;
    margin-bottom: 30px;
  }

  .beneficios p{
    font-size: 12px!important;
  }

  .dados-beneficio p {
    font-size: 40px!important;
  }

  .cards-beneficios.dados .beneficios {
    width: 40% !important;
  }

  .como-usar {
    margin: 0;
  }

  .cards-como-usar {
    flex-wrap: wrap;
  }

  .card-passo {
    width: 80% !important;
    margin: 0 auto;
  }

  .txt-destaque {
    width: 90% !important;
  }

  .info-prod.mob .nav-item {
    font-size: 18px;
    letter-spacing: -0.72px;
    color: #F18137;
  }

  .nav-tabs {
    border-color: #F18137;
    margin-bottom: 20px;
  }

  .nav-tabs .nav-link.active {
    border-color: #F18137 !important;
    border: 0;
    border-bottom: 3px solid;
    color: #F18137;
    font-weight: bold;
    transition: 0.2s;
  }

  span.desk {
    display: none;
  }

  .vitab3 .info-prod.mob .nav-tabs .nav-link {
    border: 0;
    border-color: black !important;
    color: black;
  }

  .vitab3 .info-prod.mob .nav-tabs .nav-link.active {
    border-bottom: 3px solid black;
  }

  .vitab3 .info-prod.mob .nav-tabs {
    border-color: black !important;
  }

  .acido .info-prod.mob .nav-tabs .nav-link {
    border: 0;
    border-color: #F13787 !important;
    color: #F13787;
  }

  .acido .info-prod.mob .nav-tabs .nav-link.active {
    border-bottom: 3px solid #F13787;
  }

  .acido .info-prod.mob .nav-tabs {
    border-color: #F13787 !important;
  }

  .como-usar {
    padding-bottom: 10px;
    margin-bottom: 20px !Important;
  }

  a#beneficios3-tab {
    font-size: 16px;
  }

  a#resultados3-tab {
    font-size: 16px;
  }

  a#como-usar3-tab {
    font-size: 16px;
  }

  #faq .card .card-header .btn-header-link {
    font-size: 16px;
  }

  ol.breadcrumb {
    padding-right: 0;
    margin-right: 0;
  }

  .como-usar.mob h2 {
    font-size: 18px;
  }

  .info-prod p {
    font-size: 14px;
  }

  .como-usar {
    background-color: unset;
    margin-bottom: 0 !important;
  }

  .card-passo {
    width: 45% !important;
    margin: 0 auto;
  }

  .card-passo img {
    width: 90%;
  }

  .card-passo p {
    line-height: 20px;
    margin: 10px 0;
    margin-bottom: 20px;
    padding: 0;
  }

  .txt-destaque {
    background-color: #f13787 !important;
  }

  .txt-destaque {
    padding: 10px !important;
    line-height: 20px !important;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .txt-destaque {
    font-size: 16px !important;
  }

  .dados-beneficio p {
    letter-spacing: -2.5px !important;
  }

  .cards-beneficios.dados .dados-beneficio p {
  font-size: 40px;
  }

  .segundo-texto{
    line-height: 18px!important;
  }

}

@media (max-width: 400px) {
  a#beneficios3-tab {
    font-size: 14px;
  }

  a#resultados3-tab {
    font-size: 14px;
  }

  a#como-usar3-tab {
    font-size: 14px;
  }

  p.brinde-kit {
    font-size: 12px;
  }
  
}
/* Infos Goma */

</style>
