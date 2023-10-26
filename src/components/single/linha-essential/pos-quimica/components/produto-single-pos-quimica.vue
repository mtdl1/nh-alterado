<template>
    <section class="produtoSingle" id="produtos">
        <div class="container breadcrumb-single mt-2 mb-0">
            <div class="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-1">
                        <li class="breadcrumb-item"><a href="/">Início</a></li>
                        <li class="breadcrumb-item"><a href="/tratamento-capilar-linha-essential">Home care essential</a></li>
                        <li class="breadcrumb-item active pink" id="breadcrumbTitle" aria-current="page" v-html="breadcrumb"></li>
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
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important"> 
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="" @click="changeSaborOption()">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div class="mob">
                                <ol class="list-groupMob carousel-indicators thumbs d-block">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important"> 
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <div class="desk">
                            <a class="thumb-controls cima" href="#custCarousel" data-slide="prev"><i class="fas fa-chevron-up"></i></a>
                            <a class="thumb-controls baixo" href="#custCarousel" data-slide="next"><i class="fas fa-chevron-down"></i></a>
                        </div>
                        <div class="mob">
                            <a class="thumb-controls left cimaMob" href="#custCarousel" data-slide="prev"><i class="fas fa-chevron-up"></i></a>
                            <a class="thumb-controls right baixoMob" href="#custCarousel" data-slide="next"><i class="fas fa-chevron-down"></i></a>
                        </div>

                        <!-- slides -->
                        <div class="carousel-inner" id="carouselInnerSlider">
                            <div class="imagens-plataforma" v-if="sabores == 0">
                                <div v-if="kitPotes == 'KITCOMPLETO'">
                                   <!-- <img src="@/assets/img/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.jpg" class="img-fluid" alt="">  -->
                                    <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==0}]" > 
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div v-if="kitPotes == 'KITBASICO'">
                                   <!-- <img src="@/assets/img/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.jpg" class="img-fluid" alt="">  -->
                                    <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==4}]" > 
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div v-if="kitPotes == 'KITMASCARA'">
                                   <!-- <img src="@/assets/img/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.jpg" class="img-fluid" alt="">  -->
                                    <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==7}]" > 
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div v-if="kitPotes == 'KITSHAMPOO'">
                                   <!-- <img src="@/assets/img/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.jpg" class="img-fluid" alt="">  -->
                                    <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==5}]" > 
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div v-if="kitPotes == 'KITCONDICIONADOR'">
                                   <!-- <img src="@/assets/img/linha-essential/linhas/pos-quimica/produtos/kit-completo-pos-quimica.jpg" class="img-fluid" alt="">  -->
                                    <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==6}]" > 
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="desk">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <img class="img-fluid" src="@/assets/img/single/linha-essential/icones/selos/google-safe.png" alt="Compra segura"/>
                            <img class="img-fluid" src="@/assets/img/single/linha-essential/icones/selos/compra-Segura.svg" alt="Compra segura"/>
                            <img class="img-fluid" src="@/assets/img/single/linha-essential/icones/selos/premium-Quality.svg" alt="Compra segura"/>
                        </div>
                        <BeneficiosEssentialSingle nomeLinha="SGPosQuimica"/>
                    </div>
                </div>

                <div class="col-md-5" id="InfoProduto">
                    <h1 class="titleProduto">{{nome}}</h1>
                    <div class="descricao mb-4">
                        <div class="item-desc pb-1 d-flex align-items-center" v-for="(topico, index) in topicos" :key="index">
                            <img class="mr-1" src="@/assets/img/single/selecionado-pos.png" alt="" />
                            <p>{{topico}}</p>
                        </div>
                    </div>

                    <!-- Kit 3 Potes -->
                    <div class="prices" v-if="kitPotes == 'KITCOMPLETO'">
                        <p class="priceOld"> <s> {{ saboresKit.kit2.precosGerais.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s> </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="currentPrice"> <strong> {{saboresKit.kit2.precosGerais.precoPor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                            <p class="discount text-right"> ECONOMIZE <br> <strong> {{ (saboresKit.kit2.precosGerais.precoDe - saboresKit.kit2.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></p>
                        </div>
                        <div class="d-flex align-items-center mt-3 mb-2">
                            <p class="priceNew">Ou 8x de <strong> {{(saboresKit.kit2.precosGerais.precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                        </div>
                    </div>

                    <!-- Kit 1 Pote -->
                    <div class="prices" v-if="kitPotes == 'KITBASICO'">
                        <p class="priceOld"> <s> {{ saboresKit.kit1.precosGerais.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s> </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="currentPrice"> <strong>{{ (saboresKit.kit1.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                            <p class="discount"> ECONOMIZE <br> <strong> {{ (saboresKit.kit1.precosGerais.precoDe - saboresKit.kit1.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></p>
                        </div>
                        <div class="d-flex align-items-center mt-3 mb-2">
                            <p class="priceNew">Ou 8x de <strong> {{ (saboresKit.kit1.precosGerais.precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                        </div>
                    </div>

                    <!-- Mascara 1 pote -->
                    <div class="prices" v-if="kitPotes == 'KITMASCARA'">
                        <p class="priceOld"> <s> {{ saboresKit.kitmascara.precosGerais.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s> </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="currentPrice"> <strong>{{ (saboresKit.kitmascara.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                            <p class="discount"> ECONOMIZE <br> <strong> {{ (saboresKit.kitmascara.precosGerais.precoDe - saboresKit.kitmascara.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></p>
                        </div>
                        <div class="d-flex align-items-center mt-3 mb-2">
                            <p class="priceNew">Ou 8x de <strong> {{ (saboresKit.kitmascara.precosGerais.precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                        </div>
                    </div>
                    
                    <!-- Shampoo 1 pote -->
                    <div class="prices" v-if="kitPotes == 'KITSHAMPOO'">
                        <p class="priceOld"> <s> {{ saboresKit.kitshampoo.precosGerais.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s> </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="currentPrice"> <strong>{{ (saboresKit.kitshampoo.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                            <p class="discount"> ECONOMIZE <br> <strong> {{ (saboresKit.kitshampoo.precosGerais.precoDe - saboresKit.kitshampoo.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></p>
                        </div>
                        <div class="d-flex align-items-center mt-3 mb-2">
                            <p class="priceNew">Ou 8x de <strong> {{ (saboresKit.kitshampoo.precosGerais.precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                        </div>
                    </div>
                    
                    <!-- Condicionador 1 pote -->
                    <div class="prices" v-if="kitPotes == 'KITCONDICIONADOR'">
                        <p class="priceOld"> <s> {{ saboresKit.kitcondicionador.precosGerais.precoDe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </s> </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="currentPrice"> <strong>{{ (saboresKit.kitcondicionador.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                            <p class="discount"> ECONOMIZE <br> <strong> {{ (saboresKit.kitcondicionador.precosGerais.precoDe - saboresKit.kitcondicionador.precosGerais.precoPor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </strong></p>
                        </div>
                        <div class="d-flex align-items-center mt-3 mb-2">
                            <p class="priceNew">Ou 8x de <strong> {{ (saboresKit.kitcondicionador.precosGerais.precoPor/8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong> </p>
                        </div>
                    </div>

                    <div class="group-kits my-3">
                        <h3 class="label-title">Selecione o Kit:</h3>
                        <form>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kit2Potes" @click="changeKit($event), idLista = 136">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="kit2Potes" name="kit" value="KITCOMPLETO" v-model="kitPotes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> Kit Completo Pós Química</p>
                                        <p class="description-kit">Shampoo, condicionador e máscara</p>
                                    </div>
                                </div>
                                <div class="position-absolute box-infos kit1">
                                    <div class="desconto-kit position-relative">{{ (Math.floor(100 - (saboresKit.kit2.precosGerais.precoPor*100)/saboresKit.kit2.precosGerais.precoDe)) }}% OFF</div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kit1" @click="changeKit($event), idLista = 137"> 
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="kit1" name="kit" value="KITBASICO" v-model="kitPotes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> Essential Pós Química</p>
                                        <p class="description-kit">Shampoo e condicionador</p>
                                    </div>
                                </div>
                                <div class="position-absolute box-infos kit1">
                                    <div class="desconto-kit position-relative">{{ (Math.floor(100 - (saboresKit.kit1.precosGerais.precoPor*100)/saboresKit.kit1.precosGerais.precoDe)) }}% OFF</div>
                                </div>
                            </label>

                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kitmascara" @click="changeKit($event), idLista = 140">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="kitmascara" name="kit" value="KITMASCARA" v-model="kitPotes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">Máscara Pós Química</p>
                                    </div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kitshampoo" @click="changeKit($event), idLista = 138">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="kitshampoo" name="kit" value="KITSHAMPOO" v-model="kitPotes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">Shampoo Pós Química</p>
                                    </div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kitcondicionador" @click="changeKit($event), idLista = 139">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select">
                                        <input class="check-input mx-3" type="radio" id="kitcondicionador" name="kit" value="KITCONDICIONADOR" v-model="kitPotes">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit">Condicionador Pós Química</p>
                                    </div>
                                </div>
                            </label>
                        </form>
                    </div>

                    <div class="btn btn-primary btn-lg green" @click="addCartBoxCompra()">COMPRE AGORA</div>
                    <div class="mob">
                        <div class="d-flex align-items-center justify-content-between pt-4">
                            <img class="img-fluid" src="@/assets/img/single/SELOS.png" alt="Compra segura"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from "jquery"
    import Comunicacao from "@/comunicacao.js"
    import BeneficiosEssentialSingle from '../../components/beneficios-essential-single.vue';

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
        var count = 2  // Quantidade de vezes que pode clicar para avançar
        var slide = 300  // Tamanho do Slide (quanto de margin pode avançar)

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
    components: { BeneficiosEssentialSingle },
    props: {
        selecionado: String,
        idDaLista: String,
        },
        data() {
            return {
                checked: this.selecionado,
                activeClass: 'active',
                classImage: 'carousel-item',
                nome: 'Home Care Essential - Pós Química',
                breadcrumb: '',
                galeriaImagens: [],
                precoDe: '0',
                precoPor: 0,
                precoParcelado: '0',
                valorDesconto: 0,
                sabores: 0,
                idLista: this.idDaLista,
                kitPotes: this.selecionado,
                topicos: {
                    1: 'Óleo de Ojon, queratina, blend de silicones especiais; ',
                    2: 'Força e resistência;',
                    3: 'Hidratação prolongada;',
                    4: 'Proteção extrema.',
                },
                saboresKit: {
                    kit1: {
                        precosGerais: {
                            precoDe: 189.80,
                            precoPor: 77.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
                    kit2: {
                        precosGerais: {
                            precoDe: 287.50,
                            precoPor: 97.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
                    kitmascara: {
                        precosGerais: {
                            precoDe: 97.70,
                            precoPor: 57.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
                    kitshampoo: {
                        precosGerais: {
                            precoDe: 99.90,
                            precoPor: 67.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
                    kitcondicionador: {
                        precosGerais: {
                            precoDe: 89.90,
                            precoPor: 55.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                    },
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
                this.kitPotes = event.target.value
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
                            this.$fbAddToCart({ 
                                dataProducts: response.data,
                                currentProduct: this.nome, 
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

            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path
                }
                path = path.replace('?', '&')
                return path
            },
        },

        created(){
            this.breadcrumb = this.nome.split('- ', 2)[1]
            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    //RECUPERA DADOS DO PRODUTO
                    var objetoProduto = JSON.parse(response.request.response)
                    this.galeriaImagens = objetoProduto.conteudo.midias.imagensFull
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

        // remove class active do radio button e adiciona ao elemento selecionado
        mounted() {
            let radios = document.querySelectorAll('input[name="kit"]')
            radios.forEach(radio => {
                radio.addEventListener('click', (e) => {
                    let radio = e.target
                    let label = radio.parentElement
                    let parentLabel = label.parentElement
                    let parentLabel2 = parentLabel.parentElement
                    let labels = document.querySelectorAll('label')
                    labels.forEach(parentLabel2 => {
                        parentLabel2.classList.remove('selecionado')
                    })
                    parentLabel2.classList.add('selecionado')
                })
                  if (radio.value == this.kitPotes) {
                    radio.parentElement.parentElement.parentElement.classList.add(
                    "selecionado"
                    );
                    }
            })
        }
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
    }

    input[type="radio"]:checked {
        background-color: #333333;
        border: 5px solid white !important;
    }

    .selecionado {
        background: #F5F5F5 0% 0% no-repeat padding-box;
        border: 1px solid #333333 !important;
    }

    .selecionado .circ-select {
        border: 1px solid #333333;
    }

    .breadcrumb-single .breadcrumb {
        background: unset;
        font: normal normal normal 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #707070;
    }

    .pink {
        color: #000000;
        font-weight: bold;
    }

    span.carousel-control-prev-icon, span.carousel-control-next-icon {
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

    .carousel-inner{width: 560px}

    .carousel-inner img{width:100%;height:auto}

    #custCarousel .carousel-indicators{
        width: 150px;
        position:relative;
        margin:0;
        flex-direction:column;
        right:unset;
        bottom:unset;
        left:unset;
        padding:unset;
        z-index: 8;
    }

    /* Slider Produtos */

    .titleProduto {
        padding: 0 0 20px;
        font: normal normal bold 40px/35px Open Sans;
        letter-spacing: 0px;
        color: #1A1A1A;
    }

    .descricao .item-desc p {
        font: normal normal normal 18px/30px Open Sans;
        letter-spacing: 0px;
        color: #666666;
    }

    .descricao-titulo {
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #666666;
        padding-bottom: 5px;
    }

    .priceOld s {
        font: normal normal normal 16px/16px Helvetica;
        color: #999;
    }

    .priceOld, .priceNew, .discount {
        margin: -10px 0 0 0;
        font-family: "Roboto Regular", sans-serif;
    }

    .priceNew {
        font-size: 18px;
        margin-top: -15px !important;
        font: normal normal normal 16px/16px Helvetica;
        letter-spacing: 0px;
        color: #999999;
    }

    .discount {
        background: #FFFF00;
        padding: 5px 10px;
        box-sizing: border-box;
        font: normal normal normal 18px/20px Helvetica;
        letter-spacing: -0.18px;
        color: #333333;
    }

    .discount strong {
        font-size: 20px;
        font-weight: 900;
    }

    .txtPrice {
        font-size: 18px;
        color: #000;
        font-weight: bold;
        font-family: "Roboto Regular", sans-serif;
    }

    .green {
        background: #18A851;
        border-color: #18A851;
        width: 100%;
        padding: 20px;
        font-weight: bold;
        font-size: 20px;
        font: normal normal 900 24px/24px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    .green:active, .green:hover {
        opacity: .8;
        border-color: #18A851 !important;
    }

    .currentPrice {
        font: normal normal bold 48px/48px Helvetica;
        letter-spacing: 0px;
        color: #1A1A1A;
    }

    /* Slider Column */
    div#custCarousel {
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

    .label-title {
        font: normal normal bold 20px/30px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
    }

    .check-label {
        height: 65px;
        border: 1px solid #707070;
        border-radius: 8px;
        cursor: pointer;
    }

    .check-label:hover {
        border: 1px solid #333333;
    }

    .check-input {
        width: 30px;
        height: 30px;
    }

    input:checked {
        border: 6px solid black !important;
    }

    .name-kit {
        font: normal normal bold 20px/22px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
    }

    .description-kit {
        font: normal normal normal 12px/14px Open Sans;
        letter-spacing: -0.48px;
        color: #333333;
    }

    .box-infos {
        right: 0;
        top: 27%;
        text-align: right;
    }

    .desconto-kit {
        background: #FF35B1;
        font: normal normal bold 13px Helvetica;
        letter-spacing: 0px;
        color: #FFFFFF;
        border-radius: 3px 0 0 3px;
        padding: 1px 6px;
        width: max-content;
        margin-left: auto;
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
            font-size: 20px;
        }

        .left {
            position: absolute;
            bottom: 38px !important;
            top: unset;
            width: 20px;
            height: 75px;
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
            bottom: 38px !important;
            width: 20px;
            height: 75px;
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

        .box-infos {
            top: 6%;
        }

        /* Slider Produtos */

        .titleProduto {
            padding: 0 0 25px;
            font: normal normal bold 28px/30px Open Sans;
            letter-spacing: 0px;
            color: #1A1A1A;
        }

        p.descricao {
            font-size: 15px;
            padding: 0 0 18px;
            line-height: 1;
            color: #3c3c3c;
            font-family: "Roboto Regular", sans-serif;
        }

        .priceOld {
            margin: 0 10px 0 0;
            font-family: "Roboto Regular", sans-serif;
        }

        .priceNew {
            font-size: 18px;
            margin-top: -25px !important;
            font: normal normal normal 16px/16px Helvetica;
            letter-spacing: 0px;
            color: #999999;
        }

        .discount {
            background: #fff154;
            font-size: 14px;
            color: #000;
            font-weight: 900;
            padding: 5px 60px 5px 5px;
            box-sizing: border-box;
            font-family: "Roboto Regular", sans-serif;
            position: relative;
            right: -60px;
            width: 160px;
            border-radius: 5px;
            text-align: right;
            line-height: 1;
        }

        .txtPrice {
            font-size: 18px;
            color: #000;
            font-weight: bold;
            font-family: "Roboto Regular", sans-serif;
        }

        .green {
            background: #18A851;
            border-color: #18A851;
            width: 100%;
            padding: 20px;
            font-weight: bold;
            font-size: 20px;
        }

        .green:active,
        .green:hover {
            opacity: .8;
            border-color: #18A851 !important;
        }

        .currentPrice {
            font-weight: 900;
            font-size: 31px !important;
            margin: -10px 0 0 !important;
        }

        /* Slider Column */

        div#custCarousel {
            flex-direction: column-reverse;
            overflow: hidden;
            height: auto;
            margin-bottom: -10px;
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

        .carousel-inner img {
            width: 100%;
            height: auto
        }

        #custCarousel .carousel-indicators li img {
            width: 70px;
            height: 70px;
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
            font: normal normal normal 14px/16px Open Sans;
        }

        .premium {
            height: 50px !important;
        }
    }

    @media (max-width: 767px) {
        .breadcrumb-single .breadcrumb {
            font-size: 12px;
        }
    }

</style>
