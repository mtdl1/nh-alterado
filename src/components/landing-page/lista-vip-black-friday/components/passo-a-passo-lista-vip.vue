<template>
    <section class="container-fluid bg-dark">
        <div class="container">
            <h2 class="text-white text-center py-5">PASSO A PASSO DE COMO COMPRAR A MELHOR VITAMINA PARA CABELO NA <strong>BLACK FRIDAY</strong></h2>
            <div class="row flex-wrap pb-5 passo">
                <div class="col-md-4 cd-infos">
                    <div class="card p-3">
                        <h2>Envie uma mensagem <br> com seu e-mail</h2>
                        <p>Se você ainda não enviou seu nome e <strong>e-mail, é fácil:</strong> É só colocar seu nome e seu e-mail, no campo acima e apertar o botão ‘ENVIAR!”</p>
                    </div>
                </div>
                <div class="col-md-4 cd-infos">
                    <div class="card p-3">
                        <h2>Acione a gente no e-mail</h2>
                        <p>Para garantir o recebimento de nossas mensagens sempre na caixa de entrada, adicione o <strong>e-mail: newhaircaps@vitabe.com.br</strong> aos seus contatos confiáveis. É muito importante essa essa etapa para nossas mensagens não irem para o seu spam e você não perder a oferta.</p>
                    </div>
                </div>
                <div class="col-md-4 cd-infos">
                    <div class="card p-3">
                        <h2>Fique atento (a)</h2>
                        <p>Fique atenta para as mensagens com ofertas e cupons exclusivos que serão enviados para o seu e-mail.</p>
                    </div>
                </div>
            </div>
            
            <h2 class="text-white text-center pb-5">COMPRE COM SEGURANÇA</h2>
            
            <div class="card compre-com-seguranca">
                <div class="card-seguranca">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-produto-exclusivo.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>PRODUTOS EXCLUSIVOS</h3>
                        <p>com qualidade garantida</p>
                    </div>
                </div>
                <div class="card-seguranca">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-site-100-seguro.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>SITE 100% SEGURO</h3>
                        <p>com segurança SSL</p>
                    </div>
                </div>
                <div class="card-seguranca textomenor">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-frete-gratis.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>FRETE GRÁTIS</h3>
                        <p>para todo Brasil</p>
                    </div>
                </div>
                <div class="card-seguranca textomenor">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-pague-com-cartao.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>PAGUE COM CARTÃO</h3>
                        <p>em até 12x sem juros</p>
                    </div>
                </div>
                <div class="card-seguranca">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-desconto-no-pix.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>Desconto de 5%</h3>
                        <p>pagando no PIX</p>
                    </div>
                </div>
                <div class="card-seguranca textomenor">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-envio-24hrs.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>Envio 24h para o</h3>
                        <p>estado de São Paulo</p>
                    </div>
                </div>
                <div class="card-seguranca textomenor">
                    <div class="img-icon">
                        <img src="@/assets/img/lp-lista-vip-black-friday/icons/compre-com-seguranca/renovabe-reclame-aqui.svg"
                            alt="">
                    </div>
                    <div class="texto-seguranca">
                        <h3>RECLAME <br> AQUI</h3>
                    </div>
                </div>
            </div>

            <h2 class="text-white text-center py-5">PAGAMENTO FACILITADO</h2>
            <div class="text-center pb-5 desk"><img src="@/assets/img/lp-lista-vip-black-friday/pagamento.png" alt=""></div>
            <div class="text-center pb-5 mob"><img src="@/assets/img/lp-lista-vip-black-friday/pagamento-mobile.png" alt=""></div>
        </div>
    </section>
</template>

<script>
export default {
name: 'PassoAPassoListaVip',

    // data() {
    //     return {
    //         variavel: 'valor',
    //     }
    // },

    // methods: {
    //     funcao() {
    //         this.variavel = true
    //     }
    // },
}
</script>

<style lang="scss" scoped>

.bg-dark {
    background: #000 !important;
}

h2 {
    font: normal normal 600 40px/40px Open Sans;
    letter-spacing: 0px;
}

h2 strong {
    font-weight: bold;
}

.card{
    min-height: 310px;
    border-radius: 15px;
}

.card.compre-com-seguranca{
    display: flex!important;
    flex-wrap: wrap!important;
    justify-content: center;
    align-items: center;
    flex-direction: unset;
    min-height: unset;
}

.card h2{
    text-align: left;
    font: normal normal bold 25px/30px Open Sans;
    letter-spacing: 0px;
    color: #333333;
    border-bottom: 2px solid #FF4289;
    padding-bottom: 15px;
}

.card p{
    line-height: 30px;
}

.img-icon{
    width: 22%;
    text-align: center;
}

.texto-seguranca h3{
    font: normal normal 600 20px/30px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

.h-unset{
    min-height: unset;
}

.card-seguranca {
    display: flex;
    width: 25%;
    justify-content: center;
    padding-bottom: 30px;
}

.card.compre-com-seguranca {
    padding: 30px 30px 0 30px;
}

.texto-seguranca {
    width: 78%;
}

.card-seguranca.textomenor .img-icon {
    width: 30%!important;
}

.card-seguranca.textomenor .texto-seguranca {
    width: 70%!important;
}

@media screen and (max-width: 600px) {
    .py-5 {
        padding: 20px 0!important;
    }
    h2{
        font: normal normal bold 24px/26px Open Sans;
    }
    .col-md-4{
        margin-bottom: 20px!important;
        padding-left: 0;
    }

    .card-seguranca{
        width: 100%;
        align-items: center;
    }

    .img-icon{
        width: 30%;
    }

    .texto-seguranca {
    width: 70%;
    }

    .col-md-3.pt-3 {
        padding: 0!important;
    }

    .col-md-4{
        margin-bottom: 0;
    }

    .cd-infos{
        margin-bottom: 40px;
        padding-right: 0;
    }

    .pb-5{
        padding-bottom: 20px!important;
    }
    
    .pb-5.passo{
        padding-bottom: 0!important;
    }

    .text-white.text-center.pb-5{
        padding-bottom: 20px!important;
    }

    .card h2{
        font-size: 20px;
        line-height: 20px;
    }

    .card p{
        font-size: 15px;
        line-height: 22px;
    }

    .col{
        padding: 0!important;
    }

    .texto-seguranca h3 {
        text-align: left;
        font: normal normal 600 17px/1 Open Sans;
    }
    
    .texto-seguranca p {
        margin-top: 0;
        line-height: 1;
    }

    .d-flex.flex-wrap {
        align-items: center;
    }

    .pl-3{
        padding-left: 0!important;
    }

    .mob img{
        max-width: 100%;
        margin: 0!important;
    }

    .card.compre-com-seguranca {
        padding: 15px 0;
    }

    .card{
        min-height: unset;
    }

}

</style>