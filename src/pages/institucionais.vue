<template lang="html">
  <main>
    <!-- <menuNH/>
    <menuMob/> -->
    <div class="container">
      <div class="row">
        <div class="col-md-3" >
          <keep-alive>
            <menuLateral />
          </keep-alive>
        </div>
        <div class="col-sm-12 col-md-9">
          <router-view :config="config" @changeTitle="changeDataGtm"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Comunicacao from "@/comunicacao";
import "@/assets/css/institucionais.css";
import { mapMutations } from 'vuex';

export default {
  components: {
    menuLateral: () => import("@/components/institucionais/menu.vue"),
    // menuNH: () => import('@/components/gerais/menuNH.vue'),
    // menuMob: () => import('@/components/gerais/menuMob.vue'),
  },
  props: {
    config: Object,
  },
  data() {
    return {
      breadcrumbItens: [],
    };
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual']),
    changeDataGtm(title) {
      this.changeDadosPageAtual({
        estrutura: {
          nivel: 'page',
          breadcrumb: this.breadcrumbItens,
          seo: {
            title
          }
        }
      });
    }
  },
  created() {
    Comunicacao.$on("getBreadcrumb", (response) => {
      this.breadcrumbItens = response;
    });
  },
};
</script>

<style lang="css" scoped>
</style>
