<template>
    <div class="container">
        <div class="title text-center">
            <h2>CONHEÇA MAIS SOBRE CADA PRODUTO</h2>
            <p>Tire suas dúvidas sobre cada produto e tratamento New Hair</p>
        </div>
        <div class="accordion" id="faq">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">NEW HAIR GUMMY + ÁCIDO HIALURÔNICO</a>
                        </div>

                        <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq1">
                            <div class="card-body">
                                <p>A forma mais divertida e deliciosa de consumir New Hair passou por um upgrade! As Gummy que você já conhece estão com nova fórmula, muito mais potentes. Além das vitaminas e minerais essenciais, convocamos os superpoderes do ácido hialurônico para turbinar o que já era perfeito. Além de tratar os seus cabelos e unhas, a sua pele também vai receber cuidados especiais de dentro para fora, ficar mais hidratada, jovem, com menos linhas de expressão e com aquela aparência de bebê que você tanto almeja. E o melhor? Com apenas um ursinho colorido ao dia! </p>
                                <p><strong>Benefícios</strong></p> 
                                <ul>
                                    <li>✔ Essencial para cabelos, pele e unhas</li>
                                    <li>✔ Blend de vitaminas e minerais</li>
                                    <li>✔ Enriquecido com Ácido Hialurônico</li>
                                    <li>✔ Acelera o crescimento capilar em até 6x</li>
                                    <li>✔ Reduz a queda dos dos fios em até 96%</li>
                                    <li>✔ Nutre e hidrata de dentro para fora</li>
                                </ul>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalGummy">
                                    Ver tabela nutricional
                                </button>
                                <p class="pb-2"><strong>Sabores disponíveis:</strong></p> 
                                <div class="d-flex align-items-center pb-3">
                                    <div class="sabor d-flex align-items-center justify-content-center bg-morango">Morango fresh</div>
                                    <div class="sabor d-flex align-items-center justify-content-center bg-uva">Uva verde</div>
                                    <div class="sabor d-flex align-items-center justify-content-center bg-laranja">Laranja</div>
                                </div>
                                <p><strong>Ingredientes</strong></p> 
                                <p><strong class="txt-morango">(MORANGO)</strong> - Hialuronato de sódio, bisglicinato de selênio (Selênio), acetato de racealfatocoferol (Vit. E), bisglicinato de zinco (Zinco). ácido pantotênico (Vit. B5), cloridrato de piridoxina (Vit. B6), riboflavina (Vit. B2), acetato de retinol (Vit. A), ácido fólico (Vit. B9), biotina (Vit H), colecalciferol (Vit. D3), cianocobalamina (Vit. B12), picolinato de cromo (cromo), conservante sorbato de potássio, edulcorante glicosídeos de esteviol, veículo xarope de maltitol, veículo xarope de sorbitol, água purificada, gelatina, acidulante ácido cítrico, aroma idêntico ao natural de morango aroma, idêntico ao natural de menta, corante vermelho bordeaux.</p>
                                <p><strong class="txt-uva">(UVA VERDE)</strong> - Hialuronato de sódio, bisglicinato de selênio (Selênio), acetato de racealfatocoferol (Vit. E), bisglicinato de zinco (Zinco), ácido pantotênico (Vit. B5), cloridrato de piridoxina (Vit. B6), riboflavina (Vit. B2), acetato de retinol (Vit.A), ácido fólico (Vit. B9), biotina (Vit. H), colecalciferol (Vit. D3), cianocobalamina (Vit. B12), picolinato de cromo (cromo), conservante sorbato de potássio, edulcorante glicosídeos de esteviol, veículo xarope de maltitol, veículo xarope de sorbitol, água purificada, gelatina, acidulante acido cítrico, aroma idêntico ao natural de uva verde, corante azul brilhante.</p>
                                <p><strong class="txt-laranja">(LARANJA)</strong> - Hialuronato de sódio, bisglicinato de selênio (Selênio), acetato de racealfatocoferol (Vit. E), bisglicinato de zinco (Zinco), ácido pantotênico (Vit.B5), cloridrato de piridoxina (Vit. B6), riboflavina (Vit. B2), acetato de retinol (Vit. A), ácido fólico (Vit. B9), biotina (Vit. H), colecalciferol (Vit. D3), cianocobalamina (Vit. B12), picolinato de cromo (Cromo), conservante sorbato de potássio, edulcorante glicosídeos de esteviol, veículo xarope de maltitol, veículo xarope de sorbitol, água purificada, gelatina, acidulante ácido cítrico, aroma idêntico ao natural de laranja.</p>
                            </div>
                        </div>
                        <div class="modal fade" id="modalGummy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content position-relative">
                                    <button type="button" class="close position-absolute" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>
                                    <div class="modal-body text-center">
                                        <img class="img-fluid" src="@/assets/img/ja-sou-cliente/tabela-nutricional-morango.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">NEW HAIR CAPS</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq2">
                            <div class="card-body">
                                <p>Potente, poderoso e eficaz. Os três melhores adjetivos para definir o suplemento vitamínico mais consumido e amado do país. Com 12 vitaminas e 5 minerais essenciais, as cápsulas de New Hair vão transformar a saúde dos seus cabelos e unhas para sempre! Conte com o poder das vitaminas A, B1, B2, B3, B5, B6 B7, B9, B12, C, com o reforço dos do Cromo, Picolinato, Selênio e Zinco. </p>
                                <p><strong>Benefícios</strong></p> 
                                <ul>
                                    <li>✔ Essencial para cabelos, pele e unhas</li>
                                    <li>✔ Blend de vitaminas e minerais</li>
                                    <li>✔ Unhas fortalecidas</li>
                                    <li>✔ Acelera o crescimento capilar em até 6x</li>
                                    <li>✔ Reduz a queda dos dos fios em até 96%</li>
                                    <li>✔ Nutre e hidrata de dentro para fora</li>
                                </ul>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCaps">
                                    Ver tabela nutricional
                                </button>
                            </div>
                        </div>
                        <div class="modal fade" id="modalCaps" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content position-relative">
                                    <button type="button" class="close position-absolute" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>
                                    <div class="modal-body text-center">
                                        <img class="img-fluid" src="@/assets/img/ja-sou-cliente/tabela-nutricional-caps.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConhecaMaisSobre',
    }
