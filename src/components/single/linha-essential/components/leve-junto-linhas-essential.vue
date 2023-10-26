<template>
    <div class="container">
        <h2>Leve Junto</h2>
        <div class="row mt-4 justify-content-center">
            <div class="col">
                <Carousel class="pl-mob" :items="4" :nav="false" :loop="false" :dots="false" :center="false" :autoplay="false" :margin="10" :stagePadding="0" :responsive="{0:{items: 2, stagePadding: '20'}, 768:{items:4} }" >
                    <template slot="prev"><span class="prev mob"><img src="@/assets/img/linha-essential/linhas/next.png" alt="" style="transform: rotate(180deg)"></span></template>
                        <PoteGummyLeveEssential />
                        <Kit3PotesGummyLeveEssential />
                        <PoteCapsLeveEssential />
                        <Kit3PoteCapsLeveEssential />
                    <template slot="next"><span class="next mob"><img src="@/assets/img/linha-essential/linhas/next.png" alt=""></span></template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from 'vue-owl-carousel'
    import PoteCapsLeveEssential from './produtos/1-pote-caps-leve-essential.vue'
    import PoteGummyLeveEssential from './produtos/1-pote-gummy-leve-essential.vue'
    import Kit3PoteCapsLeveEssential from './produtos/3-potes-caps-leve-essential .vue'
    import Kit3PotesGummyLeveEssential from './produtos/3-potes-gummy-leve-essential.vue'

    export default {
        name: "LeveJuntoLisoPerfeito",

        components:{
            Carousel,
            PoteGummyLeveEssential,
            Kit3PotesGummyLeveEssential,
            PoteCapsLeveEssential,
            Kit3PoteCapsLeveEssential,
        },
    }
</script>

<style scoped>
    .container {
        padding: 20px 0;
        margin-bottom: 20px;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/40px Open Sans;
        letter-spacing: -0.4px;
        color: #333333;
    }

    @media(max-width: 768px) {
        .pl-mob {
            padding-left: 15px;
        }

        h2 {
            font: normal normal bold 25px/35px Open Sans;
        }

        span.next,
        span.prev {
            position: absolute;
            display: flex;
            top: 35%;
            width: 40px;
            height: 40px;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 50%;
            cursor: pointer;
            z-index: 999;
            padding: 5px;
        }

        .produtos {
            position: relative;
        }

        span.next {
            right: 20px;
        }

        span.prev {
            left: 20px;
        }
    }
</style>