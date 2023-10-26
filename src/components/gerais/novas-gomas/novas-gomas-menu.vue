<template>
    <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link morango" id="v-pills-morango-tab" data-toggle="pill" href="#v-pills-morango" role="tab" aria-controls="v-pills-morango" aria-selected="false">MORANGO FRESH</a>
        <a class="nav-link active laranja" id="v-pills-laranja-tab" data-toggle="pill" href="#v-pills-laranja" role="tab" aria-controls="v-pills-laranja" aria-selected="false">LARANJA</a>
        <a class="nav-link uva" id="v-pills-uva-tab" data-toggle="pill" href="#v-pills-uva" role="tab" aria-controls="v-pills-uva" aria-selected="true">UVA VERDE</a>
    </div>
</template>

<script>
    export default {
        name: 'NovasGomasMenu'
    }
</script>

<style scoped>
    .nav-link {
        border-radius: 6px 6px 0 0;
        opacity: 1;
        margin: 0 auto 10px;
        width: 200px;
        height: 43px;
        font: normal normal bold 19px/26px Open Sans;
        letter-spacing: -0.47px;
        color: #333333;
        text-transform: uppercase;
        border-top: 1px solid #333333;
        border-right: 1px solid #333333;
        border-left: 1px solid #333333;
    }

    .uva.active {
        color: #FFFFFF;
        background: #6acc0a 0% 0% no-repeat padding-box ;
        border-color: #6acc0a;
    }

    .morango.active {
        color: #FFFFFF;
        background: #ff4289 0% 0% no-repeat padding-box;
        border-color: #ff4289;
    }

    .laranja.active {
        color: #FFFFFF;
        background: #f05226 0% 0% no-repeat padding-box;
        border-color: #f05226;
    }

    @media(max-width: 1460px) {
        .nav-link {
            width: 180px !important;
            font-size: 15px;
            line-height: 30px!important;
        }

    }


    @media(max-width: 768px) {
        .flex-column {
            flex-direction: row !important;
            width: 95vw;
            margin: 0 auto;
        }

        .nav-link {
            width: 120px !important;
            font: normal normal bold 12px Open Sans;
            padding: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .nav-link{
            border-radius: 6px;
            border: 1px solid #333;
        }
    }

    @media(max-width: 380px) {
        .nav-link{
            width: 110px!important;
        }
    }
</style>