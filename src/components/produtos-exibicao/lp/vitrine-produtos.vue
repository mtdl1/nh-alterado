<template>
    <div class="container mt-5 d-flex justify-content-between flex-wrap" id="produtos">
        <ProdutoLP 
            :nomeProduto="nomeProduto"
            :subtituloProduto="subtituloProduto"
            :imgProduto="imgProduto"
            :precoDe="precoDe"
            :precoPor="precoPor" 
            :quantidadeProduto="quantidadeProduto"
            :idProduto="idProduto"
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
            bgTitle = pink
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
            :urlLista="urlLista3"
        />

        <ProdutoLP 
            :nomeProduto="nomeProduto7"
            :subtituloProduto="subtituloProduto7"
            :imgProduto="imgProduto7"
            :precoDe="precoDe7"
            :precoPor="precoPor7" 
            :quantidadeProduto="quantidadeProduto7"
            :possuiVariacao="possuiVariacao7"
            :variacoes="variacoes7"
            :urlLista="urlLista7"
        />
        <ProdutoLP 
            :nomeProduto="nomeProduto8"
            :subtituloProduto="subtituloProduto8"
            :imgProduto="imgProduto8"
            :precoDe="precoDe8"
            :precoPor="precoPor8" 
            :quantidadeProduto="quantidadeProduto8"
            :possuiVariacao="possuiVariacao8"
            :variacoes="variacoes8"
            bgTitle = pink
            :urlLista="urlLista8"
        />
        <ProdutoLP 
            :nomeProduto="nomeProduto9"
            :subtituloProduto="subtituloProduto9"
            :imgProduto="imgProduto9"
            :precoDe="precoDe9"
            :precoPor="precoPor9" 
            :quantidadeProduto="quantidadeProduto9"
            :possuiVariacao="possuiVariacao9"
            :variacoes="variacoes9"
            :urlLista="urlLista9"
        />

        <ProdutoLP 
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto4"
            :subtituloProduto="subtituloProduto4"
            :imgProduto="imgProduto4"
            :precoDe="precoDe4"
            :precoPor="precoPor4" 
            :quantidadeProduto="quantidadeProduto4"
            :idProduto="idProduto4"
            :urlLista="urlLista4"
        />
        <ProdutoLP 
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto5"
            :subtituloProduto="subtituloProduto5"
            :imgProduto="imgProduto5"
            :precoDe="precoDe5"
            :precoPor="precoPor5" 
            :quantidadeProduto="quantidadeProduto5"
            :idProduto="idProduto5"
            bgTitle = pink
            :urlLista="urlLista5"
        />
        <ProdutoLP 
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto6"
            :subtituloProduto="subtituloProduto6"
            :imgProduto="imgProduto6"
            :precoDe="precoDe6"
            :precoPor="precoPor6" 
            :quantidadeProduto="quantidadeProduto6"
            :idProduto="idProduto6"
            :urlLista="urlLista6"
        />
        <ProdutoLP
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto10"
            :subtituloProduto="subtituloProduto10"
            :imgProduto="imgProduto10"
            :precoDe="precoDe10"
            :precoPor="precoPor10" 
            :quantidadeProduto="quantidadeProduto10"
            :idProduto="idProduto10"
            :urlLista="urlLista10"
        />
        <ProdutoLP
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto11"
            :subtituloProduto="subtituloProduto11"
            :imgProduto="imgProduto11"
            :precoDe="precoDe11"
            :precoPor="precoPor11" 
            :quantidadeProduto="quantidadeProduto11"
            :idProduto="idProduto11"
            :urlLista="urlLista11"
        />
        <ProdutoLP 
            v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'"
            :nomeProduto="nomeProduto12"
            :subtituloProduto="subtituloProduto12"
            :imgProduto="imgProduto12"
            :precoDe="precoDe12"
            :precoPor="precoPor12" 
            :quantidadeProduto="quantidadeProduto12"
            :idProduto="idProduto12"
            :urlLista="urlLista12"
        />
        <div class="imagem-linha-essential d-flex justify-content-center align-items-center" v-if="$route.path != '/melhor-vitamina-para-cabelo-e-unha'">
            <a href="/tratamento-capilar-linha-essential"><img src="@/assets/img/produtos/linha-essential/Banner-Kit-Essential-Produtos.jpg" alt="" class="desk"></a>
            <a href="/tratamento-capilar-linha-essential"><img src="@/assets/img/produtos/linha-essential/Banner-Kit-Essential-Produtos-Mobile.jpg" alt="" class="mob"></a>
        </div>
    </div>
</template>

