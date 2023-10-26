<template>
    <div class="container">
        <div class="row align-items-center py-3">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" colspan="3" class="border-bottom-0 text-center py-2 topoCabecalho"><strong>INFORMAÇÃO NUTRICIONAL </strong> <br> por porção de 0,5 g (1 comprimido)</th>
                        </tr>
                        <tr class="metricas">
                            <th scope="col" colspan="2" class="text-center border-bottom-0"><strong>Quantidade por
                                    porção</strong></th>
                            <th scope="col" class="text-center border-bottom-0"><strong>%VD(*)</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dado, index) in selecao" :key="index">
                            <th v-html="dado.col1" scope="row"></th>
                            <td class="text-center" width="30%">{{ dado.col2 }}</td>
                            <td class="text-center" width="20%">{{ dado.col3 }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col" colspan="3" class="text-left py-2 baixoRodape">Não contém quantidades significativas de valor energético, carboidratos, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibra alimentar e sódio.</th>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-0">(*) Valores diários de referência com base em uma dieta de 2000 kcal ou 8400 kJ. Seus
                    valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. (**) Valor
                    diário não estabelecido.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabelaNutricionalNewHairMasc',

        props: ["selecao"],

        data() {
            return {
                
            };
        },  
    }
</script>

<style scoped>
table {
    border-collapse: separate;
    border-spacing: 0;
}

.table-bordered {
    border: none !important;
}

tbody {
    border-top: 0;
}

.topoCabecalho {
    border-radius: 10px 10px 0 0 !important;
}

.baixoRodape {
    border-radius: 0 0 10px 10px !important;
}

th,
td {
    color: #333;
    padding: 1px 20px;
    font: normal normal normal 13px/16px Open Sans;
    letter-spacing: -0.52px;
}

th strong {
    font: normal normal 800 14px/20px Open Sans;
    letter-spacing: -0.56px;
    color: #333;
}

.metricas strong {
    font: normal normal normal 13px/16px Open Sans;
    letter-spacing: -0.52px;
    color: #333333;
}

p {
    font: normal normal normal 12px/13px Open Sans;
    letter-spacing: -0.56px;
    color: #333;
}

thead tr:nth-child(even){
    background-color: #F5F5F5;
}

thead tr:nth-child(odd){
    background-color: #FFF;
}

tbody tr:nth-child(even){
    background-color: #F5F5F5;
}

tbody tr:nth-child(odd){
    background-color: #FFF;
}

tfoot tr{
    background-color: #FFF;
}

tfoot th{
    font: normal normal normal 12px/13px Open Sans;
    letter-spacing: -0.48px;
}

th.border-bottom-0.text-center.py-2.topoCabecalho {
    padding: 5px 0!important;
}

tbody th, tbody td{
    border-top: 0!important;
}

@media(max-width: 768px) {
    .row.align-items-center.py-3 {
        padding-top: 5px !important;
    }

    p {
        font: normal normal normal 12px/15px Open Sans;
        padding-top: 10px;
    }

    th,
    td {
        padding: 5px;
        font: normal normal normal 13px/15px Open Sans;
    }

    th strong {
        font: normal normal 800 15px/18px Open Sans;
    }

    .metricas strong {
        font-size: 13px;
    }

}
</style>