<template>
    <div class="container-fluid">
        <div class="container">
            <h2>Como usar?</h2>
            <div class="row">
                <div class="col px-0">
                    <div class="d-flex flex-wrap">
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 1</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 1.png" alt="" class="img-fluid">
                                <p>Umedeça os fios e o couro cabeludo com água fria ou morna</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 2</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 2.png" alt="" class="img-fluid">
                                <p>Aplique o shampoo somente na raiz, massageando suavemente com as pontas dos dedos</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 3</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 3.png" alt="" class="img-fluid">
                                <p>Enxágue abundantemente e repita o processo</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 4</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 4.png" alt="" class="img-fluid">
                                <p>Retire o excesso de umidade dos fios com uma toalha (não esfregue!)</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 6</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 7.png" alt="" class="img-fluid">
                                <p>Aplique o condicionador, deixe agir e enxágue (não aplique na raiz!)</p>
                            </div>
                        </div>
                        <div class="col-4 col-md-4">
                            <div class="item">
                                <div class="item-head">Passo 6</div>
                                <img src="@/assets/img/single/linha-essential/liso-perfeito/como-usar/PASSO 8.png" alt="" class="img-fluid">
                                <p>Finalize de acordo com a sua preferência e tipo de fio, observando as instruções do rótulo!</p>
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
        name: "ComoUsarCachosOndas",
    }
</script>

<style scoped>
    .container-fluid {
        background: #F2F2F2 0% 0% no-repeat padding-box;
        padding: 26px 0 50px;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: 0px;
        color: #333333;
        padding-bottom: 23px;
    }

    p {
        text-align: center;
        font: normal normal normal 18px/25px Open Sans;
        letter-spacing: 0px;
        color: #707070;
        padding: 0 10px;
    }

    .item {
        background: #fff;
        text-align: center;
        min-height: 288px;
        margin-bottom: 25px;
    }

    .item-head {
        height: 46px;
        background: #74519E 0% 0% no-repeat padding-box;
        display: flex;
        align-items: center;
        padding-left: 24px;
        font: normal normal bold 25px/20px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    .item img {
        padding: 10px 0 5px;
    }

    @media(max-width: 768px) {
        .container-fluid {
            background: #F2F2F2 0% 0% no-repeat padding-box;
            padding: 15px 0 22px;
        }

        h2 {
            font: normal normal bold 25px/35px Open Sans;
        }

        .item {
            margin-bottom: 10px;
            min-height: 225px;
        }

        .item-head {
            font: normal normal bold 14px/20px Open Sans;
            padding-left: 10px;
            height: 23px;
        }

        p {
            font: normal normal normal 10px/16px Open Sans;
            padding: 0 5px;
        }

        .col-4 {
            padding-left: 3px;
            padding-right: 3px;
        }

        .col.px-0 {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
    }
</style>