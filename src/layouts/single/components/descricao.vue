<template>
    <div>
      <h2 class="titulo-produto">
        {{nome}}
      </h2>
      <div class="beneficios mt-2">
        <ul>
          <li v-for="(beneficio, index) in beneficios" :key="index" class="beneficios">
            <img src="@/assets/img/icones/check.png" alt="">
            <p>{{beneficio}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Descricao',
  props: {
    nome: {
      type: String,
      default: 'New Hair',
    },
    beneficios: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped>
.titulo-produto {
  font: normal normal 700 28px/30px Open Sans;
  letter-spacing: -0.50px;
  color: #343a40;
}
.beneficios{
  display: flex;
  align-items: center;
}
.beneficios img{
  margin-left: -5px;
}
.beneficios p{
  font: normal normal 400 16px/20px Open Sans;
  letter-spacing: -0.50px;
  color: #343a40;
}
</style>