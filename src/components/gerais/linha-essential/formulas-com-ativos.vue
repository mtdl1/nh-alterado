<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row">

          <div class="col-md-8">
            <h2>Fórmulas   <span id="txt-destacado">com ativos especiais</span> para a sua liberdade de ter os cabelos como quiser</h2>
            <p class="py-4">A nossa experiência como a número um em crescimento capilar, nos fez reunir os melhores ingredientes do mercado em fórmulas inovadoras e poderosas para deixar os seus fios mais macios, sedosos, maleáveis, hidratados, sem frizz, com um brilho radiante e acabamento perfeito, independentemente do tipo, textura, comprimento ou cor. A nossa missão é fazer você se sentir segura e livre para ter os cabelos como bem entender!</p>

            <div class="nav-item-change d-flex flex-wrap justify-content-between align-items-center">
              <div :class="['nav-change mb-3',{selected: changeLinha == 1, bgLP: changeLinha == 1 }]" @click="changeLinha = 1, alteracaoLinha()"><p>LISO PERFEITO</p></div>
              <div :class="['nav-change mb-3',{selected: changeLinha == 2, bgSR: changeLinha == 2 }]" @click="changeLinha = 2, alteracaoLinha()"><p>S.O.S. REPARAÇÃO</p></div>
              <div :class="['nav-change mb-3',{selected: changeLinha == 3, bgPQ: changeLinha == 3 }]" @click="changeLinha = 3,alteracaoLinha()"><p>PÓS QUÍMICA</p></div>
              <div :class="['nav-change',     {selected: changeLinha == 4, bgCO: changeLinha == 4 }]" @click="changeLinha = 4,alteracaoLinha()"><p>CACHOS E ONDAS</p></div>
              <div :class="['nav-change',     {selected: changeLinha == 5, bgFB: changeLinha == 5 }]" @click="changeLinha = 5,alteracaoLinha()"><p>FORÇA E BRILHO</p></div>
              <div :class="['nav-change',     {selected: changeLinha == 6, bgSD: changeLinha == 6 }]" @click="changeLinha = 6,alteracaoLinha()"><p>SUPER DETOX</p></div>
            </div>
          </div>

          <div class="col-md-4 d-flex justify-content-start align-items-end">
            <img class="img-fluid" v-show="changeLinha == 1" src="@/assets/img/linha-essential/formula-com-ativos/linha-liso-perfeito.png" alt="">
            <img class="img-fluid" v-show="changeLinha == 2" src="@/assets/img/linha-essential/formula-com-ativos/linha-sos-reparacao.png" alt="">
            <img class="img-fluid" v-show="changeLinha == 3" src="@/assets/img/linha-essential/formula-com-ativos/linha-pos-quimica.png" alt="">
            <img class="img-fluid" v-show="changeLinha == 4" src="@/assets/img/linha-essential/formula-com-ativos/linha-cachos-e-ondas.png" alt="">
            <img class="img-fluid" v-show="changeLinha == 5" src="@/assets/img/linha-essential/formula-com-ativos/linha-forca-brilho.png" alt="">
            <img class="img-fluid" v-show="changeLinha == 6" src="@/assets/img/linha-essential/formula-com-ativos/linha-super-detox.png" alt="">
          </div>

        </div>
      </div>
    </div>

    <div class="container-fluid py-5" id="fundoAlterado">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <div class="row">
              <div class="col-3">
                <img class="pb-3" src="@/assets/img/linha-essential/formula-com-ativos/icones/sem-teste-em-animais.png" alt="">
                <p>Sem teste <br> em animais</p>
              </div>
              <div class="col-3">
                <img class="pb-3" src="@/assets/img/linha-essential/formula-com-ativos/icones/livre-de-parabeno.png" alt="">
                <p>Livre de <br> parabeno</p>
              </div>
              <div class="col-3">
                <img class="pb-3" src="@/assets/img/linha-essential/formula-com-ativos/icones/nao-contem-sal.png" alt="">
                <p>Não <br> contém sal</p>
              </div>
              <div class="col-3">
                <img class="pb-3" src="@/assets/img/linha-essential/formula-com-ativos/icones/embalagens.png" alt="">
                <p>Embalagens <br> recicláveis</p>
              </div>
            </div>
            <div class="row justify-content-center pt-5">
              <h2 class="tituloBeneficios">RESULTADOS IMPRESSIONANTES <br class="desk"> PARA TODOS OS TIPOS DE CABELOS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5" id="fundoAlteradoDois">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-6 acima">
            <h3 class="textoBeneficio" >Mais Macios</h3>
            <img src="@/assets/img/linha-essential/formula-com-ativos/beneficios/mais-macios.png" alt="">
          </div>
          <div class="col-md-3 col-6 acima">
            <h3 class="textoBeneficio" >Brilho Radiante</h3>
            <img src="@/assets/img/linha-essential/formula-com-ativos/beneficios/cabelos-com-brilho-radiante.png" alt="">
          </div>
          <div class="col-md-3 col-6">
            <h3 class="textoBeneficio" >Sem Frizz</h3>
            <img src="@/assets/img/linha-essential/formula-com-ativos/beneficios/cabelos-sem-frizz.png" alt="">
          </div>
          <div class="col-md-3 col-6">
            <h3 class="textoBeneficio" >Hidratados</h3>
            <img src="@/assets/img/linha-essential/formula-com-ativos/beneficios/cabelos-hidratados.png" alt="">
          </div>
        </div>

        <div class="row">
          <a href="#produtos" class="btnCABeneficios mt-5 desk">
            <p>COMPRE AGORA</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormulasComAtivos',
  props: {},
  data() {
    return {
      changeLinha: 4
    }
  },
  methods: {
    alteracaoLinha() {
      if (this.changeLinha == 1) {
        document.getElementById('txt-destacado').style.color = '#FF73AC';
        document.getElementById('txt-destacado').style.transition = '0.5s';

        document.getElementById('fundoAlterado').style.background = '#ff74ad';
        document.getElementById('fundoAlterado').style.transition = '0.5s';

        document.getElementById('fundoAlteradoDois').style.background = '#ff8fbd';
        document.getElementById('fundoAlteradoDois').style.transition = '0.5s';

        document.getElementsByClassName('textoBeneficio')[0].style.color = '#FF73AC';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#FF73AC';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#FF73AC';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#FF73AC';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[1].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[2].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[3].style.transition = '0.5s';

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#FF73AC';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = '0.5s';

      } else if (this.changeLinha == 2) {
        document.getElementById('txt-destacado').style.color = '#FF6978';
        document.getElementById('txt-destacado').style.transition = '0.5s';

        document.getElementById('fundoAlterado').style.background = '#ff6978';
        document.getElementById('fundoAlterado').style.transition = '0.5s';

        document.getElementById('fundoAlteradoDois').style.background = '#ff8793';
        document.getElementById('fundoAlteradoDois').style.transition = '0.5s';

        document.getElementsByClassName('textoBeneficio')[0].style.color = '#FF6978';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#FF6978';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#FF6978';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#FF6978';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[1].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[2].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[3].style.transition = '0.5s';

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#FF6978';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = '0.5s';

      } else if (this.changeLinha == 3) {
        document.getElementById('txt-destacado').style.color = '#A2A1A1';
        document.getElementById('txt-destacado').style.transition = '0.5s';
        
        document.getElementById('fundoAlterado').style.background = '#A2A1A1';
        document.getElementById('fundoAlterado').style.transition = '0.5s';

        document.getElementById('fundoAlteradoDois').style.background = '#b5b4b4';
        document.getElementById('fundoAlteradoDois').style.transition = '0.5s';
        
        document.getElementsByClassName('textoBeneficio')[0].style.color = '#A2A1A1';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#A2A1A1';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#A2A1A1';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#A2A1A1';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[1].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[2].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[3].style.transition = '0.5s';

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#A2A1A1';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = '0.5s';

      }
      else if (this.changeLinha == 4) {
        document.getElementById('txt-destacado').style.color = '#6D5BA4';
        document.getElementById('txt-destacado').style.transition = '0.5s';

        document.getElementById('fundoAlterado').style.background = '#74519e';
        document.getElementById('fundoAlterado').style.transition = '0.5s';

        document.getElementById('fundoAlteradoDois').style.background = '#9074b1';
        document.getElementById('fundoAlteradoDois').style.transition = '0.5s';

        document.getElementsByClassName('textoBeneficio')[0].style.color = '#6D5BA4';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#6D5BA4';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#6D5BA4';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#6D5BA4';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[1].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[2].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[3].style.transition = '0.5s';

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#6D5BA4';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = '0.5s';

      }
      else if (this.changeLinha == 5) {
        document.getElementById('txt-destacado').style.color = '#35BCD1';
        document.getElementById('txt-destacado').style.transition = '0.5s';

        document.getElementById('fundoAlterado').style.background = '#35BCD1';
        document.getElementById('fundoAlterado').style.transition = '0.5s';

        document.getElementById('fundoAlteradoDois').style.background = '#5dc9da';
        document.getElementById('fundoAlteradoDois').style.transition = '0.5s';

        document.getElementsByClassName('textoBeneficio')[0].style.color = '#35BCD1';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#35BCD1';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#35BCD1';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#35BCD1';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[1].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[2].style.transition = '0.5s';
        document.getElementsByClassName('textoBeneficio')[3].style.transition = '0.5s';

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#35BCD1';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = '0.5s';
      }
      else if (this.changeLinha == 6) {
        document.getElementById('txt-destacado').style.color = '#9FBD3E';
        document.getElementById('txt-destacado').style.transition = "0.5s";

        document.getElementById('fundoAlterado').style.background = '#9FBD3E';
        document.getElementById('fundoAlterado').style.transition = "0.5s";

        document.getElementById('fundoAlteradoDois').style.background = '#b2ca65';
        document.getElementById('fundoAlteradoDois').style.transition = "0.5s";

        document.getElementsByClassName('textoBeneficio')[0].style.color = '#9FBD3E';
        document.getElementsByClassName('textoBeneficio')[1].style.color = '#9FBD3E';
        document.getElementsByClassName('textoBeneficio')[2].style.color = '#9FBD3E';
        document.getElementsByClassName('textoBeneficio')[3].style.color = '#9FBD3E';

        document.getElementsByClassName('textoBeneficio')[0].style.transition = "0.5s";
        document.getElementsByClassName('textoBeneficio')[1].style.transition = "0.5s";
        document.getElementsByClassName('textoBeneficio')[2].style.transition = "0.5s";
        document.getElementsByClassName('textoBeneficio')[3].style.transition = "0.5s";

        document.getElementsByClassName('btnCABeneficios')[0].style.color = '#9FBD3E';
        document.getElementsByClassName('btnCABeneficios')[0].style.transition = "0.5s";
      }
    }, //alteracaoLinha
    
  } //methods
} //export default
</script>

