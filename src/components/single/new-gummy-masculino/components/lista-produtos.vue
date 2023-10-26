<template>
  <div class="container py-4" id="produtosSingle" >
      <h2 class="text-center desk" >Junte-se ao esquadrão do cabelo perfeito</h2>
      <h2 class="text-center mob" >Junte-se ao esquadrão do <br> cabelo perfeito</h2>
      <p class="text-center" >os produtos que vão mudar a saúde do seu cabelo</p>

      <div class="produtos d-flex justify-content-between flex-wrap ">
      </div>

  </div>
</template>

<script>

export default {
  name: "ListaProdutos",
  components:{
  }
};
</script>

<style scoped>
h2{
  font: normal normal 800 22px/22px Open Sans;
    line-height: 23px;
    letter-spacing: -.5px;
    padding-bottom: 5px;
    color: #333;
    display: flex;
    justify-content: center!important;
}

@media (max-width: 767px) {
h2.desk{
  display: none!important;
}
}

</style>