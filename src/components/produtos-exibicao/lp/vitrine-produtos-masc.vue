<template>
    <div>
        <Titulosheading1 :h1="'Encontre o melhor kit para seus cabelos, pele e unhas'" :h3="'O custo-benefício que a sua beleza merece está aqui, escolha'" class="py-2"/>
        <div class="container mt-5 d-flex justify-content-between flex-wrap" id="produtos">
            <ProdutoLP
                :nomeProduto="nomeProduto"
                :subtituloProduto="subtituloProduto"
                :imgProduto="imgProduto"
                :precoDe="precoDe"
                :precoPor="precoPor"
                :quantidadeProduto="quantidadeProduto"
                :idProduto="idProduto"
                freteGratis = blue
                :alt="alt"
                :title="title"
                :urlLista="urlLista"
            />
            <ProdutoLP
                :nomeProduto="nomeProduto2"
                :subtituloProduto="subtituloProduto2"
                :imgProduto="imgProduto2"
                :precoDe="precoDe2"
                :precoPor="precoPor2"
                :quantidadeProduto="quantidadeProduto2"
                :idProduto="idProduto2"
                bgTitle = blue
                freteGratis = blue
                :alt="alt2"
                :title="title2"
                :urlLista="urlLista2"
            />
            <ProdutoLP
                :nomeProduto="nomeProduto3"
                :subtituloProduto="subtituloProduto3"
                :imgProduto="imgProduto3"
                :precoDe="precoDe3"
                :precoPor="precoPor3"
                :quantidadeProduto="quantidadeProduto3"
                :idProduto="idProduto3"
                freteGratis = blue
                :alt="alt3"
                :title="title3"
                :urlLista="urlLista3"
            />
            <ProdutoLP
                :nomeProduto="nomeProduto4"
                :subtituloProduto="subtituloProduto4"
                :imgProduto="imgProduto4"
                :precoDe="precoDe4"
                :precoPor="precoPor4"
                :quantidadeProduto="quantidadeProduto4"
                :idProduto="idProduto4"
                freteGratis = blue
                :alt="alt4"
                :title="title4"
                :urlLista="urlLista4"
            />
            <ProdutoLP
                :nomeProduto="nomeProduto5"
                :subtituloProduto="subtituloProduto5"
                :imgProduto="imgProduto5"
                :precoDe="precoDe5"
                :precoPor="precoPor5"
                :quantidadeProduto="quantidadeProduto5"
                :idProduto="idProduto5"
                bgTitle = blue
                freteGratis = blue
                :alt="alt5"
                :title="title5"
                :urlLista="urlLista5"
            />
            <ProdutoLP
                :nomeProduto="nomeProduto6"
                :subtituloProduto="subtituloProduto6"
                :imgProduto="imgProduto6"
                :precoDe="precoDe6"
                :precoPor="precoPor6"
                :quantidadeProduto="quantidadeProduto6"
                :idProduto="idProduto6"
                freteGratis = blue
                :alt="alt6"
                :title="title6"
                :urlLista="urlLista6"
            />
        </div>
    </div>
</template>