<style scoped>

img {
  max-width: 100%;
}

h2{
  text-align: left;
  font: normal normal 800 46px/53px Open Sans;
  letter-spacing: -2.5px;
  color: #333333;
}

.tituloBeneficios{
  text-align: center;
  font: normal normal 800 50px/53px Open Sans;
  letter-spacing: -1.75px;
  color: #FFFFFF;
}

.textoBeneficio{
  width: 80%;
  margin: 0 auto;
  background: white;
  border-radius: 10px 10px 0 0;
  line-height: 1;
  padding: 5px 0;
  font: normal normal bold 25px Open Sans;
  letter-spacing: -0.88px;
  color: #6D5BA4;
}

/* transicao fade in */
.img-fluid {
  animation: fade-in 0.8s !important;
}

/* opacity keyframes */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#txt-destacado{
  color: #6D5BA4;
}

.btnCABeneficios {
  width: 230px;
  height: 65px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin: 40px auto 0;
  font: normal normal bold 18px/18px Open Sans;
  letter-spacing: -0.24px;
  color: #6D5BA4;
}

.btnCABeneficios:hover {
  color: #18c161!important;
  background-color: rgba(255, 255, 255, 0.9)!important;
  transition: 0.5s;
}

/* Menu  */
.nav-change {
  border: 1px solid #333333;
  border-radius: 4px;
  width: 32%;
}

