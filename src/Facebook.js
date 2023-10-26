export default class Facebook {

  /**
   * @method Responsável por iniciar o objeto de integração com o facebook
   * @param string codigo do pixel
   * @return object
   */
  constructor(pixelId) {
    this.pixelId = pixelId;
  }

  /**
   * @method Responsável por inserir uma tag de script
   * @param string id da tag
   * @param string conteudo da tag
   * @param bool se a tag será assíncrona
   * @return void
   */
  insertContent(id, content, async = false, defer = false) {
    let scriptAntigo = document.getElementById(id)
    if (scriptAntigo !== null) scriptAntigo.remove();
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.id = id;
    if (async) script.async = true;
    if (defer) script.defer = true;
    script.innerHTML = content;
    document.head.appendChild(script);
  }

  /**
   * @method Responsável por disparar o evento para o facebook
   * @param {string} eventName
   * @param {object} payload
   * @return void
   */
  apply(eventName, payload) {
    // DEFINE SCRIPT PRINCIPAL
    this.insertContent('script-pixel-facebook',
      `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.pixelId}');
    `);

    // DEFINE O ID DO EVENTO GERADO
    let eventContent = payload.estrutura.apps.pixelFacebook;

    switch (eventName) {
      case 'PageView':
        // console.log('page view')
        this.setPageViewEvent(eventContent)
        break;
      case 'ViewContent':
        this.setViewContentEvent(eventContent, payload.conteudo)
        break;
      case 'Search':
        this.setSearchEvent(eventContent, payload.conteudo)
        break;
      case 'AddToCart':
        // console.log('addToCart')
        this.setAddToCartEvent(eventContent)
        break;
    }
  }

  getCookie(nome) {
    let pattern = RegExp(nome + "=.[^;]*")
    let matched = document.cookie.match(pattern)
    if(matched){
        let cookie = matched[0].split('=')
        return cookie[1]
    }
    return ''
  }

  getUserData() {
    let payload = {
      'em': [
        localStorage.getItem('emailHash') || '',
      ],
      'ph': [
        localStorage.getItem('celularHash') || '',
        localStorage.getItem('telefoneHash') || '',
      ],
      'client_ip_address':null,
      'client_user_agent': navigator.userAgent,
    }
    let fbp = this.getCookie('fbp')
    if(fbp.length) payload['fbp'] = fbp
    
    let fbc = this.getCookie('fbc')
    if(fbc.length) payload['fbc'] = fbc

    return JSON.stringify(payload)
  }

  /**
   * @method Responsável por enviar um evento de PageView
   * @param object Responsável por armazenar as informações do evento
   * @return void
   */
  setPageViewEvent(eventContent = {}) {
    // console.log('page view: ', eventContent)
    this.insertContent('fbq-track', `
      fbq('track', 'PageView', {
        user_data: ${this.getUserData(eventContent.eventId)}
      }, {"eventID": "${eventContent.eventId}"});
    `);
  }

  /**
   * @method Responsável por disparar o evento de ViewCOntent
   * @param object Responsável por armazenar as informações do evento
   * @param object Responsável por armazenar o objeto de produto detalhe
   * @return void
   */
  setViewContentEvent(eventContent = {}, produto = {}) {
    // const userData = this.getUserData(eventContent.eventId)
    this.insertContent('fbq-track', `
      fbq('track', 'ViewContent', {
        user_data: ${this.getUserData(eventContent.eventId)},
      	value: ${produto.precos.por},
      	currency: 'BRL',
        content_name: '${produto.nome}',
      	content_category: '${produto.categoria.nome}',
      	content_type: 'product',
      	content_ids: '${produto.sku}'
    	}, {"eventID": "${eventContent.eventId}"});
    `);
  }

  /**
   * @method Responsável por disparar o evento de Search
   * @param object Responsável por armazenar as informações do evento
   * @param object Responsável por armazenar o objeto de busca de produto
   * @return void
   */
  setSearchEvent(eventContent = {}, searchContent = {}) {
    let total    = 0;
    let produtos = searchContent.produtos.map( (item) => {
      total += item.precos.por;
      return {
        id: item.sku,
        price: item.precos.por
      }
    });
    this.insertContent('fbq-track', `
      fbq('track', 'Search', {
        search_string: "${eventContent.dados.busca}",
        contents : ${JSON.stringify(produtos)},
        value : ${total},
        currency : 'BRL'
      }, {"eventID": "${eventContent.eventId}"});
    `);
  }

  /**
   * @method Responsável por disparar o evento de AddToCart
   * @param object Responsável por armazenar as informações do evento
   * @return void
   */
  setAddToCartEvent(eventContent = {}) {
    // console.log('event addToCart: ', eventContent)
    // const userData = this.getUserData(eventContent.eventId)
    this.insertContent('fbq-track', `
      fbq('track', 'AddToCart', {
        user_data: ${this.getUserData(eventContent.eventId)},
        content_name: '${eventContent.dados.nomeConteudo}',
        content_ids: ${JSON.stringify(eventContent.dados.idItems)},
        content_type: 'product',
        value: ${eventContent.dados.valorTotal},
        currency: 'BRL'
      }, {"eventID": "${eventContent.eventId}"});
    `);
  }
}
