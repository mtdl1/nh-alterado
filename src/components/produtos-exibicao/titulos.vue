<template>
  <div :class="['px-1', {colorWhite: color == 'white', colorPink: color == 'pink', alignLeft: align == 'left'}]">
    <h2 v-html="titulo" ></h2>
    <h3 v-if="$route.path !='/vitamina-para-gestante-e-lactantes'" v-html="subtitulo"></h3>
    <p class="mt-3" v-else  v-html="subtitulo"></p>
  </div>
</template>

<script>
export default {
  name: "Titulos",
  props: {
    titulo: String,
    subtitulo: String,
    color: String,
    align: String
  },
};
</script>

<style scoped>

h2 {
  text-align: center;
  font: normal normal bold 32px/36px Open Sans;
  letter-spacing: -1.28px;
  color: #222222;
  font-weight: 700!important;
  text-transform: lowercase;
}

h3{
  text-align: center;
  font: normal normal normal 20px/22px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
  text-transform: lowercase;
}

p {
  text-align: center;
  font: normal normal normal 20px/22px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.colorWhite h2, .colorWhite h3{
  color: #FFF!important;
}

.colorPink h2{
  color: #ff4289!important;
}

.colorPink h3{
  color: #333!important;
}

.alignLeft h2, .alignLeft h3 {
  text-align: left!important;
}

.alignLeft h3{
  margin-top: 20px;
}

@media (max-width: 768px) {
  h2{
    font: normal normal bold 22px/26px Open Sans;
    letter-spacing: -1.28px;
    color: #222222;
  }
  h3{
    font: normal normal normal 16px/20px Open Sans;
    letter-spacing: -0.4px;
    color: #333333;
  }

  .alignLeft h2, .alignLeft h3 {
    text-align: center!important;
  }

  p {
  text-align: center;
  font: normal normal normal 16px/18px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}
}
</style>