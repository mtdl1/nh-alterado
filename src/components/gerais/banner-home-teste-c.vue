<template>
    <section class="slideHome" style="height:auto">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="7000" pause="hover">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="/new-hair-gummy-vitamina-em-goma-para-cabelo" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/625ca988-bb5d-4c82-9ac7-ab833aca9c00/FullTeste" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner desktop New Hair Gummy " class="desk bannerHomeTotal">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/85b9dc3c-bfe5-429e-770f-bc036e577300/MobileTeste" alt=" Influencer Mayra Cardi segurando um pote da Vitamina para cabelos, pele e unhas em goma New Hair Gummy sabor uva verde com rótulo verde" title="Banner mobile New Hair Gummy "  class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/vitamina-para-cabelo-e-unha-em-comprimido" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/2c4ae1bb-c288-4376-0b64-8ef972bf4400/FullTeste" alt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner desktop New Hair Vitamin com ácido hialurônico" class="desk bannerHomeTotal">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/d0d15890-9ce0-4df5-24ec-882df3be0d00/MobileTeste" lt="Modelo segurado um pote da vitamina para cabelos, pele e unhas com ácido hialurônico New Hair Vitamin com rótulo branco" title="Banner mobile New Hair Vitamin com ácido hialurônico" class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/serum-facial" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/88c78d90-dfb6-444c-8705-698c860fd000/FullTeste" alt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner desktop New Hair Sérum Facial" class="desk bannerHomeTotal">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/25094c2c-7f44-403d-cf15-2e8a92f95600/MobileTeste" lt="Modelo sorrindo segurando um frasco do novo Sérum Facial New Hair 10 em 1 com rótulo na cor rosa" title="Banner mobile New Hair Sérum Facial" class="mob">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="/new-hair-vitamina-em-goma-para-cabelo-e-barba-masculina" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/ec07a5eb-5a9c-4310-0344-f57339a70300/FullTeste" alt="Banner Desktop da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner desktop New Hair Vitamin Masculino" class="desk bannerHomeTotal">
                            <img src="https://imagedelivery.net/-xMnv92C_jedhIVjxGCRfA/c369119e-2323-43e8-1817-208497d80e00/MobileTeste" alt="Banner Mobile da Vitamina para barba, cabelos e pele New Hair Vitamin Masculino, com três potes de rótulo na cor azul" title="Banner Mobile New Hair Vitamin Masculino" class="mob">
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

    export default {
        name: "BannerHomeTesteC",

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