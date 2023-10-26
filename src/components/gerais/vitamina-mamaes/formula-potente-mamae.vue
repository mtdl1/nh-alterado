<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="titulos">
        <h1>Novo formato de comprimidos para gestantes e lactantes</h1>
        <p class="mt-3">Confira os benefícios da fórmula de New Hair Vitamin para mamães</p>
      </div>
    </div>
    <div class="row align-items-center mt-4">
      <div class="col-md-6 text-right">
        <img src="@/assets/img/vitamina-mamae/formula/POTES.png" alt="" loading="lazy">
      </div>
      <div class="col-md-6">
        <div class="formula-potente">
          <h3>FÓRMULA POTENTE:</h3>
          <ul class="mt-4">
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>Formato de <strong>comprimidos</strong></p></li>
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p><strong>Para Gestantes e Lactantes</strong></p></li>
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>Para cabelos e unhas</p></li>
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>Imunidade reforçada</p></li>
            
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>12 vitaminas</p></li>
          
              <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>5 minerais</p></li>
          
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p><strong>Rico em biotina</strong></p></li>
            <li><img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"> <p>100% natural</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "FormulaPotenteMamae",
  };
</script>

<style scoped>
.titulos h1, h2{
  text-align: center;
  font: normal normal bold 32px/32px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos  h1 span{
  color: #EA5C9C;
  font-weight: 700!important;
}

.titulos p{
  text-align: center;
  font: normal normal normal 20px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.formula-potente h3{
  font: normal normal 800 24px/24px Open Sans;
  letter-spacing: -0.96px;
  color: #EA5C9C;
  text-transform: uppercase;
  font-weight: 700!important;
}

.formula-potente ul{
  columns: 2;
}

.formula-potente ul li{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.formula-potente ul li p{
  font: normal normal normal 18px/18px Open Sans;
  letter-spacing: -0.72px;
  color: #333333;
}

.formula-potente ul li strong{
  font: normal normal bold 18px/18px Open Sans;
}

.formula-potente ul li img{
  margin-right: 10px;
}

/* estilizar para celular */
@media screen and (max-width: 767px) {

.titulos h1{
  font: normal normal bold 28px/32px Open Sans;
}

.titulos p {
  padding: 5px 0!important;
  font: normal normal normal 16px/18px Open Sans;
}

.formula-potente h3{
  text-align: center;
  margin-top: 20px;
}

}
</style>