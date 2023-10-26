<template>
  <div class="container-fluid bg-alt">
    <img src="@/assets/img/home-feminino/comparacao-concorrente/Potes-New-Hair-Acido-Hialuronico-Desktop.png" alt="" loading="lazy" class="mob">
    <div class="container py-5">
      <div class="titulos">
        <h2>Compare e comprove: porque New Hair é o mais completo</h2>
        <p class="mt-3">A tabela nutricional confirma, os resultados comprovam</p>
      </div>
      <div class="img-comparacao mob">
          <img src="@/assets/img/home-feminino/comparacao-concorrente/COMPARATIVO-CONCORRENTE-mobile.jpg" alt="" loading="lazy">
        </div>
      <div class="comparacao d-flex flex-wrap justify-content-between align-items-center mt-5">
        <div class="qualidades-new-hair">
          <p> 17 ativos <br class="mob">+ Ácido Hialurônico <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
          <p>8 vitaminas <br class="mob"> do complexo B  <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
          <p>5 minerais essenciais  <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
          <p>Vitaminas A, C e D  <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
          <p>Fórmula mais <br class="mob"> completa do país  <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
          <p>Comprimidos <img src="@/assets/img/home-feminino/comparacao-formula/check-new.png" alt="" loading="lazy"></p>
        </div>
        <div class="img-comparacao desk">
          <img src="@/assets/img/home-feminino/comparacao-concorrente/Comparativo-New-Hair-Vs-Concorrente.png" alt="" loading="lazy">
        </div>
        <div class="defeitos-concorrente">
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">9 ativos sem<br class="mob"> Ácido Hialurônico </p>
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">1 vitamina <br class="mob"> do complexo B </p>
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">2 minerais essenciais </p>
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">Sem vitaminas A, C e D </p>
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">Fórmula com deficiência nutricional </p>
          <p> <img src="@/assets/img/home-feminino/comparacao-concorrente/cross-mark.png" alt="" loading="lazy">Cápsulas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparacaoConcorrente",
};
</script>

<style scoped>
.titulos {
  text-align: center;
}

.titulos h2 {
  text-align: center;
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  font-weight: 700!important;
}

.titulos p {
  text-align: center;
  font: normal normal normal 20px/22px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.qualidades-new-hair, .defeitos-concorrente {
  width: 30%;
}

.img-comparacao {
  width: 40%;
}

.qualidades-new-hair p, .defeitos-concorrente p {
  font: normal normal normal 18px/32px Open Sans;
  letter-spacing: -0.36px;
  color: #333333;
}

.qualidades-new-hair p{
  text-align: right;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: right;
}

.qualidades-new-hair p img{
  margin-left: 15px;
}

.defeitos-concorrente p{
  text-align: left;
}

.defeitos-concorrente p img{
  margin-right: 15px;
}

p img{
  width: 16px;
}

/* estilizar para celular */
@media (max-width: 768px) {
  .qualidades-new-hair, .defeitos-concorrente {
    width: 48%!important;
  }

  .qualidades-new-hair p, .defeitos-concorrente p {
    font: normal normal normal 12px/12px Open Sans;
    padding: 0;
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .qualidades-new-hair p {
    justify-content: flex-end;
  }

  .defeitos-concorrente p {
    justify-content: flex-start;
  }

  .img-comparacao.mob {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  .comparacao {
    margin-top: 20px!important;
  }

  .container-fluid.bg-alt {
    background-color: #fdeef5;
    padding-bottom: 30px;
  }

  .container.py-5 {
    background-color: #FFF;
    box-shadow: 5px 5px 10px #0000000D;
    border-radius: 14px;
  }

  .titulos h2 {
    font: normal normal bold 24px/24px Open Sans;
    letter-spacing: -0.96px;
  }

  .titulos p {
    font: normal normal normal 16px/18px Open Sans;
    letter-spacing: 0px;
  }

  img.mob{
    margin: 0 auto;
  }

  p strong {
   font: normal normal bold 12px/12px Open Sans; 
  }

}
</style>