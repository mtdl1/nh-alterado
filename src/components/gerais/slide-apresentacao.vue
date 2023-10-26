<template>
    <section class="apresentacao" style="max-width:100% !important;">
        <div class="row desk" style="max-width:100% !important;">
            <img class="img-fluid" src="@/assets/img/apresentacao/01.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/02-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/03-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/04-min.png">
            <img class="img-fluid" src="@/assets/img/apresentacao/05-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/06-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/07-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/08.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/09-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/10-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/11-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/12-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/13-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/14-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/15-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/16-min.jpg">
            <img class="img-fluid" src="@/assets/img/apresentacao/17-min.jpg">
            <img class="img-fluid" style="margin-bottom:-10px;" src="@/assets/img/apresentacao/18-min.jpg">
        </div><!--row-->
        <div class="row mob">
            <img class="imgMobA" src="@/assets/img/apresentacao/01.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/02-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/03-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/04-min.png">
            <img class="imgMobA" src="@/assets/img/apresentacao/05-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/06-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/07-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/08.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/09-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/10-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/11-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/12-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/13-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/14-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/15-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/16-min.jpg">
            <img class="imgMobA" src="@/assets/img/apresentacao/17-min.jpg">
            <img class="imgMobA" style="margin-bottom:-10px;" src="@/assets/img/apresentacao/18-min.jpg">
        </div><!--row-->
    </section>
</template>
<script>
export default {
    name: 'SlideApresentacao'
}
</script>
<style scoped>
.desk{display:block;}
.mob{display: none;}

@media screen and (max-width:768px){
    .desk{display: none;}
    .mob{display:block;}
}
</style>