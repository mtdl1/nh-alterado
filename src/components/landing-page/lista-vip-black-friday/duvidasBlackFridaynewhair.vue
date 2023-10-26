<template>
    <section class="duvidasHome pt-4" :class="{ active: $route.name == 'lp-lista-vip-black-friday'}">
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12">
                    <div class="TitleDuvidas text-center">
                        <p> Perguntas sobre a Black Friday<br class="mob"> New Hair</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">O que é Black Friday?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>A dose diária a ser tomada é de uma cápsula ao dia. Como durante o período da manhã a absorção dos nutrientes é facilitada e os resultados otimizados, sugerimos que tome New Hair após sua primeira refeição. </p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Posso trocar um produto que foi comprado durante a Black Friday?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p> Sim! A New Hair possui uma política de troca e reembolso de sete dias. Segundo o "Art. 49. O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou em domicílio."
                            O reembolso será autorizado somente se o produto estiver sem uso, lacrado e sem qualquer tipo de violação ou alteração no frasco ou pote, com prazo máximo de 7 dias corridos após o recebimento da compra para fazer a solicitação.
                            - O estorno/reembolso ocorrerá no prazo de até 10 dias.
                            Boleto Bancário: O reembolso acontece dentro da plataforma de pagamento MERCADO PAGO, ficando disponível para resgate em conta bancária.
                            Cartão de Crédito: o valor será estornado como crédito em sua fatura do cartão utilizado com o prazo de até três faturas para processamento, já que cada operadora trabalha com prazos e processos de estorno diferentes.
                            Toda e qualquer solicitação referente ao pedido efetuado deve ser feita através do CHAT ONLINE em nosso SITE, através do botão verde localizado no canto direito ou identificado como INICIAR CHAT ONLINE WHATSAPP, selecionando a opção que melhor atender a sua necessidade.</p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Qual (is) produto (s) têm desconto?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p> Os produtos que têm desconto são: 1 Pote Caps, 3 Potes Cpas + Massageador, 8 Potes Caps + Escova, 1 Pote Goma, 3 Potes Goma + Massageador e 8 Potes Goma + Escova. </p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Até quando vão durar as promoções?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>As promoções vão até o dia 30 de novembro, às 23:59.</p>
                        </div>
                    </div>
                    <!---element-->
                </div>
                <div class="col-sm-6">
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Quando vai ser a Black Friday?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p> A Black Friday de 2022 vai acontecer no dia 25 de novembro, a última sexta-feira do mês.</p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Quais as formas de pagamento na Black Friday?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>As formas de pagamento são: parcelamento em até 12x sem juros, pagamento no PIX + 5% de desconto, no boleto bancário à vista e nos cartões de crédito com as bandeiras VISA, Mastercard, ELO, Hipercard, Diners Club International, American Express e PicPay. </p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">Qual vitamina para cabelo está na promoção?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p> As vitaminas para cabelo que estão na promoção são: os kit com 1, 3 e 8 potes da Cápsula New Hair. (Lembrando que o kit com 3 potes contém o brinde massageador e o kit com 8 têm a escova.) E os outros produtos que também estão na promoção são os kit com 1, 3 e 8 potes das Gomas Gummy.</p>
                        </div>
                    </div>
                    <!---element-->
                    <div class="element">
                        <div class="question">
                            <h3 style="font-weight: 600; font-size: 14px;">O frete muda de região para região ou é um valor fixo?</h3>
                            <button><i class="fas fa-caret-right"></i></button>
                        </div>
                        <div class="answer hideText">
                            <p>Todas as compras feitas durante e após a Black Friday, vão ter frete GRÁTIS para o Brasil inteiro. </p>
                        </div>
                    </div>
                    <!---element-->
                </div>
            </div>
            <div class="col-sm-12" v-if="$route.name !== 'ja-sou-cliente' & $route.path !='/lista-vip-black-friday'">
                <a href="#produtos" v-show="$route.name !=='/produtos'" class="facaSeuPedido my-4 desk ">COMPRE AGORA</a>
                <a href="#produtos" v-show="$route.name =='/produtos'" class="facaSeuPedido my-4 desk ">COMPRE AGORA</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {
            const elements = document.querySelectorAll('.element');
            elements.forEach(element => {
                let question = element.querySelector('.question');
                // let btn = element.querySelector('.question button');
                let icon = element.querySelector('.question button i');
                var answer = element.lastElementChild;
                var answers = document.querySelectorAll('.element .answer');
                // var elBorder = document.querySelectorAll('.element');
                question.addEventListener('click', () => {
                    answers.forEach(ans => {
                        let ansIcon = ans.parentElement.querySelector('button i');
                        if (answer !== ans) {
                            ans.classList.add('hideText');
                            ansIcon.className = 'fa fa-caret-right';
                        }
                    });
                    answer.classList.toggle('hideText');
                    icon.className === 'fa fa-caret-right' ? icon.className = 'fa fa-caret-down' :
                        icon.className = 'fa fa-caret-right';
                });
            });
        }
    }
