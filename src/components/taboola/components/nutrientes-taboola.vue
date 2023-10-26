<template>
    <div class="container pb-4">
        <div class="row">
            <div class="col">
                <h2>Nutrientes que <br class="mob"> <span>FAZEM</span> acontecer</h2>
                <p>Alguns dos componentes que tornam New Hair <br class="mob"> diferente de tudo o que você conhece</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <!-- <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Ácido Hialurônico</div>
            </div> -->
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Vitamina A</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Vitamina B12</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Vitamina B7</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Vitamina C</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Vitamina B9</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Selênio</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Cromo</div>
            </div>
            <div class="icone d-flex align-items-center justify-content-center">
                <div class="col-3 col-md-3 text-right"><img class="img-fluid" src="@/assets/img/taboola/CHECK 1.svg" width="46" alt=""></div>
                <div class="col-7 col-md-8">Zinco</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NutrientesTaboola',
    }
</script>

<style scoped>
    h2 {
        font: normal normal 800 50px/53px Open Sans;
        letter-spacing: -2.5px;
        color: #333333;
        text-align: center;
        padding-top: 64px;
        padding-bottom: 5px;
    }

    h2 span {
        color: #EB3A94;
    }

    p {
        font: normal normal normal 26px/28px Open Sans;
        letter-spacing: -1.3px;
        color: #333333;
        text-align: center;
        padding-bottom: 30px;
    }

    .col-md-8 {
        font: normal normal normal 31px/30px Open Sans;
        letter-spacing: -1.24px;
        color: #333333;
        padding: 0;
    }

    .icone {
        width: 25%;
        margin: 15px 0;
    }

    @media(max-width: 768px) {
        .container.pb-4 {
            padding-bottom: 0 !important;
        }

        h2 {
            font: normal normal 800 28px/28px Open Sans;
            padding-top: 35px;
        }
        p {
            font: normal normal normal 16px/18px Open Sans;
        }
        .col-md-8 {
            font: normal normal normal 14px/10px Open Sans;
        }

        .row.justify-content-center {
            justify-content: flex-start !important;
        }

        .icone {
            width: 50%;
            margin: 8px 0;
        }
    }
</style>