<script>
    import ProdutoLP from '../../produtos/produtoLP.vue';
    import Titulosheading1 from '../titulosheading1.vue';


    export default {
        components: { ProdutoLP, Titulosheading1 },
        name: "KitsNhLp",

        data() {
            return {
                listaProdutos: [],
                nomeProduto: "",
                imgProduto: "",
                precoDe: "",
                precoPor: "",
                subtituloProduto: "",
                quantidadeProduto: "",
                idProduto: "",
            };
        },

        created() {
            this.listaProdutos = this.$store.state.listaProdutos.produtos;

            this.nomeProduto = this.listaProdutos[0].newhairvitaminmasculino[0].nomeProdutoLp
            this.subtituloProduto = this.listaProdutos[0].newhairvitaminmasculino[0].subtituloProduto
            this.imgProduto = this.listaProdutos[0].newhairvitaminmasculino[0].img
            this.precoDe = this.listaProdutos[0].newhairvitaminmasculino[0].precoDe
            this.precoPor = this.listaProdutos[0].newhairvitaminmasculino[0].precoPor
            this.quantidadeProduto = this.listaProdutos[0].newhairvitaminmasculino[0].quantidadeProduto
            this.idProduto = this.listaProdutos[0].newhairvitaminmasculino[0].idProduto
            this.alt = this.listaProdutos[0].newhairvitaminmasculino[0].alt
            this.title = this.listaProdutos[0].newhairvitaminmasculino[0].title
            this.urlLista = this.listaProdutos[0].newhairvitaminmasculino[0].urlLista

            this.nomeProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].nomeProdutoLp
            this.subtituloProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].subtituloProduto
            this.imgProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].img
            this.precoDe2 = this.listaProdutos[0].newhairvitaminmasculino[1].precoDe
            this.precoPor2 = this.listaProdutos[0].newhairvitaminmasculino[1].precoPor
            this.quantidadeProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].quantidadeProduto
            this.idProduto2 = this.listaProdutos[0].newhairvitaminmasculino[1].idProduto
            this.alt2 = this.listaProdutos[0].newhairvitaminmasculino[1].alt
            this.title2 = this.listaProdutos[0].newhairvitaminmasculino[1].title
            this.urlLista2 = this.listaProdutos[0].newhairvitaminmasculino[1].urlLista

            this.nomeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].nomeProdutoLp
            this.subtituloProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].subtituloProduto
            this.imgProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].img
            this.precoDe3 = this.listaProdutos[0].newhairvitaminmasculino[2].precoDe
            this.precoPor3 = this.listaProdutos[0].newhairvitaminmasculino[2].precoPor
            this.quantidadeProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].quantidadeProduto
            this.idProduto3 = this.listaProdutos[0].newhairvitaminmasculino[2].idProduto
            this.alt3 = this.listaProdutos[0].newhairvitaminmasculino[2].alt
            this.title3 = this.listaProdutos[0].newhairvitaminmasculino[2].title
            this.urlLista3 = this.listaProdutos[0].newhairvitaminmasculino[2].urlLista


            this.nomeProduto4 = this.listaProdutos[0].newhairgummymasculino[0].nomeProdutoLp
            this.subtituloProduto4 = this.listaProdutos[0].newhairgummymasculino[0].subtituloProduto
            this.imgProduto4 = this.listaProdutos[0].newhairgummymasculino[0].img
            this.precoDe4 = this.listaProdutos[0].newhairgummymasculino[0].precoDe
            this.precoPor4 = this.listaProdutos[0].newhairgummymasculino[0].precoPor
            this.quantidadeProduto4 = this.listaProdutos[0].newhairgummymasculino[0].quantidadeProduto
            this.idProduto4 = this.listaProdutos[0].newhairgummymasculino[0].idProduto
            this.alt4 = this.listaProdutos[0].newhairgummymasculino[0].alt
            this.title4 = this.listaProdutos[0].newhairgummymasculino[0].title
            this.urlLista4 = this.listaProdutos[0].newhairgummymasculino[0].urlLista

            this.nomeProduto5 = this.listaProdutos[0].newhairgummymasculino[1].nomeProdutoLp
            this.subtituloProduto5 = this.listaProdutos[0].newhairgummymasculino[1].subtituloProduto
            this.imgProduto5 = this.listaProdutos[0].newhairgummymasculino[1].img
            this.precoDe5 = this.listaProdutos[0].newhairgummymasculino[1].precoDe
            this.precoPor5 = this.listaProdutos[0].newhairgummymasculino[1].precoPor
            this.quantidadeProduto5 = this.listaProdutos[0].newhairgummymasculino[1].quantidadeProduto
            this.idProduto5 = this.listaProdutos[0].newhairgummymasculino[1].idProduto
            this.alt5 = this.listaProdutos[0].newhairgummymasculino[1].alt
            this.title5 = this.listaProdutos[0].newhairgummymasculino[1].title
            this.urlLista5 = this.listaProdutos[0].newhairgummymasculino[1].urlLista

            this.nomeProduto6 = this.listaProdutos[0].newhairgummymasculino[2].nomeProdutoLp
            this.subtituloProduto6 = this.listaProdutos[0].newhairgummymasculino[2].subtituloProduto
            this.imgProduto6 = this.listaProdutos[0].newhairgummymasculino[2].img
            this.precoDe6 = this.listaProdutos[0].newhairgummymasculino[2].precoDe
            this.precoPor6 = this.listaProdutos[0].newhairgummymasculino[2].precoPor
            this.quantidadeProduto6 = this.listaProdutos[0].newhairgummymasculino[2].quantidadeProduto
            this.idProduto6 = this.listaProdutos[0].newhairgummymasculino[2].idProduto
            this.alt6 = this.listaProdutos[0].newhairgummymasculino[2].alt
            this.title6 = this.listaProdutos[0].newhairgummymasculino[2].title
            this.urlLista6 = this.listaProdutos[0].newhairgummymasculino[2].urlLista
        },
    }
</script>