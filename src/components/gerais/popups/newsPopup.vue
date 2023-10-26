<template>
    <section v-if="popup">
        <div class="popup-news-bg d-flex justify-content-center align-items-center">
            <div class="popup-news position-relative">
                <button class="popup-news-close position-absolute" @click="closePopup()"><i class="fas fa-times"></i></button>
                <div class="popup-news-body d-flex justify-content-end mr-4">
                    <div class="popup-news-body-col w-50">
                        <div v-if="form">
                            <h2 class="text-center">Que bom <br> ter você aqui!</h2>
                            <div class="popup-news-body-text text-center mt-3">
                                <p>Assine a nossa newsletter e <br> <strong>GANHE 10% OFF</strong> <br> na sua primeira compra!</p>
                            </div>
                        </div>
                        <div class="popup-news-body-form mt-4">
                            <form v-if="form" autocomplete="off" @submit="submitForm" accept-charset="UTF-8" id="formNews">
                                <div class="form-group mb-2">
                                    <input type="text" class="form-control" placeholder="Nome ou apelido" v-model="dadosForm.nome" name="FormValue_Fields[CustomField6809]" value="" id="FormValue_CustomField6809" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Digite seu melhor e-mail" v-model="dadosForm.email" name="FormValue_Fields[EmailAddress]" value="" id="FormValue_EmailAddress" required>
                                </div>
                                <input type="hidden" name="FormValue_ListID" value="17047">
                                <input type="hidden" name="FormValue_PopupForm" id="FormValue_PopupForm" value="popup" v-model="dadosForm.popupForm">
                                <input type="hidden" name="FormValue_Command" value="Subscriber.Add" id="FormValue_Command">
                                <div class="form-group text-center mt-3">
                                    <button type="submit" class="btn btn-primary w-50">EU QUEROOO!</button>
                                </div>
                            </form>
                            <div v-else>
                                <div class="popup-news-body-text-result text-center mt-3">
                                    <p>Você ganhou <br> <strong>10% OFF</strong> <br> <span>Corre pra aproveitar!</span></p>
                                </div>
                                <div class="popup-news-cupom text-center mt-4 mb-3">
                                    <input type="text" id="cupom" value="QUERO10" disabled>
                                </div>
                                <button class="copy-cupom mx-auto mt-2" @click="copyCupom()"> COPIAR CUPOM <i class="fas fa-clone pl-1"></i></button>
                            </div>
                        </div>
                        <span class="popup-news-aceite text-center position-absolute">*Eu aceito receber comunicações, promoções e concordo com os termos de privacidade.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import copy from 'copy-to-clipboard'

    export default {
        name: 'NewsPopup',

        data() {
            return {
                popup: false,
                form: true,
                dadosForm: {
                    FormValue_ListID: '17047',
                    nome: '',
                    email: '',
                    popupForm: 'popup',
                    FormValue_Command: 'Subscriber.Add',
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        },

        methods: {
            showPopup() {
                if (localStorage.getItem('popupNews') == null) {
                    setTimeout(() => {
                        this.popup = true
                        localStorage.setItem('popupNews', true)
                    }, 3000)
                }
                // this.popup = true
            },

            closePopup() {
                this.popup = false
            },

            submitForm(e){
                e.preventDefault()
                const config = {method: 'post', url: 'https://news.mailclick.me/subscribe.php', headers: this.headers , data: this.dadosForm}
                axios(config)
                    .then((res) => {
                        console.log('cadastrado com sucesso: ', res)
                        this.$toast.success("E-mail cadastrado com sucesso!")
                        this.form = false
                    })
                    .catch((error) => {
                        console.log('erro ao cadastrar: ', error)
                        this.$toast.error("Erro ao cadastrar e-mail!")
                    })
            },

            copyCupom() {
                let copyText = document.getElementById("cupom")
                copy(copyText.value)
                this.$toast.success("Cupom copiado com sucesso!")
            },
        },

        mounted() {
            this.showPopup()
        }
    }
</script>

<style scoped>
    h2, h3, h4, p, span {
        font-family: "Roboto", sans-serif;
    }

    .popup-news-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }

    .popup-news-close {
        right: -25px;
        top: -25px;
        color: #FFF;
        font-size: 30px;
        transition: all .5s;
    }

    .popup-news-close:hover {
        transform: scale(1.3);
    }

    .popup-news {
        background-image: url('../../../assets/img/popups/POP-UP-ENTRADA-BG.webp');
        min-width: 680px;
        min-height: 480px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .popup-news-body-col h2 {
        font-size: 33px;
        color: #FFF;
        font-weight: bold;
        text-align: center;
        margin-top: 30px;
        line-height: .9;
    }

    .popup-news-body-text p{
        font-size: 21px;
        color: #FFF;
        line-height: 1;
    }

    .popup-news-body-text p strong{
        font-size: 37px;
        font-weight: 900;
    }

    .popup-news-body-text-result p{
        font-size: 32px;
        color: #FFF;
        line-height: 1;
        margin-top: 25%;
        font-weight: 900;
    }

    .popup-news-body-text-result p strong{
        font-size: 65px;
        font-weight: 900;
    }

    .popup-news-body-text-result p span{
        font-size: 22px;
        display: block;
        font-weight: 400;
        padding-top: 10px;
    }

    .form-group input {
        border: none;
        width: 90%;
        margin: 0 auto;
        padding: 30px 25px;
        border-radius: 50px;
    }

    .form-group .btn {
        background: #ff35b2 !important;
        border: none;
        padding: 15px;
        border-radius: 50px;
    }

    .popup-news-aceite {
        font-size: 8px;
        color: #FFF;
        text-align: center;
        margin-left: 10px;
        bottom: 20px;
    }

    .popup-news-cupom {
        background: #FFF;
        padding: 20px 10px;
        border-radius: 50px;
        width: 80%;
        margin: 0 auto;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
    }

    .popup-news-cupom h3 {
        font-size: 25px;
        color: #ff35b2;
        font-weight: normal;
        text-align: center;
        margin-bottom: 10px;
    }

    .popup-news-cupom h4 {
        font-size: 45px;
        color: #74258b;
        font-weight: 900;
        text-align: center;
    }

    .popup-news-cupom input {
        width: 100%;
        font-size: 20px;
        color: #74258b;
        font-weight: 900;
        text-align: center;
        border: none;
        background: none;
    }

    .copy-cupom {
        background: #00b28c;
        padding: 10px 20px;
        display: flex;
        color: #FFF;
        border-radius: 50px;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    .copy-cupom i {
        color: #FFF;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .popup-news {
            background-image: url('../../../assets/img/popups/POP-UP-MOBILE-ENTRADA-BG.webp');
            min-width: 90% !important;
            min-height: 63vh !important;
        }

        .popup-news-body-col {
            width: auto !important;
        }

        .popup-news-body {
            margin-right: 0 !important;
            justify-content: center !important;
        }

        .form-group input {
            width: 100%;
        }

        .form-group .btn {
            width: 80% !important;
        }

        .popup-news-close {
            right: 10px !important;
            top: 3px !important;
            font-size: 25px !important;
        }

        .popup-news-aceite {
            left: 0;
            right: 0;
            margin: 0 !important;
        }

        .popup-news-cupom {
            width: 100% !important;
            text-align: center;
        }

        .copy-cupom {
            margin-top: 30px !important;
            padding: 20px 30px !important;
            font-size: 18px;
        }
    }
</style>