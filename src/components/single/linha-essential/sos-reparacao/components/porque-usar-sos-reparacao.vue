<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-8">
                    <h2>Por que usar a linha SOS Reparação?</h2>
                    <p>Nossas fórmulas são desenvolvidas com ativos de altíssima qualidade, não testadas em animais e livre de parabenos e corantes, para garantir resultados incríveis e duradouros. Para cada tipo de fio, um cuidado especial.</p>
                    <div class="row motivos">
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-3 col-md-3 text-center">
                                    <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/sem teste.png" alt="" class="img-fluid">
                                    <h4>Sem teste <br> em animais</h4>
                                </div>
                                <div class="col-3 col-md-3 text-center">
                                    <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/livre de parabeno.png" alt="" class="img-fluid">
                                    <h4>Livre de <br> parabeno</h4>
                                </div>
                                <div class="col-3 col-md-3 text-center">
                                    <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/não contem sal.png" alt="" class="img-fluid">
                                    <h4>Não <br> contém sal</h4>
                                </div>
                                <div class="col-3 col-md-3 text-center">
                                    <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/emblagens.png" alt="" class="img-fluid">
                                    <h4>Embalagens <br> recicláveis</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p><strong>A potência da queratina, arginina e blend de óleos especiais</strong> unida para reconstruir, proteger e hidratar os fios das agressões externas com restauração e nutrição intensas.</p>
                </div>
                <div class="col-md-3 pl-4">
                    <div class="row flex-column">
                        <div class="col">
                            <div class="img-comparacao position-relative">
                                <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/sem sos reparacao.jpg" alt="" class="img-fluid desk">
                                <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/mob/sem sos reparacao.jpg" alt="" class="img-fluid mob">
                                <div class="item position-absolute">SEM SOS Reparação</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="img-comparacao position-relative">
                                <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/com sos reparacao.jpg" alt="" class="img-fluid desk">
                                <img src="@/assets/img/single/linha-essential/sos-reparacao/porque-usar/mob/com sos reparacao.jpg" alt="" class="img-fluid mob">
                                <div class="item position-absolute">COM SOS Reparação</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PorqueUsarLisoPerfeito",
    }
</script>

<style scoped>
    .container-fluid {
        background: #F2F2F2 0% 0% no-repeat padding-box;
        padding: 35px 0;
    }

    h2 {
        text-align: left;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        padding-bottom: 20px;
    }

    p {
        font: normal normal normal 18px/35px Open Sans;
        letter-spacing: 0px;
        color: #333333;
    }

    p strong {
        font: normal normal bold 18px/35px Open Sans;
    }

    .img-comparacao {
        margin-bottom: 10px;
    }

    .item {
        background: #FF6978 0% 0% no-repeat padding-box;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        bottom: 0;
        width: 100%;
    }

    .motivos {
        padding: 55px 0 37px;
    }

    h4 {
        font: normal normal normal 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        padding-top: 10px;
    }

    @media(max-width: 768px) {
        .container-fluid {
            padding: 20px 0;
        }

        h2 {
            font: normal normal bold 25px/35px Open Sans;
        }

        p {
            font: normal normal normal 15px/25px Open Sans !important;
            color: #666666 !important;
        }

        p strong {
            font: normal normal bold 15px/25px Open Sans !important;
        }

        h4 {
            font: normal normal normal 10px/13px Open Sans;
        }

        .motivos {
            padding: 25px 0;
        }

        .flex-column {
            flex-direction: row !important;
        }

        .img-comparacao {
            margin-top: 15px;
        }

        .item {
            font: normal normal bold 15px/20px Open Sans;
            height: 40px;
            position: relative !important;
        }
    }
</style>