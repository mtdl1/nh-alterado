const TagManager = {

  install(Vue) {
    // DEFINE SE O GTM FOI CARREGADO
    Vue.prototype.$gtmLoaded = false;

    //ID DO GTM
    Vue.prototype.$gtmId = null;

    // Ex: $gtmInit()
    // INICIA O GTM
    Vue.prototype.$gtmInit = function () {
      //VERIFICA SE O GTM JÁ ESTÁ ATIVO
      if(Vue.prototype.$gtmLoaded) return false;

      //VERIFICA SE O ID DO GTM EXISTE
      if(!Vue.prototype.$gtmId) return false;

      //NOVA TAG SCRIPT
      let gtmScript = document.createElement('script');
      gtmScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\
    })(window,document,'script','dataLayer','"+Vue.prototype.$gtmId+"');";

      //ADICIONA O GTM NO HEADER
      document.head.appendChild(gtmScript);
    }


    // Ex: $gtmVitrineDataLayer(titulo,produtos)
    // OBTÉM O ATRIBUTO ÚNICO DO PRODUTO
    Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto =  function (produto){
      //VERIFICA A EXISTÊNCIA DE ATRIBUTOS
      if(!produto.atributos || !produto.atributos.unico) return "Único";

      //VERIFICA O ATRIBUTO ÚNICO SELECIONADO
      let atributoUnico = produto.atributos.unico.valores.find(function(item){
        return item.selecionado;
      });

      //RETORNA O VALOR SELECIONADO
      return atributoUnico ? atributoUnico.label.trim() : produto.atributos.unico.valores[0].label.trim();
    }

    // Ex: $gtmEventAddToCart(item)
    // ACIONA EVENTO DE ADIÇÃO DE ITENS AO CARRINHO
    Vue.prototype.$gtmEventAddToCart = function (item) {
      //ATRIBUTO ÚNICO DO PRODUTO
      let atributoUnico = Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto(item);
      //DATALAYER PUSH
      window.dataLayer.push({
        event: 'addToCart',
        ecommerce:{
          currencyCode: "BRL",
          add:{
            products: [
              {
                id: item.id,
                name: item.nome,
                brand: item.marca ? item.marca.nome.trim() : item.marcas[0].nome.trim(),
                variant: atributoUnico,
                price: item.precos.por
              }
            ]
          }
        }
      });
    }

    // Ex: $gtmEventRemoveFromCart(item)
    // ACIONA EVENTO DE REMOÇÃO DE ITENS AO CARRINHO
    Vue.prototype.$gtmEventRemoveFromCart = function (item) {
      //DATALAYER PUSH
      window.dataLayer.push({
        event: 'removeFromCart',
        ecommerce:{
          currencyCode: "BRL",
          remove:{
            products: [
              {
                id: item.hash.idProduto,
                name: item.nome,
                price: item.precos.precoPor
              }
            ]
          }
        }
      });
    }

    // Ex: $gtmProductClick(produto)
    // ACIONA EVENTO DE CLICK EM PRODUTOS
    Vue.prototype.$gtmProductClick = function (produto) {
      //ATRIBUTO ÚNICO DO PRODUTO
      let atributoUnico = Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto(produto);

      //DATALAYER PUSH
      window.dataLayer.push({
        ecommerce:{
          event: "productClick",
          ecommerce: {
            click: {
              actionField: {
                'list': 'Product'
              },
              products: [
                {
                  id: produto.id,
                  name: produto.nome.trim(),
                  brand: produto.marca.nome.trim(),
                  variant: atributoUnico,
                  price: produto.precos.por
                }
              ]
            }
          }
        }
      });
    }

    Vue.prototype.$gtmVitrineDataLayer = function (titulo, produtos) {
      //IMPRESSÕES
      let impressions = [];

      //VALIDAÇÃO TO TÍTULO
      titulo = titulo ?? "Vitrine";

      //ITERA OS PRODUTOS
      produtos.forEach(value => {

        //ATRIBUTO ÚNICO DO PRODUTO
        let atributoUnico = Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto(value);

        //IMPRESSION FIELD OBJECT
        impressions.push({
                        id: value.id,
                        name: value.nome.trim(),
                        list: titulo.trim(),
                        list_name: titulo.trim(),
                        brand: value.marca.nome.trim(),
                        variant: atributoUnico,
                        position: (impressions.length + 1),
                        list_position: (impressions.length + 1),
                        price: value.precos.por
                      });
      });

      //DATALAYER PUSH
      window.dataLayer.push({
        ecommerce:{
          currencyCode: "BRL",
          impressions: impressions
        }
      });
    }
    

  }
}

export default TagManager;
