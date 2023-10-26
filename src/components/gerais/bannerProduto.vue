<template>
    <section class="slideHome" style="height:auto">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="#produtos" @click='setCookies()'>
                        <div class="cms-banners-nobre">
                            <img v-lazy="bannerProdDesk" alt="First slide" class="desk bannerHomeTotal">
                            <img v-lazy="bannerProdMob" alt="First slide" class="mob">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//Import Imagens
import loadBannerProdDesk from "../../assets/img/geral/preloader.svg"
import imgBannerProdDesk from "../../assets/img/banners/produto/New-Hair-Desktop-Produtos-Gomas-Feminino.jpg"
import imgBannerProdMob from "../../assets/img/banners/produto/New-Hair-Mobile-Produtos-Gomas-Feminino.jpg"

export default {
    data() {
        return {
            bannerProdDesk: {
                src: imgBannerProdDesk,
                error: loadBannerProdDesk,
                loading: loadBannerProdDesk,
            },
            bannerProdMob: {
                src: imgBannerProdMob,
                error: loadBannerProdDesk,
                loading: loadBannerProdDesk,
            },
        };
    },
    components: {
      //
    },

    methods: {
        //
    },

    mounted() {
        function getCookie(nomeCookie) {
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
        }

        function scrollPage() {
            const cookieBanner = getCookie("clicou_banner")
            if (cookieBanner) {
                const divToScroll = document.getElementById("kitProdutos")
                divToScroll.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
            } // else {
            //     console.log('entrou no else')
            // }
        }

        window.addEventListener('load', () => {
            setTimeout(scrollPage, 500)
        }) 

    }
};
</script>


<style lang="scss" scoped>

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
    height: 444px !important;
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
        height: 536px !important;
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