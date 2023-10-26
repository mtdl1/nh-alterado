import Vue from 'vue'
import App from './App.vue'
import VueGtm from 'vue-gtm';
import store from './store/index.js';
import router from './router'
import variaveis from '@/global/variaveis.js'
import carrinho from '@/global/carrinho.js'
import methods from '@/global/methods.js'
import comunicacao from '@/comunicacao.js'
import { mapState } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueMask from 'v-mask';
import Toast from 'vue-toastification';
import VueMeta from 'vue-meta';

// configurando tag manager
import tagmanager from '@/global/tagmanager.js'

import FacebookConversion from './global/facebook-conversion';

import './plugins/axios.js'
import '@/assets/css/slider-styles.css'
import '@/assets/css/estilos-varejao.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/geral.css'
import 'vue-toastification/dist/index.css'

const optionsToast = {
    position: 'bottom-center',
    duration: 5000,
    closeOnClick: true,
    progressBar: true,
    timeout: 5000,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

Vue.config.productionTip = false

Vue.use(VueMeta);
Vue.use(variaveis);
Vue.use(methods);
Vue.use(carrinho);
Vue.use(tagmanager);
Vue.use(FacebookConversion);
Vue.use(VueLazyload);
Vue.use(VueMask);
// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    listenEvents: ['scroll'],
    //error: 'dist/error.png',
    //loading: 'dist/loading.gif',
    attempt: 1
});
Vue.use(VueAxios, axios);
Vue.use(Toast, optionsToast);

new Vue({
    store,
    router,
    render: h => h(App),
    computed: {
        ...mapState(['config'])
    },
    watch: {
        config(newVal) {
            //ADICIONA O GTM
            Vue.prototype.$gtmId = newVal.configuracoes.google.ga.gtm;

            //ADICIONA O GTM
            Vue.use(VueGtm, {
                id: newVal.configuracoes.google.ga.gtm,
                enabled: false,
                loadScript: true,
                vueRouter: router
            });

            comunicacao.$emit('configCarregada', newVal);
        }
    },
    created() {
        this.$store.dispatch('getConfig');
        this.$store.dispatch('resizeWindow');
    },
    mounted() {
        this.$fbInit();
    }
}).$mount('#app')

window.addEventListener('load', () => {
    comunicacao.$emit('siteLoaded');
});