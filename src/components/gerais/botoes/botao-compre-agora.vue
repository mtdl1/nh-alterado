<template>
  <div class="mt-3 text-center">
    <a href="#produtos">Compre Agora</a>
  </div>
</template>

<script>
  export default {
    name: "BotaoCompreAgora",
  };
</script>

<style scoped>
  a {
    background-color: #18A851;
    text-align: center;
    font: normal normal 700 24px/28px Helvetica;
    letter-spacing: -1.04px;
    color: #FFFFFF;
    padding: 14px 62px;
    border-radius: 8px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    width: fit-content;
  }
  a:hover {
    background-color: #18a852c4;
    transition: all 0.5s ease;
  }

  .mt-3{
      margin-top: 40px!important;
    }

  /* responsivo */
  @media (max-width: 991px) {
    .mt-3{
      margin-top: 20px!important;
    }

      a {
    background-color: #18A851;
    text-align: center;
    font: normal normal 700 22px/26px Helvetica;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    padding: 14px 62px;
    border-radius: 8px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    width: fit-content;
  }
  }
</style>