.nav-change:hover {
  cursor: pointer;
}

.nav-change p {
  padding: 8px 10px;
  font: normal normal bold 18px/20px Open Sans;
  color: #333333;
  line-height: unset;
  margin: 0;
  text-align: center;
  letter-spacing: -1px!important;
}

.nav-change.selected {
  background-color: #FF73AC;
  border: 1px solid #FF73AC;
}

.nav-change.selected p {
  color: #fff;
}
/* // Menu  */


/* Cores de Fundo */
#fundoAlterado {
  background-color: #74519e;
}

.fundoAlterado p {
  color: #fff;
}

#fundoAlteradoDois {
  background-color: #9074b1;
}

.bgLP {
  background-color: #ff74ad;
}

.bgSR {
  background-color: #FF6978!important;
  border-color: #FF6978!important;
  transition: 0.5s;
}

.bgPQ {
  background-color: #A2A1A1!important;
  border-color: #A2A1A1!important;
  transition: 0.5s;
}

.bgCO {
  background-color: #6D5BA4!important;
  border-color: #6D5BA4!important;
  transition: 0.5s;
}

.bgFB {
  background-color: #35BCD1!important;
  border-color: #35BCD1!important;
  transition: 0.5s;
}

.bgSD {
  background-color: #9FBD3E!important;
  border-color: #9FBD3E!important;
  transition: 0.5s;
}
/* // Cores de Fundo */

