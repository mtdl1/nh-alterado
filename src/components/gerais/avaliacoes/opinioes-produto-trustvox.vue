<template>
    <div class="container-fluid fundo">
        <section class="container py-4 px-0">
            <div class="titleSection text-center pb-2">
                <h2>Quem prova New Hair, aprova!</h2>
                <p>Confira as avaliações do blend de vitaminas Nº 1 do Brasil!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col">
                    <WidgetOpinioesTrustvox :dataProd="dataProd" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import WidgetOpinioesTrustvox from './widget-opinioes-produto-trustvox.vue'

    export default {
        name: "ComentariosGummy",

        props: ['dataProd'],

        components: { 
            WidgetOpinioesTrustvox 
        },
    }
</script>

<style scoped>
    .titleSection p {
        text-align: center;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: 0px;
        color: #777777;
        width: 50%;
        margin:0 auto;
        text-transform: lowercase;
    }

    .titleSection h2 {
        font: normal normal 800 32px/32px Open Sans;
        letter-spacing: -.5px;
        text-align: center;
        padding-bottom: 5px;
        color: #333333;
        text-transform: lowercase;
    }

    .fundo{
        background-color: #f5f5f5;
    }

    @media screen and (max-width:800px) {
        .titleSection {
            padding-bottom: 20px !important;
        }

        .titleSection h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .titleSection p {
            font: normal normal normal 14px/14px Open Sans;
            width: 90%;
        }
    }
</style>