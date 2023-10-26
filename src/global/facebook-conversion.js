export default {
  fbCookie(type) {
    let valueCookie = '';
    const cookie = document.cookie.split(';').find(cookie => cookie.includes(`_${type}=`));

    if (cookie) {
      valueCookie = cookie.split('=')[1];
    }
    
    return valueCookie;
  },

  install(Vue, initConf = { pixelID: '747780642365442' }) {

    /**
     * @method Responsável por adicionar o pixel do Facebook no DOM do projeto
     * @param initConf objeto com a propriedade 'pixelID' que é a referencia do pixel do cliente.
     * @return void
    */
    Vue.prototype.$fbInit = () => {
      const scriptDOM = document.createElement('script');
      scriptDOM.setAttribute('type', 'text/javascript');
      scriptDOM.setAttribute('id', 'script-pixel-facebook');
      scriptDOM.setAttribute('async', 'true');
      scriptDOM.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${initConf.pixelID}');`

      document.head.appendChild(scriptDOM);
    }

    /**
     * @method Responsável por enviar um evento de AddToCart para API do Facebook
     * @param dataProducts response.data da requisição post cart
     * @param currentProduct nome do produto atual adicionado no carrinho lateral.
     * @param currentPrice preço do produto atual adicionado no carrinho lateral.
     * @param currentUser objeto 'dadosUser' presente na vuex
     * @return void
    */
    Vue.prototype.$fbAddToCart = ({ dataProducts, currentProduct, currentPrice, currentUser }) => {
      if (dataProducts.estrutura && dataProducts.estrutura.apps && dataProducts.estrutura.apps.pixelFacebook) {
        window.fbq(
          'track', 
          'AddToCart', 
          {
            event_id: dataProducts.estrutura.apps.pixelFacebook.eventId,
            event_name: 'AddToCart',
            event_time: Date.now(),
            user_data: {
              em: [currentUser.logado ? currentUser.userHash.email : '' ],
              ph: [currentUser.logado ? currentUser.userHash.celular : '', currentUser.logado ? currentUser.userHash.telefone : '' ],
              client_ip_address: null,
              client_user_agent: navigator.userAgent,
              fbc: this.fbCookie('fbc'),
              fbp: this.fbCookie('fbp'),
            },
            custom_data: {
              currency: 'BRL',
              value: currentPrice,
              content_name: currentProduct,
              content_type: 'product',
              content_ids: dataProducts.itens.map(item => item.sku)
            }
          }
        );
      }
    }

    /**
     * @method Responsável por enviar um evento de visualização da página.
     * @param dataPage response.data da requisição da página, ex: home, detailProduct, category, etc.
     * @param currentUser objeto 'dadosUser' presente na vuex
     * @return void
    */
    Vue.prototype.$fbPageView = ({ dataPage, currentUser }) => {
      if (dataPage.estrutura && dataPage.estrutura.apps && dataPage.estrutura.apps.pixelFacebook) {
        window.fbq(
          'track', 
          'PageView', 
          {
            event_id: dataPage.estrutura.apps.pixelFacebook.eventId,
            event_name: 'PageView',
            event_time: Date.now(),
            user_data: {
              em: [currentUser.logado ? currentUser.userHash.email : '' ],
              ph: [currentUser.logado ? currentUser.userHash.celular : '', currentUser.logado ? currentUser.userHash.telefone : '' ],
              client_ip_address: null,
              client_user_agent: navigator.userAgent,
              fbc: this.fbCookie('fbc'),
              fbp: this.fbCookie('fbp'),
            },
            custom_data: {
              eventId: dataPage.estrutura.apps.pixelFacebook.eventId,
              fbc: this.fbCookie('fbc'),
              fbp: this.fbCookie('fbp'),
            }
          }
        );
      }
    }

    /**
     * @method Responsável enviado ao visualizar a página de um produto.
     * @param dataPage response.data da requisição da página, ex: home, detailProduct, category, etc.
     * @param currentUser objeto 'dadosUser' presente na vuex
     * @return void
    */
    Vue.prototype.$fbViewContent = ({ dataPage, currentUser }) => {
      if (dataPage.estrutura && dataPage.estrutura.apps && dataPage.estrutura.apps.pixelFacebook) {
        window.fbq(
          'track', 
          'ViewContent', 
          {
            event_id: dataPage.estrutura.apps.pixelFacebook.eventId,
            event_name: 'ViewContent',
            event_time: Date.now(),
            user_data: {
              em: [currentUser.logado ? currentUser.userHash.email : '' ],
              ph: [currentUser.logado ? currentUser.userHash.celular : '', currentUser.logado ? currentUser.userHash.telefone : '' ],
              client_ip_address: null,
              client_user_agent: navigator.userAgent,
              fbc: this.fbCookie('fbc'),
              fbp: this.fbCookie('fbp'),
            },
            custom_data: {
              value: dataPage.conteudo.precos.por,
              currency: 'BRL',
              content_name: dataPage.conteudo.nome,
              content_category: dataPage.conteudo.categoria.nome,
              content_type: 'product',
              content_ids: dataPage.conteudo.sku
            }
          }
        );
      }
    }

    /**
     * @method Responsável por disparar o evento de Search.
     * @param dataPage response.data da requisição da página, ex: home, detailProduct, category, etc.
     * @param currentUser objeto 'dadosUser' presente na vuex
     * @return void
    */
    Vue.prototype.$fbSearch = ({ dataSearch, currentUser }) => {
      if (dataSearch.estrutura && dataSearch.estrutura.apps && dataSearch.estrutura.apps.pixelFacebook) {
        window.fbq(
          'track', 
          'Search', 
          {
            event_id: dataSearch.estrutura.apps.pixelFacebook.eventId,
            event_name: 'Search',
            event_time: Date.now(),
            user_data: {
              em: [currentUser.logado ? currentUser.userHash.email : '' ],
              ph: [currentUser.logado ? currentUser.userHash.celular : '', currentUser.logado ? currentUser.userHash.telefone : '' ],
              client_ip_address: null,
              client_user_agent: navigator.userAgent,
              fbc: this.fbCookie('fbc'),
              fbp: this.fbCookie('fbp'),
            },
            custom_data: {
              search_string: dataSearch.conteudo.busca.texto,
              contents: JSON.stringify(dataSearch.conteudo.produtos.map(produto => ({ id: produto.sku, price: produto.precos.por }))),
              value: dataSearch.conteudo.produtos.map(produto => produto.precos.por).reduce((accumulator, currentValue) => accumulator + currentValue),
              currency: 'BRL',
            }
          }
        );
      }
    }
  }
}