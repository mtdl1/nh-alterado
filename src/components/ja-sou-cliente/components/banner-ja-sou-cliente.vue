<template>
    <div class="container-fluid">
        <div class="banner d-flex justify-content-center">
            <a href="#produtosCliente">
                <img class="desk" src="@/assets/img/ja-sou-cliente/banners/BANNER-JA-SOU-CLIENTE.jpg" alt="">
                <img class="img-fluid mob" src="@/assets/img/ja-sou-cliente/banners/BANNER-JA-SOU-CLIENTE-MOBILE.jpg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BannerSouCliente',
    }
</script>

<style scoped>
    @media(max-width: 768px) {
        .container-fluid {
            padding: 0 !important;
        }
    }
</style>