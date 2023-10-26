<template>
    <section class="container-fluid">
        <div class="container">
            <div class="row flex-wrap py-5">
                <div class="col-md-4 desk">
                    <img src="@/assets/img/lp-lista-vip-black-friday/new-hair-caps-juju-salimeni.png" alt="">
                </div>
                <div class="col-md-8">
                    <h3 class="pl-1">COMO SURGIU A NEW HAIR CAPS ?</h3>
                    <p class="pl-1">Quem consome os produtos da New Hair Caps, não imagina o esforço, dedicação e inovação que buscamos para melhorar cada vez mais a experiência de nossos clientes com nossos produtos. 🥰 O empresário Nivaldo Júnior contou que a ideia que fez a New Hair Caps nascer veio de uma situação vivida por sua esposa e sócia Regiane de Freitas Agripino. Como várias mulheres, buscava uma solução para a queda capilar e o fortalecimento dos fios depois de passar por um processo químico. Ela obteve bons resultados após combinar algumas vitaminas e minerais, indicadas nas várias passagens por especialistas. Juntos com o amigo e sócio Alison, pensaram: se esta combinação deu certo para ela, pode trazer o mesmo resultado para outras pessoas. Decidiram, então, fabricar um produto com 17 ativos. E o sucesso veio. Foi assim que nasceu a New Hair Caps, o Suplemento Capilar mais amado do Brasil!</p>
                    
                    <h4 class="pl-1 py-3">PORQUE TODOS AMAM O SUPLEMENTO CAPILAR DA NEW HAIR CAPS:</h4>

                    <div class="cards-beneficios pl-1 d-flex flex-wrap justify-content-start align-items-start">
                        <div class="beneficio-card">
                            <img class="desk" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-nao-engorda.svg" alt="">
                            <img class="mob" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-nao-engorda-mobile.svg" alt="">
                            <p>PRODUTOS <br> 100% NATURAL</p>
                        </div>
                        <div class="beneficio-card">
                            <img class="desk" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-nao-testado-animais.svg" alt="">
                            <img class="mob" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-nao-testado-animais-mobile.svg" alt="">
                            <p>NÃO TESTAMOS <br> EM ANIMAIS</p>
                        </div>
                        <div class="beneficio-card">
                            <img class="desk" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-produtos-100-naturais.svg" alt="">
                            <img class="mob" src="@/assets/img/lp-lista-vip-black-friday/como-surgiu/new-hair-produtos-100-naturais-mobile.svg" alt="">
                            <p>NÃO ENGORDA</p>
                        </div>
                    </div>

                    <img class="mob pt-5" src="@/assets/img/lp-lista-vip-black-friday/new-hair-caps-juju-salimeni.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
name: 'SaibaOPorqueListaVip',

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

img{
    max-width: 100%;
}

.bg-dark {
    background: #000 !important;
}

h3 {
    font: normal normal bold 35px/44px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

h4 {
    font: normal normal bold 20px/44px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

p{
    font: normal normal normal 18px/30px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

img.pt-4.pl-1 {
    max-width: 625px;
}

.beneficio-card{
    width: 25%;
}

.beneficio-card{
    text-align: center;
    padding: 15px 0;
}

.beneficio-card:last-child{
    padding-bottom: 0;
}

.beneficio-card img{
    margin: 0 auto;

}

.beneficio-card p{
    text-align: center;
    font: normal normal bold 17px/25px Open Sans;
    letter-spacing: 0px;
    color: #333333;
}

@media screen and (max-width: 600px) {
    .pl-1 {
        padding-left: 0 !important;
    }
    
    .py-5 {
        padding: 20px 0 !important;
        padding-top: 0!important;
    }

    h3{
        text-align: center;
        font: normal normal bold 24px/26px Open Sans;
        padding-bottom: 15px;
    }

    h4{
        line-height: 30px;
        text-align: center;
    }

    p{
        text-align: left;
        font: normal normal normal 16px/29px Open Sans;
    }

    img{
        max-width: 100%;
    }

    .beneficio-card{
        width: 100%;
    }
}

</style>