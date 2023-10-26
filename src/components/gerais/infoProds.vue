<template>
<div class="main py-5">
    <div class="container">
        <div class="titleSection text-center">
            <h2 class="pt-4">Conheça a linha completa de produtos New Hair </h2>  
            <p class="titulo mt-1">Para cada necessidade, uma opção</p>
        </div>
        <div class="cols mt-1">
            <div class="col1">
                <div class="accordion" id="faq">
                    <div class="card mb-2" >
                        <div class="card-header" id="faqhead" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdAcido" alt="">
                            <img v-else src="@/assets/img/home/1-POTE-NEW-HAIR-ACIDO-HIALURONICO.jpg" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq" aria-expanded="true" aria-controls="faq" >A vitamina capilar com<br class="mob"> Ácido Hialurônico <br>mais amada do Brasil!</h3>
                        </div>
                        <div id="faq" class="collapse" aria-labelledby="faqhead" data-parent="#faq">
                            Rico em Ácido Hialurônico e com mais 17 ativos, o comprimido para crescer cabelo New Hair é ideal para manter os cabelos e unhas saudáveis. A versão mais completa e amada do Brasil!
                            <div class="card-body text-left" ></div>
                            <ul>
                                <li>- Formato de comprimidos</li> 
                                <li>- Ácido hialurônico</li> 
                                <li>- Para cabelos, unhas e pele</li> 
                                <li>- 12 Vitaminas</li> 
                                <li>- 5 Minerais</li> 
                                <li>- Imunidade reforçada</li> 
                                <li>- 100% natural</li> 
                            </ul>
                        </div>
                    </div>
                </div> 
                <div class="accordion" id="faq">
                    <div class="card mb-2">
                        <div class=" card-header" id="faqhead3" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdGummy" alt="">
                            <img v-else src="@/assets/img/home/1-POTE-NEW-HAIR-GOMA-LARANJA.jpg" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3" >Goma para crescer cabelos, sem queda, brilhantes, e<br class="mob"> muito mais fortes!</h3>
                        </div>
                        <div  id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq3">
                            A incrível goma para crescer cabelo funciona de dentro para fora, revitalizando a sua pele, seus cabelos e unhas desde o primeiro dia de uso. Os ursinhos mais vitaminados do Brasil estão disponíveis na versão com ácido hialurônico e zero açúcar, além de terem um gostinho incrível de laranja, uva verde ou morango fresh.<br>
                            Para deixar a sua rotina de cuidados com a pele ainda mais incrível, que tal utilizar o nosso sérum com o massageador de limpeza facial, para potencializar sua rotina de cuidados? Esse acessório é enviado de brinde ao comprar um dos nossos kits da goma para crescer cabelo.
                            <div class="card-body text-left" ></div>
                        </div>
                    </div>
                </div>
                <div class="accordion" id="faq">
                    <div class="card mb-2">
                        <div class=" card-header" id="faqhead5" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdAcidoMasc" alt="">
                            <img v-else src="@/assets/img/home/1-POTE-NEW-HAIR-MASCULINO.png" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5" >O Blend de vitaminas<br class="mob"> para cabelo e barba <br>mais vendido do Brasil!</h3>
                        </div>
                        <div id="faq5" class="collapse" aria-labelledby="faqhead5" data-parent="#faq5">
                            Rico em Ácido Hialurônico e com mais 17 ativos, o comprimido para crescer cabelo New Hair é ideal para manter os cabelos e unhas saudáveis. A versão mais completa e amada do Brasil!
                            <div class="card-body text-left" ></div>
                            <ul class="ml-3">
                                <li>- Formato de comprimidos</li> 
                                <li>- Ácido Hialurônico</li> 
                                <li>- Para barba, cabelos e pele</li> 
                                <li>- 12 vitaminas</li> 
                                <li>- 5 minerais</li> 
                                <li>- Imunidade reforçada</li> 
                                <li>- 100% natural</li> 
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col2">
                <div class="accordion" id="faq">
                    <div class="card mb-2">
                        <div class=" card-header" id="faqhead2" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdBiotina" alt="">
                            <img v-else src="@/assets/img/home/1-POTE-NEW-HAIR-BIOTINA.png" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2" >Cabelos e unhas saudáveis<br class="mob"> nos períodos de<br class="desk"> gestação<br class="mob"> e lactação!</h3>
                        </div>
                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq2">
                            Rico em biotina (B7) e com mais 16 ativos, o comprimido para crescer cabelo New Hair é ideal para manter os cabelos e unhas saudáveis no período de gestação e lactação. A versão sem ácido hialurônico é segura para as mulheres grávidas ou que amamentam.
                            <div class="card-body text-left" >
                                
                            </div>
                            <ul class="ml-3">
                                <li>- Menos queda durante a lactação</li>  
                                <li>- Fios mais fortes durante a gravidez</li>  
                                <li>- Unhas saudáveis na gestação e na amamentação</li>  
                                <li>- Imunidade reforçada para as mamães</li>  
                                <li>- Ativos 100% naturais</li>  
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion" id="faq">
                    <div class="card mb-2">
                        <div class="card-header" id="faqhead4" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdSerum" alt="">
                            <img v-else src="@/assets/img/home/1-FRASCO-SERUM-FACIAL-NEW-HAIR.png" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed desk" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4" >Além dos cabelos, cuide também da sua pele. <br>Sérum Facial 10 em 1 para o seu Skincare!</h3>
                            <h3 href="#" class="btn btn-header-link collapsed mob" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4" >Sérum Facial 10 em 1 para <br class="mob">o seu Skincare!</h3>
                        </div>
                        <div id="faq4" class="collapse" aria-labelledby="faqhead4" data-parent="#faq4">
                            Além de cuidar da sua pele, unhas e cabelo, New Hair preparou kits com o sérum facial. Reunimos os melhores ativos para simplificar os cuidados com a pele de maneira rápida e prática. O Sérum Facial 10 em 1 do New Hair tem a fórmula perfeita para tratar a sua pele de forma descomplicada e poderosa, proporcionando benefícios e resultados incríveis.<br>
                            A combinação perfeito de Superox C (potente fonte de vitamina C), ácido hialurônico, extratos de uva e algas marinhas, niacinamida, resveratrol, pantenol, plantcol, revinage e vitamina E, garantem o skincare eficiente e fácil para não sair da sua necessaire.
                            <div class="card-body text-left" ></div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion" id="faq">
                    <div class="card mb-2">
                        <div class="  card-header" id="faqhead6" >
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="imagemProdGummyMasc" alt="">
                            <img v-else src="@/assets/img/home/1-POTE-NEW-HAIR-GOMA-MASCULINO.png" alt="">
                            <h3 href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq6" aria-expanded="true" aria-controls="faq6" >Goma para crescer<br class="mob"> cabelos e barba<br> fortes e volumosos!</h3>
                        </div>
                        <div id="faq6" class="collapse" aria-labelledby="faqhead6" data-parent="#faq6">
                            A goma para crescer cabelo masculino mais vitaminada do Brasil com ácido hialurônico e zero açúcar, está disponível em três sabores incríveis: morango fresh, laranja e uva verde. A gominha é zero glúten e zero lactose. Apenas 1 (uma) goma ao dia para você sentir a transformação dos seus fios, pele e barba de dentro para fora.<br>
                            A New Hair acredita na qualidade e eficiência da fórmula da vitamina capilar em goma. Por isso, você está convidada a participar do Desafio 90 Dias*. Se os resultados não forem visíveis após esse período, todo o valor investido na comprar será reembolsado integralmente.<br> *Uso ininterrupto, válido apenas para compras de kits acima de três frascos da goma ou comprimidos para crescer cabelo.
                            <div class="card-body text-left" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import imgProdAcido from '../../assets/img/home/1-POTE-NEW-HAIR-ACIDO-HIALURONICO.jpg'
