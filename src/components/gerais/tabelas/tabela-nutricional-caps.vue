<template>
    <div class="container">
        <div class="row align-items-center py-1">
            <div class="col">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" colspan="3" class="border-bottom-0 text-center pt-2 pb-0"><strong>INFORMAÇÃO NUTRICIONAL</strong></th>
                        </tr>
                        <tr>
                            <th scope="col" colspan="3" class="border-top-0 border-bottom-0 text-center pt-0 pb-2">Por porção de 0,5g (1 cápsula)</th>
                        </tr>
                        <tr>
                            <th scope="col" colspan="2" class="text-center">Quantidade por porção</th>
                            <th scope="col" class="text-center">%VD(*)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dado, index) in dataTable" :key="index">
                            <th scope="row">{{ dado.col1 }}</th>
                            <td class="text-center" width="30%">{{ dado.col2 }}</td>
                            <td class="text-center" width="20%">{{ dado.col3 }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col" colspan="3" class="text-left py-2">"Não contém quantidades significativas de Valor Energético, carboidratos, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio."</th>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-0">(*)% Valores diários com base na Ingestão Diária Recomendada (IDR) para adultos segundo a Resolução RDC nº 269/05.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabelaNutricionalGummy',

        data() {
            return {
                dataTable: [
                    {
                        col1: 'Vitamina A',
                        col2: '600 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina C',
                        col2: '45 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina E',
                        col2: '10 mg',
                        col3: '**',
                    },
                    {
                        col1: 'Vitamina D',
                        col2: '5 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B1',
                        col2: '1,2 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B2',
                        col2: '1,3 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B3',
                        col2: '16 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitamina B5',
                        col2: '5 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitaminas B6',
                        col2: '1,3 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitaminas B7 (Biotina)',
                        col2: '30 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitaminas B9',
                        col2: '240 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Vitaminas B12',
                        col2: '12,4 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Ferro',
                        col2: '14 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Zinco',
                        col2: '7 mg',
                        col3: '100%',
                    },
                    {
                        col1: 'Cobre',
                        col2: '900 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Cromo',
                        col2: '35 mcg',
                        col3: '100%',
                    },
                    {
                        col1: 'Selênio',
                        col2: '34 mcg',
                        col3: '100%',
                    },
                ],
            };
        },
    }
</script>

<style scoped>
    p {
        font: normal normal normal 13px/16px Open Sans;
        letter-spacing: -0.28px;
        color: #777;
    }

    .table-bordered {
        border: none !important;
    }

    th, td {
        color: #777;
        padding: 3px 20px;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.32px;
    }

    th strong {
        font: normal normal 800 20px/26px Open Sans;
        letter-spacing: -0.4px;
        color: #777;
    }

    @media(max-width: 768px) {
        .row.align-items-center.py-3 {
            padding-top: 5px !important;
        }

        p {
            font: normal normal normal 12px/15px Open Sans;
            padding-top: 10px;
        }

        th, td {
            padding: 5px;
            font: normal normal normal 12.5px/15px Open Sans;
        }

        th strong {
            font: normal normal 800 15px/18px Open Sans;
        }

    }
</style>