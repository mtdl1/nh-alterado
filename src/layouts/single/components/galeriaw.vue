<template>
  <div class="col-md-7">
    <div id="sliderProductSingle" ref="sliderProductSingle">
      <div id="custCarousel" class="carousel slide d-flex" align="center">
        <!-- Thumbnails -->
        <div class="overflowThumbs">
          <div class="desk">
            <ol class="list-group carousel-indicators thumbs d-flex">
              <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important">
                <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                  <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                </a>
              </li>
            </ol>
          </div>
          <div class="mob">
            <ol class="list-groupMob carousel-indicators thumbs d-block">
              <li v-for="(imagem, index) in galeriaImagens" :key="index" :class="['list-inline-item',{active: index==0}]" style="width: 100px;height: 100px!important">
                <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index" data-target="#custCarousel">
                  <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                </a>
              </li>
            </ol>
          </div>
        </div>
        <!-- Thumbnails -->

        <!-- Left and right controls -->
        <div class="desk">
          <a class="thumb-controls cima" href="#custCarousel" data-slide="prev"><i class="fas fa-chevron-up"></i></a>
          <a class="thumb-controls baixo" href="#custCarousel" data-slide="next"><i class="fas fa-chevron-down"></i></a>
        </div>
        <div class="mob">
          <a class="thumb-controls left cimaMob" href="#custCarousel" data-slide="prev"><i class="fa fa-chevron-up"></i></a>
          <a class="thumb-controls right baixoMob" href="#custCarousel" data-slide="next"><i class="fa fa-chevron-down"></i></a>
        </div>
        <!-- Left and right controls -->

        <!-- slides -->
        <div class="carousel-inner" id="carouselInnerSlider">
          <div class="imagens-plataforma">
            <div>
              <div v-for="(imagem, index) in galeriaImagens" :key="index" :class="['carousel-item',{active: index==0}]">
                <img :src="imagem.arquivos.big" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"

export default{
  name: 'Galeria',
  props: {
    galeriaImagens: {
      type: Array,
      default: null,
    },
  },
}


// funcao desktop para avançar e voltar imagens do carousel
$(function () {
  setTimeout(function () {
    var qtdImages = $('.list-group .list-inline-item').length
    var height = (parseInt($('.carousel .list-group .list-inline-item').outerHeight())) * qtdImages //Calcula altura da coluna de Thumbs
    var numImages = 3 // Quantidade de imagens que vai correr em cada carossel
    var count = Math.floor(height / 480) // Quantidade de vezes que pode clicar para avançar
    var marginPadding = 0 // Caso haja margin e padding nos elementos
    var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
    var slide = (numImages * marginPadding) + ($('.carousel .list-group .list-inline-item').outerHeight() * numImages) // Tamanho do Slide (quanto de margin pode avançar)

    // Passa o valor da altura da coluna obtida no 'var height'
    $('.carousel .list-group').css('height', height)

    // Avança o Slide para baixo
    $('.baixo').click(function () {
      if (contador < count) {
        contador++
        $('.list-group').animate({
          'margin-top': '-=' + slide + 'px'
        }, '500')
      }
    });

    // Avança o Slide para cima
    $('.cima').click(function () {
      if (contador >= 1) {
        contador--
        $('.list-group').animate({
          'margin-top': '+=' + slide + 'px'
        }, '500')
      }
    });
  }, 1500);

})

// funcao mobile para avancar e voltar imagens do carousel
$(function () {
  var width = 900 //Calcula largura da linha de Thumbs
  var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
  var count = 4 // Quantidade de vezes que pode clicar para avançar
  var slide = 100 // Tamanho do Slide (quanto de margin pode avançar)

  $('.carousel .list-groupMob').css('width', width)

  $('.baixoMob').click(function () {
    if (contador < count) {
      contador++
      $('.list-groupMob').animate({
        'margin-left': '-=' + slide + 'px'
      }, '500')
    }
  });

  $('.cimaMob').click(function () {
    if (contador >= 1) {
      contador--
      $('.list-groupMob').animate({
        'margin-left': '+=' + slide + 'px'
      }, '500')
    }
  });
})
</script>

<style scoped>
span.carousel-control-prev-icon,
span.carousel-control-next-icon {
  transform: rotate(90deg);
}

.thumb-controls i {
  color: #555555;
  font-size: 20px;
}

.cima {
  position: absolute;
  top: 0;
  width: 105px;
  left: 0;
  z-index: 99;
}

.baixo {
  position: absolute;
  bottom: 37px;
  width: 105px;
  left: 0;
  z-index: 99;
}

.list-group.carousel-indicators.thumbs {
  height: 1100px;
  overflow: hidden;
  align-self: flex-start;
}

#custCarousel .carousel-indicators li img {
  display: block;
}

.carousel-inner {
  width: 560px;
}

.carousel-inner img {
  width: 100%;
  height: auto;
}

#custCarousel .carousel-indicators{
  width: 150px;
  position: relative;
  margin: 0;
  flex-direction: column;
  right: unset;
  bottom: unset;
  left: unset;
  padding: unset;
  z-index: 8;
  margin-top: 10px;
}

/* Slider Produtos */
</style>