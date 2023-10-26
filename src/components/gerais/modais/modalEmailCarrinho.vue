<template>
  <div class="select-modal absolute">
    <div class="overlay-modal" @click="closeModal()"></div>
    <div class="modal-escolha position-relative">
      <button class="btn-modal-escolha-fechar position-absolute" @click="closeModal()"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      <div class="modal-content">
        <p><strong>Identificação</strong></p>
        <p class="text-left py-1" >Para continuar, preencha com o seu Telefone</p>
        <form id="form__comment" @submit="salvaCarrinho" enctype="multipart/form-data">
          <label for="nome" class="d-block text-left" >Nome:</label>
          <input class="form-control" type="text" name="nome" id="nome" placeholder="Digite seu nome" v-model="nome" required>

          <div class="total-inputs">
            <div class="input-tel">
              <label for="telefone" class="d-block text-left labEmail" >Telefone</label>
              <!-- <input class="form-control mb-2" type="tel" name="telefone" maxlength="15" @keyup="handlePhone($event)" id="telefone" placeholder="Seu telefone" v-model="telefone" required> -->
              <input class="form-control mb-2" type="tel" v-mask="'(##) #####-####'" name="telefone" minlength="14" maxlength="15" id="telefone" placeholder="(xx) xxxxx-xxxx" v-model="telefone" required>
            </div>
            
            <div class="input-mail">
              <label for="telefone" class="d-block text-left labEmail" >Email</label>
              <input class="form-control mb-2" type="tel" name="email" minlength="7" maxlength="30" id="email" placeholder="Seu email:" v-model="email" required>
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <button class="btn finalizar text-uppercase" @click.stop.prevent="salvaCarrinho()">Enviar e finalizar</button>
            <button class="btn continuar" @click="envioSemEmail()">Continuar sem telefone</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ModalEmailCarrinho",

  props: {
      dadosCarrinho: {
          type: Array,
      }
    },

  data() {
    return {
      nome: '',
      telefone: '',
      email: '',
      carrinho: this.dadosCarrinho,
      dataCarrinho: null,
      // apiURL: 'http://localhost:8000/api/carrinho-abandonado',
      apiURL: 'https://webservice.vitabe.com.br/api/carrinho-abandonado',
      enviando: false,
      showModalForm: true,
      siteUrl: "https://www.newhair.com.br/",
      sessao: '',
      telefoneEnviado: false,
    };
  },

  created() {
    this.sessao = this.getCookie("PHPSESSID")
  },

  methods: {
    closeModal() {
      this.$emit("close-Modal" , true);
    },

    getCookie(nomeCookie) {
        var name = nomeCookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    envioSemEmail() {
      window.location.href = `${this.siteUrl}checkout/carrinho/`;
    },

async salvaCarrinho() {
  // localStorage.setItem('telefone', this.telefone)
  this.dataCarrinho = JSON.stringify(this.carrinho)
  // console.log(this.dataCarrinho)
  // this.enviando = !this.enviando
  const sendData = new FormData()
  sendData.append('nome', this.nome)
  sendData.append('telefone', this.telefone)
  sendData.append('email', this.email)
  sendData.append('carrinho', this.dataCarrinho)
  sendData.append('sessao', this.sessao)

  const header = {
    headers: {
      'Content-type': "application/json; multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2),
      'Access-Control-Allow-Origin': "*",
    },
  }

  if (this.telefone.length < 14) {
    this.$toast.error("Número de telefone inválido")
    return
  }

  await axios
    .post(this.apiURL, sendData, header)
    .then(response => {
      if (response.status === 201 || response.status === 200) {
        this.nome = ''
        this.telefone = ''
        this.email = ''
        this.dataCarrinho = ''
        this.sessao = ''
        // this.enviando = !this.enviando
        this.telefoneEnviado = true
        localStorage.setItem('TelefoneEnviado', this.telefoneEnviado)
        window.location.href = `${this.siteUrl}checkout/carrinho/`;
      }
    })
    .catch(error => {
      console.log(error)
      // this.enviando = !this.enviando
    })
},
},
}

</script>

<style scoped>
.overlay-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background: rgba(51, 51, 51, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0);
  z-index: 99;
}

.select-modal {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-escolha {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: #eeeeee 0% 0% no-repeat padding-box;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */
  z-index: 999;
  overflow: hidden;
  transition: 1s;
}

.btn-modal-escolha-fechar, .btn-modal-escolha-fechar:hover, .btn-modal-escolha-fechar:focus, .btn-modal-escolha-fechar:active {
    background-color: transparent !important;
    right: 20px;
    top: 0;
    border: none !important;
    font: normal normal 100 40px/35px Proxima Nova;
    letter-spacing: 0px;
    color: #000000;
    outline: none !important;
    z-index: 99;
}

p{
  font: normal normal normal 18px/18px Open Sans;
  letter-spacing: -0.72px;
  color: #343434;
}

p strong{
  font: normal normal 800 20px/20px Open Sans;
  letter-spacing: -0.8px;
}

label{
  font: normal normal bold 16px/22px Open Sans;
  letter-spacing: -0.64px;
  color: #333333;
  margin: 0.3rem 0!important;
}

/* .labEmail{
  margin-top: 0.5rem;
} */

.form-control {
  width: 100%;
  margin: 0 auto;
  height: unset!important;
  line-height: 1;
  padding: 5px 10px;
  background-color: #eeeeee;
}

/* Zerar css button */
.btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  width: 48%;
  text-align: center;
  border-radius: 5px;
  letter-spacing: 0;
}

/* css placeholder button */
::placeholder {
  font: normal normal normal 16px/22px Open Sans;
}

.btn.continuar{
  background-color: #F5F5F5;
  font: normal normal normal 16px/19px Helvetica;
  letter-spacing: 0px;
  color: #707070;
}

.btn.finalizar{
  background-color: #18a851;
  font: normal normal bold 18px/22px Helvetica;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.modal-content {
    padding-top: 30px !important;
    padding-bottom: 20px !important;
    border: 0 !important;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    background-color: #eeeeee;
}

.btn{
  bottom: 0;
  left: 0;
}

.btn2{
  bottom: 0;
  right: 0;
}

.total-inputs {
    display: flex;
    justify-content: space-between;
}

.input-tel {
    width: 48%;
}

.input-mail {
    width: 48%;
}

/* responsivo */
@media (max-width: 768px) {
  p strong{
    font-size: 16px;
  }
  p{
    font-size: 14px;
  }
  label{
    font-size: 14px;
  }
  .labEmail{
    margin-top: 10px!important;
  }

  .btn{
    font-size: 10px!important;
    padding: 5px;
  }
}
</style>