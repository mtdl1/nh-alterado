<template>
    <section>
        <!-- wrapper -->
        <div class="buscador position-relative">
            <div class="search position-relative">
                <input class="form-control search-place" id="testeInput" type="text" name="buscador" v-model="termo"
                    value="" placeholder="o que você procura?">
                <div class="position-absolute btn-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
            </div>
            <div class="resultado-pesquisa position-absolute" id="searchResult">
                <ul>
                    <li v-for="(produto, index) in listaDeProdutosEncontrados" :key="index" class="item-resultado">
                        <a :href="produto.item.produto_url" class="d-block p-2">
                            <div class="d-flex align-items-center">
                                <img :src="require('@/assets/img/produtos/thumb-pesquisa/'+produto.item.produto_imagem)" width="70" height="70" class="mr-2" alt="">
                                <div>
                                    <h3 class="nome-produto-busca"><strong>{{produto.item.produto_nome}}</strong></h3>
                                    <p class="descricao-produto-busca py-1">{{produto.item.produto_descricao}}</p>
                                    <h4 class="preco-produto-busca"> <strong>{{produto.item.produto_preco}}</strong> </h4>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wrapper" id="searchBarWrapper" v-if="wrapper" @click.stop="fecharBusca()"></div>
        </div>
    </section>
</template>

<script>
    // import $ from 'jquery';
    import ListaDeProdutos from '../../../baseProdutos.js'
    import Fuse from 'fuse.js'

    export default {
        name: 'BarraDePesquisa', 
        data() {
            return {
                termo: '',
                wrapper: false,
            }
        },
        computed: {
            listaDeProdutosEncontrados() {
                const fuseConfig = {
                    shouldSort: true,
                    threshold: 0.5,
                    location: 0,
                    distance: 100,
                    maxPatternLength: 32,
                    minMatchCharLength: 1,
                    keys: [
                        'produto_nome',
                        'produto_sabor',
                        'produto_palavras_chave',
                    ],
                };
                const fuse = new Fuse(ListaDeProdutos, fuseConfig)
                const resultado = fuse.search(this.termo)
                if (resultado.length > 0) {
                    this.buscarProdutos();
                    this.$fbSearch({ 
                        dataSearch: { 
                            conteudo: {
                                busca: {
                                    texto: "newhair",
                                    sugestao: []
                                },
                                produtos: resultado.map(produto => ({
                                    precos: {
                                        por: produto.produto_preco
                                    }
                                }))
                            }, 
                            estrutura: {
                                apps: {
                                    pixelFacebook: {
                                        eventId: 'fbq-6422fe4d20b8f',
                                        fbc: '',
                                        fbp: '',
                                        cliente: {
                                            email: null,
                                            telefone: ''
                                        },
                                        dados: {
                                            busca: 'newhair'
                                        }
                                    }
                                }
                            } 
                        }, 
                        currentUser: this.$store.state.dadosUser
                    });
                }
                return resultado
            },
        },

        methods: {
            buscarProdutos() {
                this.wrapper = true
            },

            fecharBusca() {
                this.wrapper = false
                this.termo = ''
            },
        },
    }
</script>

<style scoped>
    .active {
        display: block;
    }

    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        z-index: 9;
    }

    a:hover {
        text-decoration: none;
    }

    .search {
        z-index: 10;
    }

    .search-place {
        border: none;
        border-radius: 20px;
        width: 280px;
    }

    .search-place::placeholder{
        color: #AAAAAA;
        font:normal normal 400 14px/19px 'Open Sans', sans-serif;
        letter-spacing: -0.72px;
    }

    .btn-search {
        top: 10px;
        right: 15px;
        color: #AAAAAA;
    }

    .resultado-pesquisa {
        background: #fff;
        z-index: 999;
        width: 250%;
        border-radius: 10px;
        max-height: 250px;
        overflow: hidden;
        overflow-y: scroll;
        margin-top: 10px;
    }

    .item-resultado:hover {
        background: #e9e9e9;
    }

    .nome-produto-busca {
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
    }

    .descricao-produto-busca {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
    }

    .preco-produto-busca {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #3d9544;
    }

    /* Scollbar - Barra de rolagem */
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        width: 10px;
        background-color: #FFF;
        border-radius: 0 5px 5px 0;
        
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-image: -webkit-gradient(linear,
                left bottom,
                left top,
                color-stop(0.44, #ff428a8c),
                color-stop(0.72, #ff428ad3),
                color-stop(0.86, #ff4289));
    }

    .resultado-pesquisa img{
        border-radius: 30PX;
    }

    @media(max-width: 768px) {
        .search-place {
            width: 100% !important;
            height: 75px !important;
            border-radius: 0;
            font-size: 18px;
        }

        .resultado-pesquisa {
            width: 100%;
            max-height: 80vh;
        }

        .btn-search {
            display: none;
        }
    }
</style>