<template>
    <section class="produtoSingle">

        <div class="container breadcrumb-single mt-3 mb-3">
            <div class="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Início</a></li>
                        <li class="breadcrumb-item active pink" id="breadcrumbTitle" aria-current="page">
                            {{ nome }}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-7" id="sliderProductSingle" ref="sliderProductSingle">

                    <div id="custCarousel" class="carousel slide d-flex" align="center">
                        <!-- Thumbnails -->
                        <div class="overflowThumbs">
                            <div class="desk">
                                <ol class="list-group carousel-indicators thumbs d-flex">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['list-inline-item',{active: index==0}]"
                                        style="width: 100px;height: 100px!important">
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index"
                                            data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt=""
                                                @click="changeSaborOption()">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div class="mob">
                                <ol class="list-groupMob carousel-indicators thumbs d-block">
                                    <li v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['list-inline-item',{active: index==0}]"
                                        style="width: 100px;height: 100px!important">
                                        <a :id="'carousel-selector-'+ index" class="selected" :data-slide-to="index"
                                            data-target="#custCarousel">
                                            <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <div class="desk">
                            <a class="thumb-controls cima" href="#custCarousel" data-slide="prev"><i
                                    class="fas fa-chevron-up"></i></a>
                            <a class="thumb-controls baixo" href="#custCarousel" data-slide="next"><i
                                    class="fas fa-chevron-down"></i></a>
                        </div>
                        <div class="mob">
                            <a class="thumb-controls left cimaMob" href="#custCarousel" data-slide="prev"><i
                                    class="fa fa-chevron-up"></i></a>
                            <a class="thumb-controls right baixoMob" href="#custCarousel" data-slide="next"><i
                                    class="fa fa-chevron-down"></i></a>
                        </div>

                        <!-- slides -->
                        <div class="carousel-inner" id="carouselInnerSlider">
                          <div class="imagens-plataforma" v-if="sabores == 0">
                                <div class="carousel-item active" v-if="kitPotes == 'OPCAO'">
                                    <img src="@/assets/img/novas-gomas/single/gomas/01/NEW_HAIR_GUMMY_MORANGO_FRESH.jpg"
                                        class="img-fluid" alt="">
                                </div>
                                <div class="carousel-item active" v-if="kitPotes == 'KIT2POTES'">
                                  <img src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-MIX-2.jpg" class="img-fluid"
                                    alt="">
                                </div>
                                <div class="carousel-item active" v-if="kitPotes == 'OPCAO1'">
                                  <img src="@/assets/img/novas-gomas/single/gomas/03/3-POTES-NEW-HAIR-GOMA-MIX.jpg" class="img-fluid" alt="">
                                </div>
                                <div v-if="kitPotes == 'OPCAO2'">
                                  <div v-for="(imagem, index) in galeriaImagens" :key="index"
                                        :class="['carousel-item',{active: index==0}]">
                                        <img :src="imagem.arquivos.big" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <div class="carousel-item active" v-if="kitPotes == 'KIT12POTES'">
                                  <img src="@/assets/img/novas-gomas/single/gomas/12/12-POTES-NEW-HAIR-GOMA-MIX.jpg" class="img-fluid"
                                    alt="">
                                </div>
                            </div>

                            <!-- Imagem principal de acordo com a opcao  -->
                            <div class="imagens-sabores">
                                <div class="carousel-item active" v-if="sabores > 0 && kitPotes == 'OPCAO'">
                                    <img v-if="sabores == 91"
                                        src="@/assets/img/novas-gomas/single/gomas/01/NEW_HAIR_GUMMY_MORANGO_FRESH.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 89"
                                        src="@/assets/img/novas-gomas/single/gomas/01/NEW_HAIR_GUMMY_UVA_VERDE.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 87"
                                        src="@/assets/img/novas-gomas/single/gomas/01/NEW_HAIR_GUMMY_LARANJA_1.jpg"
                                        class="img-fluid" alt="">
                                </div>

                                <div class="carousel-item active" v-if="sabores > 0 && kitPotes == 'KIT2POTES'">
                                  <img v-if="sabores == 195"
                                    src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-LARANJA.jpg" class="img-fluid"
                                    alt="">
                                  <img v-if="sabores == 196" src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-UVA-VERDE.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 197" src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-MORANGO-FRESH.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 198" src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-MIX-2.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 199" src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-MIX-1.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 200" src="@/assets/img/novas-gomas/single/gomas/02/2-POTES-NEW-HAIR-GOMA-MIX-3.jpg"
                                    class="img-fluid" alt="">
                                </div>

                                <div class="carousel-item active" v-if="sabores > 0 && kitPotes == 'OPCAO1'">
                                    <img v-if="sabores == 94"
                                        src="@/assets/img/novas-gomas/single/gomas/03/3-POTES-NEW-HAIR-GOMA-MIX.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 93"
                                        src="@/assets/img/novas-gomas/single/gomas/03/3-POTES-NEW-HAIR-GOMA-TANGERINA-MORANGO-FRESH.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 90"
                                        src="@/assets/img/novas-gomas/single/gomas/03/3-POTES-NEW-HAIR-GOMA-TANGERINA-UVA-VERDE.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 88"
                                        src="@/assets/img/novas-gomas/single/gomas/03/3-POTES-NEW-HAIR-GOMA-LARANJA.jpg"
                                        class="img-fluid" alt="">
                                </div>

                                <div class="carousel-item active" v-if="sabores > 0 && kitPotes == 'OPCAO2'">
                                    <img v-if="sabores == 170"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-MIX.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 171"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-MORANGO-FRESH.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 172"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-UVA-VERDE.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 173"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-LARANJA.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 174"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-LARANJA.jpg"
                                        class="img-fluid" alt="">
                                    <img v-if="sabores == 175"
                                        src="@/assets/img/produtos/gomas/kit-7/single/6-POTES-NEW-HAIR-GOMA-UVA-VERDE.jpg"
                                        class="img-fluid" alt="">
                                </div>

                                <div class="carousel-item active" v-if="sabores > 0 && kitPotes == 'KIT12POTES'">
                                  <img v-if="sabores == 96"
                                    src="@/assets/img/novas-gomas/single/gomas/12/12-POTES-NEW-HAIR-GOMA-LARANJA.jpg" class="img-fluid"
                                    alt="">
                                  <img v-if="sabores == 98" src="@/assets/img/novas-gomas/single/gomas/12/12-POTES-NEW-HAIR-GOMA-UVA-VERDE.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 100" src="@/assets/img/novas-gomas/single/gomas/12/12-POTES-NEW-HAIR-GOMA-MORANGO-FRESH.jpg"
                                    class="img-fluid" alt="">
                                  <img v-if="sabores == 101" src="@/assets/img/novas-gomas/single/gomas/12/12-POTES-NEW-HAIR-GOMA-MIX.jpg"
                                    class="img-fluid" alt="">
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="selos d-flex align-center align-items-center desk">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/21082020224934.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Compra-Segura.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Nao-Testamos-Em-Animais.png"
                            alt="Compra segura">
                    </div>

                </div>

                <div class="col-md-5" id="InfoProduto">
                    <h1 class="titleProduto" id="titleProduct" v-if="sabores == 0  || sabores == 94 || sabores == 99 || sabores == 101 || sabores == 120 || sabores == 121 || sabores == 122 || sabores == 123 || sabores == 170 || sabores == 171 || sabores == 172 || sabores == 173 || sabores == 174 || sabores == 175 || sabores == 198 || sabores == 199" >New Hair Gummy + Ácido Hialurônico</h1>
                    <h1 class="titleProduto" id="titleProduct"
                      v-if="sabores == 91 || sabores == 93 || sabores == 97 || sabores == 100 || sabores == 197">New Hair Gummy + Ácido Hialurônico
                      Morango Fresh</h1>
                    <h1 class="titleProduto" id="titleProduct"
                      v-if="sabores == 89 || sabores == 90 || sabores == 95 || sabores == 98 || sabores == 196">New Hair Gummy + Ácido Hialurônico
                      Uva Verde</h1>
                    <h1 class="titleProduto" id="titleProduct"
                      v-if="sabores == 87 || sabores == 88 || sabores == 92 || sabores == 96 || sabores == 102 || sabores == 195">New Hair Gummy +
                      Ácido Hialurônico Laranja</h1>
                    <p class="descricao">New Hair Gummy - Vitamina em Goma para Cabelos e Unhas</p>

                    <div class="qualidades-produto">
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Essencial para cabelos, pele e unhas</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Blend de vitaminas e minerais</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Enriquecido com Ácido Hialurônico</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Acelera o crescimento capilar em até 6x </p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Reduz a queda dos dos fios em até 96%</p>
                        </div>
                        <div class="qualidade">
                            <img src="@/assets/img/novas-gomas/single/icones/qualidade-gummy.png" alt="" />
                            <p>Nutre e hidrata de dentro para fora</p>
                        </div>

                    </div>

                    <!-- 1 Pote -->
                    <div class="prices" v-if="kitPotes == 'OPCAO'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$ {{ selectSabores.opcao.precosGerais.precoDe.toFixed(2).replace(".", ",") }} </s> </p>
                            <p class="discount"> <strong>ECONOMIZE R$ {{ (selectSabores.opcao.precosGerais.precoDe - selectSabores.opcao.precosGerais.precoPor).toFixed(2).replace(".", ",") }} </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$ {{(selectSabores.opcao.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R${{((selectSabores.opcao.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong></p>
                        </div>
                    </div>

                    <!-- Kit 2 Potes -->
                    <div class="prices" v-if="kitPotes == 'KIT2POTES'">
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="priceOld"> <s>R$ {{ selectSabores.kit2.precosGerais.precoDe.toFixed(2).replace(".", ",") }} </s> </p>
                        <p class="discount"> <strong>ECONOMIZE R$ {{ (selectSabores.kit2.precosGerais.precoDe - selectSabores.kit2.precosGerais.precoPor).toFixed(2).replace(".", ",") }} </strong></p>
                      </div>
                      <p class="currentPrice"> <strong>R$ {{(selectSabores.kit2.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                      <div>
                        <p class="priceNew">Em até <strong> 8x de R$ {{((selectSabores.kit2.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong> </p>
                      </div>
                    </div>

                    <!-- Kit 3 Potes -->
                    <div class="prices" v-if="kitPotes == 'OPCAO1'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$ {{ selectSabores.opcao1.precosGerais.precoDe.toFixed(2).replace(".", ",") }} </s> </p>
                            <p class="discount"> <strong>ECONOMIZE R$ {{ (selectSabores.opcao1.precosGerais.precoDe - selectSabores.opcao1.precosGerais.precoPor).toFixed(2).replace(".", ",") }} </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$ {{(selectSabores.opcao1.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R$ {{((selectSabores.opcao1.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong> </p>
                        </div>
                    </div>

                    <!-- Kit 7 Potes -->
                    <div class="prices" v-if="kitPotes == 'OPCAO2'">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="priceOld"> <s>R$ {{ selectSabores.opcao2.precosGerais.precoDe.toFixed(2).replace(".", ",") }} </s> </p>
                            <p class="discount"> <strong>ECONOMIZE R$ {{ (selectSabores.opcao2.precosGerais.precoDe - selectSabores.opcao2.precosGerais.precoPor).toFixed(2).replace(".", ",") }} </strong></p>
                        </div>
                        <p class="currentPrice"> <strong>R$ {{(selectSabores.opcao2.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                        <div>
                            <p class="priceNew">Em até <strong> 8x de R$ {{((selectSabores.opcao2.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong> </p>
                        </div>
                    </div>

                    <!-- Kit 12 Potes -->
                    <div class="prices" v-if="kitPotes == 'KIT12POTES'">
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="priceOld"> <s>R$ {{ selectSabores.kit12.precosGerais.precoDe.toFixed(2).replace(".", ",") }} </s> </p>
                        <p class="discount"> <strong>ECONOMIZE R$ {{ (selectSabores.kit12.precosGerais.precoDe - selectSabores.kit12.precosGerais.precoPor).toFixed(2).replace(".", ",") }} </strong></p>
                      </div>
                      <p class="currentPrice"> <strong>R$ {{(selectSabores.kit12.precosGerais.precoPor).toFixed(2).toString().replace(".", ",")}}</strong></p>
                      <div>
                        <p class="priceNew">Em até <strong> 8x de R$ {{((selectSabores.kit12.precosGerais.precoPor/8).toFixed(2)).toString().replace(".", ",")}}</strong> </p>
                      </div>
                    </div>

                    <div class="group-kits mb-3">
                        <h3 class="label-title">Selecione o Kit:</h3>
                        <form>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative" for="kit12" @click="changeKit($event)">
                              <div class="kit-potes d-flex align-items-center">
                                <div class="circ-select"><input class="check-input mx-3" type="radio" id="kit12" name="kit" value="KIT12POTES" v-model="kitPotes"></div>
                                <div class="d-flex flex-column">
                                  <p class="name-kit"> Kit 12 Potes</p>
                                  <p class="description-kit">Ganhe Brinde</p>
                                </div>
                              </div>
                              <div class="position-absolute box-infos kit1">
                                <div class="info-kit mb-1 pinkKit">Tratamento 360 dias</div>
                                <div class="desconto-kit position-relative">{{ (Math.floor(100 - (selectSabores.kit12.precosGerais.precoPor*100)/selectSabores.kit12.precosGerais.precoDe)) }}% OFF</div>
                              </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao2" @click="changeKit($event)">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select"><input class="check-input mx-3" type="radio" id="opcao2"
                                            name="kit" value="OPCAO2" checked v-model="checked"></div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> Kit 6 Potes</p>
                                        <p class="description-kit">Ganhe Brindes</p>
                                    </div>
                                </div>
                                <div class="position-absolute box-infos kit1">
                                    <div class="info-kit mb-1 pinkKit">Tratamento 180 dias</div>
                                    <div class="desconto-kit position-relative">
                                        {{ (Math.floor(100 - (selectSabores.opcao2.precosGerais.precoPor*100)/selectSabores.opcao2.precosGerais.precoDe)) }}%
                                        OFF</div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao1" @click="changeKit($event)">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select"><input class="check-input mx-3" type="radio" id="opcao1"
                                            name="kit" value="OPCAO1" v-model="kitPotes"></div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> Kit 3 Potes</p>
                                        <p class="description-kit">Ganhe Brinde</p>
                                    </div>
                                </div>
                                <div class="position-absolute box-infos kit2">
                                    <div class="info-kit mb-1 yellow">Kit Mais Vendido</div>
                                    <div class="desconto-kit position-relative">
                                        {{ (Math.floor(100 - (selectSabores.opcao1.precosGerais.precoPor*100)/selectSabores.opcao1.precosGerais.precoDe)) }}% OFF
                                    </div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="kit2" @click="changeKit($event)">
                                
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select"><input class="check-input mx-3" type="radio" id="kit2"
                                            name="kit" value="KIT2POTES" v-model="kitPotes"></div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> Kit 2 Potes </p>
                                    </div>
                                </div>
                                <div class="position-absolute box-infos kit1">
                                    <div class="desconto-kit position-relative">
                                        {{ (Math.floor(100 - (selectSabores.kit2.precosGerais.precoPor*100)/selectSabores.kit2.precosGerais.precoDe)) }}%
                                        OFF</div>
                                </div>
                            </label>
                            <label class="check-label w-100 d-flex align-items-center my-2 position-relative"
                                for="opcao" @click="changeKit($event)">
                                <div class="kit-potes d-flex align-items-center">
                                    <div class="circ-select"><input class="check-input mx-3" type="radio" id="opcao"
                                            name="kit" value="OPCAO" v-model="kitPotes"></div>
                                    <div class="d-flex flex-column">
                                        <p class="name-kit"> 1 Pote</p>
                                    </div>
                                </div>
                            </label>
                        </form>
                    </div>

                    <h3 class="label-title">Escolha o sabor:</h3>
                    <div class="form-group select_sabores">
                        <select name="sabor" class="select_option browser-default custom-select" id="sabor"
                            @change="onChange($event)" v-model="sabores" v-if="kitPotes == 'OPCAO'">
                            <option class="option" data-value="" :value="kit.id"
                                v-for="(kit, index) in selectSabores.opcao.todosKits" :key="index">{{ kit.nome }}
                            </option>
                        </select>
                        <select name="selectSabores2Pt" class="select_option browser-default custom-select" id="selectSabores2Pt"
                          @change="onChange($event)" v-model="sabores" v-if="kitPotes == 'KIT2POTES'">
                          <option class="option" data-value="" :value="kit.id" v-for="(kit, index) in selectSabores.kit2.todosKits"
                            :key="index">{{ kit.nome }}</option>
                        </select>
                        <select name="sabor" class="select_option browser-default custom-select" id="sabor"
                            @change="onChange($event)" v-model="sabores" v-if="kitPotes == 'OPCAO1'">
                            <option class="option" data-value="" :value="kit.id"
                                v-for="(kit, index) in selectSabores.opcao1.todosKits" :key="index">{{ kit.nome }}
                            </option>
                        </select>
                        <select name="sabor" class="select_option browser-default custom-select" id="sabor"
                            @change="onChange($event)" v-model="sabores" v-if="kitPotes == 'OPCAO2'">
                            <option class="option" data-value="" :value="kit.id"
                                v-for="(kit, index) in selectSabores.opcao2.todosKits" :key="index">{{ kit.nome }}
                            </option>
                        </select>
                        <select name="sabor" class="select_option browser-default custom-select" id="sabor"
                          @change="onChange($event)" v-model="sabores" v-if="kitPotes == 'KIT12POTES'">
                          <option class="option" data-value="" :value="kit.id"
                            v-for="(kit, index) in selectSabores.kit12.todosKits" :key="index">{{ kit.nome }}</option>
                        </select>
                    </div>

                    <!-- <p class="descricao pt-2 prazoEnvio"> Informamos que devido ao alto volume de compras de New Hair Gummy, o prazo de envio é de 15 dias. </p> -->

                    <div class="btn btn-primary btn-lg green mt-2" @click="addCartBoxCompra()">COMPRE AGORA</div>
                    <!-- <div class="btn btn-primary btn-lg green mt-2 inputDisable">ESGOTADO</div> -->

                    <div class="selos d-flex align-center align-items-center mob">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/21082020224934.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Compra-Segura.png"
                            alt="Compra segura">
                        <img class="px-3" src="@/assets/img/novas-gomas/single/icones/Nao-Testamos-Em-Animais.png"
                            alt="Compra segura">
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
    import $ from "jquery"
    import Comunicacao from "@/comunicacao.js"

    // funcao desktop para avançar e voltar imagens do carousel
    $(function () {
        setTimeout(function() {
            var qtdImages = $('.list-group .list-inline-item').length
            var height = (parseInt($('.carousel .list-group .list-inline-item').outerHeight())) * qtdImages //Calcula altura da coluna de Thumbs
            var numImages = 3 // Quantidade de imagens que vai correr em cada carossel
            var count = Math.floor(height/480) // Quantidade de vezes que pode clicar para avançar
            var marginPadding = 0 // Caso haja margin e padding nos elementos
            var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
            var slide = (numImages * marginPadding) + ($('.carousel .list-group .list-inline-item').outerHeight() * numImages) // Tamanho do Slide (quanto de margin pode avançar)

            // Passa o valor da altura da coluna obtida no 'var height'
            $('.carousel .list-group').css('height', height)

            // Avança o Slide para baixo
            $('.baixo').click(function () {
                if(contador < count){
                    contador ++
                    $('.list-group').animate({'margin-top': '-=' + slide + 'px'}, '500')
                }
            });

            // Avança o Slide para cima
            $('.cima').click(function () {
                if(contador >= 1){
                    contador --
                    $('.list-group').animate({'margin-top': '+=' + slide + 'px'}, '500')
                }
            });
        }, 1500);

    })

    // funcao mobile para avancar e voltar imagens do carousel
    $(function () {
        var width = 900 //Calcula largura da linha de Thumbs
        var contador = 0 // quantidade de vezes que avançou no carossel (controle de ida e volta)
        var count = 2  // Quantidade de vezes que pode clicar para avançar
        var slide = 120  // Tamanho do Slide (quanto de margin pode avançar)

        $('.carousel .list-groupMob').css('width', width)

        $('.baixoMob').click(function () {
            if(contador < count){
                contador ++
                $('.list-groupMob').animate({'margin-left': '-=' + slide + 'px'}, '500')
            }
        });

        $('.cimaMob').click(function () {
            if(contador >= 1){
                contador --
                $('.list-groupMob').animate({'margin-left': '+=' + slide + 'px'}, '500')
            }
        });
    })

    export default {
        data() {
            return {
                checked: 'OPCAO2',
                activeClass: 'active',
                classImage: 'carousel-item',
                nome: 'New Hair Gummy + Ácido Hialurônico ',
                galeriaImagens: [],
                url: 'https://storage.googleapis.com/cdn_static/renovabe', 
                sabores: 0,
                kitPotes: 'OPCAO2',
                selectSabores: {
                    opcao: {
                        precosGerais: {
                            precoDe: 159.90,
                            precoPor: 137.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                        todosKits: {
                            default: {
                                id: '0',
                                nome: 'Escolha o Sabor',
                            },
                            1: {
                                id: '91',
                                nome: 'Morango Fresh',
                            },
                            2: {
                                id: '87',
                                nome: 'Laranja',
                            },
                            3: {
                                id: '89',
                                nome: 'Uva verde',
                            }
                        },
                    },
                    kit2: {
                        precosGerais: {
                            precoDe: 319.80,
                            precoPor: 197.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                        todosKits: {
                            default: {
                                id: '0',
                                nome: 'Escolha o Sabor',
                            },
                            1: {
                                id: '197',
                                nome: '2 Potes - Morango Fresh',
                            },
                            2: {
                                id: '195',
                                nome: '2 Potes - Laranja',
                            },
                            3: {
                                id: '196',
                                nome: '2 Potes - Uva Verde',
                            },
                            4: {
                                id: '198',
                                nome: '2 Potes - Morango Fresh e Uva Verde',
                            },
                            5: {
                                id: '199',
                                nome: '2 Potes - Morango Fresh e Laranja',
                            },
                            6: {
                                id: '200',
                                nome: '2 Potes - Laranja e Uva Verde',
                            },
                        },
                    },
                    opcao1: {
                        precosGerais: {
                            precoDe: 479.90,
                            precoPor: 267.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                        todosKits: {
                            default: {
                                id: '0',
                                nome: 'Escolha o Sabor',
                            },
                            1: {
                                id: '94',
                                nome: '3 Potes - Morango - Uva - Laranja',
                            },
                            2: {
                                id: '93',
                                nome: '3 Potes - Morango Fresh',
                            },
                            3: {
                                id: '90',
                                nome: '3 Potes - Uva Verde',
                            },
                            4: {
                                id: '88',
                                nome: '3 Potes - Laranja',
                            },
                        },
                    },
                    opcao2: {
                        precosGerais: {
                            precoDe: 959.40,
                            precoPor: 467.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                        todosKits: {
                            default: {
                                id: '0',
                                nome: 'Escolha o Sabor',
                            },
                            1: {
                                id: '170',
                                nome: '2 Potes Morango + 2 Uva + 2 Laranja',
                            },
                            2: {
                                id: '171',
                                nome: '6 Potes Morango',
                            },
                            3: {
                                id: '172',
                                nome: '6 Potes Uva Verde',
                            },
                            4: {
                                id: '173',
                                nome: '6 Potes Laranja',
                            },
                        },
                    },
                    kit12: {
                        precosGerais: {
                            precoDe: 1918.80,
                            precoPor: 737.70,
                            precoParcelado: '0',
                            valorDesconto: 0,
                        },
                        todosKits: {
                            default: {
                                id: '0',
                                nome: 'Escolha o Sabor',
                            },
                            1: {
                                id: '100',
                                nome: '12 Potes - Morango Fresh',
                            },
                            2: {
                                id: '96',
                                nome: '12 Potes - Laranja',
                            },
                            3: {
                                id: '98',
                                nome: '12 Potes - Uva Verde',
                            },
                            4: {
                                id: '101',
                                nome: '12 Potes - 4 Morango Fresh 4 Uva Verde 4 Laranja',
                            },
                        },
                    },
                },
                boxCompraCarrinho: {
                    tipo: "lista",
                    itens: [
                        {
                            idProduto: "5",
                            idAtributoSimples: "0",
                            idUnidadeVenda: "0",
                            idArmazem: "0",
                            quantidade: "1",
                            adicional: "",
                            parametros: ""
                        },
                    ]
                },
            }
        },

        methods: {
            // obtem o valor do select
            onChange(event) {
                this.sabores = event.target.value
                // this.scrollToDiv()
            },

            changeKit(event) {
                this.kitPotes = event.target.value
                this.changeSaborOption()
                this.scrollToDiv()
            },

            changeSaborOption() {
                this.sabores = 0
                this.kitPotes = 'OPCAO2'
            },

            // scroll para a div sliderProductSingle
            scrollToDiv() {
                window.scrollTo({
                    top: this.$refs.sliderProductSingle.offsetTop,
                    behavior: 'smooth'
                });
            },

            addCartBoxCompra() {
                var Produto = this.sabores
                this.boxCompraCarrinho.itens[0].idProduto = Produto

                Comunicacao.$emit('toggleLoader', true)
                let {tipo, itens} = this.boxCompraCarrinho
                let itemAdc       = false
                if (tipo && itens) {
                    //ADICIONA O PRODUTO AO CARRINHO
                    this.$carrinho.add(tipo,itens,(success, response) => {
                        response.data.itens.forEach(prod => {
                            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == this.boxCompraCarrinho.itens[0].idProduto
                        })
                        //PRODUTO ADICIONADO COM SUCESSO
                        if(success){
                            if (Produto == 0) { 
                                this.$toast.error("Selecione um sabor para adicionar ao carrinho!")
                            }
                            else{
                              this.$fbAddToCart({ 
                                dataProducts: response.data,
                                currentProduct: this.nome, 
                                currentPrice: this.precoPor, 
                                currentUser: this.$store.state.dadosUser
                              });
                              return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data })
                            }
                            return true
                        }
                        this.changeDadosPageAtual(response.data)
                        //PROBLEMAS AO ADICIONAR PRODUTO
                        this.$toast.error("Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.")
                    })
                    return
                }
            },

            genPath(path, onlyQuery){
                if (onlyQuery) {
                    path = path.replace(/\/.*(\?.*)/g, '$1')
                    return path
                }
                path = path.replace('?', '&')
                return path
            },

            formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
                try {
                    decimalCount = Math.abs(decimalCount)
                    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

                    const negativeSign = amount < 0 ? "-" : ""

                    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
                    let j = (i.length > 3) ? i.length % 3 : 0

                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
                } catch (e) {
                    //close
                }
            },
        },

        created(){
            // recupera o ID da lista de compras
            this.$requestSend('get', `/v2/front/url/list/detail?url=/lista/${this.genPath(this.$route.fullPath)}`, {}, (success, response) => {
                if (success) {
                    var idLista = response.data.conteudo.id
                    this.idLista = idLista
                } else {
                    console.log('não foi possível recuperar o ID da lista de compras')
                }
            })

            this.$requestSend('get', `/v2/front/url/product/detail?url=${this.genPath(this.$route.fullPath)}&offset=0&limit=1`, {}, (success, response) => {
                if (success) {
                    //RECUPERA DADOS DO PRODUTO
                    var objetoProduto = JSON.parse(response.request.response)

                    // galeria de imagens
                    this.galeriaImagens = objetoProduto.conteudo.midias.imagensFull

                    // // descrição
                    document.getElementById("descricao").innerHTML = objetoProduto.conteudo.descricoes.curta

                    //ALTERA ID DO PRODUTO PRO CARRINHO
                    this.boxCompraCarrinho.itens[0].idProduto = objetoProduto.conteudo.id

                    //SETA PRODUTO PARA EVENTO DE ADDCART NO GTM
                    let prod = {
                        id: objetoProduto.conteudo.id,
                        nome: objetoProduto.conteudo.nome,
                        marca: {
                            nome: objetoProduto.conteudo.marca.nome,
                        },
                        precos: {
                            por: objetoProduto.conteudo.precos.por,
                        }
                    }
                    this.boxCompraCarrinho.prod = prod

                  
                    this.$aplicaSEO(response.data.estrutura)
                    this.listagemData = response.data.conteudo
                    this.loading.geral = false

                    //VARIÁVEIS PÚBLICAS
                    this.changeDadosPageAtual(response.data)
                }
            });
        },
        
    }
</script>

<style scoped>
.circ-select {
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  margin: 0 10px;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ff428a00;
  margin: 0 !important;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: #FF4289;
  border: 5px solid white !important;
}

.selecionado {
  background-color: #FFF7FA;
  outline: 1px solid #FF4289;
  border: 0 !important;
}

.breadcrumb-single .breadcrumb {
  background-color: unset;
  font-size: 13px;
}

.pink {
  color: #000000;
  font-weight: bold;
}

span.carousel-control-prev-icon,
span.carousel-control-next-icon {
  transform: rotate(90deg);
}

.thumb-controls i {
  color: #555555;
  font-size: 20px;
}

.cima {
  position: absolute;
  top: 0;
  width: 105px;
  left: 0;
  z-index: 99;
}

.baixo {
  position: absolute;
  bottom: 37px;
  width: 105px;
  left: 0;
  z-index: 99;
}

.list-group.carousel-indicators.thumbs {
  height: 1100px;
  overflow: hidden;
  align-self: flex-start;
}

#custCarousel .carousel-indicators li img {
  display: block;
}

.carousel-inner {
  width: 560px;
}

.carousel-inner img {
  width: 100%;
  height: auto;
}

#custCarousel .carousel-indicators{
  width: 150px;
  position: relative;
  margin: 0;
  flex-direction: column;
  right: unset;
  bottom: unset;
  left: unset;
  padding: unset;
  z-index: 8;
}

/* Slider Produtos */

.titleProduto {
  font: normal normal bold 28px/30px Open Sans;
  letter-spacing: 0px;
  color: #1a1a1a;
}

p.descricao {
  font-size: 15px;
  padding: 0 0 18px;
  line-height: 1;
  color: #3c3c3c;
  font-family: "Roboto Regular", sans-serif;
}

.priceOld s {
  font-size: 16px;
  color: #8f8f8f;
  font-family: "Roboto Regular", sans-serif;
}

.priceOld,
.priceNew,
.discount {
  margin: -10px 20px 0 0;
  font-family: "Roboto Regular", sans-serif;
}

.discount {
  background: #fff154;
  font-size: 15px;
  color: #000;
  font-weight: 900;
  padding: 5px 10px;
  box-sizing: border-box;
  font-family: "Roboto Regular", sans-serif;
}

.txtPrice {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  font-family: "Roboto Regular", sans-serif;
}

.green {
  background: #18a851;
  border-color: #18a851;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
}

.green:active,
.green:hover {
  opacity: 0.8;
  border-color: #18a851 !important;
}

.currentPrice {
  font-size: 46px;
}

.currentPrice span {
  font-size: 20px;
  color: #18A851;
}

/* Slider Column */

div#custCarousel,
div#custCarousel2 {
  height: 560px;
}

.carousel-item {
  height: 560px;
}

div#carouselInnerSlider {
  align-self: flex-start;
}

.overflowThumbs {
  height: 490px;
  overflow: hidden;
  margin-top: 20px;
}

.carousel-indicators li {
  opacity: 1 !important;
}

.select_sabores {
  position: relative;
  user-select: none;
  border: 1px solid #707070;
  border-radius: 8px;
  margin: 5px auto 15px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "Helvetica", sans-serif;
  font-size: 15px;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 2.5;
}

.select_sabores select {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  /* background: #fff; */
}

.label-title {
  font: normal normal bold 20px/30px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

.check-label {
  height: 65px;
  border: 1px solid #707070;
  border-radius: 8px !important;
  cursor: pointer;
}

.check-label:hover {
  border: 1px solid #ff3e81;
}

.check-input {
  width: 30px;
  height: 30px;
}

input:checked {
  border: 6px solid black !important;
}

.name-kit {
  font: normal normal bold 19px Open Sans;
  letter-spacing: -0.8px;
  color: #333333;
}

.description-kit {
  font: normal normal 300 12px/16px Open Sans;
  letter-spacing: -0.52px;
  color: #7B7B7B;
}

.box-infos {
  right: 0;
  text-align: right;
}

.info-kit {
  font: normal normal bold 13px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
}

.orange {
  background: #ff8000 !important;
}

.yellow {
  background: #ffff00 !important;
  color: #1a1a1a !important;
}

.pinkKit {
  background: #ff4289 !important;
}

.desconto-kit {
  background: #18a851;
  font: normal normal bold 13px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 3px 0 0 3px;
  padding: 1px 6px;
  width: max-content;
  margin-left: auto;
}

.carousel-indicators {
  justify-content: flex-start;
}

.txt-beneficio p {
    text-align: center!important;
    letter-spacing: 0px!important;
    color: #333333;
    font-weight: bold !important;
    font-size: 14px!important;
    line-height: 19px!important;
}

.segundo-texto {
  margin-bottom: 10px !important;
  }

  .inputDisable {
    background-color: #c1c1c1 !important;
    cursor: not-allowed !important;
    border: #c1c1c1;
  }

@media (max-width: 767px) {
  .breadcrumb-single .breadcrumb {
    background-color: unset;
    font-size: 13px;
  }

  .pink {
    color: #333;
    font-weight: bold;
  }

  .overflowThumbs {
    height: 120px;
    overflow: hidden;
    margin-top: 20px;
    text-align: left;
  }

  .thumb-controls {
    background: #00000044;
  }

  .thumb-controls:hover {
    background: #0000007e;
  }

  .thumb-controls i {
    color: #fff;
    font-size: 25px;
  }

  .left {
    position: absolute;
    bottom: 0 !important;
    top: unset;
    width: 25px;
    height: 118px;
    left: 0px;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left i {
    transform: rotate(-90deg);
  }

  .right {
    position: absolute;
    bottom: 0 !important;
    width: 25px;
    height: 118px;
    right: 0px;
    left: unset;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right i {
    transform: rotate(270deg);
  }

  .list-group.carousel-indicators.thumbs {
    /* height: 1100px; */
    overflow: hidden;
    align-self: flex-start;
  }

  .list-groupMob.carousel-indicators.thumbs {
    overflow: hidden;
    align-self: flex-start;
    width: 90px;
    justify-content: flex-start;
    width: 90px;
    justify-content: flex-start;
  }

  .carousel-item {
    height: auto;
  }

  /* Slider Produtos */

  .titleProduto {
    font: normal normal bold 28px/30px Open Sans;
    letter-spacing: 0px;
    color: #1a1a1a;
  }

  p.descricao {
    font-size: 15px;
    padding: 0 0 18px;
    line-height: 1;
    color: #3c3c3c;
    font-family: "Roboto Regular", sans-serif;
  }

  .priceOld,
  .priceNew,
  .discount {
    margin: 0 10px 0 0;
    font-family: "Roboto Regular", sans-serif;
  }

  .priceOld {
    margin-bottom: 10px;
  }

  .priceNew {
    font-size: 18px;
    margin-top: -15px !important;
  }

  .discount {
    background: #fff154;
    font-size: 14px;
    color: #000;
    font-weight: 900;
    padding: 5px 10px;
    box-sizing: border-box;
    font-family: "Roboto Regular", sans-serif;
  }

  .txtPrice {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    font-family: "Roboto Regular", sans-serif;
  }

  .green {
    background: #18a851;
    border-color: #18a851;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  .green:active,
  .green:hover {
    opacity: 0.8;
    border-color: #18a851 !important;
  }

  .currentPrice {
    font-weight: 900;
    font-size: 35px !important;
    line-height: 1;
  }

  /* Slider Column */

  div#custCarousel,
  div#custCarousel2 {
    flex-direction: column-reverse;
    overflow: hidden;
    height: auto;
    margin-bottom: 20px;
  }

  div#carouselInnerSlider {
    align-self: flex-start;
  }

  .list-groupMob #custCarousel .carousel-indicators {
    flex-direction: row;
    height: 120px !important;
    order: 2;
    width: 900px;
    justify-content: flex-start;
  }

  #custCarousel .carousel-indicators {
    width: 900px;
  }

  .overflowThumbs {
    margin-top: 0;
  }

  .carousel-inner img {
    width: 100%;
    height: auto;
  }

  #custCarousel .carousel-indicators li img {
    width: 100px;
    height: 100px;
  }

  .carousel-inner {
    width: 100% !important;
  }

  .carousel-item img {
    width: 100% !important;
  }

  .titleProduto {
    font-size: 20px;
  }

  .descricao {
    display: none;
  }
  
  .descricao.prazoEnvio {
    display: block;
  }

  .subTitle {
    font-size: 18px;
  }

  li.list-inline-item {
    width: unset !important;
  }

  img.thumbnailsprod {
    width: 120px !important;
  }

  .name-kit {
    font: normal normal bold 16px Open Sans;
  }

  .description-kit {
    font: normal normal normal 12px Open Sans;
  }

  .select_sabores {
    position: relative;
    user-select: none;
    border: 1px solid #dedede;
    border-radius: 8px;
    margin: 15px auto;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: "Helvetica", sans-serif;
    font-size: 15px;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 2.5;
  }

  .select_sabores select {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    /* background: #fff; */
  }

  .desk {
    display: none !important;
  }

  .selos.mob {
    width: 100% !important;
    padding: 0;
    display: flex !important;
  }

  .qualidades-produto {
    padding: 10px 0;
    margin-bottom: 15px;
  }

  .qualidades-produto .qualidade {
    margin-bottom: 0;
  }

  a.btn.btn-header-link {
    border-radius: 0;
  }

  ul#myTab {
    justify-content: space-around;
  }

  li.nav-item {
      width: fit-content;
      text-align: center;
  }

  }

/* Single Serum Vita C  */

.qualidade {
  display: flex;
  align-items: center;
}

.qualidade img {
  padding-right: 8px;
}

.priceOld,
.priceNew,
.discount {
  margin: 0 !important;
}

.qualidades-produto {
  padding-bottom: 5px;
}

#custCarousel,
#custCarousel2 {
  height: 530px !important;
}

.carousel-inner {
  height: 530px !important;
}

.selos {
    justify-content: center;
}

@media (max-width: 600px) {
  .selos {
    flex-wrap: wrap;
  }

  .selos {
    justify-content: space-between !important;
    margin-top: 25px !important;
    margin-right: 0;
    padding: 0 20px;
  }

  .selos img {
    padding: 0 !important;
    padding-right: 0 !important;
  }

  .carousel-inner {
    height: unset !important;
  }

  ol.breadcrumb {
    padding-right: 0;
    margin-right: 0;
    padding-left: 5px;
  }

  .qualidade {
    margin-bottom: 15px;
  }

  .check-label {
    border-radius: 8px !important;
  }

}

p.discount {
  text-align: right;
}

p.discount span {
  font-size: 18px;
}

@media (max-width: 600px) {
  .selos img {
    width: 25%;
  }

  .selos .premium {
    height: 80px !important;
    width: auto !important;
  }

  ol.breadcrumb {
    padding-bottom: 0;
    margin-bottom: 5px;
  }

  .txt-beneficio p{
    line-height: 14px!important;
    font-size: 10px!important;
  }

  .txt-beneficio p {
    font-size: -3px!important;
  }

  div#faq a {
      font-family: 'Open Sans';
      padding-bottom: 0;
      margin-top: 2px;
  }

  a#beneficios3-tab {
      text-align: left;
      padding-left: 0;
      padding-right: 0;
  }

  ul#myTab {
      justify-content: space-between!important;
  }

  a#resultados3-tab {
    padding-left: 0;
    padding-right: 0;
  }

  a#como-usar3-tab {
      padding-left: 0;
      padding-right: 0;
  }

  a.btn.btn-header-link {
    padding-bottom: 8px!important;
  }

}


/* Infos Goma */
.btn:focus {
  box-shadow: none;
}

.card {
  border: none;
}

.card-group {
  flex-direction: row;
  flex-wrap: wrap;
}

.item-card {
  width: 110px;
  padding: 0 !important;
}

#faq .card .card-header {
  border: 0;
  border-radius: 2px;
  padding: 0;
  height: 48px;
}

#faq .card .card-header .btn-header-link {
  font: normal normal bold 18px Open Sans;
  display: block;
  text-align: left;
  height: 48px;
}

.card-tree .btn-header-link {
  background: #FF4289;
  color: #fff;
}

.card-one .card-header .btn-header-link:after {
  color: #333;
}

#faq .card .card-header .btn-header-link:after {
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  float: right;
}

.card-one .card .card-header .btn-header-link.collapsed {
  /* background: #A541BB; */
  color: #333;
}

#faq .card .card-header .btn-header-link.collapsed:after {
  content: "\f106";
}

#faq .card .collapsing {
  /* background: #FFE472; */
  line-height: 30px;
}

#faq .card .collapse {
  border: 0;
}

#faq .card .collapse.show {
  /* background: #FFE472; */
  line-height: 30px;
  color: #333;
}

.card-body h3 {
  font: normal normal bold 20px/22px Open Sans;
  color: #333333;
}

.card-body p {
  font: normal normal normal 18px Open Sans;
  color: #333333;
}

.card-img-top {
  margin: 0 auto;
}

.card-title {
  font: normal normal bold 13px/14px Open Sans;
  color: #333333;
  line-height: 15px;
}

.card-group .card-body {
  padding: 0;
}

/* Info Gomas */

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

.info-prod-total {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img-antes-depois h3 {
  width: 60%;
  background: #FF4289;
  border-radius: 6px 6px 0px 0px;
  text-align: center;
  margin: 0 auto;
  font: normal normal bold 25px/25px Open Sans;
  letter-spacing: -0.88px;
  color: #FFFFFF;
  padding: 15px 0 10px;
}

.info-prod {
  width: 55%;
}

.info-prod p {
  text-align: left;
  font: normal normal normal 16px/26px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}

.img-info-prod {
  width: 35%;
  margin-top: -48px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}

div#faq a {
  width: 60%;
}

.card-header {
  background-color: unset;
  height: unset !important;
}

.cards-beneficios {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}

.cards-beneficios h5 {
  text-align: center;
}

.img-beneficio {
  text-align: center;
}

.texto-beneficio h5 {
  font-size: 13px !important;
  font-family: "Open Sans";
  margin-top: 10px;
}

.cards-beneficios.dados .beneficios {
  width: 20%;
}

.texto-beneficio.dados p {
  text-align: center;
  font: normal normal normal 15px/18px Open Sans;
  letter-spacing: 0px;
  color: #333333;
}

.dados-beneficio p {
  text-align: center;
  font: normal normal 800 40px/55px Open Sans;
  letter-spacing: 0px;
  color: #FF4289;
}

.dados-beneficio {
  letter-spacing: 0 !important;
}

.btn-header-link {
  height: unset !important;
  padding: 11px 0.75rem;
}


.acido .segundo-texto strong {
  color: #f13787;
}

.segundo-texto.uva strong {
  color: #6acc0a;
}

.segundo-texto.laranja strong {
  color: #ef5125;
}

.segundo-texto strong {
  font-weight: 800;
}

.como-usar.final {
  margin-bottom: 0;
}

.acido .txt-destaque {
  background-color: #f13787;
}

span.desk {
  display: inline-block;
}

@media (max-width: 600px) {
  .img-info-prod {
    display: none;
  }

  div#faq a {
    width: 100% !important;
  }

  .info-prod {
    width: 100% !important;
  }

  .cards-beneficios {
    flex-wrap: wrap;
    margin-bottom: 0 !important;
  }

  .beneficios {
    width: 25%;
    margin-bottom: 30px;
  }

  .beneficios p{
    font-size: 12px!important;
  }

  .dados-beneficio p {
    font-size: 40px!important;
  }

  .cards-beneficios.dados .beneficios {
    width: 40% !important;
  }

  .como-usar {
    margin: 0;
  }

  .cards-como-usar {
    flex-wrap: wrap;
  }

  .card-passo {
    width: 80% !important;
    margin: 0 auto;
  }

  .txt-destaque {
    width: 90% !important;
  }

  .info-prod.mob .nav-item {
    font-size: 18px;
    letter-spacing: -0.72px;
    color: #F18137;
  }

  .nav-tabs {
    border-color: #F18137;
    margin-bottom: 20px;
  }

  .nav-tabs .nav-link.active {
    border-color: #F18137 !important;
    border: 0;
    border-bottom: 3px solid;
    color: #F18137;
    font-weight: bold;
    transition: 0.2s;
  }

  span.desk {
    display: none;
  }

  .vitab3 .info-prod.mob .nav-tabs .nav-link {
    border: 0;
    border-color: black !important;
    color: black;
  }

  .vitab3 .info-prod.mob .nav-tabs .nav-link.active {
    border-bottom: 3px solid black;
  }

  .vitab3 .info-prod.mob .nav-tabs {
    border-color: black !important;
  }

  .acido .info-prod.mob .nav-tabs .nav-link {
    border: 0;
    border-color: #F13787 !important;
    color: #F13787;
  }

  .acido .info-prod.mob .nav-tabs .nav-link.active {
    border-bottom: 3px solid #F13787;
  }

  .acido .info-prod.mob .nav-tabs {
    border-color: #F13787 !important;
  }

  .como-usar {
    padding-bottom: 10px;
    margin-bottom: 20px !Important;
  }

  a#beneficios3-tab {
    font-size: 16px;
  }

  a#resultados3-tab {
    font-size: 16px;
  }

  a#como-usar3-tab {
    font-size: 16px;
  }

  #faq .card .card-header .btn-header-link {
    font-size: 16px;
  }

  ol.breadcrumb {
    padding-right: 0;
    margin-right: 0;
  }

  .como-usar.mob h2 {
    font-size: 18px;
  }

  .info-prod p {
    font-size: 14px;
  }

  .como-usar {
    background-color: unset;
    margin-bottom: 0 !important;
  }

  .card-passo {
    width: 45% !important;
    margin: 0 auto;
  }

  .card-passo img {
    width: 90%;
  }

  .card-passo p {
    line-height: 20px;
    margin: 10px 0;
    margin-bottom: 20px;
    padding: 0;
  }

  .txt-destaque {
    background-color: #f13787 !important;
  }

  .txt-destaque {
    padding: 10px !important;
    line-height: 20px !important;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .txt-destaque {
    font-size: 16px !important;
  }

  .dados-beneficio p {
    letter-spacing: -2.5px !important;
  }

  .cards-beneficios.dados .dados-beneficio p {
  font-size: 40px;
  }

  .segundo-texto{
    line-height: 18px!important;
  }

}

@media (max-width: 400px) {
  a#beneficios3-tab {
    font-size: 14px;
  }

  a#resultados3-tab {
    font-size: 14px;
  }

  a#como-usar3-tab {
    font-size: 14px;
  }
}
/* Infos Goma */

</style>
