<template>
  <div :class="['px-1', {colorWhite: color == 'white', colorPink: color == 'pink', alignLeft: align == 'left'}]">
    <h1 v-html="h1"></h1>
    <h3 class="py-2" v-html="h3"></h3>
  </div>
</template>

<script>
export default {
  name: "TitulosHeading1",
  props: {
    h1: String,
    h3: String,
    color: String,
    align: String
  },
};
</script>

<style scoped>

h1{
  text-align: center;
  font: normal normal bold 34px/38px Open Sans;
  letter-spacing: -1.28px;
  color: #222222;
  font-weight: 700!important;
}

h3{
  text-align: center;
  font: normal normal normal 20px/22px Open Sans;
  letter-spacing: -0.4px;
  color: #333333;
}

.colorWhite h1,.colorWhite h2, .colorWhite h3{
  color: #FFF!important;
}

.colorPink h2{
  color: #ff4289!important;
}

.colorPink h3{
  color: #333!important;
}

.alignLeft h2,.alignLeft h2, .alignLeft h3 {
  text-align: left!important;
}

.alignLeft h3{
  margin-top: 20px;
}

@media (max-width: 768px) {
  h1{
    font: normal normal 900 24px/28px Open Sans;
    letter-spacing: -1.28px;
    color: #222222;
  }
  h3{
    font: normal normal normal 16px/20px Open Sans;
    letter-spacing: -0.4px;
    color: #333333;
  }

  .alignLeft h1,.alignLeft h2, .alignLeft h3 {
    text-align: center!important;
  }
}
</style>