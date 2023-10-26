<template lang="html">
  <div class="">
    <component :is="compAtual" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      compAtual: null
    }
  },
  components: {
    mulher: () => import(`@/pages/mulher.vue`),
    homem: () => import(`@/pages/newhair-masculino.vue`),
    listagemDefault: () => import('@/pages/listagem.vue')
  },
  created() {
    switch (this.$route.path) {
      case '/produtos':
        this.compAtual = `mulher`;
        break;
      case '/produtos/':
        this.compAtual = `mulher`;
        break;
      case '/newhair-masculino':
        this.compAtual = `homem`;
        break;
      case '/newhair-masculino/':
        this.compAtual = `homem`;
        break;
      default:
        this.compAtual = `listagemDefault`;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
