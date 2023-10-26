<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4>DESCUBRA O TRATAMENTO IDEAL <br class="desk"> PARA OS SEUS CABELOS</h4>
                    <button class="btn-descubra">FAZER O TESTE!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DescubraOTratamento',
    }
</script>

<style scoped>
    .container-fluid {
        background-color: #b0b0b0;
        padding: 50px 0;
    }

    h4 {
        text-align: center;
        font: normal normal bold 45px/61px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    .btn-descubra {
        width: 383px;
        height: 82px;
        background: #FF4289 0% 0% no-repeat padding-box;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font: normal normal bold 40px/55px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        margin: 34px auto 25px;
    }

    @media(max-width: 768px) {
        h4 {
            font: normal normal bold 20px/27px Open Sans;
        }

        .btn-descubra {
            width: 161px;
            height: 42px;
            font: normal normal bold 15px/20px Open Sans;
            margin: 30px auto 10px;
            border-radius: 4px;
        }
    }
</style>