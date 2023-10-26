<template>
    <div>
        <div class="d-flex justify-content-center align-items-center loader">
            <div class="spinner1"></div>
            <div class="spinner2"></div>
            <div class="spinner3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
    }
</script>

<style scoped>
    .spinner1,
    .spinner2,
    .spinner3 {
        margin: 0 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #FF4289;
        animation: rotating-spinner 1s linear infinite;
    }

    .spinner2 {
        width: 60px;
        height: 60px;
        border: 1px solid #f3f3f3;
        border-top: 4px solid #FF4289;
    }

    .spinner3 {
        width: 40px;
        height: 40px;
        border: 1px solid #f3f3f3;
        border-top: 4px solid #FF4289;
    }

    @keyframes rotating-spinner {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>