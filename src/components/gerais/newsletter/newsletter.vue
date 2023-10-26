<template>
    <div class="container-fluid mt-5 py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img src="@/assets/img/newsletter/GOMA.png" alt="" loading="lazy">
                        </div>
                        <div class="col-md-8">
                            <p><strong>Cadastre-se e ganhe 10% OFF na sua primeira compra</strong> <br><br> Se conecte com a gente! É só colocar seu nome e e-mail ao lado :)</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <form class="form-inline align-items-center" action="https://news.mailclick.me/subscribe.php" method="post" accept-charset="UTF-8" target="_blank">
                        <input type="text" class="form-control mr-sm-2" id="inlineFormInputName2" placeholder="Nome e sobrenome" name="FormValue_Fields[Nome]">

                        <div class="bg-white d-flex align-items-center">
                            <div class="input-group mr-sm-2">
                                <input type="email" class="form-control border-0" id="inlineFormInputGroupUsername2" name="FormValue_Fields[EmailAddress]" placeholder="Seu melhor e-mail">
                            </div>

                            <button type="submit" class="btn btn-primary">CADASTRAR</button>
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
        name: 'Newsletter',

        methods: {
        }
    }
</script>

<style scoped>
    .container-fluid {
        background: #F03F9A 0% 0% no-repeat padding-box !important;
    }

    p strong {
        text-align: left;
        font: normal normal 600 19px/19px Open Sans;
        letter-spacing: -0.67px;
        color: #fff;
    }

    p {
        font: normal normal normal 15px/19px Open Sans;
        letter-spacing: -0.53px;
        color: #FFFFFF;
    }

    .form-inline input {
        height: 61px;
        border-radius: 4px !important;
        border: none !important;
    }

    .bg-white {
        border-radius: 4px !important;
    }

    .btn-primary {
        width: 150px;
        height: 57px;
        margin-right: 2px;
        background: #F03F9A 0% 0% no-repeat padding-box !important;
        border: none !important;
        font: normal normal 800 15px/15px Open Sans;
        letter-spacing: -0.53px;
        color: #FFFFFF;
        text-transform: uppercase;
    }

    .btn-primary:hover {
        opacity: .7;
    }

    @media(max-width: 768px) {
        .container-fluid {
            margin-top: 80px !important;
        }

        .col-md-4 {
            text-align: center;
        }
        
        p {
            text-align: center;
        }

        img {
            margin-top: -100px;
        }

        form {
            margin-top: 20px;
        }

        .bg-white {
            flex-wrap: wrap;
            background: transparent !important;
            width: 100% !important;
        }

        .form-control {
            margin-bottom: 15px !important;
        }

        .btn-primary {
            width: 100% !important;
            border: 2px solid #fff !important;
        }
    }
</style>