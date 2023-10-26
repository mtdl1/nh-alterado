<template>
    <div class="container" id="produtosCliente">
        <div class="title text-center">
            <h2>O Melhor blend de vitaminas</h2>
            <p>Cabelos sem queda, mais brilhantes, fortes e crescendo rápido!</p>
        </div>
        <div class="d-flex justify-content-between flex-wrap">
            <ProdutoCaps3Potes />
            <ProdutoCaps8PotesEscova />
            <ProdutoGummy3Potes />
            <ProdutoGummy8Potes />
        </div>
    </div>
</template>

<script>
    import ProdutoCaps3Potes from './produtos/produto-caps-3-potes-ja-sou-cliente.vue'
    import ProdutoCaps8PotesEscova from './produtos/produto-caps-8-potes-escova-ja-sou-cliente.vue'
    import ProdutoGummy3Potes from './produtos/produto-gummy-3-potes-ja-sou-cliente.vue'
    import ProdutoGummy8Potes from './produtos/produto-gummy-8-potes-ja-sou-cliente.vue'

    export default {
        name: 'ProdutosJaSouCliente',

        components: { 
            ProdutoGummy3Potes, 
            ProdutoGummy8Potes,
            ProdutoCaps3Potes,
            ProdutoCaps8PotesEscova
        },
    }
</script>

<style scoped>
    .title {
        padding: 20px 0;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
    }

    p {
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
    }
</style>