<script>
    import ProdutoLP from '../../produtos/produtoLP.vue';

    export default {
        components: { ProdutoLP },
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

            this.nomeProduto = this.listaProdutos[0].newhairvitamin[0].nomeProdutoLp;
            this.imgProduto = this.listaProdutos[0].newhairvitamin[0].img;
            this.precoDe = this.listaProdutos[0].newhairvitamin[0].precoDe;
            this.precoPor = this.listaProdutos[0].newhairvitamin[0].precoPor;
            this.subtituloProduto = this.listaProdutos[0].newhairvitamin[0].subtituloProduto;
            this.quantidadeProduto = this.listaProdutos[0].newhairvitamin[0].quantidadeProduto;
            this.idProduto = this.listaProdutos[0].newhairvitamin[0].idProduto;
            this.urlLista = this.listaProdutos[0].newhairvitamin[0].urlLista;
            
            this.nomeProduto2 = this.listaProdutos[0].newhairvitamin[1].nomeProdutoLp;
            this.imgProduto2 = this.listaProdutos[0].newhairvitamin[1].img;
            this.precoDe2 = this.listaProdutos[0].newhairvitamin[1].precoDe;
            this.precoPor2 = this.listaProdutos[0].newhairvitamin[1].precoPor;
            this.subtituloProduto2 = this.listaProdutos[0].newhairvitamin[1].subtituloProduto;
            this.quantidadeProduto2 = this.listaProdutos[0].newhairvitamin[1].quantidadeProduto;
            this.idProduto2 = this.listaProdutos[0].newhairvitamin[1].idProduto;
            this.urlLista2 = this.listaProdutos[0].newhairvitamin[1].urlLista;
            
            this.nomeProduto3 = this.listaProdutos[0].newhairvitamin[2].nomeProdutoLp;
            this.imgProduto3 = this.listaProdutos[0].newhairvitamin[2].img;
            this.precoDe3 = this.listaProdutos[0].newhairvitamin[2].precoDe;
            this.precoPor3 = this.listaProdutos[0].newhairvitamin[2].precoPor;
            this.subtituloProduto3 = this.listaProdutos[0].newhairvitamin[2].subtituloProduto;
            this.quantidadeProduto3 = this.listaProdutos[0].newhairvitamin[2].quantidadeProduto;
            this.idProduto3 = this.listaProdutos[0].newhairvitamin[2].idProduto;
            this.urlLista3 = this.listaProdutos[0].newhairvitamin[2].urlLista;


            this.nomeProduto4 = this.listaProdutos[0].newhairvitaminbiotina[0].nomeProdutoLp
            this.subtituloProduto4 = this.listaProdutos[0].newhairvitaminbiotina[0].subtituloProduto
            this.imgProduto4 = this.listaProdutos[0].newhairvitaminbiotina[0].img
            this.precoDe4 = this.listaProdutos[0].newhairvitaminbiotina[0].precoDe
            this.precoPor4 = this.listaProdutos[0].newhairvitaminbiotina[0].precoPor
            this.quantidadeProduto4 = this.listaProdutos[0].newhairvitaminbiotina[0].quantidadeProduto
            this.idProduto4 = this.listaProdutos[0].newhairvitaminbiotina[0].idProduto
            this.urlLista4 = this.listaProdutos[0].newhairvitaminbiotina[0].urlLista

            this.nomeProduto5 = this.listaProdutos[0].newhairvitaminbiotina[1].nomeProdutoLp
            this.subtituloProduto5 = this.listaProdutos[0].newhairvitaminbiotina[1].subtituloProduto
            this.imgProduto5 = this.listaProdutos[0].newhairvitaminbiotina[1].img
            this.precoDe5 = this.listaProdutos[0].newhairvitaminbiotina[1].precoDe
            this.precoPor5 = this.listaProdutos[0].newhairvitaminbiotina[1].precoPor
            this.quantidadeProduto5 = this.listaProdutos[0].newhairvitaminbiotina[1].quantidadeProduto
            this.idProduto5 = this.listaProdutos[0].newhairvitaminbiotina[1].idProduto
            this.urlLista5 = this.listaProdutos[0].newhairvitaminbiotina[1].urlLista
            
            this.nomeProduto6 = this.listaProdutos[0].newhairvitaminbiotina[2].nomeProdutoLp
            this.subtituloProduto6 = this.listaProdutos[0].newhairvitaminbiotina[2].subtituloProduto
            this.imgProduto6 = this.listaProdutos[0].newhairvitaminbiotina[2].img
            this.precoDe6 = this.listaProdutos[0].newhairvitaminbiotina[2].precoDe
            this.precoPor6 = this.listaProdutos[0].newhairvitaminbiotina[2].precoPor
            this.quantidadeProduto6 = this.listaProdutos[0].newhairvitaminbiotina[2].quantidadeProduto
            this.idProduto6 = this.listaProdutos[0].newhairvitaminbiotina[2].idProduto
            this.urlLista6 = this.listaProdutos[0].newhairvitaminbiotina[2].urlLista


            this.nomeProduto7 = this.listaProdutos[0].gummy[0].nomeProdutoLp
            this.subtituloProduto7 = this.listaProdutos[0].gummy[0].subtituloProduto
            this.imgProduto7 = this.listaProdutos[0].gummy[0].img
            this.precoDe7 = this.listaProdutos[0].gummy[0].precoDe
            this.precoPor7 = this.listaProdutos[0].gummy[0].precoPor
            this.quantidadeProduto7 = this.listaProdutos[0].gummy[0].quantidadeProduto
            this.possuiVariacao7 = this.listaProdutos[0].gummy[0].possuiVariacao
            this.variacoes7 = this.listaProdutos[0].gummy[0].variacoes
            this.idProduto7 = this.listaProdutos[0].gummy[0].idProduto
            this.urlLista7 = this.listaProdutos[0].gummy[0].urlLista

            this.nomeProduto8 = this.listaProdutos[0].gummy[1].nomeProdutoLp
            this.subtituloProduto8 = this.listaProdutos[0].gummy[1].subtituloProduto
            this.imgProduto8 = this.listaProdutos[0].gummy[1].img
            this.precoDe8 = this.listaProdutos[0].gummy[1].precoDe
            this.precoPor8 = this.listaProdutos[0].gummy[1].precoPor
            this.quantidadeProduto8 = this.listaProdutos[0].gummy[1].quantidadeProduto
            this.idProduto8 = this.listaProdutos[0].gummy[1].idProduto
            this.possuiVariacao8 = this.listaProdutos[0].gummy[1].possuiVariacao
            this.variacoes8 = this.listaProdutos[0].gummy[1].variacoes
            this.urlLista8 = this.listaProdutos[0].gummy[1].urlLista
            
            this.nomeProduto9 = this.listaProdutos[0].gummy[2].nomeProdutoLp
            this.subtituloProduto9 = this.listaProdutos[0].gummy[2].subtituloProduto
            this.imgProduto9 = this.listaProdutos[0].gummy[2].img
            this.precoDe9 = this.listaProdutos[0].gummy[2].precoDe
            this.precoPor9 = this.listaProdutos[0].gummy[2].precoPor
            this.quantidadeProduto9 = this.listaProdutos[0].gummy[2].quantidadeProduto
            this.possuiVariacao9 = this.listaProdutos[0].gummy[2].possuiVariacao
            this.variacoes9 = this.listaProdutos[0].gummy[2].variacoes
            this.idProduto9 = this.listaProdutos[0].gummy[2].idProduto
            this.urlLista9 = this.listaProdutos[0].gummy[2].urlLista

            this.nomeProduto10 = this.listaProdutos[0].serum[0].nomeProdutoLp
            this.subtituloProduto10 = this.listaProdutos[0].serum[0].subtituloProduto
            this.imgProduto10 = this.listaProdutos[0].serum[0].img
            this.precoDe10 = this.listaProdutos[0].serum[0].precoDe
            this.precoPor10 = this.listaProdutos[0].serum[0].precoPor
            this.quantidadeProduto10 = this.listaProdutos[0].serum[0].quantidadeProduto
            this.idProduto10 = this.listaProdutos[0].serum[0].idProduto
            this.urlLista10 = this.listaProdutos[0].serum[0].urlLista

            this.nomeProduto11 = this.listaProdutos[0].serum[1].nomeProdutoLp
            this.subtituloProduto11 = this.listaProdutos[0].serum[1].subtituloProduto
            this.imgProduto11 = this.listaProdutos[0].serum[1].img
            this.precoDe11 = this.listaProdutos[0].serum[1].precoDe
            this.precoPor11 = this.listaProdutos[0].serum[1].precoPor
            this.quantidadeProduto11 = this.listaProdutos[0].serum[1].quantidadeProduto
            this.idProduto11 = this.listaProdutos[0].serum[1].idProduto
            this.urlLista11 = this.listaProdutos[0].serum[1].urlLista
            
            this.nomeProduto12 = this.listaProdutos[0].serum[2].nomeProdutoLp
            this.subtituloProduto12 = this.listaProdutos[0].serum[2].subtituloProduto
            this.imgProduto12 = this.listaProdutos[0].serum[2].img
            this.precoDe12 = this.listaProdutos[0].serum[2].precoDe
            this.precoPor12 = this.listaProdutos[0].serum[2].precoPor
            this.quantidadeProduto12 = this.listaProdutos[0].serum[2].quantidadeProduto
            this.idProduto12 = this.listaProdutos[0].serum[2].idProduto
            this.urlLista12 = this.listaProdutos[0].serum[2].urlLista
        },
    }
</script>