</script>
<style lang="scss" scoped>

    .TitleDuvidas p {
        text-align: center;
        font: normal normal bold 35px Open Sans;
        padding: 10px 0 24px 0;
        letter-spacing: -0.8px;
        color: #333333;
        opacity: 1;
    }


    a {
        text-decoration: none !important;
    }

    .facaSeuPedido {
        width: 230px;
        height: 65px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #12AC53 0% 0% no-repeat padding-box;
        font: normal normal bold 18px/18px Open Sans;
        letter-spacing: -0.24px;
        color: #FFFFFF !important;
        border-radius: 4px;
        transition: 300ms ease-in-out;
    }

    .duvidasHome {
        padding-bottom: 15px;
        // background-color: var(--cor-secundaria);

        .col-sm-6 {
            margin-top: -10px;

            .text-center {
                p {
                    margin-bottom: 40px;
                }

                h2 {
                    margin-bottom: 20px;
                }
            }

        }

        .element {
            margin: 10px 0px;
            cursor: pointer;

            .hideText {
                display: none;
            }

            .question {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                border: 1px solid #707070;
                border-radius: 30px;
                padding-left: 14px;

                h3 {
                    text-align: left;
                    margin: 0 !important;
                    display: flex;
                    align-content: center;
                    align-self: center;
                    font: normal normal normal 20px Segoe UI;
                    letter-spacing: 0px;
                    color: #545454;
                }

                button {
                    border: none;
                    background-color: transparent;

                    i {
                        color: #545454;
                        font-size: 20px;
                    }
                }
            }

            .answer {
                padding: 10px 20px;
                animation: animation 1s;

                p {
                    font-family: 'Roboto Regular', sans-serif;
                    color: #333;
                    text-align: justify;
                    font-size: 14px;
                }
            }
        }
    }

    // Alterações para LP da lista VIP Black Friday
.duvidasHome.active {
    background-color: black;
}

.active h2 {
    color: white!important;
}

.active p {
    color: white!important;
}

.active .question{
    border-color: white!important;
}

.active .question h3{
    color: white!important;
}

.duvidasHome.active .titleSection p {
    color: white!important;
    margin-bottom: 0!important;
}

.duvidasHome.active .accordeon-title {
    color: white;
    border-color: white;
}

.duvidasHome.active .accordeon-content {
    color: white;
}
// Alterações para LP da lista VIP Black Friday

    @keyframes animation {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @media(max-width: 768px) {
        .TitleDuvidas h2 {
            font: normal normal 800 22px/22px Open Sans;
            line-height: 23px;
            letter-spacing: -.5px;
            text-align: center;
            padding-bottom: 5px;
        }

        .TitleDuvidas p {
            font: normal normal normal 14px/14px Open Sans;
        }

        .desk {
            display: none;
        }
        .element{
            margin: 10px 15px!important;
        }
    }

</style>np