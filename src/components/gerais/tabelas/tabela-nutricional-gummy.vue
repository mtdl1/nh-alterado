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
                            <th scope="col" colspan="3" class="border-top-0 border-bottom-0 pt-0 pb-2">Porções por embalagem: 30 porções <br> Porção: 3,5 g (1 unidade)</th>
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
                            <th scope="col" colspan="3" class="text-left py-2">*Percentual de valores diários fornecidos pela porção.</th>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-0">(*) Valores diários com base em uma dieta de 2.000 kcal ou 8.400 kj. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. <br> (**) Valores diários não estabelecidos.</p>
                <p v-if="texto == 'morango'" class="txt-ingredientes"><strong>INGREDIENTES:</strong> ácido ascórbico (vitamina C), acetato alfa tocoferol (vitamina E), pantotenato de cálcio (ácido pantotênico), cloridrato de piridoxina (vitamina B6), palmitato de retinol (vitamina A), d-biotina (biotina), ergocalciferol (vitamina D), cianocobalamina (vitamina B12), hialuronato de sódio ácido hialurônico, concentrados de cenoura e groselha negra, edulcorantes naturais xarope de maltitol e maltitol, estabilizante pectina, acidulante ácido cítrico, regulador de acidez citrato de sódio, glaceante cera carnaúba, aromas naturais de morango e menta.<strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM AÇÚCAR. NÃO CONTÉM LACTOSE. ALÉRGICOS: PODE CONTER TRAÇOS DE DERIVADOS DO LEITE, DA SOJA E DO OVO.</strong></p>
                <p v-if="texto == 'laranja'" class="txt-ingredientes"><strong>INGREDIENTES:</strong> ácido ascórbico (vitamina C), acetato alfa tocoferol (vitamina E), pantotenato de cálcio (ácido pantotênico), cloridrato de piridoxina (vitamina B6), palmitato de retinol (vitamina A), d-biotina (biotina), ergocalciferol (vitamina D), cianocobalamina (vitamina B12), hialuronato de sódio ácido hialurônico, concentrados de maçã, cártamo e limão, edulcorantes naturais xarope de maltitol e maltitol, estabilizante pectina, acidulante ácido cítrico, regulador de acidez citrato de sódio, glaceante cera de carnaúba, aroma natural de laranja. <strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM AÇÚCAR. NÃO CONTÉM LACTOSE. ALÉRGICOS: PODE CONTER TRAÇOS DE DERIVADOS DO LEITE, DA SOJA E DO OVO.</strong></p>
                <p v-if="texto == 'uva'" class="txt-ingredientes"><strong>INGREDIENTES:</strong>ácido ascórbico (vitamina C), acetato alfa tocoferol (vitamina E), pantotenato de cálcio (ácido pantotênico), cloridrato de piridoxina (vitamina B6), palmitato de retinol (vitamina A), d-biotina (biotina), ergocalciferol (vitamina D), cianocobalamina (vitamina B12), hialuronato de sódio ácido hialurônico, concentrados de maçã, cártamo e limão, concentrado de spirulina, edulcorantes naturais xarope maltltol e maltitol, estabilizante pectina, acidulante ácido cítrico, regulador de acidez citrato de sódio, glaceante cera de canaúba, aroma natural de uva. <strong>NÃO CONTÉM GLÚTEN. NÃO CONTÉM AÇÚCAR. NÃO CONTÉM LACTOSE. ALÉRGICOS: PODE CONTER TRAÇOS DE DERIVADOS DO LEITE, DA SOJA E DO OVO.</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabelaNutricionalGummy',
        props: ['texto'],
        data() {
            return {
                dataTable: [
                    {
                        col1: '',
                        col2: '3,5g',
                        col3: '%VD*',
                    },
                    {
                        col1: 'Valor energético (kcal)',
                        col2: '6',
                        col3: '0',
                    },
                    {
                        col1: 'Carboidratos totais (g)',
                        col2: '2,7',
                        col3: '1',
                    },
                    {
                        col1: 'Açúcares totais (g)',
                        col2: '0',
                        col3: '-',
                    },
                    {
                        col1: 'Açúcares adicionados (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Poliois totais (g)',
                        col2: '2,3',
                        col3: '-',
                    },
                    {
                        col1: 'Proteínas (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras totais (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras saturadas (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Gorduras trans (g)',
                        col2: '0',
                        col3: '0',
                    },
                    {
                        col1: 'Fibra alimentar (g)',
                        col2: '0,2',
                        col3: '1',
                    },
                    {
                        col1: 'Sódio (mg)',
                        col2: '7',
                        col3: '0',
                    },
                    {
                        col1: 'Ácido hialurônico (mg)',
                        col2: '10',
                        col3: '-',
                    },
                    {
                        col1: 'Biotina (µg)',
                        col2: '45',
                        col3: '150',
                    },
                    {
                        col1: 'Vitamina A (µg)',
                        col2: '800',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina B5 (mg)',
                        col2: '5',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina B6 (mg)',
                        col2: '1,3',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina BI 2 (mg)',
                        col2: '2,4',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina C (mg)',
                        col2: '45',
                        col3: '45',
                    },
                    {
                        col1: 'Vitamina D (µg)',
                        col2: '15',
                        col3: '100',
                    },
                    {
                        col1: 'Vitamina E (mg)',
                        col2: '15',
                        col3: '100',
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
            color: #FFF;
        }

        th, td {
            padding: 5px;
            font: normal normal normal 12.5px/15px Open Sans;
        }

        th strong {
            font: normal normal 800 15px/18px Open Sans;
        }

        table{
            background-color: #FFF;
            border-radius: 10px;
            border: 0!important;
        }

        th, tr, td{
            border: 0!important;
        }

        tbody tr{
            border-bottom: 1px solid #666!important;
        }

        .txt-ingredientes{
            font: normal normal normal 14px/18px Open Sans;
            letter-spacing: 0px;
            color: #FFF;
        }

        .txt-ingredientes strong{
            display: block;
            margin-top: 10px;
        }

    }
</style>