<template>
  <div class="full py-5 comp">
    <div class="container cards-qualidades">
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/icones/LINHAS DE EXPRESSÃO.png" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/icones/ÁCIDO HIALURÔNICO.png" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/icones/BARBA MAIS VOLUMOSAS.png" alt="">
        </div>
      </div>
      <div class="card">
        <div class="img-qualidae">
          <img src="@/assets/img/newhair-masculino/icones/UNIFORMIZA A PELE.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full{
  background-color: #234380!important;
  text-align: center;
}
.cards-qualidades {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
.card{
  background-color: unset;
  border: 0;
  margin: 0 45px;
}

.row{
  width: 1200px;
}
@media only screen and (max-width: 600px) {
  .comp{
    display: none;
  }
}
</style>