import imgProdGummyMasc from '../../assets/img/home/1-POTE-NEW-HAIR-GOMA-MASCULINO.png'
import imgProdGummy from '../../assets/img/home/1-POTE-NEW-HAIR-GOMA-LARANJA.png'
import imgProdSerum from '../../assets/img/home/1-FRASCO-SERUM-FACIAL-NEW-HAIR.png'

import loadingGIF from '../../assets/img/geral/preloader.svg'
import errorImg from '../../assets/img/geral/preloader.svg'

export default {
    data() {
        return {
            imagemProdAcido: {
                loading: loadingGIF,
                src: imgProdAcido,
                error: errorImg,
            },
            imagemProdGummyMasc: {
                loading: loadingGIF,
                src: imgProdGummyMasc,
                error: errorImg,
            },
            imagemProdGummy: {
                loading: loadingGIF,
                src: imgProdGummy,
                error: errorImg,
            },
            imagemProdSerum: {
                loading: loadingGIF,
                src: imgProdSerum,
                error: errorImg,
            },
        }
    }
}
</script>

<style scoped>
img{
    width: 48px;
    height: 48px;
}

.main{
    background-color: #FFF;
}
.cols {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
}

.col1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
}

.col2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
}

.titleSection h3, .titleSection h2 {
    text-align: center;
    font: normal 900 32px/38px Open Sans, sans-serif;
    padding-top: 28px;
    margin-top: 0px;
    letter-spacing: 0px;
    color: #333333;
    font-weight: 700!important;
    text-transform: lowercase;
}

