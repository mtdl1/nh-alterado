<template>
<main> 
    <div class="container"> 
        <div class="row mt-4 justify-content-center ">
            <div class="col-md-10 ">
            <h1 class="text-center py-3">Saiba um pouco mais sobre <br> a história da New Hair</h1> 
            <p class=" pt-2">Tudo começou em 2017, quando Regiane — então noiva, atual esposa — do CEO da empresa Nivaldo Júnior, foi acometida pela depressão, e entre outros sintomas, sofreu uma queda de cabelos severa, ficando com os fios fracos, ralos e sem vida, além de suas unhas tão frágeis que sequer aguentavam uma extensão de “porcelana”.
                <p> Foi então que um familiar do Junior que estava morando na Austrália, contou que haviam lançado um produto por lá que as mulheres tomavam e fazia os cabelos crescerem de novo, além de fortalecer as unhas, e quando veio em visita ao Brasil, trouxe alguns frascos para que conhecessem.</p> 
                <p>Os resultados foram tão impressionantes em pouco tempo, que a esperança de recuperar a autoestima de sua amada surgiu, e então veio a ideia de criar um produto nacional com a mesma proposta que pudesse ajudar mais mulheres com o mesmo problema, mas que tivesse valor acessível e utilizando ativos de primeira linha: ele queria desenvolver a fórmula mais completa do mercado.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-5 text-left">
                <p>Após muitas pesquisas e testes junto aos melhores profissionais da área farmacêutica, dermatológica e química — e claro, da Regiane e mulheres da família — que nasceu o New Hair Caps, blend em cápsulas com 17 ativos entre vitaminas e minerais essenciais para a saúde dos cabelos e unhas, em versão feminina e masculina.</p>
                <p>Com o sucesso das vendas, o produto se tornou o número um em saúde capilar no país, e para atender o pedido dos clientes que tinham dificuldades para consumir esse formato e trazer atualização para o mercado, em 2021 foi lançada a New Hair Gummies, primeiro blend para cabelos e unhas em gomas sem açúcar do Brasil. </p>
                <p>Em 2022, para potencializar os resultados, a fórmula das Gummies passou por uma mudança, ganhando adição do ácido hialurônico e três sabores: uva verde, laranja e morango fresh, tratando pele, cabelos e unhas com apenas um produto.</p>
                <p>No mesmo ano, a empresa lançou a Linha Home Care Essential com seis tipos de kits para tratamento de cabelos com xampus, condicionadores, máscaras, finalizadores e séruns.</p>
            </div>
            <div class="col-md-5">
                <img src="@/assets/img/quem-somos/New-Hair-Vitamin-Quem-Somos-Desktop.png" alt=" Regiane Freitas segurando potes do New Hair Vitamin com Ácido Hialurônico e New Hair Vitamin para Mamães" title="New Hair Vitamin" class="regi-nhv">
                <p class="legenda">Foto: Regiane Freitas segurando potes do New Hair Vitamin com<br class="desk"> Ácido Hialurônico e New Hair Vitamin para Mamães.</p>
            </div>
        </div>
        <div class="row justify-content-center pt-2">
            <div class="col-md-10 text-left">
                <p>Já nos primeiros meses de 2023, a marca inovou mais uma vez, e para barrar definitivamente toda e qualquer tentativa de falsificação, transformou as cápsulas de New Hair em comprimidos com nova embalagem, tampa e gravação de segurança exclusivas em duas versões: com ácido hialurônico e sem ácido hialurônico para gestantes e lactantes.</p>
                <p>Aproveitando a onda de expansão do portfólio de produtos e pensando em cuidar da beleza das clientes de forma diferenciada, apresentou ao mercado o Sérum 10 em 1, com 10 ativos que tratam a pele de dentro para fora de forma rápida, descomplicada e eficaz. </p>
                <p>E desta forma, nos tornamos uma empresa que se preocupa com a beleza dos seus cabelos, pele e unhas de dentro para fora e de fora para dentro!</p>
            </div>
        </div>
    </div>
    <div class="container bloco">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="row justify-content-center mx-auto">
                    <div class="col-md-3">
                        <div class="missao text-center">
                            <h3 class="textoTitulo text-center">Missão</h3>
                            <p class="px-4 mt-2">Inspirar e transformar a vida de pessoas com nutricosméticos naturais de excelência e com altissíma qualidade.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="visao text-center">
                            <h3 class="textoTitulo text-center">Visão</h3>
                            <p class="px-4 mt-2">A melhor e mais inovadora experiência de compra no mercado da beleza do homem e da mulher.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="valores text-center">
                            <h3 class=" textoTitulo text-center text-bold">Valores</h3>
                            <p  class="px-4 mt-2">Adrenalina, espírito de equipe, inspiração, inovação e foco.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</main>

</template>

<script>


export default {
    name: 'QuemSomosNovo'
}
</script>

<style scoped>

    h1 {
      font: normal normal normal 32px/36px Open Sans;
      color: #333333;
    }

    p {
       font: normal normal normal 18px/24px Open Sans;
       padding: 10px 10px;  
    }

    .legenda {
      font: normal normal normal 14px/16px Open Sans;  
    }

    .regi-nhv {
        width: 455px;
        padding-right: 10px;
    }

    .bloco {
        background-color: #f5f5f5;
        width: 100%;
        max-width: 100vw;
        height: 240px;
        margin-top: 30px;
    }

    .missao, .visao, .valores {
        width: 280px;
        height: 195px;
        margin: 20px;
        background-color: white;
        border-radius: 10px;
    }

    .missao h3, .visao h3, .valores h3 {
        padding-top: 10px;
       
    }

 .textoTitulo{
    font: normal normal bold 24px/26px Open Sans;
    padding-bottom: 5px;
    position: relative;
    display: inline-block;
  }

  .textoTitulo::after {
    content: "";
    position: absolute;
    left: -30px;
    right: -30px;
    bottom: -1px;
    height: 1px;
    background-color: #F03F9A;
  }


    @media (max-width: 767px) {
         h1 {
      font: normal normal normal 24px/28px Open Sans;
      color: #333333;
    }

    
    p {
       font: normal normal normal 16px/20px Open Sans;
       padding: 7px 7px;  
    }

   .bloco {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;
  }

    .regi-nhv {
        margin-top: 15px;
    }

      .missao, .visao {
        width: 280px;
        height: 170px;
        margin: 20px;
        background-color: white;
    }

    .valores{
        width: 280px;
        height: 135px;
        margin: 20px;
        background-color: white; 
    }



}

    
   

   





</style>
