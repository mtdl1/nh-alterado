<template>
    <section>
        <div class="container">
            <div class="row sectionAvaliacao">
                <div class="col col-sm-12">
                    <div v-show="loading">
                        <div class="d-flex justify-content-center align-items-center loader">
                            <div class="spinner1"></div>
                            <div class="spinner2"></div>
                            <div class="spinner3"></div>
                        </div>
                    </div>
                    <div id="_trustvox_widget" v-show="!loading"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AvaliacoesTrustvox',

        props: ['dataProd'],

        data() {
            return {
                loading: true
            }
        },

        created() {
            setTimeout(() => {
                this.setTrustvox()
                this.loading = !this.loading
            }, 2000)
        },

        methods: {
            getScriptExterno(urlScript) {
                const script = document.createElement('script')
                script.src = urlScript
                script.async = true
                script.defer = true
                document.body.appendChild(script)
            },

            setTrustvox() {
                const fotoProduto = this.dataProd.midias.imagens[0].arquivos.big.length ? this.dataProd.midias.imagens[0].arquivos.big : ''
                window._trustvox = []
                window._trustvox.push(['_storeId', '116423'])
                window._trustvox.push(['_productId', this.dataProd.id])
                window._trustvox.push(['_productName', this.dataProd.nome])
                window._trustvox.push(['_productPhotos', fotoProduto])
                this.getScriptExterno('//rate.trustvox.com.br/widget.js')
                this.getScriptExterno('//static.trustvox.com.br/sincero/sincero.js')
                this.getScriptExterno('https://static.trustvox.com.br/rate-widget-js/widget.js')
                window['_trustvox_colt'] = []
                window['_trustvox_colt'].push(['_storeId', '116423'], ['_limit', '7'])

                this.getScriptExterno('https://colt.trustvox.com.br/colt.min.js')
            }
        }
    }
</script>

<style scoped>
    .spinner1,
    .spinner2,
    .spinner3 {
        margin: 0 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #FF4289;
        animation: rotating-spinner 1s linear infinite;
    }

    .spinner2 {
        width: 60px;
        height: 60px;
        border: 1px solid #f3f3f3;
        border-top: 4px solid #FF4289;
    }

    .spinner3 {
        width: 40px;
        height: 40px;
        border: 1px solid #f3f3f3;
        border-top: 4px solid #FF4289;
    }

    @keyframes rotating-spinner {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>