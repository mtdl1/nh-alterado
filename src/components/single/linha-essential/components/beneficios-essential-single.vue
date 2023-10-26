<template>
<div class="text-right">
  <div class="selos-beneficios-total">
    <div :class="['img-selo-beneficio queridinho',{sgSReparacao: selecionadoSOSReparacao, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgLisoPerfeito: selecionadoLisoPerfeito, sgForcaBrilho: selecionadoForcaBrilho,sgSuperDetox: selecionadoSuperDetox}]"></div>
    <div class="txt-selo-beneficio">
      <h3>QUERIDINHO</h3>
      <p>das celebridades</p>
    </div>
    <div :class="['img-selo-beneficio pague-com-cartao',{sgSReparacao: selecionadoSOSReparacao, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgLisoPerfeito: selecionadoLisoPerfeito, sgForcaBrilho: selecionadoForcaBrilho,sgSuperDetox: selecionadoSuperDetox}]"></div>
    <div class="txt-selo-beneficio">
      <h3>PAGUE COM CARTÃO</h3>
      <p>em até 8x sem juros</p>
    </div>
    <div :class="['img-selo-beneficio frete-gratis mt-4',{sgSReparacao: selecionadoSOSReparacao, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgLisoPerfeito: selecionadoLisoPerfeito, sgForcaBrilho: selecionadoForcaBrilho,sgSuperDetox: selecionadoSuperDetox}]"></div>
    <div class="txt-selo-beneficio mt-4">
      <h3>FRETE GRÁTIS</h3>
      <p>para todo Brasil</p>
    </div>
    <div :class="['img-selo-beneficio desconto-pix mt-4',{sgSReparacao: selecionadoSOSReparacao, sgCachosOndas: selecionadoCachosOndas, sgPosQuimica: selecionadoPosQuimica, sgLisoPerfeito: selecionadoLisoPerfeito, sgForcaBrilho: selecionadoForcaBrilho,sgSuperDetox: selecionadoSuperDetox}]"></div>
    <div class="txt-selo-beneficio mt-4">
      <h3>10% DE ESCONTO</h3>
      <p>Pagando com pix</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BeneficiosEssentialSingle',
    props: {
      nomeLinha: String
    },
    data() {
      return {
        selecionadoSOSReparacao: false,
        selecionadoCachosOndas: false,
        selecionadoPosQuimica: false,
        selecionadoLisoPerfeito: false,
        selecionadoForcaBrilho: false,
        selecionadoSuperDetox: false,
      }
    },
    mounted() {
      if (this.nomeLinha == 'SGSReparacao') {
        this.selecionadoSOSReparacao = true
      }
      if (this.nomeLinha == 'SGCachosOndas') {
        this.selecionadoCachosOndas = true
      }
      if (this.nomeLinha == 'SGPosQuimica') {
        this.selecionadoPosQuimica = true
      }
      if (this.nomeLinha == 'SGLisoPerfeito') {
        this.selecionadoLisoPerfeito = true
      }
      if (this.nomeLinha == 'SGForcaBrilho') {
        this.selecionadoForcaBrilho = true
      }
      if (this.nomeLinha == 'SGSuperDetox') {
        this.selecionadoSuperDetox = true
      }
    }
  }

</script>

<style scoped>
.selos-beneficios-total {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.img-selo-beneficio {
  width: 57px;
  height: 59px;
  background-color: orange;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgSReparacao {
  background-color: #FF6978;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgCachosOndas {
  background-color: #74519E;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgPosQuimica {
  background-color: #999999;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgLisoPerfeito {
  background-color: #FF73AC;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgForcaBrilho {
  background-color: #35BCD1;
  /* defines the background color of the image */
}

.img-selo-beneficio.sgSuperDetox {
  background-color: #9FBD3E;
  /* defines the background color of the image */
}

.img-selo-beneficio.queridinho {
  mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/PRODUTOS EXCLUSIVOS.svg") no-repeat center / contain;
  -webkit-mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/PRODUTOS EXCLUSIVOS.svg") no-repeat center / contain;
}

.img-selo-beneficio.pague-com-cartao {
  mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/PAGUE COM CARTAO.svg") no-repeat center / contain;
  -webkit-mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/PAGUE COM CARTAO.svg") no-repeat center / contain;
}

.img-selo-beneficio.frete-gratis {
  mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/FRETE GRÁTIS.svg") no-repeat center / contain;
  -webkit-mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/FRETE GRÁTIS.svg") no-repeat center / contain;
}

.img-selo-beneficio.desconto-pix {
  mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/DESCONTO NO PIX.svg") no-repeat center / contain;
  -webkit-mask: url("../../../../assets/img/single/linha-essential/sos-reparacao/icones/DESCONTO NO PIX.svg") no-repeat center / contain;
}

.txt-selo-beneficio {
  width: 40%;
  text-align: left;
}

.txt-selo-beneficio h3 {
  font: normal normal bold 20px/25px Open Sans;
  letter-spacing: 0px;
  color: #666666;
}

.txt-selo-beneficio p {
  font: normal normal normal 20px/25px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}
</style>