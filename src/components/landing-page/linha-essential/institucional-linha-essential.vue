<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="mob">A NÚMERO UM EM CRESCIMENTO CAPILAR TRATA SEUS FIOS DE DENTRO PARA FORA E DE FORA PARA DENTRO</h2>
                    <img class="img-fluid desk" src="@/assets/img/linha-essential/institucional/KIT LISO PERFEITO.jpg" alt="">
                    <img class="img-fluid mob" src="@/assets/img/linha-essential/institucional/KIT LISO PERFEITO.jpg" alt="">
                </div>
                <div class="col-md-6">
                    <h2 class="desk">A NÚMERO UM EM CRESCIMENTO CAPILAR TRATA SEUS FIOS DE DENTRO PARA FORA E DE FORA PARA DENTRO</h2>
                    <div class="desk">
                        <p>Mais que uma marca, o nosso principal objetivo é transformar vidas através dos nossos produtos, criados para empoderar pensando em necessidades específicas que afetam a autoestima. Quem diria que a nossa história, que começou em 2017 com a criação da vitamina capilar mais completa e amada do Brasil, daria espaço a uma linha completa para cuidados com os cabelos? Depois das gominhas em forma de ursinho, nasce a nossa linha de hair care, elaborada com os melhores ativos para oferecer o tratamento completo que os seus cabelos precisam para ficarem ainda mais bonitos, leves e soltos como merecem, da forma como você se sentir melhor.</p>
                        <p><strong>Porque para nós, o que realmente importa, é a beleza livre de rótulos!</strong></p>
                    </div>
                    <div class="mob">
                        <p>Mais que uma marca, o nosso principal objetivo é transformar vidas através dos nossos produtos, criados para empoderar pensando em necessidades específicas que afetam a autoestima. </p> 
                        <p> Quem diria que a nossa história, que começou em 2017 com a criação da vitamina capilar mais completa e amada do Brasil, daria espaço a uma linha completa para cuidados com os cabelos? </p> 
                        <p> Depois das gominhas em forma de ursinho, nasce a nossa linha de hair care, elaborada com os melhores ativos para oferecer o tratamento completo que os seus cabelos precisam para ficarem ainda mais bonitos, leves e soltos como merecem, da forma como você se sentir melhor. </p> 
                        <p> <strong>Porque para nós, o que realmente importa, é a beleza livre de rótulos!</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InstitucionalLinhaEssential',
    }
</script>

<style scoped>
    .container-fluid {
        background: #FF4289 0% 0% no-repeat padding-box;
        padding: 60px 0;
    }

    h2 {
        font: normal normal bold 32px/34px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        padding-bottom: 25px;
    }

    p {
        text-align: left;
        font: normal normal normal 18px/35px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    p strong {
        text-align: left;
        font: normal normal bold 18px/35px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    @media(max-width: 768px) {
        .container-fluid {
            background: #FF4289 0% 0% no-repeat padding-box;
            margin-bottom: 40px;
            padding: 22px 0 15px;
        }

        h2.mob {
            font: normal normal bold 18px/24px Open Sans;
            padding-bottom: 12px;
            text-align: center;
        }

        .mob {
            margin-top: 20px;
        }
        p {
            font: normal normal normal 14px/25px Open Sans;
            letter-spacing: -0.28px;
            padding-bottom: 19px;
        }

        p strong {
            font: normal normal bold 14px/25px Open Sans;
            letter-spacing: -0.28px;
        }
    }
</style>