.titulo {
    text-align: center;
    font: normal normal 15px/16px Open Sans;
    padding-top: 0px;
    padding-bottom: 32px;
    letter-spacing: 0px;
    color: #777777;
    text-transform: lowercase;
}

.card .card-header {
    height: 70px;
    padding: 0;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    border: 1px solid #777777;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #FFF;
}

.card .card-header .btn-header-link {
    font: normal normal bold 16px Open Sans;
    text-align: left;
    color: #333;
    padding: 5px 35px 5px 20px;
    position: relative;
    width: 430px;
}

.card .card-header .btn-header-link:after {
    content: "\f106";
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    display: flex;
    position: absolute;
    top: 60%;
    right: -15%;
    transform: translateY(-50%);
    z-index: 9999;
    
}

.card .card-header .btn-header-link.collapsed:after {
    content: "\f107";
}

.card .collapsing {
    font: normal normal normal 14px Open Sans;
    margin-left: 20px;
    margin-right: 20px;
    background: #FFF;
}
.card .collapse {
    border: none;
    font: normal normal normal 14px Open Sans;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    background: #FFF;   
}
.card .collapse.show {
    font: normal normal normal 14px Open Sans;
    margin-left: 20px;
    margin-right: 20px;
    background: #FFF;
}
.card-body, p {
    color: #333;
    font: normal normal normal 17px/22px Open Sans ;
    padding-left: 10px;
    padding-top: 10px;
}

.btn:focus {
    box-shadow: none;
} 

.accordion .card:last-of-type{
    border: none;
    background: #FFF
}

@media (max-width: 768px) {
    .card .card-header .btn-header-link {
        font: normal normal normal 17px Open Sans;
        margin-bottom: 2px;
    }
    .titleSection h1, .titleSection h2 {
        font: normal normal bold 23px/26px Open Sans;
        padding-bottom: 5px;
    }
    .card .card-header .btn-header-link {
        font: normal normal bold 14px/14px Open Sans;
    }

    .titulo {
            font: normal normal 14px/14px Open Sans;
    }

    h3 .titulofaq{
        font-size: 22px!important;
    }

    a, h3{
        font-size: 14px!important;
    }

    .cols {
        display: flex;
        flex-direction: column;
    }
    .col1{
        width: 100%;
    }
    .col2{
        width: 100%;
    }
    .card .card-header .btn-header-link:after {
        bottom: 4%;
        right: 6%;
    }
}
</style>