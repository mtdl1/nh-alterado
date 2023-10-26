<template>
    <section class="container-fluid newsletter py-4">
        <div class="container">
            <div class="newsletterDesk desk">
                <div class="row align-items-end">
                    <div class="col-sm-2 d-flex justify-content-center One position-relative">
                        <div class="mail">
                            <img src="@/assets/img/lp-lista-vip-black-friday/icons/newsletter/icon-email.svg" alt="">
                        </div>
                    </div>
                    
                    <div class="col-sm-10 text-right titleNews position-relative">
                      <p class="tituloListaVip" v-html="tituloListaVip"></p>
                      <p class="py-3">É só mandar seu e-mail aqui pra gente:</p>
                        <form class="formNews d-flex flex-wrap justify-content-between align-items-center" action="https://news.mailclick.me/subscribe.php" accept-charset="UTF-8" target="blank" rel="noreferrer noopener" autocomplete="off">
                            <input type="text" id="newsletter" class="form-control inputName" placeholder="Nome e sobrenome" name="FormValue_Fields[Name]" value="">
                            
                            <input type="email" id="newsletter" class="form-control inputEmail" placeholder="Seu melhor e-mail" name="FormValue_Fields[EmailAddress]" value="">

                            <input type="submit" class="btn-cadastrar" name="FormButton_Subscribe" value="ENVIAR!" @click="cadastrar()" id="FormButton_Subscribe">

                            <input type="hidden" name="FormValue_ListID" value="17875">

                            <input type="hidden" name="FormValue_Command" value="Subscriber.Add" id="FormValue_Command">
                        </form>

                        <!-- <img class="position-absolute sendImg desk" src="@/assets/img/lp-lista-vip-black-friday/icons/newsletter/icon-aviao.svg" alt=""> -->
                    </div>

                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
    export default {
        name: 'NewsletterListaVip',

        props: {
            tituloListaVip: {
                type: String,
                default: 'TituloNewsletter'
            }
        },

        data() {
            return {
                cadastrado: false,
            }
        },

        methods: {
            cadastrar() {
                this.cadastrado = true
                this.$toast.success("Cadastro realizado com sucesso!")
            }
        },
    }
</script>

<style lang="scss" scoped>
.container-fluid {
  background: #FF4289;
}

.newsletterDesk {
  background-color: #FF4289;
  padding: 29px 0px;
  position: relative;
  border-radius: 10px;

}

.titleNews .tituloListaVip {
  text-align: left;
  font: normal normal bold 28px/30px Open Sans;
  letter-spacing: 0px;
  color: #ffffff;
}

.col-sm-10{
  padding: 0;
}

.titleNews .py-3 {
  text-align: left;
  font: normal normal normal 25px/28px Open Sans;
  letter-spacing: 0px;
  color: #ffffff;
}

.inputName {
  width: 30%;
  height: 56px;
  font-family: 'myriad-pro', sans-serif !important;
  color: #000000 !important;
  font-size: 16px;
  padding: 32px 10px 26px;
  display: inline-block;
  border-radius: 10px;
  border: 0px;
}

.inputEmail {
  width: 45%;
  height: 56px;
  font-family: 'myriad-pro', sans-serif !important;
  color: #000000 !important;
  font-size: 16px;
  padding: 32px 10px 26px;
  display: inline-block;
  border-radius: 10px;
  border: 0px;
}

.btn-cadastrar {
  display: inline-block;
  opacity: 100 !important;
  width: 20%;
  height: 56px;
  /* padding: 16px 0px 16px 0px; */
  font-family: "Open Sans", sans-serif !important;
  // margin-left: -190px;
  border-radius: 10px;
  font-weight: bold;
  background: #000000;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  line-height: initial;
}

.btn-cadastrar:hover {
  opacity: .8 !important;
}

.disabled {
  display: inline-block;
  opacity: .5 !important;
  width: 20%;
  height: 56px;
  font-family: 'Open Sans', sans-serif !important;
  margin-left: -146px;
  border-radius: 10px;
  font-weight: bold;
  background: #ff4289;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: unset;
}

.sendImg{
  bottom: 56px;
  right: 30px;
}

@media screen and (max-width: 768px) {
  .py-4{
    padding: 0px !important;
  }

   .titleNews .tituloListaVip {
    text-align: center;
    font: normal normal bold 15px/22px Open Sans;
    letter-spacing: 0.4px!important;
  }
  .titleNews .py-3 {
    font: normal normal normal 14px/16px Open Sans;
    letter-spacing: 0.28px;
    text-align: center;
  }
  .sendImg{
    right: 0px;
  }
  .newsletterDesk {
    display: block;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .mail img{
    width: 75px;
  }

  .One {
    display: flex;
    flex-direction: column;
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  .Texto {
    margin: 0 !important;
  }

  .Texto p {
    text-align: center;
  }

  .mail {
    margin: 0 auto 10px;
    position: relative;
  }

  .inputName {
    width: 100%;
    margin-top: 10px;
  }

  .inputEmail {
    width: 100%;
    margin-top: 10px;
  }

  .btn-cadastrar {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }

  .disabled {
    opacity: .5 !important;
    cursor: unset;
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }

  .col-sm-8 {
    padding: 0;
  }
}

</style>