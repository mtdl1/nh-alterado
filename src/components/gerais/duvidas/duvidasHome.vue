<template>
<main>
    <section id="duvidasNewHair" class="duvidasGeral pt-3">
        <div class="container">
            <div class="titleSection text-center">
                <h3>Saiba tudo sobre o New Hair</h3>
                <p class="titulo mt-3"> Tire todas as suas dúvidas para começar o tratamento o quanto antes.</p>
            </div>
                <div class="row justify-content-center">
                        <div class=" btns-duvidas d-flex justify-content-center flex-wrap">
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 1}]" @click="ativo = 1">New Hair <br class="mob"> Vitamin</div>
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 2}]" @click="ativo = 2">New Hair  <br class="mob">Gummy</div>
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 3}]" @click="ativo = 3">Vitamina  <br class="mob">Para Mamãe</div>
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 4}]" @click="ativo = 4">Sérum Facial <br class="mob"> 10 em 1</div>
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 5}]" @click="ativo = 5">Linha <br class="mob"> Essential</div>
                                <div class="col-md-3 col-5 " :class="['item-duvida', {ativo: ativo == 6}]" @click="ativo = 6">New Hair <br class="mob"> Masculino</div>
                        </div>
                </div>
        </div>
        <DuvidasNewHairVitamin class="mt-4" v-if="ativo == 1"/>
        <DuvidasGummy class="mt-4" v-if="ativo == 2"/>
        <DuvidasVitaminaMamae class="mt-4" v-if="ativo == 3"/>
        <DuvidasSerum  class="mt-4" v-if="ativo == 4"/>
        <DuvidasLinhaEssential class="mt-4" v-if="ativo == 5"/>
        <DuvidasNewHairMasculino class="mt-4" v-if="ativo == 6"/>
    </section>
</main>
</template>

<script>
import DuvidasLinhaEssential from '../../landing-page/linha-essential/duvidas-linha-essential.vue'
import DuvidasGummy from './duvidasGummy.vue'
import DuvidasNewHairMasculino from './duvidasNewHairMasculino.vue'
import DuvidasNewHairVitamin from './duvidasNewHairVitamin.vue'
import DuvidasSerum from './duvidasSerum.vue'
import DuvidasVitaminaMamae from './duvidasVitaminaMamae.vue'


export default {
    name: 'DuvidasHome',

    data() {
            return {
                ativo: 1,
            }
        },
    
    components: {
        DuvidasNewHairVitamin,
        DuvidasGummy,
        DuvidasVitaminaMamae,
        DuvidasSerum,
        DuvidasLinhaEssential,
        DuvidasNewHairMasculino

    },
}
</script>

<style scoped>
    
    main {
        background: #f5f5f5;
    }

    .titleSection h3 {
        text-align: center;
        font: normal normal bold 32px/38px Open Sans, sans;
        letter-spacing: 0px;
        color: #1A1A1A;
        text-transform: lowercase;
    }

    .titleSection p {
        text-align: center;
        font: normal normal normal 16px/20px Roboto;
        letter-spacing: 0px;
        color: #1A1A1A;
        padding-bottom: 28px;
        text-transform: lowercase;
    }

    .item-duvida {
        background: transparent;
        font: normal normal bold 15px/20px Open Sans;
        color: #ff4289;
        padding: 7px 20px;
        border-radius: 6px;
        cursor: pointer;
        border: 1px solid #ff4289;
        text-transform: lowercase;
        width: 31% !important;
        margin: 5px;
        /* margin: 0 auto 8px; */
        text-align: center;
    }

    .ativo {
        background: #ff4289;
        color: #FFF;
    }

    .item-duvida:hover {
        opacity: .8;
        background: #ff4289;
        color: #FFF;
    }
    

    @media(max-width: 768px) {
        .titleSection h4 {
            font: normal normal bold 32px/36px Open Sans, sans-serif;
        }

        .titleSection p {
            font: normal normal normal 15px/18px Open Sans , sans-serif;
            padding-bottom: 15px;
            color: #777;
        }

        .btns-duvidas {
            flex-wrap: wrap;
        }

        .item-duvida {
            font: normal normal bold 15px/17px Open Sans;
            width: 100% !important;
            margin-bottom: 5px;
            text-align: center;
        }

        .mt-4 {
            margin-top: 15px !important;
        }
    }

</style>
