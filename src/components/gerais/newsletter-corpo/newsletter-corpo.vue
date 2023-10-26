<template>
  <div class="container-fluid pt-5">
    <div class="bg-alt container py-5 d-flex justify-content-between">
      <div class="icone col-md-3 text-center">
        <img src="@/assets/img/icones/icone-newsletter.png" alt="" loading="lazy">
      </div>
      <div class="content col-md-9">
        <div class="texto">
          <h4>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</h4>
          <p class="pt-2 pb-4">Se conecte com a gente! É só colocar seu nome e e-mail ao lado:</p>
        </div>
        <div class="form">
          <form class="form-inline align-items-center" action="https://news.mailclick.me/subscribe.php" method="post"
            accept-charset="UTF-8" target="_blank">
            <input type="text" class="form-control mr-sm-2 border-0 px-4 py-4" id="inlineFormInputName2" placeholder="Nome e sobrenome"
              name="FormValue_Fields[Nome]">

            <div class="bg-white d-flex align-items-center justify-content-between position-relative">
              <div class="input-group mr-sm-2">
                <input type="email" class="form-control border-0 px-4 py-4" id="inlineFormInputGroupUsername2"
                  name="FormValue_Fields[EmailAddress]" placeholder="Seu melhor e-mail">
              </div>

              <button type="submit" class="btn btn-primary position-absolute py-2">CADASTRAR</button>
            </div>
            <input type="hidden" name="FormValue_ListID" value="6568" control-id="ControlID-6">
            <input type="hidden" name="FormValue_Command" value="Subscriber.Add" id="FormValue_Command">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterCorpo',
}
</script>

<style scoped>
/* .container-fluid{
  background-color: #f5f5f5;
} */
.bg-alt{
  background: transparent linear-gradient(180deg, #FDEEF5 0%, #FDEEF5 33%, #F9CEE1 100%) 0% 0% no-repeat padding-box;
  border-radius: 10px;
}

h4{
  font: normal normal 800 20px/22px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

p{
  font: normal normal normal 18px/20px Open Sans;
  letter-spacing: -0.72px;
  color: #333333;
}

button{
  background: #F03F9A 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 0.375rem 0.75rem;
  right: 0;
  z-index: 999;
  font: normal normal 800 20px/32px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

button:hover{
  padding: 0.375rem 0.75rem;
  border: 0;
}

.bg-white{
  border-radius: 4px;
  width: 60%;
}

.bg-white .input-group{
  width: 100%!important;
}



</style>