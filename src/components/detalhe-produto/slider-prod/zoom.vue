<template lang="html">
  <div id="zoomBox" @click="closePop()" ref="zoomMainContainer">
    <button type="button" name="button" class="material-icons closeBt">close</button>
    <div class="zoomBox-containerImgs" ref="containerImgs">
      <div class="zoomBox-containerImgs-box" v-for="(img, i) in imgs" :key="i" @click.stop="zoomImg()" :class="{active: i == atual, prevImg: i < atual}" :data-id="i" :ref="`containerImg${i}`">
        <div class="zoomBox-containerImgs-box-dragBox" :ref="`img${i}`">
          <img :src="img[$tipoImg.prod].zoom" alt="">
        </div>
      </div>
    </div>
    <button type="button" name="button" class="material-icons prevBt" @click.stop="prev()" ref="prev" :class="{disabled: atual == 0}">
      keyboard_arrow_left
    </button>
    <button type="button" name="button" class="material-icons nextBt" @click.stop="next()" ref="next" :class="{disabled: atual == (imgs.length - 1)}">
      keyboard_arrow_right
    </button>
  </div>
</template>

<script>
import comunicacao from '@/comunicacao.js'

export default {
  props: {
    imgs: Array,
    atual: Number
  },
  data() {
    return {
      posgMaxImgX: 0,
      posgMaxImgY: 0,
      imgX: 0,
      imgY: 0,
      posAtual: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    // DA O MAIOR ZOOM NA IMAGEM
    zoomImg() {
      if (event.target.closest('.zoomBox-containerImgs-box').classList.contains('zoomImg-zoom') && event.target.classList.contains('zoomImg')) {
        event.target.removeEventListener('mousedown', this.addDrag);
        event.target.style.transform = '';
        event.target.closest('.zoomBox-containerImgs-box').classList.remove('zoomImg-zoom');
        this.$refs.zoomMainContainer.classList.remove('zoomActive');
      }
      else if(event.target.classList.contains('zoomImg')) {
        event.target.closest('.zoomBox-containerImgs-box').classList.add('zoomImg-zoom');
        this.$refs.zoomMainContainer.classList.add('zoomActive');
        let left = event.clientX,
            top  = event.clientY

        this.posgMaxImgX = event.target.offsetWidth - event.target.closest('#zoomBox').offsetWidth;
        this.posgMaxImgY = event.target.offsetHeight - event.target.closest('#zoomBox').offsetHeight;


        left = left > this.posgMaxImgX ? this.posgMaxImgX : left;
        left = left < 0 ? 0 : left;
        top  = top > this.posgMaxImgY ? this.posgMaxImgY : top;
        top  = top < 0 ? 0 : top;

        event.target.style.left = '-'+left+'px';
        event.target.style.top = '-'+top+'px';

        if(screen.width >= 1024){
          event.target.addEventListener('mousedown', this.addDrag);
          return;
        }
        event.target.addEventListener('touchstart', this.addDrag);
      }
    },
    // EVITA QUE AO ARRASTAR A IMAGEM O CLIQUE FAÇA ELA PERDER O ZOOM
    stop() {
      event.stopPropagation();
    },
    // INICIA O EVENTO DE DRAG (ARRASTAR)
    addDrag() {
      if (screen.width > 1023) {
        this.imgX = event.clientX - event.target.offsetLeft;
        this.imgY = event.clientY - event.target.offsetTop;
        event.target.style.cursor = 'grabbing';
        event.target.addEventListener('mousemove', this.moveImg);
        event.target.addEventListener('mouseup', this.removeDrag);
        event.target.addEventListener('mouseleave', this.removeDrag);
        return;
      }
      this.imgX = event.touches[0].clientX - event.target.offsetLeft;
      this.imgY = event.touches[0].clientY - event.target.offsetTop;

      event.target.addEventListener('touchmove', this.moveImg);
      event.target.addEventListener('touchend', this.removeDrag);
    },
    // PARA EVENTO DE DRAG (ARRASTAR)
    removeDrag() {
      let el = event.target;
      if (screen.width > 1023) {
        event.target.style.cursor = '';
        el.removeEventListener('mousemove', this.moveImg);
        setTimeout(() => {
          el.removeEventListener('click', this.stop);
        }, 100);
        el.removeEventListener('mouseup', this.removeDrag);
        el.removeEventListener('mouseleave', this.removeDrag);
        return;
      }
      el.removeEventListener('touchmove', this.moveImg);
      setTimeout(() => {
        el.removeEventListener('click', this.stop);
      }, 100);
      el.removeEventListener('touchend', this.removeDrag);
    },
    // FAZ IMAGEM SE MOVER AO ARRASTAR
    moveImg() {
      this.posAtual.x = screen.width >= 1024 ? event.clientX : event.touches[0].clientX;
      this.posAtual.y = screen.width >= 1024 ? event.clientY : event.touches[0].clientY;
      event.target.addEventListener('click', this.stop);
      let left = this.posAtual.x - this.imgX,
          top  = this.posAtual.y - this.imgY;

      left = Math.abs(left) > this.posgMaxImgX ? -this.posgMaxImgX : left;
      left = left > 0 ? 0 : left;

      top = Math.abs(top) > this.posgMaxImgY ? -this.posgMaxImgY : top;
      top = top > 0 ? 0 : top;

      event.target.style.left = left+'px';
      event.target.style.top  = top+'px';
    },
    // FECHA A POPUP DO ZOOM DA IMAGEM
    closePop(){
      document.querySelector('body').style.overflow = '';
      comunicacao.$emit('closePop', false);
    },
    // FAZ VOLTAR PARA A IMAGEM ANTERIOR
    prev(){
      const ativo    = this.$refs.containerImgs.querySelector('.active'),
            ativoId  = ativo.getAttribute('data-id'),
            prev     = this.$refs.containerImgs.querySelector(`[data-id="${parseInt(ativoId) - 1}"]`),
            prevPrev = this.$refs.containerImgs.querySelector(`[data-id="${parseInt(ativoId) - 2}"]`);

      if (!prevPrev) {
        this.$refs.prev.classList.add('disabled')
      }

      if (this.$refs.next.classList.contains('disabled')) {
        this.$refs.next.classList.remove('disabled')
      }

      if (prev) {
        ativo.classList.remove('active');
        prev.classList.add('active');
        prev.classList.remove('prevImg');
        return;
      }
    },
    // FAZ IR PARA A PRÓXIMA IMAGEM
    next(){
      const ativo    = this.$refs.containerImgs.querySelector('.active'),
            ativoId  = ativo.getAttribute('data-id'),
            next     = this.$refs.containerImgs.querySelector(`[data-id="${parseInt(ativoId) + 1}"]`),
            nextNext = this.$refs.containerImgs.querySelector(`[data-id="${parseInt(ativoId) + 2}"]`);

      if (!nextNext) {
        this.$refs.next.classList.add('disabled')
      }
      if (this.$refs.prev.classList.contains('disabled')) {
        this.$refs.prev.classList.remove('disabled')
      }


      if (next) {
        ativo.classList.remove('active');
        ativo.classList.add('prevImg');
        next.classList.add('active');
        return;
      }
    }
  },
  mounted(){
    // VERIFICA QUAL IMAGEM PRECISA DE ZOOM
    setTimeout(() => {
      for (let i = 0; i < this.imgs.length; i++) {
        let el     = this.$refs[`img${i}`][0].querySelector('img'),
            height = el.offsetHeight,
            width  = el.offsetWidth;

        el.style.maxWidth  = 'unset';
        el.style.maxHeight = 'unset';

        let originalHeight = el.offsetHeight;
        let originalWidth  = el.offsetWidth;

        el.style.maxWidth  = '';
        el.style.maxHeight = '';


        if (height != originalHeight || width != originalWidth) {
          this.$refs[`img${i}`][0].classList.add('zoomImg');
        }
        if (originalWidth < screen.height) {
          this.$refs[`containerImg${i}`][0].classList.add('noHeightZoom');
        }
      }
    }, 1000);
  }
}
</script>

<style lang="css" scoped>
#zoomBox{
  user-select: none;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 19;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
}
#zoomBox:not(.zoomActive){
  padding: 20px;
}
.zoomBox-containerImgs{
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zoomBox-containerImgs-box{
  position: absolute;
  transition: 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.zoomBox-containerImgs-box:not(.noHeightZoom) {
  height: 100%;
}
#zoomBox img{
  background-color: #fff;
  user-select: none;
  pointer-events: none;
  max-height: 100%;
  max-width: 100%;
}
#zoomBox .zoomBox-containerImgs-box{
  transform: translate(150vw);
  transition: 300ms;
  display: flex;
  align-items: center;
}
#zoomBox .zoomBox-containerImgs-box.prevImg{
  transform: translate(-150vw);
}
#zoomBox .zoomBox-containerImgs-box.active{
  transform: translate(0);
  z-index: 12;
}
#zoomBox .zoomBox-containerImgs-box.active{
  z-index: 12;
}
#zoomBox .zoomBox-containerImgs-box-dragBox{
  height: 100%;
  display: flex;
  align-items: center;
}
#zoomBox .zoomBox-containerImgs-box-dragBox.zoomImg{
  cursor: zoom-in;
  text-align: center;
}
#zoomBox .zoomBox-containerImgs-box.zoomImg-zoom{
  align-items: flex-start;
  justify-content: flex-start;
}
#zoomBox .zoomBox-containerImgs-box.zoomImg-zoom .zoomBox-containerImgs-box-dragBox.zoomImg{
  cursor: grab;
  transition: 100ms;
  position: relative;
  z-index: 15;
  height: unset;
}
#zoomBox .zoomBox-containerImgs-box.zoomImg-zoom .zoomBox-containerImgs-box-dragBox.zoomImg img{
  max-width: unset;
  max-height: unset;
}
button{
  color: #fff;
  height: 40px;
  width: 40px;
  font-size: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 13;
  background-color: #292929;
}
button.disabled{
  opacity: 0;
}
.closeBt{
  position: fixed;
  top: 0;
  right: 0;
}
.prevBt{
  position: fixed;
  left: 0;
}
.nextBt{
  position: fixed;
  right: 0;
}

@media (max-width: 1023px) {
  .zoomBox-containerImgs-box:not(.zoomImg-zoom) .zoomBox-containerImgs-box-dragBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