.col-3 {
  text-align: center;
}

.col-3 p {
  color: white;
  text-align: center;
  line-height: 1;
}

.col-md-3 {
  text-align: center;
}

.col-md-3 p {
  color: white;
  text-align: center;
}

@media screen and (max-width: 768px) {
  h2{
    font: normal normal 800 23px/24px Open Sans;
    letter-spacing: -1.15px;
  }

  .textoBeneficio{
    font: normal normal 600 14px/14px Open Sans;
    letter-spacing: -0.49px;
  }

  .tituloBeneficios{
    font: normal normal 800 20px/20px Open Sans;
    letter-spacing: -0.81px;
  }
  .col-md-8 p{
    font: normal normal normal 16px/25px Open Sans;
    letter-spacing: -0.56px;
    color: #1D1D1D;
  }

  .nav-change{
    width: 48%;
    margin-bottom: 10px!important;
  }

  .nav-change p{
    font: normal normal bold 14px/14px Open Sans;
      letter-spacing: -0.25px;
      color: #333333;
      padding: 5px 3px!important;
  }
  .col-3 p{
    text-align: center;
    font: normal normal normal 9px/13px Open Sans;
    letter-spacing: 0px;
  }

  .col-6{
    margin-top: 30px;
  }

  .container-fluid.py-5 {
    padding: 20px 0!important;
  }

  .row.justify-content-center.pt-5 {
      padding-top: 20px!important;
  }

  .col-md-3.col-6 {
      margin-top: 0 !important;
  }
  
  .col-md-3.col-6.acima {
      margin-bottom: 20px;
  }

  a.btnCABeneficios.mt-5 {
      margin-top: 20px!important;
  }

}

</style>