<template>
    <section class="slideHome" style="height:auto">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="7000" pause="hover">
            <div class="carousel-inner"  v-if="$route.path === '/' || $route.path === '/homeTesteB'">
                <div class="carousel-item active">
                    <a href="/new-hair-gummy-vitamina-em-goma-para-cabelo" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk4" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner desktop New Hair Gummy " class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Goma-Feminina.jpg" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner desktop New Hair Gummy " class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob4" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner mobile New Hair Gummy "  class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Goma-Feminino.jpg" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner mobile New Hair Gummy "  class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/vitamina-para-cabelo-e-unha-em-comprimido" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner desktop New Hair Vitamin com ácido hialurônico" class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Acido-Hialuronico-Feminino.jpg" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner desktop New Hair Vitamin com ácido hialurônico" class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob" lt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner mobile New Hair Vitamin com ácido hialurônico" class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Acido-Hialuronico-Feminino.jpg" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner mobile New Hair Vitamin com ácido hialurônico" class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/serum-facial" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk3" alt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner desktop New Hair Sérum Facial" class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Serum-Facial.jpg" alt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner desktop New Hair Sérum Facial" class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob3" lt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner mobile New Hair Sérum Facial" class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Serum-Facial.jpg" alt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner mobile New Hair Sérum Facial" class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk5" alt="Banner Desktop da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner desktop New Hair Vitamin Masculino" class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Acido-Hialuronico-Masculino.jpg" alt="Banner Desktop da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner desktop New Hair Vitamin Masculino" class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob5" alt="Banner Mobile da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner Mobile New Hair Vitamin Masculino" class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Acido-Hialuronico-Masculino.jpg" alt="Banner Mobile da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner Mobile New Hair Vitamin Masculino" class="mob">
                        </div>
                    </a>
                </div>
            </div>
            <div class="carousel-inner"  v-else>
                <div class="carousel-item active">
                    <a href="/new-hair-gummy-vitamina-em-goma-para-cabelo" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk4" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner desktop New Hair Gummy " class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Goma-Feminina.jpg" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner desktop New Hair Gummy " class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob4" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner mobile New Hair Gummy "  class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Goma-Feminino.jpg" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner mobile New Hair Gummy "  class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/vitamina-para-cabelo-e-unha-em-comprimido" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <!--  -->
                            <!--  -->
                            <!-- desktop -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerDesk" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner desktop New Hair Vitamin com ácido hialurônico" class="desk bannerHomeTotal">
                            <img v-else src="@/assets/img/banners/home/desk/New-Hair-Desktop-Home-Acido-Hialuronico-Feminino.jpg" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner desktop New Hair Vitamin com ácido hialurônico" class="desk bannerHomeTotal">
                            <!--  -->
                            <!--  -->
                            <!-- mobile -->
                            <!--  -->
                            <!--  -->
                            <img v-if="$route.name == 'homeTesteB'" v-lazy="bannerMob" lt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner mobile New Hair Vitamin com ácido hialurônico" class="mob">
                            <img v-else src="@/assets/img/banners/home/mob/New-Hair-Mobile-Home-Acido-Hialuronico-Feminino.jpg" lt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner mobile New Hair Vitamin com ácido hialurônico" class="mob">
                        </div>
                    </a>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
</template>

<script>
//Import Imagens Desk
import imgBannerDesk from "../../assets/img/banners/home/desk/New-Hair-Desktop-Home-Acido-Hialuronico-Feminino.jpg" 
import imgBannerDesk3 from "../../assets/img/banners/home/desk/New-Hair-Desktop-Home-Serum-Facial.jpg" 
import imgBannerDesk4 from "../../assets/img/banners/home/desk/New-Hair-Desktop-Home-Goma-Feminina.jpg"
import imgBannerDesk5 from "../../assets/img/banners/home/desk/New-Hair-Desktop-Home-Acido-Hialuronico-Masculino.jpg"
import loadingBannerDesk from "../../assets/img/geral/preloader.svg"

//Import Imagens Mobile
import imgBannerMob from "../../assets/img/banners/home/mob/New-Hair-Mobile-Home-Acido-Hialuronico-Feminino.jpg"
import imgBannerMob3 from "../../assets/img/banners/home/mob/New-Hair-Mobile-Home-Serum-Facial.jpg"
import imgBannerMob4 from "../../assets/img/banners/home/mob/New-Hair-Mobile-Home-Goma-Feminino.jpg"
import imgBannerMob5 from "../../assets/img/banners/home/mob/New-Hair-Mobile-Home-Acido-Hialuronico-Masculino.jpg"
import loadingBannerMob from "../../assets/img/geral/preloader.svg"

    export default {
        name: "BannerHome",
        data() {
            return {
                bannerDesk: {
                    src: imgBannerDesk,
                    error: loadingBannerDesk,
                    loading: loadingBannerDesk,
                },
                bannerDesk3: {
                    src: imgBannerDesk3,
                    error: loadingBannerDesk,
                    loading: loadingBannerDesk,
                },
                bannerDesk4: {
                    src: imgBannerDesk4,
                    error: loadingBannerDesk,
                    loading: loadingBannerDesk,
                },
                bannerDesk5: {
                    src: imgBannerDesk5,
                    error: loadingBannerDesk,
                    loading: loadingBannerDesk,
                },
                bannerMob: {
                    src: imgBannerMob,
                    error: loadingBannerMob,
                    loading: loadingBannerMob,
                },
                bannerMob3: {
                    src: imgBannerMob3,
                    error: loadingBannerMob,
                    loading: loadingBannerMob,
                },
                bannerMob4: {
                    src: imgBannerMob4,
                    error: loadingBannerMob,
                    loading: loadingBannerMob,
                },
                bannerMob5: {
                    src: imgBannerMob5,
                    error: loadingBannerMob,
                    loading: loadingBannerMob,
                },
            }
        },

        methods: {
            setCookies() {
                document.cookie = "clicou_banner=true";
                console.log(document.cookie); 
            },

        },

    };
</script>

<style lang="scss" scoped>
.bannerHomeTotal{
    background-color: unset!important;
    background: unset!important;
}

img[lazy=loaded] {
    width: auto;
}

.cms-banners-nobre {
    display: flex;
    justify-content: center;
    align-items: center;
}

img[lazy=loading] {
    width: 200px !important;
    height: 650px !important;
    margin: 0 auto;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 30px;
}

.carousel-control-next-icon i {
    color: #fff;
    font-size: 50px;
    position: absolute;
    left: 128px;
}

.carousel-control-prev-icon i {
    color: #fff;
    font-size: 50px;
    position: absolute;
    left: 120px;
}

.carousel-control-next {
    right: -60px;
}

.carousel-control-prev {
    left: -60px;
    // opacity: 1;
}
@media(max-width: 767px) {
    img[lazy=loading] {
        height: 577px !important;
    }

    .cms-banners-nobre img {
        text-align: center;
        margin: 0 auto;
    }

    .carousel-control-next {
        right: 0 !important;
    }

    .carousel-control-prev {
        left: 0 !important;
    }

    .carousel-control-next-icon i,
    .carousel-control-prev-icon i {
        font-size: 30px !important;
    }
}
</style>