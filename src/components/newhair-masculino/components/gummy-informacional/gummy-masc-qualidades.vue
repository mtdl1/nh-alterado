<template>
  <div class="full py-5 comp">
    <div class="container cards-qualidades">
      <div class="card ml-0">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/informacional-gummy/icones/LINHAS DE EXPRESSÃO.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/informacional-gummy/icones/ÁCIDO HIALURÔNICO.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/informacional-gummy/icones/BARBA MAIS VOLUMOSAS.svg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/informacional-gummy/icones/UNIFORMIZA A PELE.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GummyMascQualidades',
};
</script>

<style scoped>
.full{
  background-color: #18ABF8;
  text-align: center;
}
.cards-qualidades {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
}
.card{
  background-color: unset;
  border: 0;
  margin: 0 38px;
}

.row{
  width: 1200px;
}
@media screen and (max-width: 768px) {
  h2 {
    font: normal normal 800 23px/20px Open Sans;
    letter-spacing: -0.81px;
    color: #FFFFFF;
  }
  .container-antes-depois{
    background-color: #234380;
  }
  .col-md-3 {
    width: 50%;
  }

  .text {
      width: 80%!important;
      font: normal normal 600 14px/14px Open Sans!important;
      letter-spacing: -0.49px;
      color: #333333;
  }
  .semTitulo{
    margin-top: 15px;
  }
  .container.py-5{
    padding-top: 20px!important;
  }
  .btn-modal {
    width: 80vw;
    height: 36px;
    margin: 0 auto;
    display: flex;
    justify-content: center !important;
    align-items: center;
    text-align: center;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    background: transparent !important; 
  }
  .comp{
    display: none;
  }
}
</style>