<template>
    <div class="container">
        <div class="titleSection text-center pb-4">
            <h2 class="mt-3">Faça parte dessa história <br class="mob"> você também</h2>
            <p>Compartilhe o seu #momentonewhair e <br class="mob"> apareça em nosso feed.</p>
        </div>
        <div loading="lazy" data-mc-src="f5ca9445-9b6e-441e-b9ee-0b06fd0dc846#instagram"></div>
    </div>
</template>

<script>
    export default {
        name: 'MomentoNewHair'
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        font: normal normal bold 32px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
        opacity: 1;
        font-weight: 700!important;
        text-transform: lowercase;
    }

    p {
        text-align: center;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
    }

    .fr-card-body.wx-card {
        background-color: azure!important;
    }

    @media(max-width: 768px) {
        .titleSection {
            padding-bottom: 8px !important;
        }

        .titleSection h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .titleSection p {
            font: normal normal normal 14px/14px Open Sans;
        }
    }
</style>