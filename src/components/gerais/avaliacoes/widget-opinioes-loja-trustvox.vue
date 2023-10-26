<template>
    <section>
        <div class="container">
            <div class="row sectionAvaliacao">
                <div class="col col-sm-12">
                    <Loading v-show="loading" />
                    <div id="_trustvox_colt" v-show="!loading"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Loading from './loading.vue'

    export default {
        name: 'AvaliacoesTrustvox',

        components: { 
            Loading 
        },

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
                this.getScriptExterno('//colt.trustvox.com.br/colt.min.js')
                var _trustvox_colt = _trustvox_colt || [];
                window._trustvox_colt = _trustvox_colt || []
                // window._trustvox.push(['_storeId', '116423'])
                window._trustvox_colt.push(['_storeId', '116423'], ['_limit', '7']);
            },

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