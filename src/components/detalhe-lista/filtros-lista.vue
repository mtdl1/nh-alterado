<template lang="html">
  <aside id="menuFiltros" ref="asideMenu">
    <span class="menuFiltrosCloseButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
        <g id="close-filtro" transform="translate(0 -0.016)">
          <g id="Grupo_1832" data-name="Grupo 1832" transform="translate(0 0.016)">
            <path id="Caminho_312" data-name="Caminho 312" d="M12.2,10.016l7.478-7.479a1.1,1.1,0,0,0,0-1.547L19.026.335a1.1,1.1,0,0,0-1.547,0L10,7.813,2.522.335a1.1,1.1,0,0,0-1.547,0L.32.991a1.1,1.1,0,0,0,0,1.547L7.8,10.016.32,17.494a1.1,1.1,0,0,0,0,1.547l.655.655a1.1,1.1,0,0,0,1.547,0L10,12.218,17.479,19.7a1.085,1.085,0,0,0,.773.319h0a1.085,1.085,0,0,0,.774-.319l.655-.655a1.1,1.1,0,0,0,0-1.547Z" transform="translate(0 -0.016)" fill="#fff"/>
          </g>
        </g>
      </svg>
    </span>

    <div class="containerTopProds-box2" v-if="$screen.width < 1024">
      <div class="containerTopProds-item">
        <label for="">Itens por página</label>
        <select class="" name="" @change="setLimit($event.target.value)">
          <option @click="closeFiltro()" :value="JSON.stringify({query: {...$route.query, ipp: i * 12}})" v-for="i in 3" :key="i" :selected="$route.query.ipp ? $route.query.ipp == i * 12 : i == 0">
            {{ i * 12 }}
          </option>
        </select>
      </div>
      <div class="containerTopProds-item">
        <label for="">Ordenar por</label>
        <select class="" name="" @change="setOrder($event.target.value)">
          <option @click="closeFiltro()" :value="JSON.stringify(item.rota)" v-for="(item, i) in ordenacao" :key="i" :selected="item.atual">
            {{ item.label }}
          </option>
        </select>
      </div>
    </div>
    <div class="menuFiltros-scrollMob">


      <div ref="menuFiltrosCategoria" class="menuFiltros-categoriasContainer" v-if="itens.categorias">
        <span class="menuFiltros-t1">Categorias</span>
        <ul class="menuFiltros-categorias">
          <li v-if="itens.categorias.atual.length" class="menuFiltros-item">
            <router-link :to="itens.categorias.atual.rota.route" >
              <span>
                {{ itens.categorias.atual.nome }}
              </span>
            </router-link>
          </li>
          <li class="menuFiltros-item" v-for="item in itens.categorias.irmas" :key="item.id">
            <router-link :to="{...rota(item.rota)}">
              <span>
                {{ item.nome }}
              </span>
            </router-link>
          </li>
          <li class="menuFiltros-item" v-for="item in itens.categorias.filhas" :key="item.id">
            <router-link :to="item.rota.params.categoriaNivel2">
              <span>
                {{ item.nome }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <template v-for="(conjFiltros, i) in itens.filtros">
        <ul v-if="conjFiltros.id !== 3" class="menuFiltros-containerFiltros"  :key="conjFiltros.id+'filtro'" :ref="`filtrosId-${i}`">
          <li class="menuFiltros-t1">
            <span>{{ conjFiltros.nome }}</span>
          </li>
          <li class="menuFiltros-item" v-for="filtro in conjFiltros.valores" :key="filtro.id" @click="filtro.ativo = !filtro.ativo">
            <router-link :to="{...rota(filtro.rota)}" :class="{filtroAtivo: filtro.ativo}">
              <span @click="closeFiltro()">
                {{ filtro.label }}
              </span>
            </router-link>
          </li>
        </ul>
      </template>

      <template v-for="(conjFiltros, i) in itens.atributos">
        <ul v-if="conjFiltros.id != 4 && conjFiltros.id != 2" class="menuFiltros-containerFiltros"  :key="`${conjFiltros.id}-${i}`" :ref="`filtrosId-${i}`">
          <li class="menuFiltros-t1">
            <template v-if="conjFiltros.id == 3">
              <span>Malha</span>
            </template>
            <template v-else>
              <span>{{ conjFiltros.nome }}</span>
            </template>
          </li>
          <li class="menuFiltros-containerFiltros-item menuFiltros-item" v-for="filtro in conjFiltros.valores" :key="filtro.id" @click="filtro.ativo = !filtro.ativo">
            <router-link :to="{...rota(filtro.rota)}" :class="{filtroAtivo: filtro.ativo}">
              <div class="filtro-check-item"></div>
              <span @click="closeFiltro()">
                {{ filtro.label }}
              </span>
            </router-link>
          </li>
        </ul>
      </template>

    </div>

  </aside>
</template>

<script>
import Comunicacao from '@/comunicacao'

export default {
  props: {
    itens: Object,
    ordenacao: Array,
    categoria: Object
  },
  data () {
    return {
      menuCategoria: {
        'label': null,
        'itens': []
      }
    }
  },
  methods: {
    closeFiltro(closeFilter = true) {
      if (screen.width < 1024) {
        this.$refs.asideMenu.classList.remove('menuLateralOpen')
        document.querySelector('body').style.overflow = '';
        Comunicacao.$emit('toggleFundoEscuro', {
          acao: false
        });
        if (closeFilter) {
          this.openFilter(null, event.target.closest('.menuFiltros-containerFiltros.openedFilter'))
          return;
        }
      }
    },
    setOrder (route) {
      route = JSON.parse(route);
      this.$router.push(route)
    },
    setLimit (route) {
      route = JSON.parse(route);
      this.limit = route.query.ipp;
      this.$router.push(route)
    },
    rota(rota) {
      if (!this.$route.query.order) {
        delete rota.query.order;
      }
      return rota
    },
    removeAllQuery(){
      this.closeFiltro(false);
      let query   = Object.assign({}, this.$route.query);
      let objKeys = Object.keys(query);
      if (objKeys.length > 0) {
        for (let i = 0; i < objKeys.length; i++) {
          delete query[objKeys[i]];
        }

        this.$router.replace({ query });
      }

    },
  },
  mounted(){
    if(this.itens.categorias.filhas.length){
      this.menuCategoria.label = this.itens.categorias.atual.nome;

      this.menuCategoria.itens = this.itens.categorias.filhas;
    }else if(this.itens.categorias.irmas.length && this.itens.categorias.niveisAnteriores.length){
      this.menuCategoria.label = this.itens.categorias.niveisAnteriores.pop().nome;
      this.menuCategoria.itens = this.itens.categorias.irmas;
    }
  }
}
</script>

<style lang="css" scoped>
#menuFiltros{
  margin-right: 10px;
  width: 100%;
  max-width: 225px;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background-color: #F9F9F9;
  padding: 37px 15px 44px;
  margin-bottom: 60px;
}
.menuFiltros-t1{
  font-size: 13px;
  font-weight: 600;
  color: #1B75BC;
  margin-bottom: 14px;
  display: block;
  text-transform: uppercase;
}
.menuFiltros-item{
  font-size: 13px;
  margin-bottom: 10px;
  color: #202020;
}
.menuFiltros-item a span{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.menuFiltros-item a:hover span{
  text-decoration: underline;
}

/* CATEGORIAS */
.menuFiltros-categoria-subs{
  padding-left: 10px;
}
.menuFiltros-categorias-selected{
  font-weight: bold;
}

/* FILTROS */

.menuFiltros-containerFiltros{
  overflow: auto;
  max-height: 400px;
}
.menuFiltros-containerFiltros:not(:first-child){
  margin-top: 50px;
}
.menuFiltrosCloseButton{
  display: none;
}
.menuFiltros-topMobile{
  display: none;
}
.menuFiltros-containerFiltros-item.menuFiltros-item a {
  display: flex;
  align-items: center;
}
.filtro-check-item {
  width: 13px;
  height: 13px;
  border: 1px solid #C5C5C5;
  border-radius: 3px;
  margin-right: 5px;
  position: relative;
}
.filtroAtivo .filtro-check-item::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 1.5px;
    background-color: #1B75BC;
    position: absolute;
    top: 2px;
    left: 2px;
}
@media (max-width: 1023px) {
  #menuFiltros{
    z-index: 20;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    transform: translate(100%);
    background-color: #F5F5F5;
    transition: 500ms;
    width: 100%;
    max-width: 275px;
    padding: 0px 0 20px 0;
    margin-top: 0;
    margin-right: 0px;
  }
  #menuFiltros.menuLateralOpen{
    transform: translate(0);
  }
  .menuFiltros-scrollMob{
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 101px);
    padding: 33px 18px 0;
    border-top: 1px solid #D9D9D9;
  }
  #menuFiltros:not(.menuLateralOpen){
    overflow: hidden;
  }
  .menuFiltrosCloseButton{
    display: block;
    position: absolute;
    left: -49px;
    top: 10px;
    pointer-events: none;
  }


}
</style>
