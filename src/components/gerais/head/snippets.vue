<template lang="html">
  <div class="row" style="none"></div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      dadosPageAtual: state => state.head.dadosPageAtual,
    })
  },
  watch: {
    dadosPageAtual(val) {
      if (val) this.setPagina(val);
    },
  },
  methods: {
    print(schema){
      //REMOVE O ELEMENTO EXISTENTE
      var elementoExistente = document.querySelector('#dados-estruturados');
      if(elementoExistente != null) elementoExistente.remove();

      //INSERE O NOVO ELEMENTO
      var script  = document.createElement('script');
      script.type = 'application/ld+json';
      script.id   = 'dados-estruturados';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    },
    setPagina(responsePagina){
      //CRIA OS SNIPPETS DAS PÁGINAS
      switch (responsePagina.estrutura.nivel) {
        case 'home':
          return this.setPaginaHome(responsePagina);
        case 'product/detail':
          return this.setPaginaDetalheProduto(responsePagina);
        default:
          return this.setPaginaListagem(responsePagina);
      }
    },
    setPaginaHome(responseHome){
      this.print([
                   {
                      "@context":"https://www.schema.org",
                      "@type":"Organization",
                      "url":this.$siteUrl,
                      "logo":"https://www.newhaircaps.com.br/upload/editor/logo-newhair.png",
                      "name":responseHome.estrutura.seo.title,
                          "contactPoint":[{
                            "@type":"ContactPoint",
                            "telephone":"+55 (11) 5043-9839",
                            "contactType":"customer service",
                            "areaServed": "BR",
                            "availableLanguage": "Portuguese"
                        },{
                          "@type": "ContactPoint",
                          "telephone": "+55 0800 878 0282",
                          "contactType": "sales",
                          "areaServed": "BR",
                          "availableLanguage": "Portuguese",
                        }],
                        "sameAs":[
                          "https://facebook.com/newhairvitamin/",
                          "https://www.instagram.com/newhaircaps/",
                          "https://www.youtube.com/channel/UCzspD0_7dbFaDTaNOGjvurQ",
                          "https://www.tiktok.com/@newhaircaps"
                        ]
                         
                      
                   }
                ]);
    },
    setPaginaDetalheProduto(responseDetalhe){
      var detalhe = [{
       "@type": "Product",
       "@context": "http://schema.org",
       "name": responseDetalhe.conteudo.nome,
       "description": responseDetalhe.conteudo.descricoes.curta.length > 0 ? responseDetalhe.conteudo.descricoes.curta : responseDetalhe.conteudo.nome,
       "image": "https://www.newhaircaps.com.br/upload/editor/logo-newhair.png",
       "sku": responseDetalhe.conteudo.sku,
       "mpn": responseDetalhe.conteudo.mpn.length ? responseDetalhe.conteudo.mpn : responseDetalhe.conteudo.sku,
       "gtin13": responseDetalhe.conteudo.ean,
       "url":this.$siteUrl+""+this.$router.currentRoute.fullPath,
       "brand": {
         "@type": "Thing",
         "name": responseDetalhe.conteudo.marca.nome
       },
       "offers": {
         "@type": "Offer",
         "availability": responseDetalhe.conteudo.status == 'disponivel' ? "http://schema.org/InStock" : "http://schema.org/OutOfStock",
         "price": responseDetalhe.conteudo.precos.por,
         "priceValidUntil": (new Date).toISOString().split('T')[0],
         "priceCurrency": "BRL",
         "url":this.$siteUrl+""+this.$router.currentRoute.fullPath
       }
     }];

     //AVALIAÇOES
     if(responseDetalhe.conteudo.avaliacao.quantidade > 0){
       //MEDIA
       detalhe[0].aggregateRating = {
         "@type": "AggregateRating",
         "ratingValue": responseDetalhe.conteudo.avaliacao.media,
         "reviewCount": responseDetalhe.conteudo.avaliacao.quantidade
       };

       //AVALIAÇÕES
       detalhe[0].review = [];
       responseDetalhe.conteudo.avaliacao.avaliacoes.map(function(value){
         detalhe[0].review.push({
                             "@type": "Review",
                              "author": value.nome,
                              "datePublished": value.data,
                              "description": value.comentario,
                              "reviewRating": {
                                "@type": "Rating",
                                "bestRating": "5",
                                "ratingValue": value.nota,
                                "worstRating": "1"
                              }
                            });
       });
     }

     //GALERIA DE IMAGENS
     if(responseDetalhe.conteudo.midias.imagens.length > 0){
       //IMAGEM PRINCIPAL
       detalhe[0].image = responseDetalhe.conteudo.midias.imagens[0].arquivos.zoom;

       //GALERIA
       detalhe.push({
                      "@type": "ImageGallery",
                      "@context": "http://schema.org",
                      "@id": this.$siteUrl+'/detalhesProdTop-grid-imgs-main',
                      "associatedMedia": []
                    });

      responseDetalhe.conteudo.midias.imagens.map(function(value){
        detalhe[1].associatedMedia.push({
          "@type": "ImageObject",
          "contentUrl":value.arquivos.zoom,
          "thumbnail":{
            "@type":"ImageObject",
            "url":value.arquivos.big
          }
        });
      })

     }

     //BREADCRUMB
      let itensBreadcrumb = [];
       responseDetalhe.estrutura.breadcrumb.forEach((item, i) => {
         itensBreadcrumb.push({
                            "@type": "ListItem",
                            "position": i + 1,
                            "item": {
                              "@type": "Thing",
                              "@id": item.url,
                              "name": item.label
                            }
                          });
       });
      detalhe.push({
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": itensBreadcrumb
                  });

     //IMPRIME OS SNIPPETS
     this.print(detalhe);
    },
    setPaginaListagem(responseDetalhe){
     //BREADCRUMB
      let itensBreadcrumb = [];
      responseDetalhe.estrutura.breadcrumb.forEach((item, i) => {
        itensBreadcrumb.push({
                          "@type": "ListItem",
                          "position": i + 1,
                          "item": {
                            "@type": "Thing",
                            "@id": item.url,
                            "name": item.label
                          }
                        });
      });
      let listagem = {
                      "@context": "http://schema.org",
                      "@type": "BreadcrumbList",
                      "itemListElement": itensBreadcrumb
                    };

     //IMPRIME OS SNIPPETS
     this.print(listagem);
    }
  },
  created(){
    //DEFINE O SNIPPET DA PÁGINA
    if (this.dadosPageAtual != null) {
      this.setPagina(this.dadosPageAtual)
    }
  }
}
</script>
