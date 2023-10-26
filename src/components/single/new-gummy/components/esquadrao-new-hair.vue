<template>
    <div class="main"> 
        <div class="container"> 

        <h2 class="titulo text-center pt-4">
        Junte-se ao esquadrão do cabelo, <br>unhas e pele perfeita! 
        </h2>
        <p class="textosquad text-center py-4">
            Chega de fazer mil procedimentos para ter o cabelo dos sonhos. Com a vitamina de ursinho New Hair Gummy, você pode reduzir a queda de cabelos, e ainda ter unhas e pele hidratadas e saudáveis. Faça sua compra agora mesmo e entre para o nosso esquadrão da beleza. 
        </p>
        <div class="botao my-2">
            <a href="#" class="facaSeuPedido desk  ">
                COMPRE AGORA
            </a>
                
        </div>

        </div>
    </div>
    
    
</template>

<script>
export default {
    name:"EsquadraoNewHair",

    data(){
        return
    }
}
</script>

<style>

    .titulo {
        font: normal normal normal 32px/32px Open Sans;
        letter-spacing: -.5px;
        text-align: center;
        padding-bottom: 5px;
        color: #333333;
    }

    .textosquad {
        text-align: center;
        font: normal normal normal 20px/24px Open Sans;
        color: #777777;
        margin:0 auto;
        width: 792px;
        
    }

    
    .btn:focus {
        box-shadow: none;
    }

  .facaSeuPedido {
        width: 230px;
        height: 65px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #12AC53 0% 0% no-repeat padding-box;
        font: normal normal bold 18px/18px Open Sans;
        letter-spacing: -0.24px;
        color: #FFFFFF !important;
        border-radius: 4px;
        transition: 300ms ease-in-out;
    }

     @media(max-width: 768px) {

        .titulo {
        font: normal normal normal 22px/24px Open Sans;
        letter-spacing: -.5px;
        text-align: center;
        padding-bottom: 5px;
        color: #333333;
        }

        .textosquad {
        text-align: center;
        font: normal normal normal 16px/20px Open Sans;
        color: #777777;
        margin:0 auto;
        width: auto;
    }


     }

</style>