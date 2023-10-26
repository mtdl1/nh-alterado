<template>
    <a href="#produtos" class="btn btn-primary btn-flutuante mob" id="btnFlutuante">COMPRE AGORA</a>
</template>

<script>
    export default {
        name: 'BotaoFlutuanteHome',

        mounted() {
            window.addEventListener('scroll', this.scrollHandler);
        },

        methods: {
            scrollHandler() {
                const botao = document.getElementById('btnFlutuante')
                if (window.scrollY <= 0 && window.scrollY <= 700) {
                    botao.style.bottom = '-200px'
                } else if(window.scrollY >= 701 && window.scrollY <= 2800) {
                    botao.style.bottom = '-0'
                } else if(window.scrollY >= 2801 && window.scrollY <= 6820) {
                    botao.style.bottom = '-200px'
                } else if(window.scrollY >= 6821) {
                    botao.style.bottom = '0'
                }
            }
        }
    }
</script>

<style scoped>
    .btn-flutuante {
        position: fixed;
        bottom: -200px;
        right: 0;
        left: 0;
        z-index: 9;
        background: #12ad52 !important;
        border: none;
        padding: 20px;
        font: normal normal bold 25px Open Sans;
        transition: all .3s ease;
    }
</style>