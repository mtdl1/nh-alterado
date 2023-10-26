<template lang="html">
  <div>
      <!-- <MenuNH />
      <menuMobVue/> -->
      
    <div class="container my-4">
      <h1 class="pt-4">404</h1>
      <h2 class="pb-3">Página não encontrada</h2>
      <p class="pb-4 text-center">a página que você está procurando não<br class='mob'> pode ser encontrada</p>
      <button ><a href="/" >Ir para home</a></button>

      <confiraLinhaCompletaVue/>
    </div>
      <newsletterVue/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import confiraLinhaCompletaVue from '../components/gerais/confira-linha/confira-linha-completa.vue';
// import menuMobVue from '../components/gerais/menuMob.vue';
// import MenuNH from '../components/gerais/menuNH.vue';
import newsletterVue from '../components/gerais/newsletter/newsletter.vue';




export default {
  name: '404',
  components: {
    // MenuNH,
    // menuMobVue,
    confiraLinhaCompletaVue,
    newsletterVue
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual'])
  },
  created(){
    //RESPONSE FIXO DE 404
    var response = {
      estrutura: {
        nivel: "404",
        seo: {
          title: "Página não encontrada",
          description: "",
          keywords: "",
          canonical: "",
          indexar: false
        }
      }
    }

    //CARREGA O SEO
    this.$aplicaSEO(response.estrutura);

    //CARREGA AS VARIÁVEIS PÚBLICAS
    this.changeDadosPageAtual(response);
  }
}

</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
 
  flex-direction: column;
}

h1{
  font-weight: bold;
  color: #ff4289;
  font-size: 72px;
  text-align: center;
  font-family: Helvetica;
}
h2{
  font-size: 60px;
  color: #333;
  text-align: center;
  display: block;
  font-family: Helvetica;
  font-weight: 600 !important;
}

p {
  font: normal normal normal 30px Helvetica ;
  color:  #333333;
}

button {
  width: 300px;
  height: 65px;
  background-color: #00B451;
  position: relative;
  margin: auto;
  

}

a {
  color: white;
  font: normal normal bold 25px Open Sans ;
  text-transform: uppercase;
  text-align: center !important;

}
 @media (max-width: 768px) {
   h1{ 
      font-size: 60px;
    }

    h2{
      font-size: 30px;
    }

    p {
      font-size: 17px
    }
 }

</style>
