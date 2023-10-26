<template lang="html">
  <aside class="menuInstitucional">
    <ul class="menuInstitucional-container" ref="containerMenu">
      <li class="menuInstitucional-container-item">
        <ul class="menuInstitucional-container-item-sub">

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/atendimento">Atendimento</router-link>
          </li>

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/duvidas-frequentes">Perguntas Frequentes</router-link>
          </li>

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/politica-de-privacidade">Políticas de Privacidade</router-link>
          </li>

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/termos">Termos e Condições</router-link>
          </li>

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/politica-de-reembolso">Política Reembolso</router-link>
          </li>

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/referencias-cientificas">Referências Científicas</router-link>
          </li>

          <!--<li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <router-link to="/pagina/revendedores-oficiais">Revendedores Oficiais</router-link>
          </li>-->

          <li class="menuInstitucional-container-item-sub-item">
            <i  class="fa fa-chevron-right">  </i>
            <a href="https://blog.newhair.com.br/">Blog</a>
          </li>

           <li class="menuInstitucional-container-item-sub-item">
              <a :href="`${$siteUrl}checkout/acesso`">Meus Pedidos</a>
          </li>

        </ul>
      </li>
      
    </ul>
  </aside>
</template>

<script>
export default {

  data(){
    return {
       response: {
          data: {
            estrutura: {
              seo: {
                title: null,
                canonical: null,
                description: null,
                indexar: true
              }
            }
          }
        },
    }
  }, 

  methods: {
      requestData() {
        this.response.data.estrutura.seo.title = 'Atendimento | NEW HAIR'
        this.response.data.estrutura.seo.canonical = 'https://www.newhair.com.br/pagina/atendimento'
        this.response.data.estrutura.seo.description = 'Atendimento New Hair'
        this.$aplicaSEO(this.response.data.estrutura)

        //VARIÁVEIS PÚBLICAS
        this.changeDadosPageAtual(this.response.data)
        return
      }
    },

created(){
   this.requestData()
},

  mounted() {
    this.$refs.containerMenu
      .querySelector(".router-link-exact-active.router-link-active")
      .closest(".menuInstitucional-container-item-sub-item")
      .classList.add("ativo");
  },
};
</script>

<style lang="css" scoped>
.menuInstitucional ul li a{
  color: #000 !important;
}
.material-icons-round {
  font-size: 24px;
}
i {
  color: #fff;
  display: none;
  margin-right: 18px;
}
.menuInstitucional-container {
  font-size: 14px;
  color: #666;
  border: 1px solid #eee;
  border-left: none;
  border-bottom: none;
  margin-top: 40px;
}
.menuInstitucional-container-item {
  margin-bottom: 20px;
}
.menuInstitucional-container-item-t1 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  line-height: 1.125;
}
.ativo {
  background: #ff4289;
  color: #fff !important;
}
.ativo i {
  display: block;
}
.menuInstitucional-container-item-sub-item {
  line-height: 1.16;
  padding: 18px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.menuInstitucional ul li.ativo a {
    color: #fff!important;
}

@media (min-width: 1024px) {
  .menuInstitucional {
    margin-bottom: 75px;
  }
}
</style>