</script>

<style scoped>
    .title {
        padding: 15px 0 35px;
    }

    h2 {
        text-align: center;
        font: normal normal bold 32px/43px Open Sans;
        letter-spacing: -0.8px;
        color: #333333;
        text-transform: uppercase;
    }

    p {
        text-align: center;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
    }

    /* Acordeao */
    #faq .card {
        margin-bottom: 30px;
        border: 0;
    }

    #faq .card .card-header {
        -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
        box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
        border-radius: 2px;
        padding: 0;
    }

    #faq .card .card-header .btn-header-link {
        color: #fff;
        display: block;
        text-align: left;
        background: #fff;
        color: #222;
        padding: 20px;
        border: 1px solid #707070 !important;
        text-align: center;
        font: normal normal 800 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        text-transform: uppercase;
    }

    #faq .card .card-header .btn-header-link:after {
        content: "\f106";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        float: right;
    }

    #faq .card .card-header .btn-header-link.collapsed {
        text-align: center;
        font: normal normal 800 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        text-transform: uppercase;
    }

    #faq .card .card-header .btn-header-link.collapsed:after {
        content: "\f107";
    }

    #faq .card .collapsing {
        line-height: 30px;
    }

    #faq .card .collapse {
        border: 0;
    }

    #faq .card .collapse.show {
        line-height: 30px;
        color: #222;
        border: 1px solid #707070 !important;
    }

    .card-body p, ul li {
        text-align: left;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        padding-bottom: 15px;
    }

    .card-body p strong {
        text-align: left;
        font: normal normal bold 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        padding-bottom: 15px;
    }

    ul li {
        text-align: left;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333;
        padding: 0 0 2px;
    }

    button, button:hover, button:focus, button:active {
        width: 100%;
        text-align: center;
        text-decoration: underline;
        font: normal normal bold 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #333333 !important;
        text-transform: lowercase;
        background: none;
        background-color: unset !important;
        border: none !important;
        padding: 0;
        outline: none !important;
        box-shadow: none !important;
        margin: 35px 0 15px;
    }

    .close, .close:hover, .close:focus, .close:active {
        top: 5px;
        right: 5px;
        text-align: right;
        font-size: 55px;
        text-decoration: none;
        z-index: 99;
    }

    .sabor {
        width: 113px;
        height: 24px;
        border-radius: 4px;
        font: normal normal normal 15px/20px Open Sans;
        letter-spacing: -0.38px;
        color: #FFFFFF;
        margin-right: 10px;
    }

    .bg-morango {
        background: #EB3A94 0% 0% no-repeat padding-box;
    }

    .bg-uva {
        background: #77D932 0% 0% no-repeat padding-box;
    }

    .bg-laranja {
        background: #FF7C55 0% 0% no-repeat padding-box;
    }

    .txt-morango {
        color: #EB3A94 !important;
    }

    .txt-uva {
        color: #77D932 !important;
    }

    .txt-laranja {
        color: #FF7C55 !important;
    }

    @media(max-width: 768px) {
        .sabor {
            font: normal normal normal 13px/20px Open Sans;
        }
    }

</style>