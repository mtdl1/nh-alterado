<template>
   <div class="container py-3">
    <h2 class="mb-2 mt-4">Confira a linha completa:</h2>
    <div class="row primeiroscards">
      <div class="col-4 mt-2"> <a href="/vitamina-para-cabelo-e-unha-em-comprimido"> <img src="@/assets/img/404/banner-kits-acido.jpg" alt=""></a></div>
      <div class="col-4 mt-2"> <a href="/vitamina-para-gestante-e-lactantes"> <img src="@/assets/img/404/banner-kits-capsulas.jpg" alt=""></a></div>
      <div class="col-4 mt-2 mobile1"> <a href="/new-hair-gummy-vitamina-em-goma-para-cabelo"> <img src="@/assets/img/404/banner-kits-goma.jpg" alt=""></a></div>
     
      <div class="col-4 mt-2 baixo1"> <a href="/serum-facial"> <img class="img-fluid" src="@/assets/img/404/serum.jpg" alt=""></a></div>
      <div class="col-4 mt-2 baixo2"> <a href="/tratamento-capilar-linha-essential"> <img class="img-fluid" src="@/assets/img/404/banner-kits-essencial.jpg" alt=""></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfiraLinhaCompleta'
}
</script>

<style scoped>
img {
   max-width: 100%;
   border-radius: 5px;
}

.primeiroscards {
    width: auto;
}

h2 {
    text-align: center;
    color: #333;
}

.baixo1 {
    display: flex;
     left: 16%;
    padding-top: 16px;
}
.baixo2{
    display: flex;
    left: 16%;
    padding-top: 16px;


}

@media (max-width: 768px) {
    h2 {
        font-size: 22px;
    }

    .no-padding-right {
        margin-right: -5px;
    }

    .no-padding-left {
        margin-left: -8px;
    }
    
    img {
        max-width: 100%;
        border-radius: 5px;
    }

    .primeiroscards .col-4 {
        flex-basis: 50%;
        max-width: 50%;
    }
    
    .mobile1 {
        display: flex;
        padding-top: 16px;
    }

.baixo1 {
display: flex;
left: 0%;
padding-top: 16px;

}
.baixo2{
    display: flex;
    left: 0%;
    margin: auto;
    padding-top: 16px;


}
    
}
</style>