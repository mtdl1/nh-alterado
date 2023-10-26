<template>
    <SlideApresentacao/>
</template>

<script>
import { mapMutations } from 'vuex';
import SlideApresentacao from '../components/gerais/slide-apresentacao.vue'
export default {
  components:{
    SlideApresentacao,
  },
  data() {
    return {
      title: 'Apresentação',
    };
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual']),
    changeDataGtm(title) {
      this.changeDadosPageAtual({
        estrutura: {
          nivel: 'page',
          breadcrumb: [],
          seo: {
            title
          }
        }
      });
    }
  },
  created(){
    this.changeDataGtm(this.title);
  }

}
</script>
