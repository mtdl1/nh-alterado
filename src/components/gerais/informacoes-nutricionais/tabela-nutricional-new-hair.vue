<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th v-if="!gummy" scope="col" colspan="3" class="border-bottom-0 text-center py-2 topoCabecalho"><strong>INFORMAÇÃO NUTRICIONAL </strong> <br> por porção de 0,5 g (1 comprimido)</th>
                            <th v-if="gummy" scope="col" colspan="3" class="border-bottom-0 text-left py-2 topoCabecalho"><strong class="d-block text-center">INFORMAÇÃO NUTRICIONAL </strong> <br> Porções por embalagem: 30 porções <br> Porção: 3,5 g (1 unidade)</th>
                        </tr>
                        <tr class="metricas">
                            <th scope="col" colspan="2" class="text-center border-bottom-0" v-if="!gummy"><strong>Quantidade por porção</strong></th>
                            <th scope="col" colspan="2" class="text-right pr-5 border-bottom-0" v-if="gummy"><strong>3,5g</strong></th>
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
                            <th scope="col" colspan="3" class="text-left py-2 baixoRodape">*Percentual de valores diários fornecidos pela porção.</th>
                        </tr>
                    </tfoot>
                </table>
                <p class="pt-0 pb-3 valDiarios" >(*) Valores diários de referência com base em uma dieta de 2000 kcal ou 8400 kJ. Seus
                    valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. (**) Valor
                    diário não estabelecido.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabelaNutricionalNewHair',

        props: ["selecao"],

        data() {
            return {
                gummy: false,
            };
        },

        mounted() {
            // Identifica o diretorio do site após o dominio
			this.url = window.location.href;
			this.url = this.url.split("/");
			this.url = this.url[3]
			if(this.url == "gummy-capilar" || this.url == "produtos-masculino" || this.url == "new-hair-gummy-vitamina-em-goma-para-cabelo" ){
				this.gummy = true;
			}
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

    .valDiarios {
        text-align: center;
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