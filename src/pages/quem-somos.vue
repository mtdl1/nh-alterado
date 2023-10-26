<template>
  <div>
    <!-- <MenuNH />
    <MenuMob /> -->
    <QuemSomosNovo/>
    <BannersLpCorpo/>
    <Newsletter/>

  </div>
</template>

<script>
// import MenuMob from '../components/gerais/menuMob.vue';
// import MenuNH from '../components/gerais/menuNH.vue';
import Newsletter from '../components/gerais/newsletter/newsletter.vue';
import QuemSomosNovo from '../components/institucionais/quem-somos-novo.vue';
import BannersLpCorpo from '../components/gerais/banners-lp-corpo/banners-lp-corpo.vue';

export default {
  name: "QuemSomos",
  components: {
    // MenuNH,
    // MenuMob,
    Newsletter,
    QuemSomosNovo,
    BannersLpCorpo,
  },

  data(){
            return{
            response: {
              data: {
                  estrutura: {
                    seo: {
                        title: null,
                        description: null,
                        canonical: null,
                    }
                }
              }  
            }
          }  
        },
        methods: {
            
          requestData() {
        this.response.data.estrutura.seo.title = 'Quem Somos | NEW HAIR'
        this.response.data.estrutura.seo.canonical = ' https://www.newhair.com.br/quem-somos'
        this.response.data.estrutura.seo.description = 'NEW HAIR - QUEM SOMOS'
        this.$aplicaSEO(this.response.data.estrutura)

        this.changeDadosPageAtual(this.response.data)
        return
          }


        },
     created() {
      this.requestData()
    },

}
</script>
<style lang="css" scoped>
#quemSomos-banner {
  display: block;
  margin: 0 auto 40px auto;
}
.txt-1 {
  font-size: 16px;
  color: #eb57bf;
}
.txt-2 {
  font-weight: 500;
  font-size: 36px;
  color: #3f3f3f;
  font-family: "Oswald", sans-serif !important;
  line-height: 20px;
}
.txt-3 {
  margin-top: 30px;
  font-size: 15px;
  color: #656565;
}
.txt-2,
.txt-1 {
  text-transform: uppercase;
}
.txt-3,
.txt-1 {
  margin-bottom: 1rem;
}

.container-MissaoVisaoValores {
  padding-top: 0px;
  padding-bottom: 20px;
  margin-top: 15px;
}
.container-MissaoVisaoValores > div {
  text-align: center;
  padding: 30px;
}

.container-MissaoVisaoValores > div:nth-child(2) {
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.container-quemUsa {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 5px;
}

.container-Bg {
  background: #ed54ad;
  padding: 30px 10px 40px 10px;
  margin-top: 60px;
  margin-bottom: -20px !important;
  display: flex;
  justify-content: center;
}
@media (max-width: 767px) {
  #quemSomos-banner {
    margin: 0 auto;
  }
  .container-bemVindo div {
    padding: 40px 30px 30px 30px;
  }
  .container-quemUsa {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
